const fs = require('fs');
const path = require('path');

const dir = path.join('d:', 'Portofolio-project-query', 'src', 'components', 'sections');
fs.mkdirSync(dir, { recursive: true });

const files = {
  'Skills.tsx': `"use client";

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
                        whileInView={{ width: \`\${skill.level}%\` }}
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
`,
  'Portfolio.tsx': `"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/data/portfolio';
import { cn } from '@/lib/utils';
import { Project } from '@/data/portfolio';

const gradients = [
  "from-neon-blue to-neon-violet",
  "from-neon-violet to-neon-cyan",
  "from-neon-cyan to-gold",
  "from-gold to-neon-blue",
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const filters = ['Semua', 'Web', 'Mobile', 'UI/UX'];
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="portofolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Portofolio" subtitle="Karya terbaik saya" />
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === filter 
                  ? "bg-gradient-to-r from-neon-blue to-neon-violet text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]" 
                  : "bg-dark-surface border border-dark-border text-gray-400 hover:text-white"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer border border-dark-border"
                onClick={() => setSelectedProject(project)}
              >
                <div className={cn("aspect-video w-full bg-gradient-to-br flex items-center justify-center", gradients[index % gradients.length])}>
                  <h3 className="text-3xl font-bold text-white mix-blend-overlay p-4 text-center">{project.title}</h3>
                </div>
                
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-2 text-white">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-dark-base border border-dark-border text-neon-cyan">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-dark-base border border-dark-border text-gray-400">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-dark-border relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-neon-blue transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className={cn("w-full h-48 md:h-64 bg-gradient-to-br flex items-center justify-center", gradients[projects.findIndex(p => p.id === selectedProject.id) % gradients.length])}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mix-blend-overlay px-4 text-center">{selectedProject.title}</h2>
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line">{selectedProject.longDescription}</p>
                
                <h4 className="text-lg font-semibold mb-3 text-neon-cyan">Teknologi</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-dark-surface border border-dark-border text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {selectedProject.liveUrl && (
                    <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-violet text-white font-medium hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-shadow">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-dark-surface border border-dark-border text-white font-medium hover:bg-dark-base transition-colors">
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
`,
  'Experience.tsx': `"use client";

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
`,
  'Testimonials.tsx': `"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { testimonials } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="testimoni" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="Testimoni" subtitle="Apa kata klien" />
        
        <div 
          className="relative max-w-3xl mx-auto mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="h-[400px] md:h-[350px] relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <div className="glass h-full p-8 md:p-12 rounded-3xl border border-dark-border flex flex-col items-center text-center justify-center gap-6 relative">
                  <Quote className="w-16 h-16 text-neon-blue opacity-30 absolute top-8 left-8" />
                  
                  <p className="text-lg md:text-xl italic text-gray-300 leading-relaxed z-10 relative">
                    "{activeTestimonial.quote}"
                  </p>
                  
                  <div className="w-16 h-[1px] bg-dark-border my-2" />
                  
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-neon-blue to-neon-violet p-[2px]">
                      <div className="w-full h-full rounded-full bg-dark-surface flex items-center justify-center overflow-hidden">
                        {activeTestimonial.avatar ? (
                          <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-xl font-bold">{activeTestimonial.name.charAt(0)}</span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{activeTestimonial.name}</h4>
                      <p className="text-sm text-neon-cyan">{activeTestimonial.role} di {activeTestimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-surface border border-dark-border hover:border-neon-blue text-white transition-colors z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 p-3 rounded-full bg-dark-surface border border-dark-border hover:border-neon-blue text-white transition-colors z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  idx === currentIndex ? "bg-neon-blue w-8" : "bg-dark-border hover:bg-gray-500"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`,
  'Contact.tsx': `"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Download, Send, Check, Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setTimeout(() => {
      setIsSuccess(false);
      reset();
    }, 3000);
  };

  return (
    <section id="kontak" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Hubungi Saya" subtitle="Mari berkolaborasi" />
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left Column */}
          <ScrollReveal direction="left" className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet mb-4">
                Mari Bekerja Sama
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Saya selalu terbuka untuk mendiskusikan pekerjaan pengembangan produk, peluang kolaborasi, atau sekadar bertukar pikiran mengenai teknologi terbaru.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Mail, text: "hello@example.com", label: "Email" },
                { icon: Phone, text: "+62 812 3456 7890", label: "Telepon" },
                { icon: MapPin, text: "Jakarta, Indonesia", label: "Lokasi" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-dark-surface border border-dark-border flex items-center justify-center group-hover:border-neon-blue group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                    <item.icon className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="text-white font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-4">Ikuti Saya</p>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter, Instagram].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-full glass border border-dark-border flex items-center justify-center hover:bg-neon-blue hover:text-white hover:border-neon-blue transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-dark-surface to-dark-base border border-dark-border hover:border-neon-violet hover:shadow-[0_0_15px_rgba(138,43,226,0.3)] transition-all font-medium text-white group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
          </ScrollReveal>
          
          {/* Right Column (Form) */}
          <ScrollReveal direction="right">
            <div className="glass p-8 md:p-10 rounded-3xl border border-dark-border relative">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <input
                    {...register("name", { required: "Nama wajib diisi", minLength: { value: 2, message: "Minimal 2 karakter" } })}
                    placeholder="Nama Lengkap"
                    className="w-full bg-dark-base/50 border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message as string}</p>}
                </div>
                
                <div>
                  <input
                    {...register("email", { 
                      required: "Email wajib diisi",
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i, message: "Format email tidak valid" }
                    })}
                    placeholder="Email"
                    className="w-full bg-dark-base/50 border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message as string}</p>}
                </div>
                
                <div>
                  <input
                    {...register("subject", { required: "Subjek wajib diisi" })}
                    placeholder="Subjek"
                    className="w-full bg-dark-base/50 border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject.message as string}</p>}
                </div>
                
                <div>
                  <textarea
                    {...register("message", { required: "Pesan wajib diisi", minLength: { value: 10, message: "Minimal 10 karakter" } })}
                    placeholder="Tulis pesan Anda disini..."
                    rows={4}
                    className="w-full bg-dark-base/50 border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message as string}</p>}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-violet text-white font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : isSuccess ? (
                    <>
                      <Check className="w-5 h-5" />
                      Pesan Terkirim!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
`
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, filename), content);
  console.log(`Created ${filename}`);
}
