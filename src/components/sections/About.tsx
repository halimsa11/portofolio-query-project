"use client";

import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ endValue, label }: { endValue: number; label: string }) {
  const { count, ref } = useCountUp(endValue, 2000);
  return (
    <div ref={ref} className="glass p-6 rounded-2xl border border-[var(--theme-border)] hover:border-[var(--color-palette-medium)] hover:shadow-[0_0_15px_var(--shadow-accent)] transition-all duration-300">
      <div className="text-4xl font-bold text-gradient mb-2">
        {count}+
      </div>
      <div className="text-sm text-[var(--color-muted-foreground)]">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-[var(--theme-bg)] relative">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <SectionHeading title="Tentang Saya" subtitle="Mengenal lebih dekat" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Column */}
          <ScrollReveal direction="left">
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative mx-auto w-48 h-48 md:w-80 md:h-80 rounded-2xl p-1 bg-gradient-to-r from-[var(--color-palette-medium)] to-[var(--color-palette-dark)]"
            >
              <div className="w-full h-full bg-[var(--theme-bg)] rounded-xl flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_20px_var(--shadow-accent)]">
                <Image
                  src="https://github.com/halimsa11.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Bio Column */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-lg text-[var(--color-muted-foreground)] leading-relaxed"
              >
                {personalInfo.bio}
              </motion.p>

              <div className="flex items-center text-[var(--color-palette-medium)] space-x-2">
                <MapPin size={20} />
                <span>{personalInfo.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <StatCard endValue={personalInfo.yearsExperience} label="Tahun Pengalaman" />
                <StatCard endValue={personalInfo.totalProjects} label="Total Proyek" />
                <StatCard endValue={personalInfo.happyClients} label="Klien Puas" />
                <StatCard endValue={personalInfo.awardsWon} label="Penghargaan" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}