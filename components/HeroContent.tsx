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
  }, [getCurrentLocale]);


  return (
    <div className={`content-max-width container-padding py-20 lg:py-32 ${className}`}>
      <div className="max-w-5xl mx-auto text-center">
        {/* Clean Hero Content */}
        <div className="text-white">
          {/* Main Title - Clean and minimal */}
          {/* FIX: H1 overflow on mobile */}
          <h1 
            id="main-content"
            className="text-display mb-12 text-white font-bold"
            tabIndex={-1}
            style={{
              lineHeight: '1.2',
              fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
              wordBreak: 'break-word',
              padding: '0 1rem',
              textAlign: 'center'
            }}
          >
            {currentContent.title}
          </h1>

          {/* Subtitle - Clean and spacious */}
          <p className="text-body-large text-white/95 mb-16 max-w-5xl mx-auto font-normal leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

      </div>
    </div>
  );
}

export default memo(HeroContent);






