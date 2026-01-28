import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const AboutUs = () => {
    const { t } = useLanguage();
    return (
        <main className="min-h-screen w-full bg-gradient-to-b from-white via-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="relative w-full h-[600px] overflow-hidden mb-4">
                {/* 🔹 รูปพื้นหลัง */}
                <Image
                    src="/about/company.jpg"
                    alt="PBR Company"
                    fill
                    className="object-cover"
                    priority
                />
                {/* 🔹 Overlay gradient เพื่อให้ข้อความอ่านง่าย */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                {/* 🔹 ข้อความ Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-4"
                    >
                        {t.about.about_us}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-gray-100 md:text-lg leading-relaxed max-w-3xl"
                    >
                        {t.about.details}
                    </motion.p>
                </div>
            </section>
            {/* 🔹 Company Overview Section */}
            <section className="max-w-5xl mx-auto text-gray-800 space-y-8 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md p-4 md:p-8 lg:p-12 shadow-lg rounded-2xl"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/about/work.png"
                                alt="work"
                                className="w-full h-auto rounded-xl object-cover"
                            />
                        </div>
                        {/* Content */}
                        <div className="w-full lg:w-1/2 px-2 md:px-6 lg:px-0">
                            <h2
                                className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-blue-400 pl-4 mb-4"
                            >
                                {t.about.section.overview.title}
                            </h2>

                            <p className="leading-relaxed text-gray-700 text-sm md:text-base">
                                {t.about.section.overview.detail}
                            </p>
                        </div>

                    </div>
                </motion.div>
                {/* R&D Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/80 backdrop-blur-md p-4 md:p-8 lg:p-12 shadow-lg rounded-2xl"
                >
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                        {/* Content */}
                        <div className="w-full lg:w-1/2 px-2 md:px-6 lg:px-0">
                            <h2
                                className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-teal-400 pl-4 mb-4"
                            >
                                {t.about.section.research.title}
                            </h2>

                            <p className="leading-relaxed text-gray-700 mb-3 text-sm md:text-base">
                                {t.about.section.research.detail}
                            </p>

                            <p className="leading-relaxed text-gray-700 text-sm md:text-base">
                                {t.about.section.research.detail_1}
                            </p>
                        </div>

                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/about/graphene.png"
                                alt="graphene"
                                className="w-full h-auto rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
                {/* Vision Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/80 mb-6 backdrop-blur-md p-4 md:p-8 lg:p-12 shadow-lg rounded-2xl"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src="/about/innovation.png"
                                alt="innovation"
                                className="w-full h-auto rounded-xl object-cover"
                            />
                        </div>
                        {/* Content */}
                        <div className="w-full lg:w-1/2 px-2 md:px-6 lg:px-0">
                            <h2
                                className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-indigo-400 pl-4 mb-4"
                            >
                                {t.about.section.vision.title}
                            </h2>

                            <p className="leading-relaxed text-gray-700 mb-3 text-sm md:text-base">
                                {t.about.section.vision.detail}
                            </p>

                            <p className="leading-relaxed text-gray-700 text-sm md:text-base">
                                {t.about.section.vision.detail_1}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default AboutUs;