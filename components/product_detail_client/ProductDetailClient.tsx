"use client";

import { useState } from "react";
import ProductGallery from "../products_gallery/ProductGallery";
import OrderSection from "../order_section/OrderSection";
import { useLanguage } from "@/context/LanguageContext";
import { products } from "@/app/product_prev/data";

export default function ProductDetailClient({ productId }: { productId: string }) {
  const { t } = useLanguage();

  // ดึงข้อมูลดิบ (รูปภาพ/ID)
  const rawProduct = products.find(p => p.id === productId);

  // ดึงข้อมูลภาษา (ชื่อ/คำบรรยาย) จาก Dictionary
  const translatedInfo = t.products[productId];

  // ย้ายการประกาศ useState มาไว้หลังเช็คข้อมูล เพื่อป้องกัน Error กรณีหาข้อมูลไม่เจอ
  const [mainImage, setMainImage] = useState(rawProduct?.image || "");

  if (!rawProduct || !translatedInfo) return <div className="py-20 text-center">Product not found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

      {/* 1. ส่วนรูปภาพ: ใช้ข้อมูลจาก rawProduct และชื่อจาก translatedInfo */}
      <ProductGallery
        mainImage={mainImage}
        initialImage={rawProduct.image}
        graphImages={rawProduct.graph_img}
        productName={translatedInfo.pd_name} // ใช้ชื่อที่แปลแล้ว
        setMainImage={setMainImage}
      />

      <div className="flex flex-col justify-center">
        {/* 2. ส่วนข้อความ: ใช้จาก translatedInfo ทั้งหมด */}
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
          {translatedInfo.pd_name}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          {translatedInfo.pd_desc}
        </p>
        {/* 3. ส่วน Highlight: ต้องมั่นใจว่าใน JSON มีคีย์ highlight ด้วย */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <p className="text-blue-800 font-medium italic">
            {translatedInfo.highlight}
          </p>
        </div>

        {/* 4. ส่วนสั่งซื้อ: ส่ง rawProduct (ID/Sizes) และใช้ชื่อจาก translatedInfo */}
        <OrderSection
          product={{ ...rawProduct, name: translatedInfo.pd_name }}
          setMainImage={setMainImage}
        />
      </div>
    </div>
  );
}