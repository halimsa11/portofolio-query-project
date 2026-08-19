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
      className="p-2 rounded-full glass hover:bg-[var(--color-palette-medium)]/10 transition-colors z-50 flex items-center justify-center"
      whileTap={{ scale: 0.9 }}
      animate={{ rotate: isDark ? 0 : 180 }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle Theme"
      data-cursor="pointer"
    >
      {isDark ? <Moon size={20} className="text-[var(--color-palette-light)]" /> : <Sun size={20} className="text-[var(--color-palette-dark)]" />}
    </motion.button>
  );
}