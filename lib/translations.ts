/**
 * Translation dictionaries for Ivan Tech Coach
 * Centralized translation system for consistent i18n
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
      cta: 'Empieza ahora',
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
      title: 'Your Personal Technology Coach',
      subtitle: 'Learn to use technology, cybersecurity and AI without fear or complications. I guide you step by step, with patience and clarity.',
      cta: 'Start now',
      secondaryCta: 'View services',
      trustBadge: '✓ Certified Technology Coach',
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
  cat: {
    navigation: {
      home: { name: 'Inici', href: '/', ariaLabel: 'Anar a la pàgina d\'inici' },
      about: { name: 'Sobre mi', href: '/about', ariaLabel: 'Saber més sobre mi' },
      services: { name: 'Serveis', href: '/services', ariaLabel: 'Veure els meus serveis' },
      portfolio: { name: 'Portfolio', href: '/portfolio', ariaLabel: 'Veure el meu portfolio' },
      blog: { name: 'Blog', href: '/blog', ariaLabel: 'Llegir el meu blog' },
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
      title: 'El Teu Coach de Tecnologia Personal',
      subtitle: 'Aprèn a usar tecnologia, ciberseguretat i IA sense por ni complicacions. Et guío pas a pas, amb paciència i claredat.',
      cta: 'Comença ara',
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
};

/**
 * Get navigation items for a specific locale
 */
export function getNavigationItems(locale: Locale): NavigationItem[] {
  const t = translations[locale];
  return [
    t.navigation.home,
    t.navigation.about,
    t.navigation.services,
    t.navigation.portfolio,
    t.navigation.blog,
    t.navigation.contact,
  ];
}

/**
 * Get UI translations for a specific locale
 */
export function getUITranslations(locale: Locale) {
  return translations[locale].ui;
}

/**
 * Get hero content for a specific locale
 */
export function getHeroContent(locale: Locale) {
  return translations[locale].hero;
}
