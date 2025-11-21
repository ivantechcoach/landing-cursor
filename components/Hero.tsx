"use client";

/**
 * Hero Component
 * Refactored hero section with professional gradient background
 * Clean and minimalist design with performance optimizations
 */

import { memo } from 'react';
import HeroContent from './HeroContent';
import WaveTransition from './WaveTransition';

interface HeroProps {
  language?: 'ca' | 'es' | 'en';
  className?: string;
}

function Hero({ 
  language = 'ca', 
  className = "",
}: HeroProps) {
  return (
    <section 
      className={`relative flex items-center overflow-hidden hero-section ${className}`}
      style={{ 
        contain: 'layout style paint'
      }}
      aria-label="Hero section"
    >
      {/* Professional Gradient Background */}
      <div 
        className="absolute inset-0 z-0 hero-gradient"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <HeroContent language={language} />
      </div>

      {/* Wave Transition */}
      <WaveTransition 
        fillColor="#FFFFFF"
        height={120}
      />
    </section>
  );
}

export default memo(Hero);
