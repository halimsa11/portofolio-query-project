"use client";

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
