# Landing Page Refactor - Architecture Documentation

## Overview

This document outlines the refactored architecture of the Ivan Tech Coach landing page, focusing on componentization, design system implementation, accessibility, i18n, and performance optimization.

## Architecture Principles

### 1. Component-Based Architecture
- **Separation of Concerns**: Each component has a single responsibility
- **Reusability**: Components are designed to be reusable across different pages
- **Composition**: Complex UI is built by composing smaller components
- **Props Interface**: Clear, typed interfaces for component communication

### 2. Design System
- **Design Tokens**: Centralized design values in `lib/design-tokens.ts`
- **Consistent Spacing**: 8px base unit for vertical rhythm
- **Typography Scale**: Optimized for 40+/60+ readability
- **Color System**: AA+ compliant contrast ratios
- **Component Tokens**: Reusable component styles

### 3. Accessibility First
- **WCAG 2.1 AA Compliance**: All components meet accessibility standards
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Logical tab order and focus trapping

### 4. Internationalization (i18n)
- **Centralized Translations**: All text content in `lib/translations.ts`
- **Locale Preservation**: URLs and navigation maintain language context
- **Dynamic Content**: Components adapt to current locale
- **SEO Optimization**: Proper meta tags and structured data per language

## Component Structure

### Core Components

#### 1. Hero (`components/Hero.tsx`)
- **Purpose**: Encapsulates hero section with background
- **Props**: `children`, `className`, `backgroundImage`, `backgroundAlt`
- **Features**: 
  - Optimized background image loading
  - Responsive design
  - Accessibility support

#### 2. HeroContent (`components/HeroContent.tsx`)
- **Purpose**: Main content area for hero section
- **Props**: `language`, `className`
- **Features**:
  - Dynamic content based on locale
  - CTA buttons with proper focus states
  - Trust indicators
  - Responsive layout

#### 3. Header (`components/Header.tsx`)
- **Purpose**: Site navigation and language switcher
- **Props**: `language`
- **Features**:
  - Skip link for accessibility
  - Mobile-responsive navigation
  - Language switcher with focus management
  - ARIA labels and roles

#### 4. Footer (`components/Footer.tsx`)
- **Purpose**: Site footer with links and social media
- **Props**: `language`
- **Features**:
  - Multi-language content
  - Social media links with proper labels
  - Contact information
  - Accessibility compliance

### Section Components

#### 1. WhyChooseSection (`components/sections/WhyChooseSection.tsx`)
- **Purpose**: Explains why to choose Ivan Tech Coach
- **Props**: `language`, `className`
- **Features**:
  - Multi-language support
  - Icon-based feature presentation
  - Responsive grid layout
  - Focus management

#### 2. FinalCTASection (`components/sections/FinalCTASection.tsx`)
- **Purpose**: Final call-to-action section
- **Props**: `language`, `className`
- **Features**:
  - Localized content
  - High-contrast CTAs
  - Accessibility compliance
  - Responsive design

## Design System

### Design Tokens (`lib/design-tokens.ts`)

#### Colors
- **Primary**: Blue scale (50-950)
- **Secondary**: Green scale for CTAs
- **Neutral**: Gray scale for text and backgrounds
- **Semantic**: Success, warning, error, info colors
- **Accessibility**: AA+ compliant contrast ratios

#### Typography
- **Font Families**: Inter (sans), JetBrains Mono (mono)
- **Font Sizes**: Responsive scale from 12px to 72px
- **Line Heights**: Optimized for 40+/60+ readability
- **Font Weights**: 400-800 range

#### Spacing
- **Base Unit**: 8px for consistent vertical rhythm
- **Scale**: 0, 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px
- **Utilities**: Section padding, container padding, content max-width

#### Components
- **Buttons**: Primary, secondary with focus states
- **Cards**: Consistent styling with hover effects
- **Inputs**: Form elements with validation states
- **Focus**: AA+ compliant focus indicators

### CSS Architecture

#### Utility Classes
- **Layout**: `content-max-width`, `container-padding`, `section-padding`
- **Typography**: `text-display`, `text-heading-1`, `text-body-large`
- **Focus**: `focus-visible-ring`, `header-focus`, `hero-cta-focus`
- **Accessibility**: `skip-link`, `sr-only`

#### Component Classes
- **Responsive Design**: Mobile-first approach with breakpoints
- **Print Styles**: Optimized for printing

## Internationalization (i18n)

### Translation System (`lib/translations.ts`)

#### Structure
```typescript
interface Translations {
  navigation: NavigationItem[];
  ui: UITranslations;
  hero: HeroContent;
}
```

#### Supported Languages
- **Spanish (es)**: Default language
- **English (en)**: Full translation
- **Catalan (cat)**: Full translation

#### Features
- **Centralized Content**: All text in one place
- **Type Safety**: TypeScript interfaces for all translations
- **Dynamic Loading**: Content updates based on locale
- **SEO Integration**: Proper meta tags per language

### Locale Management (`lib/i18n.ts`)

