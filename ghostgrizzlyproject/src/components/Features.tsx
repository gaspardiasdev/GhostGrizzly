// ---------- file: src/components/Features.tsx
import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Performance Extrema",
        desc: "Sites otimizados para carregar em milissegundos. Google PageSpeed 100/100.",
        colSpan: "col-span-1 md:col-span-2",
        bg: "bg-gradient-to-br from-cyan-900/40 to-black",
    },
    {
        title: "Segurança Blindada",
        desc: "Proteção contra ataques DDoS e criptografia de ponta a ponta.",
        colSpan: "col-span-1",
        bg: "bg-gradient-to-bl from-purple-900/40 to-black",
    },
    {
        title: "Design Futurista",
        desc: "UI/UX que prende a atenção e converte visitantes em clientes.",
        colSpan: "col-span-1",
        bg: "bg-gradient-to-tr from-blue-900/40 to-black",
    },
    {
        title: "Escalabilidade Infinita",
        desc: "Sua plataforma cresce junto com o seu negócio, sem gargalos.",
        colSpan: "col-span-1 md:col-span-2",
        bg: "bg-gradient-to-tl from-cyan-900/40 to-black",
    },
];

export default function Features() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-5xl font-orbitron text-white mb-4"
                >
                    Por que a <span className="text-cyan-400">GhostGrizzly</span>?
                </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className={`${f.colSpan} ${f.bg} backdrop-blur-2xl border border-white/10 p-8 rounded-3xl hover:border-cyan-500/50 transition-all duration-500 group relative overflow-hidden`}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-colors duration-500" />

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                            {f.title}
                        </h3>
                        <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                            {f.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
