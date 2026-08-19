"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Database, Server, GitBranch, Cloud, Terminal, Layers, Wind, Triangle } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { skills } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  code: Code,
  triangle: Triangle,
  wind: Wind,
  layers: Layers,
  server: Server,
  database: Database,
  terminal: Terminal,
  'git-branch': GitBranch,
  cloud: Cloud,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const categories = ['Semua', 'Frontend', 'Backend', 'Tools'];

  const filteredSkills = activeCategory === 'Semua' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="keahlian" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Keahlian" subtitle="Teknologi yang saya kuasai" />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === cat 
                  ? "btn-primary shadow-[0_0_15px_var(--shadow-accent)]" 
                  : "bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--color-muted-foreground)] hover:text-[var(--theme-text)]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.iconName] || Code;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-[var(--theme-border)] hover:shadow-[0_0_20px_var(--shadow-accent)] hover:border-[var(--color-palette-medium)] transition-all group"
                >
                  <IconComponent className="w-12 h-12 text-[var(--color-palette-medium)] group-hover:text-[var(--color-palette-dark)] transition-colors" />
                  <h3 className="font-semibold text-lg text-[var(--theme-text)]">{skill.name}</h3>
                  <div className="w-full">
                    <div className="flex justify-between mb-1 text-sm">
                      <span className="text-[var(--color-muted-foreground)]">Proficiency</span>
                      <span className="text-[var(--color-palette-light)]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[var(--theme-bg)] rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-[var(--color-palette-medium)] to-[var(--color-palette-dark)] h-full rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
