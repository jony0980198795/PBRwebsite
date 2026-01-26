"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Phone, Facebook } from "lucide-react";
import { FaWeixin, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowHeader(currentScroll < lastScroll || currentScroll < 80);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="header"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between 
                       px-4 sm:px-6 lg:px-10 py-2 bg-gray-900/90 backdrop-blur-md shadow-md"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/new_logo.png"
                alt="PBRA Logo"
                width={140}
                height={60}
                className="w-28 sm:w-36 md:w-40"
                priority
              />
            </Link>
            <nav className="hidden lg:flex gap-8 text-white font-medium items-center">
              {[
                { href: "/", label: t.nav.home },
                { href: "/product_prev", label: t.nav.product },
                { href: "/innovation", label: t.nav.innovation },
                { href: "/news", label: t.nav.news },
                { href: "/about_us", label: t.nav.about },
                { href: "/contact", label: t.nav.contact },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-teal-300 transition">
                  {item.label}
                </Link>
              ))}
              <LanguageSwitcher />
            </nav>
            <button
              className="lg:hidden text-white text-2xl"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </motion.header>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-full bg-gray-900 text-white 
                       flex flex-col items-center justify-center gap-8 text-xl font-medium
                       z-50 lg:hidden"
          >
            {[
              { href: "/", label: "Home" },
              { href: "/product_prev", label: "Products" },
              { href: "/innovation", label: "Innovation" },
              { href: "/news", label: "News" },
              { href: "/about_us", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-teal-300 transition"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <FloatingContactButton />
    </>
  );
}

function LanguageSwitcher() {
  const { lang, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm">
      {/* Icon Globe */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>

      <div className="flex gap-1 text-sm font-semibold">
        <button
          onClick={() => switchLanguage('th')}
          className={`${lang === 'th' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
        >
          TH
        </button>
        <span className="text-gray-300">|</span>
        <button
          onClick={() => switchLanguage('en')}
          className={`${lang === 'en' ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
        >
          EN
        </button>
      </div>
    </div>
  );
}

function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-end pr-6 pb-4 pointer-events-none">
      {/* Contact Card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.25 }}
            className="mr-4 bg-[#151A2C] text-white rounded-xl shadow-xl p-4 space-y-3 pointer-events-auto"
          >
            <div className="flex items-center gap-3 text-sm">
              <Phone size={16} />
              <p>086-3636-324</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={16} />
              <p>pbr@pbr.co.th</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Facebook size={16} />
              <p>PBR Graphene Materials</p>
            </div>
            {/* <div className="flex items-center gap-3 text-sm">
              <FaWeixin size={16} />
              <p>WeChat</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FaWhatsapp size={16} />
              <p>WhatApp</p>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="pointer-events-auto"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link
          href="/contact"
          className="flex items-center justify-center
                     w-14 h-14 rounded-full
                     bg-gradient-to-r from-purple-600 to-indigo-600
                     text-white shadow-xl hover:scale-105 transition"
        >
          <Mail size={22} />
        </Link>
      </motion.div>
    </div>
  );
}