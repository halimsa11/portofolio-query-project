"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import SectionHeading from '@/components/ui/SectionHeading';
import { projects } from '@/data/portfolio';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portofolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Portofolio" subtitle="Karya terbaik saya" />
        
        {projects.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="w-24 h-24 rounded-full bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center mb-6">
              <FolderOpen className="w-12 h-12 text-[var(--color-palette-medium)] opacity-50" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--theme-text)] mb-2">Belum Ada Karya</h3>
            <p className="text-[var(--color-muted-foreground)] text-center max-w-md">
              Saat ini belum ada proyek atau karya yang ditambahkan. Karya dan proyek akan ditampilkan di sini setelah di-input.
            </p>
          </motion.div>
        ) : (
          <>
            <div className="flex justify-center space-x-4 mb-12 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[var(--color-palette-medium)] text-white'
                      : 'bg-[var(--theme-surface)] text-[var(--theme-text)] hover:text-[var(--color-palette-medium)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-2xl overflow-hidden border border-[var(--theme-border)] hover:border-[var(--color-palette-medium)] group transition-all"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-[var(--color-palette-medium)] text-white rounded-full hover:bg-[var(--color-palette-dark)] transition-colors">
                          <ExternalLink size={20} />
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="text-sm font-medium text-[var(--color-palette-medium)] mb-2">{project.category}</div>
                      <h3 className="text-xl font-bold text-[var(--theme-text)] mb-2">{project.title}</h3>
                      <p className="text-[var(--color-muted-foreground)] text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-xs rounded-full bg-[var(--theme-bg)] border border-[var(--theme-border)] text-[var(--theme-text)]">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-4 border-t border-[var(--theme-border)] flex items-center justify-between gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-palette-medium)] hover:underline"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--theme-text)] opacity-80 hover:opacity-100 hover:text-[var(--color-palette-medium)] transition-colors"
                        >
                          <Github size={14} /> GitHub Repo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
