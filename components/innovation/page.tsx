import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants:Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // ✅ ใช้ Bezier curve แทน string
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }, // ✅ เช่นเดียวกัน
  },
};

export default function GrapheneInnovation() {
  const ref_graphen_innovation = useRef(null);
  const {t}=useLanguage();

  return (
    <section className="w-full max-w-6xl mt-16 py-10 px-6 mx-auto">
      <motion.div
        ref={ref_graphen_innovation}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl font-semibold text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {t.home.grapinnovan.graptitle}
        </motion.h2>

        <motion.div
          className="flex flex-row flex-wrap justify-center gap-6"
          variants={containerVariants}
        >
          {[
            { src: "/innovation/ev-tires.jpg", title: "EV TIRES" },
            { src: "/innovation/fabric.jpg", title: "FABRIC" },
            { src: "/innovation/coating.jpg", title: "COATING" },
            { src: "/innovation/pipeline.jpg", title: "PIPELINE" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <Link href="/innovation">
                <div className="relative w-60 h-40 overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={240}
                    height={160}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center rounded-xl">
                    <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 text-center text-gray-700 text-sm leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          <p>
            <b>{t.home.grapinnovan.grav}</b> {t.home.grapinnovan.gradetail}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
