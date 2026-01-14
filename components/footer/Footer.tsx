"use client"

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import {Phone, Mail, Facebook} from "lucide-react";
import { FaWeixin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const {t}=useLanguage();

  return (
    <footer className="bg-gray-900 text-gray-300 px-8 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t.footer.about}</h3>
          <p className="text-sm leading-relaxed">{t.footer.aboutdetails_1}</p>
          <p className="text-sm leading-relaxed mt">{t.footer.aboutdetails_2}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t.footer.quicklink}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">{t.nav.home}</Link></li>
            <li><Link href="/products">{t.nav.product}</Link></li>
            <li><Link href="/about_us">{t.nav.about}</Link></li>
            <li><Link href="/news">{t.nav.news}</Link></li>
            <li><Link href="/contact">{t.nav.contact}</Link></li>
          </ul>
        </div>

        {/* For Partners */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t.footer.about}</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/partner">{t.footer.about_com}</Link></li>
            <p>{t.footer.pbr_address}</p>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">{t.nav.contact}</h3>
          <div className="flex item-center gap-2">
            <Phone size={16}/>
            <p>{t.footer.phone}</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16}/>
            <p className="text-sm">{t.footer.email}</p>
          </div>
          <div className="flex items-center gap-2">
            <Facebook size={16}/>
            <a href="https://www.facebook.com/profile.php?id=61586373485649">PBR Graphene Materials</a>
          </div>
          <div className="flex items-center gap-2">
            <FaWeixin size={16}/>
            <p>WhatApp</p>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp size={16}/>
            <p>WeChat</p>
          </div>
          <div>
            <Image
              src="/about/dbd.png"
              alt="เครื่องหมายการค้า"
              width={80}
              height={80}
              className="mt-10"
            />
          </div>
          <div className="flex gap-4 mt-3">
            {/* <Link href="https://facebook.com" target="_blank">
              <p>facebook</p>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <p>instagram</p>
            </Link>
            <Link href="mailto:support@aitshirtstudio.com">
              <p>other</p>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
       Copyright 2025 © PBR Company Limited
      </div>
    </footer>
  );
}
