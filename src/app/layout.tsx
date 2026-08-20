import type { Metadata } from 'next';
import { Figtree, Fraunces, Outfit, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Halim Samodra | Portfolio',
  description: 'Full-Stack Developer — Membangun solusi web yang elegan dan fungsional',
  keywords: ['portfolio', 'developer', 'web developer', 'full-stack', 'halim samodra'],
  authors: [{ name: 'Halim Samodra' }],
  openGraph: {
    title: 'Halim Samodra | Portfolio',
    description: 'Full-Stack Developer',
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
      <body
        className={`${figtree.variable} ${fraunces.variable} ${outfit.variable} ${plexMono.variable} font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
