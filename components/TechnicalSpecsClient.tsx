"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function TechnicalSpecsClient({ productId }: { productId: string }) {
  const { t } = useLanguage();
  
  // ดึงข้อมูลสินค้าจาก Dictionary (สมมติว่าคุณเก็บรายละเอียดไว้ใน t.products[id].details)
  const productInfo = t.products[productId];

  if (!productInfo || !productInfo.details) return null;

  const { details } = productInfo;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
      {/* Material Properties */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
          {t.ui.properties_title || "Properties"} 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          {Object.entries(details.properties).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-3 border-b border-slate-50">
              <span className="text-slate-500 capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
              <span className="font-semibold text-slate-800">{value as string}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Elemental Analysis */}
      <div className="bg-slate-900 text-white rounded-2xl shadow-xl p-8">
        <h2 className="text-xl font-bold mb-6">{t.ui.elemental_title || "Elemental Analysis"}</h2>
        <div className="space-y-6">
          {Object.entries(details.elementalAnalysis).map(([key, value]) => (
            <div key={key}>
              <div className="flex justify-between mb-2">
                <span className="text-slate-400 capitalize">{key}:</span>
              </div>
              <div className="p-3 bg-white/10 rounded-lg border border-white/10 text-center font-mono text-sm">
                {value as string}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Specs */}
      <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <span className="w-2 h-6 bg-emerald-500 rounded-full"></span>
          {t.ui.spec_title || "Specifications"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(details.specifications).map(([key, value]) => (
            <div key={key} className="p-5 bg-slate-50 rounded-xl border border-slate-100 text-center">
              <p className="font-bold text-slate-400 uppercase tracking-widest mb-2">
                {key.replace(/([A-Z])/g, " $1")}
              </p>
              <p className="font-black text-slate-800">{value as string}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}