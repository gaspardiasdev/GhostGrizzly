// ---------- file: src/components/Team.tsx
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Gaspar Dias",
    role: "CEO",
    description: "Visionário por trás da GhostGrizzly, liderando a inovação tecnológica com foco em soluções futuristas.",
    initials: "GD",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    name: "Helena Sisu",
    role: "Gestora de Projetos",
    description: "Especialista em transformar complexidade em eficiência, garantindo entregas ágeis e de alta qualidade.",
    initials: "HS",
    gradient: "from-purple-500 to-cyan-500",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 px-4 max-w-7xl mx-auto relative z-10">
      <div className="container mx-auto"> {/* Added container for consistency */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-orbitron text-cyan-300 drop-shadow mb-4">
            Nossa Liderança
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="relative w-full max-w-md group"
            >
              {/* Card Background with Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500" />

              <div className="relative bg-gradient-to-b from-white/5 to-transparent backdrop-blur-2xl border border-white/10 p-8 rounded-3xl h-full shadow-2xl overflow-hidden group-hover:border-cyan-500/40 transition-all duration-500">

                {/* Avatar Placeholder */}
                <div className="relative w-32 h-32 mb-6 rounded-full p-1 bg-gradient-to-br from-cyan-400 to-purple-500">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                    {/* Replace with <img> when assets are ready */}
                    <span className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-500">
                      {member.initials}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-mono text-cyan-400 mb-6 uppercase tracking-widest">
                  {member.role}
                </p>
                <p className="text-gray-300 leading-relaxed font-light">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
