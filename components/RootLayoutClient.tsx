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
    // FIX Navbar scroll jump: ensure body has top padding to account for fixed header
    document.body.classList.add('navbar-fixed');
    return () => {
      document.body.classList.remove('navbar-fixed');
    };
  }, []);

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

  useEffect(() => {
    // Set <html lang> attribute dynamically for SEO
    const map: Record<string, string> = {
      es: 'es-ES',
      en: 'en-US',
      ca: 'ca-ES',
    };
    const langCode = map[language] || 'ca-ES';
    if (document?.documentElement) {
      document.documentElement.lang = langCode;
    }
  }, [language]);

  useEffect(() => {
    // Preserve scroll position after locale change (robust)
    const restore = () => {
      const saved = sessionStorage.getItem('scrollY');
      if (saved !== null) {
        window.scrollTo({ top: parseInt(saved, 10), behavior: 'instant' as ScrollBehavior });
        sessionStorage.removeItem('scrollY');
      }
    };
    // Attempt on load and on route/locale change
    window.addEventListener('load', restore);
    restore();
    return () => {
      window.removeEventListener('load', restore);
    };
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
