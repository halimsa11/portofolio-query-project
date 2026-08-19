"use client";

import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Pengalaman" subtitle="Perjalanan karir saya" />
        
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Center line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-blue via-neon-violet to-neon-blue transform md:-translate-x-1/2 rounded-full opacity-50" />
          
          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={cn("relative flex flex-col md:flex-row items-start", isEven ? "md:flex-row-reverse" : "")}>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[20px] md:left-1/2 top-6 w-4 h-4 bg-neon-blue rounded-full transform -translate-x-1/2 shadow-[0_0_15px_rgba(0,240,255,0.8)] z-10">
                    <div className="absolute inset-0 bg-neon-blue rounded-full animate-ping opacity-75" />
                  </div>
                  
                  {/* Content card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 pt-2 md:pt-0">
                    <ScrollReveal 
                      direction={isEven ? "right" : "left"} 
                      className={cn("glass p-6 md:p-8 rounded-2xl border border-dark-border relative hover:border-neon-violet transition-colors duration-300", 
                        isEven ? "md:ml-12" : "md:mr-12"
                      )}
                    >
                      <div className="inline-block px-3 py-1 mb-4 rounded-full bg-neon-blue/20 text-neon-blue text-sm font-medium border border-neon-blue/30">
                        {exp.period}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.role}</h3>
                      <h4 className="text-neon-cyan font-medium mb-4">{exp.company}</h4>
                      
                      <p className="text-gray-400 mb-6">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded bg-dark-base border border-dark-border text-gray-300">
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
