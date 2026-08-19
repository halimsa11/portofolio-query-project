const fs = require('fs');
const path = require('path');

const baseDir = 'd:/Portofolio-project-query';

const files = {
  'src/components/layout/Navbar.tsx': `"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass bg-dark-base/80" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("")}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet"
          >
            AP
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-neon-blue group",
                  activeSection === item.href.substring(1)
                    ? "text-neon-blue"
                    : "text-foreground"
                )}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-blue rounded-full"
                  />
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue rounded-full transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100" />
              </button>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-neon-blue transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="h-[2px] w-full bg-dark-surface absolute bottom-0 left-0">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue to-neon-violet"
            style={{ width: \`\${scrollProgress}%\` }}
          />
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-40 bg-dark-base glass flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={cn(
                  "text-2xl font-bold transition-colors",
                  activeSection === item.href.substring(1)
                    ? "text-neon-blue"
                    : "text-foreground hover:text-neon-blue"
                )}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}`,
  'src/components/layout/Footer.tsx': `"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo, navItems } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <Github size={20} />, href: personalInfo.socialLinks.github },
    { icon: <Linkedin size={20} />, href: personalInfo.socialLinks.linkedin },
    { icon: <Twitter size={20} />, href: personalInfo.socialLinks.twitter },
    { icon: <Instagram size={20} />, href: personalInfo.socialLinks.instagram },
    { icon: <Mail size={20} />, href: \`mailto:\${personalInfo.email}\` },
  ];

  return (
    <footer className="relative pt-16 pb-8 hairline bg-dark-base border-t border-dark-border">
      <ScrollReveal>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet">
                {personalInfo.name}
              </h3>
              <p className="text-muted-foreground">{personalInfo.tagline}</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(item.href.substring(1));
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-muted-foreground hover:text-neon-blue transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 rounded-full bg-dark-surface border border-dark-border text-foreground hover:text-neon-blue hover:border-neon-blue hover:shadow-[0_0_10px_rgba(0,240,255,0.5)] transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-dark-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {personalInfo.name}. Crafted with ❤️ and ☕
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Back to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full glass bg-dark-surface/80 border border-dark-border text-neon-blue hover:text-neon-violet hover:border-neon-violet hover:shadow-[0_0_15px_rgba(138,43,226,0.6)] transition-all z-50 pointer-events-auto"
        style={{ pointerEvents: showBackToTop ? "auto" : "none" }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
}`,
  'src/components/layout/Preloader.tsx': `"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { personalInfo } from "@/data/portfolio";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-base"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet mb-4"
            >
              AP
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl font-light text-foreground mb-8"
            >
              {personalInfo.name}
            </motion.div>
            
            <div className="w-64 h-1 bg-dark-surface rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-neon-blue to-neon-violet"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}`,
  'src/components/sections/Hero.tsx': `"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolio";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "@/components/ui/ParticleBackground";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = personalInfo.tagline;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-base">
      <ParticleBackground />
      
      {/* Cursor Orb */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(0,240,255,0.15) 0%, rgba(0,0,0,0) 70%)",
        }}
        animate={{
          x: cursorPos.x - 300,
          y: cursorPos.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 flex space-x-2">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={cn("bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet", letter === " " && "w-4")}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <div className="h-8 md:h-12 mb-10 text-xl md:text-2xl text-muted-foreground font-mono">
          {typedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-6 bg-neon-blue ml-1 align-middle"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <button
            onClick={() => scrollToSection("portofolio")}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-violet text-white font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300"
          >
            Lihat Karya
          </button>
          <button
            onClick={() => scrollToSection("kontak")}
            className="px-8 py-4 rounded-full border-2 border-neon-blue text-neon-blue font-semibold hover:bg-neon-blue hover:text-white transition-all duration-300"
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
        <span className="text-sm text-muted-foreground mb-2 font-mono">Scroll untuk menjelajahi</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-neon-blue" size={24} />
        </motion.div>
      </motion.div>
      
      {/* Floating Shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, Math.random() * 50 - 25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 5 + Math.random() * 5,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute pointer-events-none opacity-20 border border-neon-blue",
            i % 2 === 0 ? "rounded-full" : "rounded-md",
            "w-8 h-8"
          )}
          style={{
            top: \`\${Math.random() * 100}%\`,
            left: \`\${Math.random() * 100}%\`,
          }}
        />
      ))}
    </section>
  );
}`,
  'src/components/sections/About.tsx': `"use client";

import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ endValue, label }: { endValue: number; label: string }) {
  const value = useCountUp(endValue, 2000);
  return (
    <div className="glass bg-dark-card p-6 rounded-2xl border border-dark-border hover:border-neon-blue hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300">
      <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet mb-2">
        {value}+
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-dark-base relative">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading title="Tentang Saya" subtitle="Mengenal lebih dekat" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Column */}
          <ScrollReveal direction="left">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-2xl p-1 bg-gradient-to-r from-neon-blue to-neon-violet"
            >
              <div className="w-full h-full bg-dark-base rounded-xl flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_20px_rgba(0,240,255,0.3)]">
                <div className="text-6xl md:text-8xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
                  AP
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Bio Column */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {personalInfo.bio}
              </motion.p>

              <div className="flex items-center text-neon-blue space-x-2">
                <MapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <StatCard endValue={personalInfo.yearsExperience} label="Tahun Pengalaman" />
                <StatCard endValue={personalInfo.totalProjects} label="Total Proyek" />
                <StatCard endValue={personalInfo.happyClients} label="Klien Puas" />
                <StatCard endValue={personalInfo.awardsWon} label="Penghargaan" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(baseDir, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim());
}

console.log('Successfully created all sections and layout components.');
