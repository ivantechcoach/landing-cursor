/**
 * Performance Optimization Utilities
 * Centralized performance helpers for images, CSS, and resource loading
 */

// Image optimization configurations
export const imageConfig = {
  // Hero images - high priority, full quality
  hero: {
    priority: true,
    quality: 90,
    sizes: '100vw',
    placeholder: 'blur' as const,
  },
  
  // Service images - medium priority
  service: {
    priority: false,
    quality: 80,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    placeholder: 'blur' as const,
  },
  
  // Testimonial images - low priority
  testimonial: {
    priority: false,
    quality: 75,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw',
    placeholder: 'blur' as const,
  },
  
  // Logo images - high priority, small size
  logo: {
    priority: true,
    quality: 100,
    sizes: '40px',
    placeholder: 'empty' as const,
  },
} as const;

// Critical CSS classes that should be inlined
export const criticalCSS = [
  // Layout classes
  'min-h-screen',
  'h-screen',
  'flex',
  'items-center',
  'justify-center',
  'relative',
  'absolute',
  'inset-0',
  'z-10',
  'z-50',
  
  // Typography classes
  'text-display',
  'text-heading-1',
  'text-heading-2',
  'text-heading-3',
  'text-body-large',
  'text-body',
  
  // Spacing classes
  'section-padding',
  'container-padding',
  'content-max-width',
  
  // Color classes
  'bg-white',
  'bg-gray-900',
  'text-white',
  'text-gray-900',
  'text-gray-600',
  
  // Focus classes
  'focus-visible-ring',
  'header-focus',
  'hero-cta-focus',
  'skip-link',
] as const;

// Preload critical resources
export const criticalResources = [
  {
    href: '/images/hero/main-hero.webp',
    as: 'image',
    type: 'image/webp',
  },
  {
    href: '/images/branding/logo.svg',
    as: 'image',
    type: 'image/svg+xml',
  },
] as const;

// Resource hints for performance
export const resourceHints = {
  // Preconnect to external domains
  preconnect: [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ],
  
  // DNS prefetch for external resources
  dnsPrefetch: [
    'https://www.google-analytics.com',
  ],
} as const;

// Performance budgets (in bytes)
export const performanceBudgets = {
  // Initial page load
  initialJS: 250000, // 250KB
  initialCSS: 50000,  // 50KB
  initialImages: 1000000, // 1MB
  
  // Individual image sizes
  heroImage: 200000, // 200KB
  serviceImage: 100000, // 100KB
  testimonialImage: 75000, // 75KB
  
  // Font sizes
  fontDisplay: 50000, // 50KB
  fontBody: 30000, // 30KB
} as const;

// Lazy loading configuration
export const lazyLoadingConfig = {
  // Intersection Observer options
  rootMargin: '50px',
  threshold: 0.1,
  
  // Images to lazy load (not in viewport initially)
  lazyImages: [
    'service',
    'testimonial',
    'about',
    'portfolio',
  ],
  
  // Images to load immediately (above the fold)
  eagerImages: [
    'hero',
    'logo',
  ],
} as const;

// Critical path optimization
export const criticalPath = {
  // Components that should be loaded first
  critical: [
    'Header',
    'Hero',
    'HeroContent',
  ],
  
  // Components that can be loaded later
  nonCritical: [
    'Testimonials',
    'ContentPreview',
    'WhyChooseSection',
    'FinalCTASection',
  ],
} as const;

// Bundle splitting strategy
export const bundleStrategy = {
  // Core bundle (loaded immediately)
  core: [
    'react',
    'react-dom',
    'next',
    'next/image',
    'next/link',
    'next/navigation',
  ],
  
  // Feature bundles (loaded on demand)
  features: {
    animations: ['framer-motion'],
    charts: ['recharts'],
    forms: ['react-hook-form'],
  },
} as const;

// Performance monitoring
export const performanceMetrics = {
  // Core Web Vitals targets
  targets: {
    LCP: 2500, // 2.5s
    FID: 100,  // 100ms
    CLS: 0.1,  // 0.1
    FCP: 1800, // 1.8s
    TTI: 3800, // 3.8s
  },
  
  // Performance budgets
  budgets: {
    totalBlockingTime: 300, // 300ms
    speedIndex: 3400, // 3.4s
    firstContentfulPaint: 1800, // 1.8s
  },
} as const;

// Image optimization helpers
export function getImageConfig(type: keyof typeof imageConfig) {
  return imageConfig[type];
}

export function shouldPreloadImage(src: string): boolean {
  return criticalResources.some(resource => resource.href === src);
}

export function getImageSizes(breakpoints: number[]): string {
  return breakpoints
    .map((bp, index) => {
      const nextBp = breakpoints[index + 1];
      const size = nextBp ? `${bp}px` : '100vw';
      const condition = nextBp ? `(max-width: ${nextBp - 1}px)` : `(min-width: ${bp}px)`;
      return `${condition} ${size}`;
    })
    .join(', ');
}

// Performance monitoring helpers
export function isPerformanceBudgetExceeded(
  metric: keyof typeof performanceBudgets,
  actualSize: number
): boolean {
  return actualSize > performanceBudgets[metric];
}

export function getPerformanceScore(metrics: Record<string, number>): number {
  const scores = Object.entries(metrics).map(([metric, value]) => {
    const target = performanceMetrics.targets[metric as keyof typeof performanceMetrics.targets];
    if (!target) return 100;
    
    // Simple scoring: 100 - (actual / target) * 100
    return Math.max(0, 100 - (value / target) * 100);
  });
  
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}
