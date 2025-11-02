"use client";

/**
 * HeroContent Component
 * Optimized main content area for the hero section with CTAs and trust indicators
 * Performance optimized with memoization and reduced re-renders
 */

import { memo, useMemo } from 'react';
import { getHeroContent } from '@/lib/translations';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';

interface HeroContentProps {
  language?: 'ca' | 'es' | 'en';
  className?: string;
}

function HeroContent({ language = 'ca', className = "" }: HeroContentProps) {
  const { getCurrentLocale } = useLocaleSwitcher();
  
  // Memoize content to prevent unnecessary re-renders
  const currentContent = useMemo(() => {
    const currentLocale = getCurrentLocale();
    return getHeroContent(currentLocale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]); // Use language prop instead of getCurrentLocale function


  return (
    <div className={`content-max-width container-padding py-16 lg:py-28 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Clean Hero Content */}
        <div className="text-white">
          {/* Main Title - Clean and minimal */}
          {/* FIX: H1 overflow on mobile */}
          <h1 
            id="main-content"
            className="text-display mb-8 md:mb-10 text-white font-bold"
            tabIndex={-1}
            style={{
              lineHeight: '1.15',
              fontSize: 'clamp(2rem, 5.5vw, 3rem)',
              wordBreak: 'break-word',
              padding: '0 0.5rem',
              textAlign: 'center'
            }}
          >
            {currentContent.title}
          </h1>

          {/* Subtitle - Clean and spacious */}
          <p className="text-body-large text-white/90 mb-10 md:mb-16 max-w-3xl mx-auto font-normal leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

      </div>
    </div>
  );
}

export default memo(HeroContent);






