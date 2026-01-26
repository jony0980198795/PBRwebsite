"use client"

import { useState } from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { FaWeixin, FaWhatsapp } from "react-icons/fa";
import { Facebook } from "lucide-react";

export default function Contact() {
    const {t}=useLanguage();
    const [formData, setFormData]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        const recipient="pbr@pbr.co.th"
        const subject=encodeURIComponent(`Contact Inquiry: ${formData.subject}`);
        const bodyText=`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const body=encodeURIComponent(bodyText);

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Container Group สำหรับ Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="group space-y-2">
                                    <label className="text-sm font-semibold text-slate-600 ml-1 group-focus-within:text-blue-600 transition-colors">
                                        {t.contact.name}
                                    </label>
                                    <div className="relative">
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
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
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
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
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
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
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full border border-slate-200 p-4 rounded-2xl h-40 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all bg-white/70 backdrop-blur-sm shadow-sm placeholder:text-slate-400 resize-none"
                                    placeholder={t.contact.place_message}
                                ></textarea>
                            </div>
                            {/* Submit Button กับ Gradient และ Animation */}
                            <div className="flex justify-end pt-4">
                                <button 
                                    type="submit"
                                    className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-10 py-4 rounded-2xl transition-all active:scale-95 shadow-xl shadow-blue-500/30 flex items-center gap-3 group">
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
                        <div className="flex items-center gap-3 text-gray-700">
                            <Facebook size={16} className="text-blue-600"/>
                            <a href="https://www.facebook.com/profile.php?id=61586373485649">PBR Graphene Materials</a>
                        </div>
                        <a href="https://www.pbr.co.th" target="_blank"
                            className="flex items-center gap-3 text-blue-600 hover:underline">
                            <FaGlobe /> 
                            <p className="text-black text-gray-700">www.pbr.co.th</p>
                        </a>
                        <div className="flex items-center gap-3 text-gray-700">
                            <FaWeixin className="text-blue-600" size={20}/>
                            <p className="text-gray-700">WeChat</p>
                        </div>
                        <div className="flex item-center gap-3 text-gray-700">
                            <FaWhatsapp className="text-blue-600" size={20}/>
                            <p className="text-gray-700">WhatApp</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
