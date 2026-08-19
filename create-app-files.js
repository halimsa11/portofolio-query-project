const fs = require('fs');
const path = require('path');

const root = 'd:/Portofolio-project-query';

function createFile(filePath, content) {
    const fullPath = path.join(root, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
    console.log(`Created: ${filePath}`);
}

const files = {
  'src/app/layout.tsx': `
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Arya Pratama | Portfolio',
  description: 'Full-Stack Developer & UI/UX Designer - Mengubah ide menjadi pengalaman digital yang luar biasa',
  keywords: ['portfolio', 'developer', 'web developer', 'full-stack', 'ui/ux', 'designer'],
  authors: [{ name: 'Arya Pratama' }],
  openGraph: {
    title: 'Arya Pratama | Portfolio',
    description: 'Full-Stack Developer & UI/UX Designer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={\`\${inter.variable} \${spaceGrotesk.variable} font-sans antialiased\`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
`,
  'src/app/providers.tsx': `
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
`,
  'src/app/page.tsx': `
'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Preloader from '@/components/layout/Preloader';
import CursorFollower from '@/components/ui/CursorFollower';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Portfolio from '@/components/sections/Portfolio';
import Experience from '@/components/sections/Experience';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <CursorFollower />
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
`,
  'public/resume.pdf': \`\`
};

for (const [filePath, content] of Object.entries(files)) {
    createFile(filePath, content);
}
