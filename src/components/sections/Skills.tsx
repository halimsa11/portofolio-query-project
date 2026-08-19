"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Database, Figma, Globe, Server, GitBranch, Cloud, Palette, Terminal, Box, Cpu, Layers, Monitor, Smartphone, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { skills } from '@/data/portfolio';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.FC<any>> = {
  Code, Database, Figma, Globe, Server, GitBranch, Cloud, Palette, Terminal, Box, Cpu, Layers, Monitor, Smartphone, Zap
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
                  ? "bg-gradient-to-r from-neon-blue to-neon-violet text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]" 
                  : "bg-dark-surface border border-dark-border text-gray-400 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 border border-dark-border hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:border-neon-blue transition-all group"
                >
                  <IconComponent className="w-12 h-12 text-neon-blue group-hover:text-neon-violet transition-colors" />
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <div className="w-full">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Profiency</span>
                      <span className="text-neon-cyan">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-base rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-neon-blue to-neon-violet h-full rounded-full"
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
