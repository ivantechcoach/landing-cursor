/**
 * HeroCTA Component
 * Call-to-action section positioned after wave transition
 * Clean and professional design
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buildLocalizedLink } from '@/lib/i18n';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';
import { getHeroContent } from '@/lib/translations';

interface HeroCTAProps {
  language?: 'ca' | 'es' | 'en';
  className?: string;
}

export default function HeroCTA({ language = 'ca', className = "" }: HeroCTAProps) {
  const pathname = usePathname();
  const { getCurrentLocale } = useLocaleSwitcher();
  const currentLocale = getCurrentLocale();
  
  // Get hero content for CTA
  const heroContent = getHeroContent(currentLocale);
  
  // Build contact link
  const contactLink = buildLocalizedLink(pathname, '/contact');

  return (
    <section className={`py-16 bg-white ${className}`} aria-labelledby="hero-cta-heading">
      <div className="content-max-width container-padding text-center">
        <h2 id="hero-cta-heading" className="text-heading-2 text-gray-900 mb-6">
          {heroContent.title}
        </h2>
        <p className="text-body text-gray-600 mb-8 max-w-3xl mx-auto">
          {heroContent.subtitle}
        </p>
        
        {/* Primary CTA - Centered and prominent */}
        <div className="flex justify-center">
          <Link
            href={contactLink}
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full shadow-xl hover:shadow-2xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2 min-w-[250px]"
            aria-label={`${heroContent.cta} - ${heroContent.ariaLabels.goToContact}`}
          >
            <span className="relative z-10">{heroContent.cta}</span>
            <svg 
              className="ml-4 w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
