"use client";

import { useEffect, useState } from "react";
import { Github, Instagram, Mail, ArrowUp, Code2 } from "lucide-react";
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
    { icon: <Github size={20} />, href: personalInfo.socialLinks.github, label: 'GitHub' },
    { icon: <Instagram size={20} />, href: personalInfo.socialLinks.instagram, label: 'Instagram' },
    { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative pt-16 pb-8 bg-[var(--theme-bg)] border-t border-[var(--theme-border)]">
      <ScrollReveal>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="p-1.5 rounded-lg bg-[var(--color-palette-medium)]/10 text-[var(--color-palette-medium)]">
                  <Code2 size={24} />
                </div>
                <h3 className="font-display text-2xl tracking-tight text-[var(--theme-text)]">
                  halim<span className="text-gradient">samodra</span>
                </h3>
              </div>
              <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                {personalInfo.tagline}
              </p>
              <p className="text-[var(--color-muted-foreground)] text-sm">
                📍 {personalInfo.location}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold text-[var(--theme-text)]">Navigasi</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(item.href.substring(1));
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-[var(--color-muted-foreground)] hover:text-[var(--color-palette-medium)] transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold text-[var(--theme-text)]">Terhubung</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2.5 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text)] hover:text-white hover:bg-[var(--color-palette-medium)] hover:border-[var(--color-palette-medium)] transition-all"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)] space-y-1">
                <p>📧 {personalInfo.email}</p>
                <p>📱 {personalInfo.phone}</p>
              </div>
            </div>
          </div>

          <div className="hairline-divider mb-6" />

          <div className="text-center">
            <p className="text-sm text-[var(--color-muted-foreground)]">
              © {new Date().getFullYear()} {personalInfo.displayName}. Dibuat dengan ❤️ dan ☕
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
        className="fixed bottom-8 right-8 p-3 rounded-full glass bg-[var(--theme-surface)]/80 border border-[var(--theme-border)] text-[var(--color-palette-medium)] hover:text-white hover:bg-[var(--color-palette-medium)] transition-all z-50 pointer-events-auto"
        style={{ pointerEvents: showBackToTop ? "auto" : "none" }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
}