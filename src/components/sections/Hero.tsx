"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolio";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
const ParticleBackground = dynamic(() => import("@/components/ui/ParticleBackground"), { ssr: false });
import { cn } from "@/lib/utils";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [fullText]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const nameLetters = Array.from(personalInfo.name);

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[var(--orb-teal)] blur-3xl animate-[orb-drift_18s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-[8%] h-64 w-64 rounded-full bg-[var(--orb-indigo)] blur-3xl animate-[orb-drift_22s_ease-in-out_infinite_reverse]"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <p className="mb-5 font-display text-xs md:text-sm uppercase tracking-[0.28em] text-[var(--color-palette-medium)]">
          Full-Stack Developer
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-semibold tracking-tight mb-6 flex flex-wrap justify-center text-center">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={cn("text-gradient", letter === " " && "w-3 sm:w-4 md:w-6")}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <div className="h-8 md:h-12 mb-10 text-xl md:text-2xl text-[var(--color-muted-foreground)] font-mono">
          {typedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-6 bg-[var(--color-palette-medium)] ml-1 align-middle"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <button
            onClick={() => scrollToSection("portofolio")}
            className="btn-primary w-full sm:w-auto px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_20px_var(--shadow-accent)] transition-all duration-300"
          >
            Lihat Karya
          </button>
          <button
            onClick={() => scrollToSection("kontak")}
            className="btn-outline w-full sm:w-auto px-8 py-4 rounded-full font-semibold hover:bg-[var(--color-palette-medium)] hover:text-white transition-all duration-300"
          >
            Hubungi Saya
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-[var(--color-muted-foreground)] mb-2 font-mono">Scroll untuk menjelajahi</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-[var(--color-palette-medium)]" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}