/**
 * Spanish Layout Component
 * Ruta: /es
 * Layout específico para el contenido en español
 */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { generateMetadata as generateSEOMetadata, getHtmlLang } from '@/lib/seo';
import { Locale } from '@/lib/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = generateSEOMetadata('es');

interface SpanishLayoutProps {
  children: React.ReactNode;
}

export default function SpanishLayout({ children }: SpanishLayoutProps) {
  const htmlLang = getHtmlLang('es');
  
  return (
    <html lang={htmlLang} className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Hreflang tags for Spanish */}
        <link rel="alternate" hrefLang="es-ES" href="https://ivantechcoach.com/es" />
        <link rel="alternate" hrefLang="en-US" href="https://ivantechcoach.com/en" />
        <link rel="alternate" hrefLang="ca-ES" href="https://ivantechcoach.com/cat" />
        <link rel="alternate" hrefLang="x-default" href="https://ivantechcoach.com/es" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header language="es" />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer language="es" />
        </div>
      </body>
    </html>
  );
}
