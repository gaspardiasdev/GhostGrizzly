// ---------- file: src/components/Ecosystem.tsx
import React from "react";
import { motion } from "framer-motion";

export default function Ecosystem() {
    return (
        <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-5xl font-orbitron text-white mb-4"
                >
                    Nosso <span className="text-purple-400">Ecossistema</span>
                </motion.h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Inovamos com produtos próprios que transformam mercados.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative group rounded-3xl overflow-hidden"
            >
                {/* Glow Effects */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />

                <div className="relative bg-gradient-to-br from-white/5 to-black/80 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-10">

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left z-10">
                        <div className="inline-block px-4 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-mono mb-6">
                            PRODUTO EM DESTAQUE
                        </div>
                        <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            Alpro
                        </h3>
                        <h4 className="text-xl text-purple-300 mb-6 font-light">
                            O aluno profissional organiza tudo.
                        </h4>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
                            Gestão académica simples e organizada: notas, propinas, comprovativos e muito mais. A solução definitiva para estudantes que buscam excelência e organização.
                        </p>

                        <motion.a
                            href="https://alpro.ao"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                        >
                            Acessar Plataforma
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </motion.a>
                    </div>

                    {/* Visual/Image Placeholder - Could be a screenshot of Alpro later */}
                    <div className="flex-1 w-full max-w-lg aspect-video rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-800 border border-white/5 flex items-center justify-center relative overflow-hidden group/image shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://alpro.ao/assets/hero-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay" /> {/* Hypothetical bg or just abstract */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                        <div className="relative z-10 text-center">
                            <span className="text-6xl font-black text-white/5 tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
                                ALPRO
                            </span>
                            <span className="block text-5xl mb-2">🎓</span>
                            <span className="text-purple-200/50 font-mono text-sm">u.alpro.ao</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
