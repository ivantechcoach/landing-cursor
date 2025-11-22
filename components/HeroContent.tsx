"use client";

/**
 * HeroContent Component
 * Refactored hero section with text on left, image/icon on right (desktop)
 * Mobile: text on top
 * Professional, accessible, and minimalist design
 */

import { memo, useMemo } from 'react';
import Image from 'next/image';
import { getHeroContent } from '@/lib/translations';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buildLocalizedLink } from '@/lib/i18n';

interface HeroContentProps {
  language?: 'ca' | 'es' | 'en';
  className?: string;
}

function HeroContent({ language = 'ca', className = "" }: HeroContentProps) {
  const { getCurrentLocale } = useLocaleSwitcher();
  const pathname = usePathname();
  
  // Memoize content to prevent unnecessary re-renders
  const currentContent = useMemo(() => {
    const currentLocale = getCurrentLocale();
    return getHeroContent(currentLocale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // Build links
  const contactLink = buildLocalizedLink(pathname, '/contact');
  const servicesLink = buildLocalizedLink(pathname, '/services');

  return (
    <div className={`content-max-width px-4 sm:px-6 lg:container-padding ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Layout: Text left, Image/Icon right (desktop) | Text top (mobile) */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 sm:gap-8 lg:gap-16">
          
          {/* Text Content - Left side (desktop) / Top (mobile) */}
          <div className="flex-1 text-center lg:text-left w-full lg:w-auto max-w-[90%] sm:max-w-[85%] lg:max-w-none mx-auto lg:mx-0">
            {/* CAMBIO 4: H1 Title - Tipografía ajustada a clamp(2rem, 4vw, 3.2rem) */}
            <h1 
              id="main-content"
              className="font-bold text-white leading-tight mb-4 sm:mb-5 lg:mb-6"
              style={{
                fontFamily: "var(--font-sora), 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif",
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                lineHeight: '1.15',
              }}
              tabIndex={-1}
            >
              {currentContent.title}
            </h1>

            {/* CAMBIO 4: Subtitle - line-height 1.5-1.7 */}
            <p 
              className="text-white/90 leading-relaxed max-w-3xl mx-auto lg:mx-0 mb-4 sm:mb-5 lg:mb-6"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif",
                fontSize: 'clamp(1.125rem, 3.5vw, 2.4rem)',
                lineHeight: '1.6',
              }}
            >
              {currentContent.subtitle}
            </p>

            {/* CAMBIO 4: Complementary Line - line-height 1.5-1.7 */}
            <p 
              className="text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 lg:mb-10"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif",
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                lineHeight: '1.7',
              }}
            >
              {currentContent.complementaryLine}
            </p>

            {/* CTAs Container - Responsive spacing */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 lg:gap-6 justify-center lg:justify-start mt-6 sm:mt-8 lg:mt-10">
              {/* Primary CTA */}
              <Link
                href={contactLink}
                className="hero-cta-primary inline-flex items-center justify-center rounded-[10px] text-white font-medium transition-transform duration-200 hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                style={{
                  backgroundColor: '#7A00F5',
                }}
                aria-label={`${currentContent.cta} - ${currentContent.ariaLabels.goToContact}`}
              >
                <span>{currentContent.cta}</span>
                <svg 
                  className="ml-3 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Secondary CTA */}
              <Link
                href={servicesLink}
                className="hero-cta-secondary inline-flex items-center justify-center rounded-[10px] font-medium transition-all duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                style={{
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: '#FFFFFF',
                }}
                aria-label={`${currentContent.secondaryCta} - ${currentContent.ariaLabels.viewAllServices}`}
              >
                <span>{currentContent.secondaryCta}</span>
              </Link>
            </div>
          </div>

          {/* CAMBIO 6: Professional Image - Sin recorte, object-fit contain */}
          <div className="flex-1 flex items-center justify-center w-full lg:w-auto mt-8 sm:mt-10 lg:mt-0 hero-image-container">
            <div className="relative w-full">
              <Image
                src="/images/hero/ivan-techcoach-hero-v2.webp"
                alt="Retrato profesional – Tech Coach & IT Specialist"
                width={450}
                height={550}
                priority
                className="rounded-xl drop-shadow-xl h-auto"
                style={{
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroContent);
