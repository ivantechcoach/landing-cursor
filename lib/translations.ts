/**
 * Translation dictionaries for Ivan Tech Coach
 * Centralized translation system for consistent i18n
 * Catalan as primary language
 */

import { Locale } from './i18n';

export interface NavigationItem {
  name: string;
  href: string;
  ariaLabel?: string;
}

export interface Translations {
  navigation: {
    home: NavigationItem;
    about: NavigationItem;
    services: NavigationItem;
    portfolio: NavigationItem;
    blog: NavigationItem;
    contact: NavigationItem;
  };
  ui: {
    skipToContent: string;
    toggleMenu: string;
    selectLanguage: string;
    changeLanguage: (locale: string) => string;
    mainNavigation: string;
    mobileNavigation: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    trustBadge: string;
    ariaLabels: {
      goToContact: string;
      viewAllServices: string;
    };
    trustIndicators: {
      experience: string;
      experienceLabel: string;
      students: string;
      studentsLabel: string;
      approach: string;
      approachLabel: string;
    };
  };
}

export const translations: Record<Locale, Translations> = {
  ca: {
    navigation: {
      home: { name: 'Inici', href: '/', ariaLabel: 'Anar a la pàgina principal' },
      about: { name: 'Sobre mi', href: '/about', ariaLabel: 'Anar a la pàgina sobre mi' },
      services: { name: 'Serveis', href: '/services', ariaLabel: 'Veure els meus serveis' },
      portfolio: { name: 'Portafoli', href: '/portfolio', ariaLabel: 'Veure el meu portafoli' },
      blog: { name: 'Bloc', href: '/blog', ariaLabel: 'Llegir el meu bloc' },
      contact: { name: 'Contacte', href: '/contact', ariaLabel: 'Pàgina de contacte' },
    },
    ui: {
      skipToContent: 'Saltar al contingut',
      toggleMenu: 'Obrir menú de navegació',
      selectLanguage: 'Seleccionar idioma',
      changeLanguage: (locale: string) => `Canviar a ${locale}`,
      mainNavigation: 'Navegació principal',
      mobileNavigation: 'Navegació mòbil',
    },
    hero: {
      title: 'El teu Coach Tecnològic Personal',
      subtitle: 'Aprèn a usar tecnologia, ciberseguretat i IA sense por ni complicacions. T\'acompanyo pas a pas, amb paciència i claredat.',
      cta: 'Reserva sessió gratuïta',
      secondaryCta: 'Veure serveis',
      trustBadge: '✓ Coach Certificat en Tecnologia',
      ariaLabels: {
        goToContact: 'Anar a la pàgina de contacte',
        viewAllServices: 'Veure tots els serveis disponibles',
      },
      trustIndicators: {
        experience: '5+',
        experienceLabel: 'Anys ajudant',
        students: '200+',
        studentsLabel: 'Persones formades',
        approach: '100%',
        approachLabel: 'Personalitzat',
      },
    },
  },
  es: {
    navigation: {
      home: { name: 'Inicio', href: '/', ariaLabel: 'Ir a la página de inicio' },
      about: { name: 'Acerca de', href: '/about', ariaLabel: 'Ir a la página sobre mí' },
      services: { name: 'Servicios', href: '/services', ariaLabel: 'Ver mis servicios' },
      portfolio: { name: 'Portfolio', href: '/portfolio', ariaLabel: 'Ver mi portfolio' },
      blog: { name: 'Blog', href: '/blog', ariaLabel: 'Leer mi blog' },
      contact: { name: 'Contacto', href: '/contact', ariaLabel: 'Página de contacto' },
    },
    ui: {
      skipToContent: 'Saltar al contenido',
      toggleMenu: 'Abrir menú de navegación',
      selectLanguage: 'Seleccionar idioma',
      changeLanguage: (locale: string) => `Cambiar a ${locale}`,
      mainNavigation: 'Navegación principal',
      mobileNavigation: 'Navegación móvil',
    },
    hero: {
      title: 'Tu Coach de Tecnología Personal',
      subtitle: 'Aprende a usar tecnología, ciberseguridad e IA sin miedo ni complicaciones. Te ayudo paso a paso, con paciencia y claridad.',
      cta: 'Reserva sesión gratuita',
      secondaryCta: 'Ver servicios',
      trustBadge: '✓ Coach Certificado en Tecnología',
      ariaLabels: {
        goToContact: 'Ir a la página de contacto',
        viewAllServices: 'Ver todos los servicios disponibles',
      },
      trustIndicators: {
        experience: '5+',
        experienceLabel: 'Años ayudando',
        students: '200+',
        studentsLabel: 'Personas formadas',
        approach: '100%',
        approachLabel: 'Personalizado',
      },
    },
  },
  en: {
    navigation: {
      home: { name: 'Home', href: '/', ariaLabel: 'Go to homepage' },
      about: { name: 'About', href: '/about', ariaLabel: 'Learn about me' },
      services: { name: 'Services', href: '/services', ariaLabel: 'View my services' },
      portfolio: { name: 'Portfolio', href: '/portfolio', ariaLabel: 'View my portfolio' },
      blog: { name: 'Blog', href: '/blog', ariaLabel: 'Read my blog' },
      contact: { name: 'Contact', href: '/contact', ariaLabel: 'Contact page' },
    },
    ui: {
      skipToContent: 'Skip to content',
      toggleMenu: 'Open navigation menu',
      selectLanguage: 'Select language',
      changeLanguage: (locale: string) => `Change to ${locale}`,
      mainNavigation: 'Main navigation',
      mobileNavigation: 'Mobile navigation',
    },
    hero: {
      title: 'Your Personal Tech Coach',
      subtitle: 'Learn to use technology, cybersecurity and AI without fear or complications. I guide you step by step, with patience and clarity.',
      cta: 'Book free session',
      secondaryCta: 'View services',
      trustBadge: '✓ Certified Tech Coach',
      ariaLabels: {
        goToContact: 'Go to contact page',
        viewAllServices: 'View all available services',
      },
      trustIndicators: {
        experience: '5+',
        experienceLabel: 'Years helping',
        students: '200+',
        studentsLabel: 'People trained',
        approach: '100%',
        approachLabel: 'Personalized',
      },
    },
  },
};

/**
 * Get navigation items for a specific locale
 * @param locale - Target locale
 * @returns Navigation items
 */
export function getNavigationItems(locale: Locale): NavigationItem[] {
  const translation = translations[locale];
  return [
    translation.navigation.home,
    translation.navigation.about,
    translation.navigation.services,
    translation.navigation.portfolio,
    translation.navigation.blog,
    translation.navigation.contact,
  ];
}

/**
 * Get UI translations for a specific locale
 * @param locale - Target locale
 * @returns UI translations
 */
export function getUITranslations(locale: Locale) {
  return translations[locale].ui;
}

/**
 * Get hero content for a specific locale
 * @param locale - Target locale
 * @returns Hero content
 */
export function getHeroContent(locale: Locale) {
  return translations[locale].hero;
}

/**
 * Get all translations for a specific locale
 * @param locale - Target locale
 * @returns All translations
 */
export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}