const fs = require('fs');
const path = require('path');

const baseDir = 'd:/Portofolio-project-query';

const files = {
  'src/app/globals.css': `
@import 'tailwindcss';

@theme {
  --color-dark-base: #0a0a0f;
  --color-dark-surface: #121218;
  --color-dark-card: #1a1a24;
  --color-dark-border: #2a2a3a;
  --color-neon-blue: #00d4ff;
  --color-neon-violet: #8b5cf6;
  --color-neon-cyan: #06b6d4;
  --color-gold: #d4a574;
  --color-light-base: #f8f9fa;
  --color-light-surface: #ffffff;
  --color-light-card: #f0f1f5;
  --color-light-border: #e2e4e9;
  --color-light-text: #1a1a2e;
  
  --font-sans: var(--font-inter), sans-serif;
  --font-heading: var(--font-space-grotesk), sans-serif;
  
  --animate-float: float 6s ease-in-out infinite;
  --animate-glow-pulse: glow-pulse 3s ease-in-out infinite;
  --animate-gradient-x: gradient-x 15s ease infinite;
  --animate-fade-in: fade-in 1s ease-out;
  --animate-slide-up: slide-up 0.8s ease-out forwards;
  --animate-typing-cursor: typing-cursor 0.75s step-end infinite;
  --animate-aurora-shift: aurora-shift 20s linear infinite;
}

:root {
  --theme-bg: var(--color-light-base);
  --theme-surface: var(--color-light-surface);
  --theme-card: var(--color-light-card);
  --theme-border: var(--color-light-border);
  --theme-text: var(--color-light-text);
}

:root[data-theme='dark'] {
  --theme-bg: var(--color-dark-base);
  --theme-surface: var(--color-dark-surface);
  --theme-card: var(--color-dark-card);
  --theme-border: var(--color-dark-border);
  --theme-text: #ffffff;
}

body {
  background-color: var(--theme-bg);
  color: var(--theme-text);
}

@layer utilities {
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .glass-light {
    background: rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .text-glow {
    text-shadow: 0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.3);
  }
  .hairline-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--theme-border), transparent);
  }
  .section-padding {
    padding: 4rem 1rem;
  }
  @media (min-width: 768px) {
    .section-padding {
      padding: 6rem 2rem;
    }
  }
}

html {
  scroll-behavior: smooth;
}

::selection {
  background: var(--color-neon-blue);
  color: #000;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--theme-bg);
}
::-webkit-scrollbar-thumb {
  background: var(--color-dark-border);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-neon-blue);
}

.cursor-dot, .cursor-ring {
  position: fixed;
  pointer-events: none;
  z-index: 50;
  transform: translate(-50%, -50%);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: 0 0 10px rgba(0,212,255,0.5); }
  50% { box-shadow: 0 0 30px rgba(0,212,255,0.8); }
}

@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes typing-cursor {
  0%, 100% { border-right-color: transparent; }
  50% { border-right-color: var(--color-neon-blue); }
}

@keyframes aurora-shift {
  0% { filter: hue-rotate(0deg); transform: scale(1) translate(0, 0); }
  50% { filter: hue-rotate(180deg); transform: scale(1.1) translate(20px, -20px); }
  100% { filter: hue-rotate(360deg); transform: scale(1) translate(0, 0); }
}

.loading-preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  background: var(--theme-bg);
  z-index: 9999;
}
  `,

  'src/context/ThemeContext.tsx': `
'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    const sysPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || sysPref || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
  `,

  'src/components/ui/ScrollReveal.tsx': `
'use client';
import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  threshold = 0.1
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const getVariants = () => {
    switch (direction) {
      case 'up': return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
      case 'down': return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
      case 'left': return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
      case 'right': return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
  `,

  'src/components/ui/SectionHeading.tsx': `
'use client';
import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <ScrollReveal className={\`flex flex-col items-center justify-center text-center \${className}\`}>
      <h2 className="font-heading text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-violet mb-4 pb-1">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-80">
          {subtitle}
        </p>
      )}
      <div className="hairline-divider w-24 mx-auto" />
    </ScrollReveal>
  );
}
  `,

  'src/components/ui/ThemeToggle.tsx': `
'use client';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-white/10 transition-colors z-50 flex items-center justify-center"
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: isDark ? 0 : 180 }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle Theme"
      data-cursor="pointer"
    >
      {isDark ? <Moon size={20} className="text-neon-blue" /> : <Sun size={20} className="text-gold" />}
    </motion.button>
  );
}
  `,

  'src/components/ui/CursorFollower.tsx': `
'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CursorFollower() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    setIsTouchDevice(navigator.maxTouchPoints > 0);
    
    if (navigator.maxTouchPoints > 0) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('data-cursor') === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="cursor-dot bg-neon-blue rounded-full pointer-events-none fixed z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
      <motion.div
        className="cursor-ring border-2 rounded-full pointer-events-none fixed z-[9999]"
        animate={{
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderColor: isHovering ? 'var(--color-neon-violet)' : 'var(--color-neon-blue)',
          opacity: isHovering ? 0.8 : 0.5
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />
    </>
  );
}
  `,

  'src/components/ui/ParticleBackground.tsx': `
'use client';
import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

interface ParticleBackgroundProps {
  className?: string;
}

export default function ParticleBackground({ className = '' }: ParticleBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => {
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    
    return {
      fullScreen: { enable: false },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.5,
            },
          },
        },
      },
      particles: {
        color: {
          value: "#00d4ff",
        },
        links: {
          color: "#00d4ff",
          distance: 120,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none" as const,
          random: false,
          straight: false,
          outModes: {
            default: "bounce" as const,
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: isMobile ? 30 : 80,
        },
        opacity: {
          value: { min: 0.15, max: 0.3 },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    };
  }, []);

  if (!init) return null;

  return (
    <div className={\`absolute inset-0 pointer-events-auto z-0 \${className}\`}>
      <Particles
        id="tsparticles"
        options={options}
        className="w-full h-full"
      />
    </div>
  );
}
  `
};

for (const [relativePath, content] of Object.entries(files)) {
  const fullPath = path.join(baseDir, relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + '\\n');
  console.log('Created:', fullPath);
}
