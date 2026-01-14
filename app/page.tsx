'use client'

import { FaHistory, FaLightbulb, FaLeaf, FaGlobe } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HeroSlide from "@/components/home/page";
import Link from "next/link";
import OurTeam from "@/components/ourteam/page";
import CustomizedSection from "@/components/customize/customize";
import ProductSection from "@/components/products/our-products";
import GrapheneInnovation from "@/components/innovation/page";
import SpecificationSection from "@/components/specification/page";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const {t}=useLanguage();
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="w-full h-screen relative">
        {/* Video Background */}
        <video
          src="/present/vib_prev.mp4" // public folder
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay (optional) */}

        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold mb-4"
          >
            {t.home.title}
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-lg md:text-6xl font-bold max-w-4xl"
          >
            {t.home.title_1}
          </motion.p>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-2xl md:text-2xl max-w-xl mt-4"
          >
            {t.home.title_detail}
          </motion.p>
        </div>
      </section>
      {/* Our company */}
      <section className="w-full max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">{t.home.our_identity}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: <FaHistory className="text-4xl text-black-600 mb-4" />, title: t.home.our_history.our_his, link: "/about_us", detail: t.home.our_history.our_detail },
            { icon: <FaLightbulb className="text-4xl text-black-500 mb-4" />, title: t.home.innovation.innov, link: "/innovation", detail: t.home.innovation.innov_detail},
            { icon: <FaLeaf className="text-4xl text-black-500 mb-4" />, title: t.home.sustainability.sustain, link: "/", detail: t.home.sustainability.sustain_detail },
            { icon: <FaGlobe className="text-4xl text-black-500 mb-4" />, title: t.home.global.global , link: "/news", detail:  t.home.global.global_detail },
          ].map((item, index) => (
            <motion.div
              key={index}
              ref={ref}
              animate={{
                y: isInView ? 0 : -50,
                opacity: isInView ? 1 : 0,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              {item.icon}
              <Link href={item.link}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.detail}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      {/* <section>
        <h2 className="text-3xl font-semibold text-center mb-10">Our Partners</h2>
      </section> */}
      {/* Preview Section */}
      <ProductSection />

      {/* Specification */}
      <SpecificationSection />

      {/* Customize */}
      <CustomizedSection />

      {/* Image slide */}
      <HeroSlide />

      {/* Preview Section */}
      <GrapheneInnovation />

      {/* Preview Section */}
      <OurTeam />
    </main>
  );
}
