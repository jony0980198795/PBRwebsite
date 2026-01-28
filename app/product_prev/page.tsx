"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; 

export default function Products() {
    const { t } = useLanguage(); // 2. ดึงตัวแปร t (คำแปล) มาใช้งาน

    // 3. เตรียมข้อมูลสินค้าจาก Dictionary
    const productItems = [
        { id: "pd_1", image: "/products/grbg_brown/2.png" }, // ใส่ path รูปภาพให้ตรงกับโปรเจกต์
        { id: "pd_2", image: "/products/grbg_gray/2.png" },
        { id: "pd_3", image: "/products/grbt_brown/3.png" },
        { id: "pd_4", image: "/products/grbt_yellow/3.png" },
    ];

    return (
        <main className="flex flex-col items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-28 pb-20">
            {/* Title - ดึงจาก Dictionary */}
            <motion.h2
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
                {t.products.our_pd_title}
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <p className="text-gray-600 max-w-2xl text-center mb-14 px-4 text-lg">
                    {t.products.pd_desc}
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {productItems.map((item) => {
                    // ดึงข้อมูลชื่อและรายละเอียดจาก Dictionary ตาม ID
                    const pdInfo = t.products[item.id]; 
                    
                    return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link href={`/product_prev/${item.id}`}>
                                <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={pdInfo?.pd_name}
                                        className="w-full sm:h-74 lg:h-89 rounded-xl object-cover"
                                    />

                                    {/* Content */}
                                    <div className="flex flex-col flex-grow mt-4">
                                        <p className="text-base sm:text-lg font-semibold text-gray-900">
                                            {pdInfo?.pd_name}
                                        </p>

                                        <p className="text-sm text-gray-500 mt-2 leading-relaxed line-clamp-3">
                                            {pdInfo?.pd_desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </main>
    );
}