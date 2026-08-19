"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Code2 } from "lucide-react";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


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
      { threshold: 0.1, rootMargin: "-20% 0px -50% 0px" }
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

  const scrollToSection = (id: string) => {
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
          isScrolled ? "glass bg-theme-base/80" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToSection("")}
            className="flex items-center gap-2 font-bold group"
          >
            <div className="p-1.5 rounded-lg bg-[var(--color-palette-medium)]/10 text-[var(--color-palette-medium)] group-hover:bg-[var(--color-palette-medium)] group-hover:text-white transition-colors">
              <Code2 size={22} className="md:w-6 md:h-6" />
            </div>
            <span className="text-lg md:text-2xl tracking-tight text-[var(--theme-text)]">
              halim<span className="text-[var(--color-palette-medium)]">samodra</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--color-palette-medium)]",
                  activeSection === item.href.substring(1)
                    ? "text-[var(--color-palette-medium)]"
                    : "text-[var(--theme-text)]"
                )}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--theme-text)] hover:text-[var(--color-palette-medium)] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>


      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--theme-bg)]/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-6 pt-16"
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={cn(
                  "text-2xl font-bold transition-all px-6 py-2 rounded-full",
                  activeSection === item.href.substring(1)
                    ? "text-[var(--color-palette-medium)] bg-[var(--color-palette-medium)]/10"
                    : "text-[var(--theme-text)] hover:text-[var(--color-palette-medium)]"
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
}