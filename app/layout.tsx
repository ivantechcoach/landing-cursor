/**
 * Root Layout Component
 * This is the main layout component that wraps all pages
 */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Mi Portfolio - Desarrollador Full Stack',
    template: '%s | Mi Portfolio',
  },
  description: 'Desarrollador Full Stack especializado en crear experiencias digitales excepcionales. Portfolio personal con proyectos, servicios y blog.',
  keywords: ['desarrollador', 'full stack', 'portfolio', 'react', 'nextjs', 'typescript', 'javascript'],
  authors: [{ name: 'Tu Nombre' }],
  creator: 'Tu Nombre',
  publisher: 'Tu Nombre',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tu-dominio.com'),
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
    url: 'https://tu-dominio.com',
    title: 'Mi Portfolio - Desarrollador Full Stack',
    description: 'Desarrollador Full Stack especializado en crear experiencias digitales excepcionales.',
    siteName: 'Mi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mi Portfolio - Desarrollador Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mi Portfolio - Desarrollador Full Stack',
    description: 'Desarrollador Full Stack especializado en crear experiencias digitales excepcionales.',
    images: ['/og-image.jpg'],
    creator: '@tu_usuario',
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
  
  return (
    <html lang={locale} className="scroll-smooth">
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
          <main className="flex-1">
            {children}
          </main>
          <Footer language={locale as 'es' | 'en' | 'cat'} />
        </div>
      </body>
    </html>
  );
}
