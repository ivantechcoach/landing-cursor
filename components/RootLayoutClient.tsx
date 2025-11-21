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
        const scrollY = parseInt(saved, 10);
        // Use requestAnimationFrame to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo({ top: scrollY, behavior: 'instant' as ScrollBehavior });
          // Remove after successful restoration with a small delay to handle multiple calls
          setTimeout(() => {
            sessionStorage.removeItem('scrollY');
          }, 100);
        });
      }
    };
    
    // Restore scroll after DOM is ready (multiple attempts for reliability)
    const timeoutId = setTimeout(restore, 0);
    requestAnimationFrame(() => {
      restore();
      // Also try after a short delay in case content loads asynchronously
      setTimeout(restore, 50);
    });
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:px-4 focus:py-2 rounded"
      >
        Skip to content
      </a>
      <Header language={language} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer language={language} />
      <CookieBanner />
    </div>
  );
}
