/**
 * Root Layout Component
 * This is the main layout component that wraps all pages
 * Required by Next.js 14 App Router
 */
import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { Suspense } from 'react';
import { headers } from 'next/headers';
import RootLayoutClient from '@/components/RootLayoutClient';

const inter = Inter({ subsets: ['latin'] });
const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

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
  const pathname = headers().get('x-pathname') || headers().get('next-url') || '';
  const currentPath = pathname || '';
  const lang = currentPath.startsWith('/es') ? 'es-ES' : currentPath.startsWith('/en') ? 'en-US' : 'ca-ES';
  return (
    <html lang={lang} className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <title>Ivan Tech Coach</title>
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
        
        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ivan Tech Coach',
              url: 'https://ivantechcoach.com',
              logo: 'https://ivantechcoach.com/images/branding/logo.svg',
              sameAs: [
                'https://x.com/ivantechcoach',
                'https://www.linkedin.com/in/ivantechcoach'
              ],
              foundingDate: '2020',
              founder: {
                '@type': 'Person',
                name: 'Ivan Tech Coach'
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                availableLanguage: ['ca-ES', 'es-ES', 'en-US']
              }
            })
          }}
        />
        
        {/* WebSite JSON-LD with SearchAction */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Ivan Tech Coach',
              url: 'https://ivantechcoach.com',
              inLanguage: 'ca-ES',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://ivantechcoach.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
        
      </head>
      <body className={`${inter.className} ${sora.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <RootLayoutClient>
            {children}
          </RootLayoutClient>
        </Suspense>
      </body>
    </html>
  );
}
