/**
 * Design Tokens System
 * Centralized design system for consistent spacing, typography, colors, and components
 * Ensures AA+ accessibility compliance and maintainable design patterns
 */

// Color System - AA+ compliant contrast ratios
export const colors = {
  // Primary Brand Colors
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  
  // Secondary Brand Colors (Green for CTAs)
  secondary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },
  
  // CTA Green (High contrast for accessibility)
  cta: {
    primary: '#016A3A',    // Dark green for white text (AA+)
    primaryHover: '#014829', // Darker for hover state
    secondary: '#FFFFFF',   // White for dark backgrounds
    secondaryHover: '#F8FAFC', // Light gray for hover
    // Hero specific CTA colors
    hero: {
      primary: '#016A3A',    // Dark green for white text (AA+)
      primaryHover: '#014829', // Darker for hover state
      secondary: '#FFFFFF',   // White for dark backgrounds
      secondaryHover: '#F8FAFC', // Light gray for hover
    },
  },
  
  // Neutral Colors
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  
  // Semantic Colors
  semantic: {
    success: '#16a34a',
    warning: '#d97706',
    error: '#dc2626',
    info: '#2563eb',
  },
  
  // Background Colors
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    dark: '#0f172a',
    hero: '#1e293b',
  },
  
  // Text Colors
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    tertiary: '#64748b',
    inverse: '#ffffff',
    muted: '#94a3b8',
  },
} as const;

// Typography Scale - Optimized for 40+/60+ readability
export const typography = {
  // Font Families
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Consolas', 'monospace'],
  },
  
  // Font Sizes - Responsive scale
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],      // 12px
    sm: ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],     // 14px
    base: ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],             // 16px - minimum readable
    lg: ['1.125rem', { lineHeight: '1.6', letterSpacing: '0' }],           // 18px
    xl: ['1.25rem', { lineHeight: '1.6', letterSpacing: '0' }],            // 20px
    '2xl': ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.025em' }],   // 24px
    '3xl': ['1.875rem', { lineHeight: '1.4', letterSpacing: '-0.025em' }], // 30px
    '4xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],  // 36px
    '5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],     // 48px
    '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],  // 60px
    '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.025em' }],     // 72px
  },
  
  // Font Weights
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  
  // Line Heights - Comfortable for 40+/60+
  lineHeight: {
    tight: '1.1',
    snug: '1.3',
    normal: '1.5',
    relaxed: '1.6',
    loose: '1.8',
  },
} as const;

// Spacing Scale - 8px base unit for consistent vertical rhythm
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

// Border Radius Scale
export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// Shadow Scale
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Component Tokens
export const components = {
  // Button Styles
  button: {
    primary: {
      base: 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-lg shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      background: colors.cta.primary,
      hover: colors.cta.primaryHover,
      focus: 'focus:ring-green-500',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    secondary: {
      base: 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
      background: 'bg-transparent',
      border: 'border-white',
      text: 'text-white',
      hover: 'hover:bg-white hover:text-gray-900',
      focus: 'focus:ring-white',
    },
    // Hero specific button styles
    hero: {
      primary: {
        base: 'group relative inline-flex items-center justify-center px-16 py-8 text-2xl sm:text-3xl font-bold text-white rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 hero-cta-focus',
        background: colors.cta.hero.primary,
        hover: colors.cta.hero.primaryHover,
        focus: 'hero-cta-focus',
        minHeight: '72px',
      },
      secondary: {
        base: 'inline-flex items-center px-12 py-8 text-2xl sm:text-3xl font-semibold text-white underline decoration-4 underline-offset-6 hover:decoration-white/80 hover:text-white/90 transition-all duration-300 hero-secondary-cta-focus rounded-2xl',
        text: 'text-white',
        hover: 'hover:decoration-white/80 hover:text-white/90',
        focus: 'hero-secondary-cta-focus',
        minHeight: '72px',
      },
    },
  },
  
  // Card Styles
  card: {
    base: 'bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden',
    hover: 'hover:shadow-lg transition-shadow duration-300',
    padding: 'p-6',
  },
  
  // Input Styles
  input: {
    base: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200',
    error: 'border-red-500 focus:ring-red-500',
  },
  
  // Focus Styles - AA+ compliant
  focus: {
    ring: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    ringDark: 'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900',
    ringCTA: 'focus:outline-none focus:ring-4 focus:ring-green-500/50 focus:ring-offset-2 focus:ring-offset-gray-900',
  },
} as const;

// Animation Tokens
export const animations = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;

// Accessibility Tokens
export const accessibility = {
  // Minimum touch target size (44px)
  touchTarget: 'min-h-[44px] min-w-[44px]',
  
  // Focus indicators
  focusVisible: 'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
  
  // Screen reader only text
  srOnly: 'sr-only',
  
  // Skip links
  skipLink: 'absolute -top-full left-4 z-[60] bg-blue-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-200 focus:top-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2',
} as const;

// Export type for TypeScript
export type ColorScale = typeof colors;
export type TypographyScale = typeof typography;
export type SpacingScale = typeof spacing;
export type ComponentTokens = typeof components;
