import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CustomizedSection() {
  const ref_customize = useRef(null);
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-6xl py-10 px-6 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image - Slide from left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl shadow-xl"
        >
          <Image
            src="/assests/hexa.jpg"
            alt="Product"
            width={800}
            height={800}
            className="w-full h-auto object-cover rounded-2xl hover:scale-110 transition-transform duration-500 aspect-[4/3]"
          />
        </motion.div>

        {/* Content - Slide from right */}
        <motion.div
          ref={ref_customize}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            {t.home.custom.cus_title}
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            {t.home.custom.cus_detail}
          </p>

          <Link
            href="/innovation"
            className="inline-block w-fit px-8 py-3 rounded-xl
             bg-black text-white font-medium
             hover:bg-gray-800 transition shadow-md"
          >
            {t.button.readmore}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

