"use client";

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
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Format email tidak valid" }
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
