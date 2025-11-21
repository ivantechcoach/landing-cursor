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

export default function HeroCTA({ className = "" }: HeroCTAProps) {
  const pathname = usePathname();
  const { getCurrentLocale } = useLocaleSwitcher();
  const currentLocale = getCurrentLocale();
  
  // Get hero content for CTA
  const heroContent = getHeroContent(currentLocale);
  
  // Build contact link
  const contactLink = buildLocalizedLink(pathname, '/contact');

  return (
    <section className={`bg-white ${className}`} 
             style={{
               paddingTop: 'clamp(24px, 6vw, 64px)',
               paddingBottom: 'clamp(24px, 6vw, 64px)'
             }}
             aria-labelledby="hero-cta-heading">
      <div className="content-max-width container-padding text-center">
        <h2 id="hero-cta-heading" 
            className="text-gray-900 mb-4 sm:mb-5 lg:mb-6 font-bold"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
              lineHeight: '1.3',
            }}>
          {heroContent.title}
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-7 lg:mb-8 max-w-2xl md:max-w-3xl mx-auto"
           style={{
             fontSize: 'clamp(1rem, 2vw, 1.125rem)',
             lineHeight: '1.6',
           }}>
          {heroContent.subtitle}
        </p>
        
        {/* Primary CTA - Centered and prominent (single source of truth) - Responsive */}
        <div className="flex justify-center">
          <Link
            href={contactLink}
            className="btn-primary hero-cta-focus inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-[10px] font-medium min-w-[200px] sm:min-w-[240px] md:min-w-[260px] transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2"
            aria-label={`${heroContent.cta} - ${heroContent.ariaLabels.goToContact}`}
          >
            <span className="relative z-10">{heroContent.cta}</span>
            <svg 
              className="ml-3 sm:ml-4 w-5 h-5 sm:w-6 sm:h-6" 
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
