'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Innovation() {
    const {t} = useLanguage();
    const innovations = [
        {
            title: t.innovation.section_1.title,
            description: t.innovation.section_1.detail,
            image: "/innovation/coating.jpg",
            hoverImage: "/innovation/1.png",
        },
        {
            title: t.innovation.section_2.title,
            description:t.innovation.section_2.detail,
            image: "/innovation/ev-tires.jpg",
            hoverImage: "/innovation/2.png",
        },
        {
            title: t.innovation.section_3.title,
            description:t.innovation.section_3.detail,
            image: "/innovation/fabric.jpg",
            hoverImage: "/innovation/3.png",
        },
        {
            title: t.innovation.section_4.title,
            description:t.innovation.section_4.detail,
            image: "/innovation/pipeline.jpg",
            hoverImage: "/innovation/4.png",
        },
        {
            title: t.innovation.section_5.title,
            description: t.innovation.section_5.detail,
            image: "/innovation/tank.png",
            hoverImage: "/innovation/solder.png"
        },
        {
            title: t.innovation.section_6.title, //CONCREAT
            description: t.innovation.section_6.detail,
            image: "/innovation/concreat.png",
            hoverImage: "/innovation/concreat_hover.png"
        },
         {
            title: t.innovation.section_7.title,
            description: t.innovation.section_7.detail,
            image: "/innovation/cable.png",
            hoverImage: "/innovation/cable_hov.png"
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 px-6 md:px-12">
            {/* Header */}
            <div className="max-w-3xl mt-20 mx-auto text-center mb-24">
                {/* Animated Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
                >
                    <p>{t.innovation.title_1}</p>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                        {t.innovation.title_2}
                    </span>
                </motion.h1>

                {/* Animated Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="text-gray-600 md:text-lg leading-relaxed"
                >
                    {t.innovation.inno_desc}
                </motion.p>

                {/* Animated Gradient Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="mt-8 h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-teal-400 rounded-full origin-left"
                />
            </div>

            {/* Content Cards */}
            <div className="space-y-24">
                {innovations.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                        initial={{ opacity: 0, y: 100, x: idx % 2 === 0 ? -100 : 100 }}  // เริ่มนอกจอ
                        whileInView={{ opacity: 1, y: 0, x: 0 }}                         // เคลื่อนเข้าเมื่อ scroll ถึง
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: idx * 0.1, // หน่วงเวลาเล็กน้อยระหว่างแต่ละ card
                        }}
                        viewport={{ once: true, amount: 0.3 }} // แสดงแค่ครั้งเดียว
                    >
                        {/* 🔹 Image Section */}
                        <div className="flex-1 group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                            {/* รูปปกติ */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={400}
                                className="w-full h-64 md:h-80 object-cover transition-opacity duration-700 group-hover:opacity-0"
                            />
                            {/* รูป Hover */}
                            <Image
                                src={item.hoverImage}
                                alt={`${item.title} Hover`}
                                width={400}
                                height={400}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        </div>

                        {/* 🔹 Text Section */}
                        <motion.div
                            className="flex-1 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-inner hover:shadow-md transition-all duration-500"
                            whileHover={{ scale: 1.02 }} // เด้งเบา ๆ ตอน hover
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                {item.title}
                            </h2>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {item.description}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}

