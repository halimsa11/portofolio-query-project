"use client";

import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { experience } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Pengalaman" subtitle="Perjalanan karir saya" />
        
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Center line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-palette-medium)] via-[var(--color-palette-dark)] to-[var(--color-palette-medium)] transform md:-translate-x-1/2 rounded-full opacity-50" />
          
          <div className="space-y-12 md:space-y-24">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={cn("relative flex flex-col md:flex-row items-start", isEven ? "md:flex-row-reverse" : "")}>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[20px] md:left-1/2 top-6 w-4 h-4 bg-[var(--color-palette-medium)] rounded-full transform -translate-x-1/2 shadow-[0_0_15px_var(--shadow-accent)] z-10">
                    <div className="absolute inset-0 bg-[var(--color-palette-medium)] rounded-full animate-ping opacity-75" />
                  </div>
                  
                  {/* Content card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 pt-2 md:pt-0">
                    <ScrollReveal 
                      direction={isEven ? "right" : "left"} 
                      className={cn("glass p-6 md:p-8 rounded-2xl border border-[var(--theme-border)] relative hover:border-[var(--color-palette-dark)] transition-colors duration-300", 
                        isEven ? "md:ml-12" : "md:mr-12"
                      )}
                    >
                      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[var(--color-palette-medium)]/20 text-[var(--color-palette-medium)] text-sm font-medium border border-[var(--color-palette-medium)]/30">
                        {exp.period}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-1 text-[var(--theme-text)]">{exp.role}</h3>
                      <h4 className="text-[var(--color-palette-light)] font-medium mb-4">{exp.company}</h4>
                      
                      <p className="text-[var(--color-muted-foreground)] mb-6">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded bg-[var(--theme-bg)] border border-[var(--theme-border)] text-[var(--color-muted-foreground)]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
