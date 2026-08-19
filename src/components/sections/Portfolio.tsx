"use client";

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
