// ---------- file: src/components/PriceTable.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const priceLevels = [
  // Websites
  { level: 1, title: "Landing Page", price: "80k – 150k AOA" },
  { level: 2, title: "Site Institucional", price: "250k – 500k AOA" },
  { level: 3, title: "E-commerce PME", price: "800k – 2M AOA" },
  { level: 4, title: "Sistemas & Apps", price: "Sob Orçamento" },

  // Social Media
  { level: 5, title: "Social Media: Inicial", price: "150k AOA / mês" },
  { level: 6, title: "Social Media: Crescimento", price: "250k AOA / mês" },
  { level: 7, title: "Social Media: Empresarial", price: "Sob Orçamento" },
];

export default function PriceTable() {
  const [showAll, setShowAll] = useState(false);
  const cards = showAll ? priceLevels : priceLevels.slice(0, 6);

  return (
    <section id="pricing" className="py-32 px-4 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl sm:text-5xl font-orbitron text-cyan-300 mb-20 drop-shadow"
      >
        Tabela de Preços
      </motion.h2>

      <div className="[perspective:1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
        {cards.map((c, i) => (
          <motion.div
            key={c.level}
            initial={{ opacity: 0, rotateX: -30, rotateY: 20, z: -200 }}
            whileInView={{ opacity: 1, rotateX: 0, rotateY: 0, z: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
            whileHover={{ rotateY: 15, rotateX: -8, translateZ: 40 }}
            className="[transform-style:preserve-3d] bg-gradient-to-br from-white/5 to-transparent backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-xl hover:shadow-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500"
          >
            <h3 className="text-xl font-semibold text-cyan-200 mb-2">
              Nível {c.level} – {c.title}
            </h3>
            <p className="text-cyan-400 font-mono mb-6">{c.price}</p>
            <p className="text-white/80 text-sm leading-relaxed">
              Solicite um orçamento detalhado para personalizar recursos conforme a necessidade do seu projeto.
            </p>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-lg"
        >
          {showAll ? "Ver menos" : "Ver mais"}
        </motion.button>
      </div>
    </section>
  );
}
