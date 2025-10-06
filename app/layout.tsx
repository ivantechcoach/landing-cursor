/**
 * Root Layout Component
 * This is the main layout component that wraps all pages
 * Required by Next.js 14 App Router
 */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import RootLayoutClient from '@/components/RootLayoutClient';

const inter = Inter({ subsets: ['latin'] });

// Root layout metadata - redirects to Catalan version
export const metadata: Metadata = {
  title: 'Ivan Tech Coach - Coaching Tecnològic Professional',
  description: 'Transforma la teva carrera tecnològica amb coaching personalitzat. Aprèn les habilitats més demandades del mercat i accelera el teu creixement professional amb Ivan Tech Coach.',
  metadataBase: new URL('https://ivantechcoach.com'),
  alternates: {
    canonical: '/ca',
    languages: {
      'ca-ES': '/ca',
      'es-ES': '/es',
      'en-US': '/en',
      'x-default': '/ca',
    },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ca-ES" className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Hreflang tags for root */}
        <link rel="alternate" hrefLang="ca-ES" href="https://ivantechcoach.com/ca" />
        <link rel="alternate" hrefLang="es-ES" href="https://ivantechcoach.com/es" />
        <link rel="alternate" hrefLang="en-US" href="https://ivantechcoach.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://ivantechcoach.com/ca" />
        
      </head>
      <body className={`${inter.className} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <RootLayoutClient>
            {children}
          </RootLayoutClient>
        </Suspense>
      </body>
    </html>
  );
}
