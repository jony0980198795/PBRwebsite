import { motion, easeOut, Variants } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const teamVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeOut,
        },
    },
};

export default function OurTeam() {
    const {t}=useLanguage();

    return (
        <section className="w-full max-w-6xl py-12 px-6 mx-auto">
            <motion.div
                variants={teamVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-3xl font-semibold text-center mb-12">{t.home.ourteam.ourteamtitle}</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {[
                    {
                        src: "/leader/ceo.jpg",
                        name: t.home.ourteam.person_1.name,
                        position: t.home.ourteam.person_1.position,
                        details: t.home.ourteam.person_1.details,
                    },
                    {
                        src: "/leader/coo.jpg",
                        name: t.home.ourteam.person_2.name,
                        position: t.home.ourteam.person_2.position,
                        details: t.home.ourteam.person_2.details,
                    },
                    {
                        src: "/leader/senior.jpg",
                        name: t.home.ourteam.person_3.name,
                        position: t.home.ourteam.person_3.position,
                        details: t.home.ourteam.person_3.details,
                    },
                ].map((member, index) => (
                    <motion.div
                        key={index}
                        variants={teamVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-2xl"
                    >
                        <div className="w-45 h-45 mb-4 overflow-hidden rounded-full shadow-md">
                            <Image src={member.src} alt={member.name} width={192} height={320} />
                        </div>

                        <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                        <p className="text-gray-500 text-sm">{member.position}</p>
                        <p className="text-gray-400 text-xs mt-2">{member.details}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
