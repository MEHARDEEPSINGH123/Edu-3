import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B132B',
};

export const metadata: Metadata = {
  title: 'CodeForge Institute Singapore | Future Skills & Career Transformation Platform',
  description:
    "Singapore's future-focused learning institution. Build skills for industries that don't exist yet. SSG & IBF accredited programs in Autonomous AI, Distributed Cloud, Cybersecurity, and Design Systems.",
  keywords: [
    'CodeForge Institute',
    'Singapore tech education',
    'AI Engineer Singapore',
    'SkillsFuture tech courses',
    'Cloud Architect Singapore',
    'Cybersecurity training Singapore',
    'CPE registered',
  ],
  authors: [{ name: 'CodeForge Institute Singapore' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${cormorantGaramond.variable} ${inter.variable}`}
    >
      <body className="font-sans antialiased bg-[#FAF9F7] text-[#111827] selection:bg-[#0B132B] selection:text-[#FAF9F7]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
