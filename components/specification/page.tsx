import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};
export default function SpecificationSection() {

    const {t}=useLanguage();

    const specification = [{
        title: t.home.specification.spe_list_1.spe_title,
        details: t.home.specification.spe_list_1.spe_detail,
        image: "/specification/mechanical.png"
    },
    {
        title: t.home.specification.spe_list_2.spe_title,
        details: t.home.specification.spe_list_2.spe_detail,
        image: "/specification/appearance.png"
    },
    {
        title: t.home.specification.spe_list_3.spe_title,
        details: t.home.specification.spe_list_3.spe_detail,
        image: "/specification/appearance_form.png"
    },
    {
        title: t.home.specification.spe_list_4.spe_title,
        details: t.home.specification.spe_list_4.spe_detail,
        image: "/specification/electrical.png"
    },
    {
        title: t.home.specification.spe_list_5.spe_title,
        details: t.home.specification.spe_list_5.spe_detail,
        image: "/specification/concentration.png"
    }
    ]

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100">
            <motion.div
                className="max-w-6xl mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* 🔹 Title */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        {t.home.specification.spe_title}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t.home.specification.spe_detail}
                    </p>
                </motion.div>

                {/* 🔹 Specification Cards */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
                    variants={containerVariants}
                >
                    {specification.map((ctn, ind) => (
                        <motion.div
                            key={ind}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -6 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <div className="rounded-full mb-4 overflow-hidden">
                                <Image
                                    src={ctn.image}
                                    alt={ctn.details}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                            <h3 className="text-lg text-center font-semibold text-gray-800 mb-1">
                                {ctn.title}
                            </h3>
                            <p className="text-gray-600 text-center text-sm leading-relaxed">
                                {ctn.details}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