#### Functions
- `buildLocalizedLink()`: Creates localized URLs
- `getLocaleDisplayName()`: Gets display name for locale
- `getLocaleShortCode()`: Gets short code for locale

#### Features
- **URL Preservation**: Maintains language in URLs
- **Fallback Handling**: Graceful fallback to Spanish
- **SEO Optimization**: Proper canonical URLs

## Performance Optimization

### Image Optimization (`lib/performance.ts`)

#### Image Configurations
- **Hero Images**: High priority, 90% quality, 100vw sizes
- **Service Images**: Medium priority, 80% quality, responsive sizes
- **Testimonial Images**: Low priority, 75% quality, smaller sizes
- **Logo Images**: High priority, 100% quality, fixed 40px size

#### Features
- **Next.js Image**: Automatic optimization and lazy loading
- **WebP Format**: Modern image format with fallbacks
- **Responsive Images**: Proper sizing for different viewports
- **Priority Loading**: Critical images loaded first

### Critical CSS
- **Inlined Styles**: Critical styles inlined for faster rendering
- **Component Classes**: Reusable utility classes
- **Responsive Design**: Mobile-first CSS approach
- **Print Optimization**: Print-specific styles

### Bundle Optimization
- **Code Splitting**: Components loaded on demand
- **Tree Shaking**: Unused code eliminated
- **Minification**: CSS and JS minified for production
- **Compression**: Gzip/Brotli compression enabled

## Accessibility Implementation

### WCAG 2.1 AA Compliance

#### Keyboard Navigation
- **Tab Order**: Logical tab sequence
- **Focus Indicators**: Visible focus states
- **Skip Links**: Quick navigation to main content
- **Focus Trapping**: Modal and menu focus management

#### Screen Reader Support
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Descriptive labels for interactive elements
- **Role Attributes**: Proper roles for custom components
- **Live Regions**: Dynamic content announcements

#### Visual Accessibility
- **Color Contrast**: AA+ compliant contrast ratios
- **Text Size**: Minimum 16px base font size
- **Line Height**: Comfortable reading line height
- **Focus States**: High contrast focus indicators

### Testing
- **Keyboard Testing**: Full keyboard navigation testing
- **Screen Reader Testing**: NVDA, JAWS, VoiceOver compatibility
- **Color Contrast**: Automated contrast ratio testing
- **Focus Management**: Focus order and visibility testing

## Maintenance Guidelines

### Adding New Sections

1. **Create Component**: Add new section component in `components/sections/`
2. **Add Translations**: Update `lib/translations.ts` with new content
3. **Update Pages**: Add component to language-specific pages
4. **Test Accessibility**: Ensure keyboard navigation and screen reader support
5. **Test Performance**: Verify no performance regression

### Adding New Languages

1. **Add Locale**: Update `lib/i18n.ts` with new locale
2. **Add Translations**: Create translation object in `lib/translations.ts`
3. **Create Pages**: Add language-specific pages in `app/[locale]/`
4. **Update SEO**: Add language-specific meta tags
5. **Test i18n**: Verify all content translates correctly

### Design System Updates

1. **Update Tokens**: Modify `lib/design-tokens.ts`
2. **Update CSS**: Update utility classes in `app/globals.css`
3. **Update Components**: Apply new tokens to components
4. **Test Consistency**: Verify design consistency across components
5. **Update Documentation**: Update this documentation

## Performance Monitoring

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.8s

### Performance Budgets
- **Initial JS**: < 250KB
- **Initial CSS**: < 50KB
- **Initial Images**: < 1MB
- **Hero Image**: < 200KB
- **Service Images**: < 100KB each

### Monitoring Tools
- **Lighthouse**: Automated performance testing
- **WebPageTest**: Detailed performance analysis
- **Chrome DevTools**: Real-time performance monitoring
- **Vercel Analytics**: Production performance tracking

## Quality Assurance

### Testing Checklist

#### Accessibility
- [ ] Keyboard navigation works on all interactive elements
- [ ] Screen reader announces content correctly
- [ ] Focus indicators are visible and clear
- [ ] Color contrast meets AA+ standards
- [ ] Skip links function properly

#### Internationalization
- [ ] All content translates correctly
- [ ] URLs maintain language context
- [ ] Meta tags are language-specific
- [ ] Navigation preserves locale
- [ ] Forms work in all languages

#### Performance
- [ ] Core Web Vitals meet targets
- [ ] Images load efficiently
- [ ] CSS is optimized
- [ ] JavaScript is minified
- [ ] No layout shift occurs

#### Cross-Browser
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

#### Responsive Design
- [ ] Mobile (320px+)
- [ ] Tablet (768px+)
- [ ] Desktop (1024px+)
- [ ] Large desktop (1440px+)

## Conclusion

This refactored architecture provides a solid foundation for maintaining and extending the Ivan Tech Coach landing page. The component-based approach, design system, and accessibility-first mindset ensure the site remains performant, accessible, and maintainable as it grows.

For questions or updates to this documentation, please refer to the development team or update this file accordingly.
