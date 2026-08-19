'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/layout/Preloader';
import dynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';

const About = dynamic(() => import('@/components/sections/About'));
const Skills = dynamic(() => import('@/components/sections/Skills'));
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'));
const Experience = dynamic(() => import('@/components/sections/Experience'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const Contact = dynamic(() => import('@/components/sections/Contact'));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Experience />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
