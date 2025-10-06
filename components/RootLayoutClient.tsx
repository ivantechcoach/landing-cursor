'use client';

/**
 * RootLayoutClient Component
 * Client-side layout component that handles dynamic language detection
 */

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

interface RootLayoutClientProps {
  children: React.ReactNode;
}

export default function RootLayoutClient({ children }: RootLayoutClientProps) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<'ca' | 'es' | 'en'>('ca');

  useEffect(() => {
    // Detect language from pathname
    if (pathname.startsWith('/es')) {
      setLanguage('es');
    } else if (pathname.startsWith('/en')) {
      setLanguage('en');
    } else {
      setLanguage('ca');
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header language={language} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer language={language} />
      <CookieBanner />
    </div>
  );
}
