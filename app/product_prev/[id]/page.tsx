import { products } from "../data";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/components/product_detail_client/ProductDetailClient";
import TechnicalSpecsClient from "@/components/TechnicalSpecsClient"; // สร้างใหม่
import { SEO_CONFIG } from "@/src/config/seo";
import { Metadata } from "next";

export async function generateStaticParams() {
  return products.map((product)=>({
    id: product.id.toString(),
  }))
}

export const metadata: Metadata = {
  title: SEO_CONFIG.products.title,
  description: SEO_CONFIG.products.description,
};

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Client Component สำหรับแสดงชื่อ/รูป/ปุ่มสั่งซื้อ */}
        <ProductDetailClient productId={id} />

        {/* Client Component สำหรับแสดงตารางคุณสมบัติทางเทคนิค */}
        <TechnicalSpecsClient productId={id} />
        
      </div>
    </main>
  );
}