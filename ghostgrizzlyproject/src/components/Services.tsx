import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Criação de Sites com React",
    desc: "Interfaces modernas, rápidas e escaláveis com design responsivo e animações fluidas.",
  },
  {
    title: "Landing Pages e Portfólios",
    desc: "Experiências visuais com foco em identidade, imersão e conversão.",
  },
  {
    title: "Manutenção e Otimização",
    desc: "Atualizações, refatorações e melhorias de performance e SEO para sites existentes.",
  },
  {
    title: "Suporte com Hospedagem",
    desc: "Configuração de domínio, cPanel, email profissional e publicação segura.",
  },
  {
    title: "Gestão de Redes Sociais",
    desc: "Estratégias de crescimento, criação de conteúdo e gestão de comunidade para Instagram, Facebook e LinkedIn.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl sm:text-4xl font-orbitron text-cyan-300 drop-shadow mb-16"
      >
        Serviços
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl rounded-3xl border border-white/10 p-8 text-white hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-500 group"
          >
            <h3 className="text-xl font-semibold mb-2 text-cyan-200 drop-shadow">
              {s.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
