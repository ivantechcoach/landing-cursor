"use client";

/**
 * Hero Component
 * Optimized hero section for the homepage with CTA
 * Clean and professional design with performance optimizations
 */

import Image from 'next/image';
import { memo } from 'react';
import HeroContent from './HeroContent';
import WaveTransition from './WaveTransition';

interface HeroProps {
  language?: 'ca' | 'es' | 'en';
  className?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
}

// Memoized pattern component for better performance
const PatternOverlay = memo(() => (
  <div 
    className="absolute inset-0 opacity-10" 
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}
    aria-hidden="true"
  />
));

PatternOverlay.displayName = 'PatternOverlay';

function Hero({ 
  language = 'ca', 
  className = "",
  backgroundImage = "/images/hero/main-hero.webp",
  backgroundAlt = "Professional tech coaching background"
}: HeroProps) {
  return (
    <section 
      className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 ${className}`}
      style={{ 
        minHeight: '100vh',
        height: '100vh',
        contain: 'layout style paint'
      }}
    >
      {/* Background Image and Pattern for better contrast */}
      <div className="absolute inset-0 z-0">
        {/* Hero Background Image - Optimized for LCP with Next.js Image */}
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/80 to-slate-800/85" />
        {/* Subtle pattern overlay for texture without reducing contrast */}
        <PatternOverlay />
      </div>

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
