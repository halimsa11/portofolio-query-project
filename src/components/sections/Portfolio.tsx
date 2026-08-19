"use client";

import React from 'react';
import { motion } from 'motion/react';
import { FolderOpen } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Portfolio() {
  return (
    <section id="portofolio" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeading title="Portofolio" subtitle="Karya terbaik saya" />
        
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
      </div>
    </section>
  );
}
