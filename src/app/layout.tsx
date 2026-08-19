import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
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
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
