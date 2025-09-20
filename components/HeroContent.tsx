"use client";

/**
 * HeroContent Component
 * Optimized main content area for the hero section with CTAs and trust indicators
 * Performance optimized with memoization and reduced re-renders
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo, useMemo } from 'react';
import { buildLocalizedLink } from '@/lib/i18n';
import { getHeroContent } from '@/lib/translations';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';
import { components } from '@/lib/design-tokens';

interface HeroContentProps {
  language?: 'es' | 'en' | 'cat';
  className?: string;
}

function HeroContent({ language = 'es', className = "" }: HeroContentProps) {
  const pathname = usePathname();
  const { getCurrentLocale } = useLocaleSwitcher();
  
  // Memoize content to prevent unnecessary re-renders
  const currentContent = useMemo(() => {
    const currentLocale = getCurrentLocale();
    return getHeroContent(currentLocale);
  }, [getCurrentLocale]);

  // Memoize links to prevent unnecessary re-renders
  const contactLink = useMemo(() => buildLocalizedLink(pathname, '/contact'), [pathname]);
  const servicesLink = useMemo(() => buildLocalizedLink(pathname, '/services'), [pathname]);

  return (
    <div className={`content-max-width container-padding py-20 lg:py-32 ${className}`}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Left Column - Text Content */}
        <div className="text-white">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-6 py-4 rounded-xl bg-white/15 backdrop-blur-sm border border-white/25 mb-12 shadow-lg">
            <span className="text-lg font-semibold text-white">{currentContent.trustBadge}</span>
          </div>

          {/* Main Title - Clear and direct with generous spacing for 40+/60+ */}
          <h1 
            id="main-content"
            className="text-display mb-16 text-white font-bold"
            tabIndex={-1}
            style={{ lineHeight: '1.1' }}
          >
            {currentContent.title}
          </h1>

          {/* Subtitle - Larger font, better line height for 40+/60+ */}
          <p className="text-body-large text-white/95 mb-20 max-w-5xl mx-auto font-normal leading-relaxed">
            {currentContent.subtitle}
          </p>

          {/* CTA Buttons - High contrast for accessibility and 40+/60+ readability */}
          <div className="flex flex-col sm:flex-row gap-10 mb-24">
            {/* Primary CTA - Using design tokens for consistency */}
            <Link
              href={contactLink}
              className={components.button.hero.primary.base}
              style={{ 
                backgroundColor: components.button.hero.primary.background,
                color: '#FFFFFF',
                border: `3px solid ${components.button.hero.primary.background}`,
                minHeight: components.button.hero.primary.minHeight
              }}
              aria-label={`${currentContent.cta} - ${currentContent.ariaLabels.goToContact}`}
            >
              <span className="relative z-10">{currentContent.cta}</span>
              <svg 
                className="ml-6 w-8 h-8 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Secondary CTA - Underlined link for accessibility */}
            <Link
              href={servicesLink}
              className={components.button.hero.secondary.base}
              style={{ 
                textDecorationColor: '#FFFFFF',
                minHeight: components.button.hero.secondary.minHeight
              }}
              aria-label={`${currentContent.secondaryCta} - ${currentContent.ariaLabels.viewAllServices}`}
            >
              {currentContent.secondaryCta}
              <svg 
                className="ml-6 w-7 h-7" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default memo(HeroContent);






