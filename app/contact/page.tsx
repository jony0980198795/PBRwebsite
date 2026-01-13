"use client"

import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const {t}=useLanguage();

    return (
        <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
            <div className="max-w-4xl mt-8 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    {t.contact.title}
                </h2>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6">
                    {t.contact.desc_1}
                </p>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
                    {t.contact.desc_2}
                </p>
                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6 text-left">
                    {/* Company Block */}
                    <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
                        <form action="" className="space-y-6">
                            {/* 🔹 Container Group สำหรับ Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="group space-y-2">
                                    <label className="text-sm font-semibold text-slate-600 ml-1 group-focus-within:text-blue-600 transition-colors">
                                        {t.contact.name}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder={t.contact.place_name}
                                            className="w-full border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-white/70 backdrop-blur-sm shadow-sm placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="group space-y-2">
                                    <label className="text-sm font-semibold text-slate-600 ml-1 group-focus-within:text-blue-600 transition-colors">
                                        {t.contact.email}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder={t.contact.place_email}
                                            className="w-full border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-white/70 backdrop-blur-sm shadow-sm placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Subject Input */}
                            <div className="group space-y-2">
                                <label className="text-sm font-semibold text-slate-600 ml-1 group-focus-within:text-blue-600 transition-colors">
                                    {t.contact.subject}
                                </label>
                                <input
                                    type="text"
                                    placeholder={t.contact.place_subject}
                                    className="w-full border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-white/70 backdrop-blur-sm shadow-sm placeholder:text-slate-400"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="group space-y-2">
                                <label className="text-sm font-semibold text-slate-600 ml-1 group-focus-within:text-blue-600 transition-colors">
                                    {t.contact.message}
                                </label>
                                <textarea
                                    className="w-full border border-slate-200 p-4 rounded-2xl h-40 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-white/70 backdrop-blur-sm shadow-sm placeholder:text-slate-400 resize-none"
                                    placeholder={t.contact.place_message}
                                ></textarea>
                            </div>

                            {/* 🔹 Submit Button กับ Gradient และ Animation */}
                            <div className="flex justify-end pt-4">
                                <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-10 py-4 rounded-2xl transition-all active:scale-95 shadow-xl shadow-blue-500/30 flex items-center gap-3 group">
                                    <span className="relative z-10">{t.contact.btnsend}</span>
                                    <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    {/* เอฟเฟกต์แสงวิ่งผ่านปุ่ม */}
                                    <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Block */}
                    <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition space-y-4">
                        <h3 className="font-semibold text-gray-800 mb-2 text-lg">{t.contact.company}</h3>
                        <p className="text-gray-600 font-medium">{t.contact.pbr}</p>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaPhone className="text-blue-600" /> +66 (0)86 3636 324
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <FaEnvelope className="text-blue-600" /> pbr@pbr.co.th
                        </div>

                        <a href="https://www.pbr.co.th" target="_blank"
                            className="flex items-center gap-3 text-blue-600 hover:underline">
                            <FaGlobe /> www.pbr.co.th
                        </a>

                        {/* <a href="https://www.google.com/maps/@13.137469,100.9163066,3a,75y,95.29h,87.44t/data=!3m7!1e1!3m5!1se6ayysBv2d9OCYRBi6wZgA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D2.562630936478442%26panoid%3De6ayysBv2d9OCYRBi6wZgA%26yaw%3D95.29058078327333!7i16384!8i8192?hl=th&entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" target="_blank"
                            className="flex items-center gap-3 text-blue-600 hover:underline">
                            <FaMapMarkerAlt /> Google Map Location
                        </a> */}
                        {/* <p className="text-gray-600 mt-2 text-sm">
                            33 Mu 3, Surasak Sub-district,<br />
                            Si Racha District, Chonburi 20110<br />
                            THAILAND
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
