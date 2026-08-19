"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

interface PreloaderProps {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export default function Preloader({ isLoading, setIsLoading }: PreloaderProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 600);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [setIsLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--theme-bg)]"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-3"
            >
              <Code2 size={56} className="text-[var(--color-palette-medium)]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl font-bold text-gradient mb-8"
            >
              {personalInfo.name}
            </motion.div>
            
            <div className="w-64 h-1 bg-[var(--theme-surface)] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[var(--color-palette-medium)] to-[var(--color-palette-dark)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}