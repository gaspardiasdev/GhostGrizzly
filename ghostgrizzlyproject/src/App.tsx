// ---------- file: src/App.tsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import PriceTable from "./components/TabelaPreco";
import { motion } from "framer-motion";
import ContactForm from "./components/Contact";
import Team from "./components/Team";
import Features from "./components/Features";
import Ecosystem from "./components/Ecosystem";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x01060f);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f1c, 0.035);

    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 300);
    camera.position.set(0, 3, 15);
    scene.add(camera);

    scene.add(new THREE.AmbientLight(0x3f6bff, 0.8));
    const dir = new THREE.DirectionalLight(0x7cc7ff, 1.4);
    dir.position.set(6, 12, 6);
    scene.add(dir);

    const gridGeo = new THREE.PlaneGeometry(200, 200, 100, 100);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x1e90ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
    });
    const grid = new THREE.Mesh(gridGeo, gridMat);
    grid.rotation.x = -Math.PI / 2;
    scene.add(grid);

    const count = 3000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 200;
    const particleGeo = new THREE.BufferGeometry().setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0x7b95ff, size: 0.15, transparent: true, depthWrite: false });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);

    const lenis = new Lenis({ lerp: 0.07 });
    requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    });

    const scroll = { progress: 0 };
    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => (scroll.progress = self.progress),
    });

    const tick = () => {
      const p = scroll.progress;
      camera.position.z = 15 - p * 80;
      camera.position.y = 3 + Math.sin(p * Math.PI) * 3;
      camera.lookAt(0, 0, -50);
      particles.rotation.y += 0.002;
      (grid.material as THREE.MeshBasicMaterial).opacity = 0.2 + 0.3 * p;
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      lenis.destroy();
      renderer.dispose();
    };
  }, []);

  const About = () => (
    <section id="about" className="py-24 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-black/60 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-cyan-500/10"
      >
        <h2 className="text-4xl sm:text-5xl font-orbitron text-cyan-300 mb-6 drop-shadow">
          Quem Somos
        </h2>
        <p className="text-white/90 text-lg leading-relaxed">
          Somos apaixonados por tecnologia e design. Nosso objetivo é transformar ideias em experiências digitais incríveis.<br /><br />
          A GhostGrizzly foi criada para ajudar empresas e criadores a se destacarem na internet com soluções modernas, rápidas e responsivas.
        </p>
      </motion.div>
    </section>
  );

  return (
    <>
      <Header />
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 select-none" />

      <main className="relative z-10 px-4">
        <Home />
        <Features />
        <Ecosystem />
        <Services />
        <Team />
        <About />
        <PriceTable />
        <ContactForm />
      </main>
      <footer className="text-center text-sm text-blue-200 font-mono py-6 bg-black/60 backdrop-blur border-t border-blue-800/40">
        <p className="opacity-80">© 2025 GhostGrizzly. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}
