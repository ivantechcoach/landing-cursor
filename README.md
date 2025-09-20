# 🚀 Ivan Tech Coach - Portfolio Profesional

**Coaching Tecnológico Profesional** - Transforma tu carrera tecnológica con coaching personalizado.

## ✨ Características Principales

- **🌐 Multilingüe**: Español, Inglés y Catalán
- **♿ Accesibilidad**: WCAG 2.1 AA compliant
- **📱 Responsive**: Mobile-first design
- **⚡ Performance**: Core Web Vitals optimizados
- **🔍 SEO**: Meta tags y sitemap automático
- **🎨 Moderno**: Tailwind CSS + Next.js 14
- **🚀 Optimizado**: Sin efectos innecesarios, rendimiento máximo

## 📁 Architecture

### Component Structure

```
components/
├── Header.tsx              # Navigation with language switcher
├── Hero.tsx                # Main hero section (refactored)
├── HeroContent.tsx         # Hero content with CTAs
├── Footer.tsx              # Site footer
├── Testimonials.tsx        # Customer testimonials
└── sections/
    ├── FinalCTASection.tsx # Call-to-action section
    └── WhyChooseSection.tsx # Why choose us section
```

### Design System

```
lib/
├── design-tokens.ts        # Centralized design tokens
├── i18n.ts                # Internationalization utilities
├── translations.ts         # Translation dictionaries
├── seo.ts                 # SEO metadata management
└── hooks/
    └── useLocaleSwitcher.ts # Locale switching hook
```

### Page Structure

```
app/
├── layout.tsx             # Root layout
├── page.tsx               # Homepage (redirects to /es)
├── es/                    # Spanish pages
├── en/                    # English pages
└── cat/                   # Catalan pages
```

## 🎨 Design Tokens

The project uses a centralized design token system for consistency and maintainability:

### Colors
- **Primary**: Blue scale (50-950)
- **Secondary**: Green scale (50-950) 
- **CTA**: High contrast green (#016A3A) for accessibility
- **Neutral**: Gray scale (50-950)
- **Semantic**: Success, warning, error, info

### Typography
- **Font Family**: Inter (primary), JetBrains Mono (monospace)
- **Scale**: Optimized for 40+/60+ readability
- **Line Heights**: Comfortable spacing (1.1-1.8)

### Spacing
- **Base Unit**: 8px for consistent vertical rhythm
- **Scale**: 0-64 (0-256px)

## 🌍 Internationalization (i18n)

### Supported Locales
- **ES** (Spanish) - Default
- **EN** (English)
- **CAT** (Catalan)

### Features
- Automatic locale detection from URL
- Preserved navigation state during language switching
- SEO-optimized metadata for each locale
- Hreflang tags for search engines

### Adding New Translations

1. **Update translation dictionaries** in `lib/translations.ts`:
```typescript
export const translations: Record<Locale, Translations> = {
  es: { /* Spanish translations */ },
  en: { /* English translations */ },
  cat: { /* Catalan translations */ },
  // Add new locale here
};
```

2. **Add locale to i18n configuration** in `lib/i18n.ts`:
```typescript
export const LOCALES: Locale[] = ['es', 'en', 'cat', 'new-locale'];
```

3. **Create page structure** in `app/new-locale/`

## ♿ Accessibility Features

### AA+ Compliance
- **Color Contrast**: All text meets WCAG AA+ standards
- **Focus Management**: Visible focus indicators on all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML

### Reduced Motion Support
- Respects `prefers-reduced-motion` setting
- Subtle animations for users with motion sensitivity
- CSS media queries for motion preferences

### Focus Management
- Skip links for keyboard users
- `aria-current="page"` for active navigation items
- Focus restoration after locale switching

## ⚡ Performance Optimizations

### Image Optimization
- **WebP Format**: All images converted to WebP
- **Lazy Loading**: Non-critical images load on demand
- **Responsive Images**: Proper `sizes` attributes
- **Priority Loading**: Hero images load immediately

### CLS Prevention
- **Fixed Heights**: Components have predefined dimensions
- **Layout Containment**: CSS `contain` property for performance
- **Transform Optimization**: Hardware acceleration for animations

### Core Web Vitals
- **LCP**: Optimized hero image loading
- **FID**: Minimal JavaScript execution
- **CLS**: Zero layout shift with fixed dimensions

## 🛠️ Development Guide

### Prerequisites
- Node.js 18+
- pnpm (recommended package manager)

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

### Adding New Components

1. **Create component file** in `components/`
2. **Use design tokens** from `lib/design-tokens.ts`
3. **Add TypeScript interfaces** for props
4. **Include accessibility attributes** (ARIA labels, focus management)
5. **Test with keyboard navigation**

### Adding New Sections

1. **Create section component** in `components/sections/`
2. **Add translations** for all supported locales
3. **Include in page layouts** as needed
4. **Test responsive design** across breakpoints

### Modifying the Hero Section

The Hero section is modular and consists of:

- **Header**: Navigation and language switcher
- **Hero**: Main hero section with background
- **HeroContent**: Main content with CTAs

To modify:
1. **Update HeroContent.tsx** for text changes
2. **Modify Hero.tsx** for background and styling adjustments
3. **Edit design tokens** for styling changes

## 🧪 Testing

### Accessibility Testing
```bash
# Run accessibility tests
pnpm test:a11y

# Test keyboard navigation
pnpm test:keyboard

# Test with screen reader
pnpm test:screen-reader
```

### Performance Testing
```bash
# Lighthouse audit
pnpm test:lighthouse

# Core Web Vitals
pnpm test:web-vitals
```

### i18n Testing
```bash
# Test all locales
pnpm test:i18n

# Test locale switching
pnpm test:locale-switch
```

## 📦 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
3. Set environment variables if needed
4. Deploy

### Environment Variables
```env
# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Contact form endpoint
CONTACT_FORM_ENDPOINT=your-endpoint
```

## 🔧 Maintenance

### Regular Tasks
- **Update dependencies** monthly
- **Run accessibility audits** before releases
- **Test all locales** after content changes
- **Monitor Core Web Vitals** in production

### Content Updates
1. **Text changes**: Update `lib/translations.ts`
2. **Images**: Replace in `public/images/` (use WebP format)
3. **SEO**: Modify `lib/seo.ts` for metadata changes
4. **Styling**: Update `lib/design-tokens.ts` for design changes

### Troubleshooting

#### Common Issues
- **Layout shift**: Check for missing fixed heights
- **Accessibility errors**: Verify ARIA labels and focus management
- **Performance issues**: Optimize images and check bundle size
- **i18n problems**: Ensure all locales have complete translations

#### Debug Tools
- **React DevTools**: Component inspection
- **Lighthouse**: Performance and accessibility audit
- **axe DevTools**: Accessibility testing
- **Next.js Analytics**: Performance monitoring

## 📚 Resources

### Documentation
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WebP Converter](https://cloudconvert.com/webp-converter)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes following the architecture guidelines
4. Test thoroughly (accessibility, performance, i18n)
5. Submit a pull request

## 📄 License

This project is proprietary software. All rights reserved.

---

**Last Updated**: December 2024  
**Version**: 1.0  
**Maintainer**: Ivan Tech Coach Development Team