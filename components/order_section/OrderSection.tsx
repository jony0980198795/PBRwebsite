"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface OrderSectionProps {
  product: any;
  setMainImage: (img: string) => void;
}

export default function OrderSection({ product, setMainImage }: OrderSectionProps) {
    const { t } = useLanguage();
    
    // 1. เก็บเป็น Index แทน เพื่อให้สลับภาษาได้อิสระ
    const [selectedIndex, setSelectedIndex] = useState(0);

    // 2. ดึงค่า Size ปัจจุบันจาก Index (ตัวนี้จะเปลี่ยนตามภาษาอัตโนมัติ)
    const currentSizes = product.details.packagingSize || [];
    const selectedSizeText = currentSizes[selectedIndex];

    const mailtoUrl = `mailto:pbr@pbrautomation.co.th?subject=Order Inquiry: ${product.name}&body=${encodeURIComponent(
        `I am interested in ordering:\n\nProduct: ${product.name}\nSize: ${selectedSizeText}\n\nPlease provide pricing details.`
    )}`;

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                    {t.ui?.available_packaging || "Available Packaging"}
                </h3>
                <div className="flex gap-2 flex-wrap">
                    {currentSizes.map((size: string, index: number) => (
                        <button
                            key={index} // ใช้ index เป็น key ในกรณีที่มีการแปลภาษา
                            onClick={() => {
                                setSelectedIndex(index);
                                if (product.details.productSizeImage?.[index]) {
                                    setMainImage(product.details.productSizeImage[index]);
                                }
                            }}
                            className={`px-4 py-2 border rounded-lg text-sm font-semibold shadow-sm transition-all
                                ${selectedIndex === index
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400'
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-end gap-4 mt-8">
                <Link href="/product_prev" className="px-6 py-2.5 rounded-full border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 transition active:scale-95">
                    {t.button.close}
                </Link>
                <a href={mailtoUrl} className="px-6 py-2.5 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition active:scale-95">
                    {t.button.open}
                </a>
            </div>
        </div>
    );
}