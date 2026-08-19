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
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
