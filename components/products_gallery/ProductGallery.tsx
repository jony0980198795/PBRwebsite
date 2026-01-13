"use client";

import Image from "next/image";

interface GalleryProps {
    mainImage: string;      // รูปปัจจุบันที่กำลังแสดง (รับมาจาก State ของตัวแม่)
    initialImage: string;   // รูปหลักเริ่มต้นของสินค้า
    graphImages: string[];  // รูปกราฟ/รูปอื่นๆ
    productName: string;
    setMainImage: (img: string) => void; // ฟังก์ชันสำหรับเปลี่ยนรูปใน State ของตัวแม่
}

export default function ProductGallery({
    mainImage,
    initialImage,
    graphImages,
    productName,
    setMainImage
}: GalleryProps) {

    // รวมรูปภาพทั้งหมดที่จะแสดงในแถบ Thumbnail
    const allImages = [initialImage, ...graphImages];

    return (
        <div className="space-y-4">
            {/* ส่วนแสดงรูปภาพหลัก */}
            <div className="aspect-square bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex items-center justify-center overflow-hidden">
                <img
                    src={mainImage}
                    alt={productName}
                    className="max-h-full object-contain transition-all duration-300"
                />
            </div>

            {/* ส่วนแถบ Thumbnail */}
            <div className="flex gap-3 overflow-x-auto py-2">
                {allImages.map((img, i) => (
                    <button
                        key={i}
                        // ใช้ onMouseEnter หรือ onClick ตามความชอบครับ
                        onMouseEnter={() => setMainImage(img)}
                        className={`w-22 ml-1 h-28 rounded-lg border-2 flex-shrink-0 overflow-hidden bg-white transition-all 
              ${mainImage === img
                                ? 'border-blue-600 ring-2 ring-blue-100 scale-105'
                                : 'border-slate-200 hover:border-blue-300'}`}
                    >
                        <img src={img} className="w-full h-full object-cover" alt={`thumbnail-${i}`} />
                    </button>
                ))}
            </div>
        </div>
    );
}