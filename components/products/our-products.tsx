"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductsSection() {
    const { t } = useLanguage();

    const products = [
        {
            src: "/products/grbg_brown/3.png",
            title: t.home.our_product.product_1.pd_name,
            details:
                t.home.our_product.product_1.pd_detail,
            link: "/product_prev",
        },
        {
            src: "/products/grbg_gray/3.png",
            title: t.home.our_product.product_2.pd_name,
            details:
                t.home.our_product.product_2.pd_detail,
            link: "/product_prev",
        },
        {
            src: "/products/grbt_brown/3.png",
            title: t.home.our_product.product_3.pd_name,
            details:
                t.home.our_product.product_3.pd_detail,
            link: "/product_prev",
        },
        {
            src: "/products/grbt_yellow/3.png",
            title: t.home.our_product.product_4.pd_name,
            details:
                t.home.our_product.product_4.pd_detail,
            link: "/product_prev",
        },
    ];

    return (
        <section className="w-full max-w-6xl py-4 px-4 mx-auto">
            <div className="py-2 px-4">
                <h2 className="text-3xl font-semibold text-center mb-10">{t.home.our_product.our_pd_title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {products.map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-white flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.15,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-4">
                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    width={500}
                                    height={500}
                                    className="rounded-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            {/* Content Section */}
                            <div className="w-full md:w-1/2 p-4 flex flex-col justify-items-center justify-between">
                                <div className="">
                                    <p className="font-bold text-1xl text-gray-800 mb-2">{item.title}</p>
                                    <p className="text-gray-600 text-sm mb-4">{item.details.slice(0,100)}...</p>
                                </div>
                                <Link
                                    href={item.link}
                                    className="text-center inline-block px-6 py-2 mt-auto rounded-lg
             bg-black text-white text-sm
             hover:bg-gray-700 transition"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
