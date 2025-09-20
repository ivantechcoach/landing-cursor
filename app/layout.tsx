/**
 * Root Layout Component
 * This is the main layout component that wraps all pages
 * Required by Next.js 14 App Router
 */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Ivan Tech Coach - Coaching Tecnológico Profesional',
    template: '%s | Ivan Tech Coach',
  },
  description: 'Transforma tu carrera tecnológica con coaching personalizado. Aprende las habilidades más demandadas del mercado y acelera tu crecimiento profesional con Ivan Tech Coach.',
  keywords: ['tech coach', 'coaching tecnológico', 'desarrollo profesional', 'carrera tecnológica', 'mentoring', 'programación', 'desarrollo web', 'devops', 'liderazgo técnico'],
  authors: [{ name: 'Ivan Tech Coach' }],
  creator: 'Ivan Tech Coach',
  publisher: 'Ivan Tech Coach',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ivantechcoach.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es',
      'en-US': '/en',
      'ca-ES': '/cat',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ivantechcoach.com',
    title: 'Ivan Tech Coach - Coaching Tecnológico Profesional',
    description: 'Transforma tu carrera tecnológica con coaching personalizado. Aprende las habilidades más demandadas del mercado y acelera tu crecimiento profesional.',
    siteName: 'Ivan Tech Coach',
    images: [
      {
        url: '/images/branding/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Ivan Tech Coach - Coaching Tecnológico Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivan Tech Coach - Coaching Tecnológico Profesional',
    description: 'Transforma tu carrera tecnológica con coaching personalizado. Aprende las habilidades más demandadas del mercado.',
    images: ['/images/branding/og-cover.jpg'],
    creator: '@ivantechcoach',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-google-verification-code',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale?: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  // Determine language from URL or default to Spanish
  const locale = params?.locale || 'es';
  
  // Map locale to proper HTML lang attribute
  const htmlLang = {
    'es': 'es-ES',
    'en': 'en-US', 
    'cat': 'ca-ES'
  }[locale] || 'es-ES';
  
  return (
    <html lang={htmlLang} className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header language={locale as 'es' | 'en' | 'cat'} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer language={locale as 'es' | 'en' | 'cat'} />
        </div>
      </body>
    </html>
  );
}
