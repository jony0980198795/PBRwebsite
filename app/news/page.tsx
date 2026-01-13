'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function News() {
    const {t} = useLanguage();
    const highlights = [
        {
            title: t.news.section.section_1.super,
            image: "/news/1.png",
            description: t.news.section.section_1.detail
        },
        {
            title: t.news.section.section_2.enhance,
            image: "/news/2.png",
            description: t.news.section.section_2.detail
        },
        {
            title: t.news.section.section_3.future,
            image: "/news/3.png",
            description: t.news.section.section_3.detail
        }
    ];

    const businessUnits = [
        {
            title: t.news.business.group.group_1,
            link: "/our_research/construction",
        },
        {
            title: t.news.business.group.group_2,
            link: "/our_research/polymers",
        },
        {
            title: t.news.business.group.group_3,
            link: "/our_research/electrical",
        },
        {
            title: t.news.business.group.group_4,
            link: "/our_research/environment",
        },
        {
            title: t.news.business.group.group_5,
            link: "/our_research/resources",
        },
        {
            title: t.news.business.group.group_6,
            link: "/our_research/health",
        },
    ];

    return (
        <main className="pt-16 flex flex-col items-center bg-gradient-to-b from-white to-gray-100">
            {/* Latest News */}
            <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-100">
                <motion.h2
                    className="text-3xl font-bold mb-10 text-gray-800 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p>{t.news.title}</p>
                </motion.h2>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {highlights.map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            className="flex flex-col md:flex-row items-center gap-6 bg-white border border-gray-200 
                                   shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 
                                   transition-all duration-500 cursor-pointer rounded-2xl p-5"
                        >
                            {/* 🔹 Image */}
                            <div className="w-full md:w-60 h-60 overflow-hidden flex-shrink-0 rounded-xl relative group">
                                <Image
                                    src={h.image}
                                    alt={h.title}
                                    width={400}
                                    height={400}
                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                            </div>

                            {/* 🔹 Text Content */}
                            <div className="flex flex-col justify-between flex-1 md:pr-4">
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                        {h.title}
                                    </h3>
                                    <p className="mt-3 text-gray-700 leading-relaxed line-clamp-3">
                                        {h.description}
                                    </p>
                                </div>

                                {/* 🔹 ปุ่ม Read More */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-4 self-start px-5 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg 
                                           hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    {t.news.btn}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Business Units */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                {/* 🔹 Title */}
                <motion.h2
                    className="text-2xl md:text-3xl font-bold mb-12 text-gray-800 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {t.news.business.title}
                </motion.h2>

                {/* 🔹 Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {businessUnits.map((b, i) => (
                        <motion.div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-md text-center font-medium text-gray-800 
                                   hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
                            }}
                        >
                            <Link href={b.link}>
                                {b.title}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
            {/* Hero Section */}
            <section className="w-full mt-20 h-[70vh] relative flex items-center justify-center overflow-hidden">
                {/* 🔹 BG Image พร้อม Zoom-in Animation */}
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/about/company_image.png"
                        alt="about"
                        fill
                        className="object-cover brightness-75"
                    />
                </motion.div>

                {/* 🔹 Overlay Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative z-10 text-center text-white px-6 max-w-2xl"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg"
                    >
                        {t.news.power.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg md:text-xl mb-6 text-gray-100"
                    >
                        {t.news.power.detail}
                    </motion.p>

                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(37,99,235,0.6)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl 
                               shadow-lg transition font-semibold"
                    >
                        {t.news.power.btn}
                    </motion.button>
                </motion.div>
            </section>
            {/* Stats */}
            <HighlightsSection/>
        </main>
    )
}

function HighlightsSection() {
    const {t} = useLanguage();

    const cards = [
        {
            icon: "💡",
            bg: "bg-red-100 text-red-700",
            value: "",
            text: t.news.port.port1,
        },
        {
            icon: "🌱",
            bg: "bg-green-100 text-green-700",
            value: "",
            text: t.news.port.port2,
        },
        {
            icon: "🏢",
            bg: "bg-yellow-100 text-yellow-700",
            value: "",
            text: t.news.port.port3,
        },
        {
            icon: "🏢",
            bg: "bg-yellow-100 text-yellow-700",
            value: "",
            text: t.news.port.port4,
        },
        {
            icon: "🔬",
            bg: "bg-blue-100 text-blue-700",
            value: "",
            text: t.news.port.port5,
        },
    ];

    return (
        <section className="relative mt-12 bg-gradient-to-b from-gray-100 to-white py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 text-center">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        className="group bg-white shadow-md p-6 rounded-bl-3xl hover:shadow-xl 
                                   transition-all duration-500 cursor-pointer"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                        whileHover={{
                            y: -5,
                            scale: 1.03,
                            boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
                        }}
                    >
                        <div className="flex flex-col items-center">
                            <motion.div
                                className={`p-4 rounded-full mb-4 ${card.bg} transition`}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                            >
                                {card.icon}
                            </motion.div>
                            <p className="text-3xl font-extrabold text-green-900">{card.value}</p>
                            <p className="font-bold mt-1 leading-relaxed text-[12px] text-gray-700">
                                {card.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
