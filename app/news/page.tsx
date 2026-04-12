'use client'

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Beaker, Construction, Globe, Zap } from "lucide-react";

export default function News() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useLanguage();

    const conferences_image = [
        "/exhibition/1.jpg",
        "/exhibition/2.jpg",
        "/exhibition/3.jpg",
        "/exhibition/4.jpg",
        "/exhibition/5.jpg",
        "/exhibition/6.jpg",
        "/exhibition/7.jpg",
        "/exhibition/8.jpg",
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % conferences_image.length);
        }, 4000); // เปลี่ยนรูปทุกๆ 4 วินาที

        return () => clearInterval(timer); // ล้าง Timer เมื่อปิดหน้า
    }, [conferences_image.length]);

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
    const products = [
        "Graphene Oxide (GO) Powder",
        "Graphene Oxide (GO) Dispersion in H₂O",
        "Reduced Graphene Oxide (rGO) Powder",
        "Reduced Graphene Oxide (rGO) Dispersion in H₂O",
    ];

    const applications = [
        { title: "Graphene in Concrete", icon: <Construction size={20} /> },
        { title: "Polymer Pipes (HDPE/Graphene)", icon: <Zap size={20} /> },
        { title: "Zinc Flake Coating", icon: <Beaker size={20} /> },
        { title: "Electrodes for CDI Systems", icon: <Globe size={20} /> },
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
                <div className="flex flex-col lg:grid lg:grid-cols-9 gap-12 items-start max-w-6xl mx-auto">
                    <div className="lg:col-span-4 space-y-8 text-slate-600 leading-relaxed text-lg">
                        <p className="font-medium text-slate-900 text-xl">
                            {t.news_conference.title}
                        </p>
                        <p>
                            {t.news_conference.detail}
                        </p>
                        {/* Product List Box */}
                        <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-xl shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Beaker className="text-blue-600" /> {t.news_conference.props.title}
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-medium">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {t.news_conference.props.prop_1}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {t.news_conference.props.prop_2}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {t.news_conference.props.prop_3}
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" /> {t.news_conference.props.prop_4}
                                </li>
                            </ul>
                        </div>

                        {/* Applications Grid */}
                        <div className="">

                            {/* Title */}
                            <div className="flex items-start">
                                <h2 className="text-lg md:text-xl font-bold text-slate-800 border-l-4 border-blue-500 pl-3">
                                    {t.news_conference.benefit.title}
                                </h2>
                            </div>

                            {/* Card */}
                            <div className="p-5 border  mt-4 border-slate-200 rounded-2xl shadow-sm hover:shadow-md hover:bg-blue-50 transition-all duration-300 group">

                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        {t.news_conference.benefit.bnf1}
                                    </li>

                                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        {t.news_conference.benefit.bnf2}
                                    </li>

                                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        {t.news_conference.benefit.bnf3}
                                    </li>

                                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                        {t.news_conference.benefit.bnf4}
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    {/* --- Right Column: Image Box & Auto Slide --- */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Main Image Box (Slide ตัวนี้) */}
                        <motion.div
                            className="relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-200 border-8 border-white"
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Overlay ไล่เฉด */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent z-10" />

                            {/* แสดงผลรูปภาพหลักพร้อม Animation ตอนเปลี่ยนรูป */}
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentIndex} // ใช้ Key เพื่อให้ React รู้ว่าต้องทำ Animation ใหม่เมื่อ Index เปลี่ยน
                                    src={conferences_image[currentIndex]}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                    alt="Conference"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* ข้อความประกอบบนรูปภาพ */}
                            <div className="absolute bottom-6 left-6 z-20 text-white">
                                <motion.p
                                    key={`text-p-${currentIndex}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-1"
                                >
                                    Global Innovation 2026
                                </motion.p>
                                <motion.h4
                                    key={`text-h4-${currentIndex}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-2xl font-black italic"
                                >
                                    Conference Highlights
                                </motion.h4>
                            </div>

                            {/* แถบ Progress Bar เล็กๆ ด้านล่างรูป (บอกเวลา Slide) */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/20 z-30">
                                <motion.div
                                    key={`progress-${currentIndex}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 4, ease: "linear" }} // วิ่ง 4 วินาทีเท่ากับเวลา Auto Slide
                                    className="h-full bg-blue-500"
                                />
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-4 gap-3">
                            {conferences_image.map((imgSrc, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentIndex(index)} // คลิกแล้วเปลี่ยนรูปหลักทันที
                                    className={`relative h-20 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border-4 
                                    ${currentIndex === index
                                            ? "border-blue-500 scale-105 shadow-lg ring-2 ring-blue-500/20"
                                            : "border-white opacity-50 hover:opacity-100 hover:border-blue-200"
                                        }
                                    `}
                                >
                                    <img src={imgSrc} className="w-full h-full object-cover" alt={`thumbnail-${index}`} />

                                    {/* Overlay สีฟ้าจางๆ ถ้าไม่ใช่รูปที่เลือก */}
                                    {currentIndex !== index && (
                                        <div className="absolute inset-0 bg-slate-900/20 hover:bg-transparent transition-colors" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
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
                    <a
                        href="https://www.facebook.com/profile.php?id=61586373485649"
                        target="_blank"
                        className="cursor-pointer"
                    >
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
                    </a>
                </motion.div>
            </section>
            {/* Stats */}
            <HighlightsSection />
        </main>
    )
}

function HighlightsSection() {
    const { t } = useLanguage();

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
        <section className="relative mt-12 bg-gradient-to-b from-gray-100 to-white py-20 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        className="group bg-white shadow-md p-2 rounded-bl-3xl hover:shadow-xl 
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
                            <p className="font-bold mt-1 leading-relaxed text-[16px] text-gray-700">
                                {card.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
