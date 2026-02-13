import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Abstract Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10 mix-blend-overlay" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-10 relative"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-20 animate-spin-slow" />
        <h1 className="font-orbitron text-5xl sm:text-7xl md:text-8xl bg-gradient-to-br from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] relative z-10 leading-tight">
          GHOST<br />GRIZZLY
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="font-inter text-xl sm:text-2xl max-w-3xl mb-12 text-blue-100/80 font-light tracking-wide leading-relaxed"
      >
        Transformamos ideias complexas em <span className="text-cyan-300 font-semibold">experiências digitais imersivas</span>. Tecnologia de ponta, performance extrema e design futurista.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-6">
        <motion.a
          href="#services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,211,238,0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full bg-cyan-500 text-black font-bold text-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300"
        >
          Explorar Serviços
        </motion.a>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.05, borderColor: "rgba(34,211,238,0.8)", backgroundColor: "rgba(34,211,238,0.1)" }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg backdrop-blur-md transition-all duration-300"
        >
          Fale Conosco
        </motion.a>
      </div>
    </section>
  );
}
