'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import { ReactLenis } from 'lenis/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ReactLenis
        root
        options={{
          lerp: 0.08,
          duration: 1.2,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }}
      >
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
