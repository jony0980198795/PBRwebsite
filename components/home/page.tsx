"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSlide() {
  const images = [
    "/present/prev.jpg",
    "/present/material.jpg",
    "/present/lab.png",
    "/present/material2.jpg",
  ];

  const [current, setCurrent] = useState(0);
  const {t}=useLanguage();

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Scroll in view animation
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section className="w-full h-screen relative flex items-center justify-center text-center bg-black overflow-hidden">

      {/* Background Slide */}
      {images.map((img, index) => (
        <motion.div
          key={img}
          className="absolute inset-0"
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src={img}
            alt="Graphene Materials"
            fill
            className="object-cover opacity-50"
            priority={index === 0}
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 px-4" ref={ref}>
        <motion.div
          animate={{
            y: inView ? 0 : -40,
            opacity: inView ? 1 : 0,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t.welcome}
          </h1>
          <p className="text-white text-lg md:text-2xl max-w-2xl mx-auto">
            {t.home.drivinginnovation}
          </p>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
