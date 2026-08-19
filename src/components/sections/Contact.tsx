"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Github, Instagram, Download, Send, Check, Loader2 } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/portfolio';

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
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Mari Bekerja Sama
              </h3>
              <p className="text-[var(--color-muted-foreground)] leading-relaxed text-lg">
                Saya selalu terbuka untuk mendiskusikan pekerjaan pengembangan produk, peluang kolaborasi, atau sekadar bertukar pikiran mengenai teknologi terbaru.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Mail, text: personalInfo.email, label: "Email" },
                { icon: Phone, text: personalInfo.phone, label: "Telepon" },
                { icon: MapPin, text: personalInfo.location, label: "Lokasi" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center group-hover:border-[var(--color-palette-medium)] group-hover:shadow-[0_0_15px_var(--shadow-accent)] transition-all">
                    <item.icon className="w-5 h-5 text-[var(--color-palette-medium)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-muted-foreground)]">{item.label}</p>
                    <p className="text-[var(--theme-text)] font-medium">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <p className="text-sm text-[var(--color-muted-foreground)] mb-4">Ikuti Saya</p>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: personalInfo.socialLinks.github },
                  { Icon: Instagram, href: personalInfo.socialLinks.instagram },
                ].map(({ Icon, href }, idx) => (
                  <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass border border-[var(--theme-border)] flex items-center justify-center hover:bg-[var(--color-palette-medium)] hover:text-white hover:border-[var(--color-palette-medium)] transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--theme-surface)] border border-[var(--theme-border)] hover:border-[var(--color-palette-dark)] hover:shadow-[0_0_15px_var(--shadow-accent)] transition-all font-medium text-[var(--theme-text)] group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              Download CV
            </a>
          </ScrollReveal>
          
          {/* Right Column (Form) */}
          <ScrollReveal direction="right">
            <div className="glass p-8 md:p-10 rounded-3xl border border-[var(--theme-border)] relative">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <input
                    {...register("name", { required: "Nama wajib diisi", minLength: { value: 2, message: "Minimal 2 karakter" } })}
                    placeholder="Nama Lengkap"
                    className="w-full bg-[var(--theme-bg)]/50 border border-[var(--theme-border)] rounded-xl px-4 py-3 text-[var(--theme-text)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:border-[var(--color-palette-medium)] focus:shadow-[0_0_10px_var(--shadow-accent)] transition-all"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message as string}</p>}
                </div>
                
                <div>
                  <input
                    {...register("email", { 
                      required: "Email wajib diisi",
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Format email tidak valid" }
                    })}
                    placeholder="Email"
                    className="w-full bg-[var(--theme-bg)]/50 border border-[var(--theme-border)] rounded-xl px-4 py-3 text-[var(--theme-text)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:border-[var(--color-palette-medium)] focus:shadow-[0_0_10px_var(--shadow-accent)] transition-all"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message as string}</p>}
                </div>
                
                <div>
                  <input
                    {...register("subject", { required: "Subjek wajib diisi" })}
                    placeholder="Subjek"
                    className="w-full bg-[var(--theme-bg)]/50 border border-[var(--theme-border)] rounded-xl px-4 py-3 text-[var(--theme-text)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:border-[var(--color-palette-medium)] focus:shadow-[0_0_10px_var(--shadow-accent)] transition-all"
                  />
                  {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject.message as string}</p>}
                </div>
                
                <div>
                  <textarea
                    {...register("message", { required: "Pesan wajib diisi", minLength: { value: 10, message: "Minimal 10 karakter" } })}
                    placeholder="Tulis pesan Anda disini..."
                    rows={4}
                    className="w-full bg-[var(--theme-bg)]/50 border border-[var(--theme-border)] rounded-xl px-4 py-3 text-[var(--theme-text)] placeholder-[var(--color-muted-foreground)] focus:outline-none focus:border-[var(--color-palette-medium)] focus:shadow-[0_0_10px_var(--shadow-accent)] transition-all resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message.message as string}</p>}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full py-4 rounded-xl btn-primary font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_var(--shadow-accent)] transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
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
