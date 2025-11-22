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
    complementaryLine: string;
    ariaLabels: {
      goToContact: string;
      viewAllServices: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      features: string[];
      cta: string;
      ariaLabel: string;
    }>;
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
      title: 'Coach Tecnològic i Especialista IT',
      subtitle: 'Acompanyo a professionals i petites empreses a aprendre tecnologia, treballar amb IA i resoldre problemes IT amb claredat, seguretat i un enfocament pràctic.',
      cta: 'Reserva la teva sessió gratuïta',
      secondaryCta: 'Com puc ajudar-te',
      complementaryLine: 'Suport tècnic N1/N2 • IA aplicada • Xarxes • Seguretat bàsica',
      ariaLabels: {
        goToContact: 'Anar a la pàgina de contacte',
        viewAllServices: 'Veure tots els serveis disponibles',
      },
    },
    services: {
      title: 'Serveis Professionals',
      subtitle: 'Solucions clares i pràctiques per avançar en tecnologia.',
      items: [
        {
          title: 'Tech Coaching Personalitzat',
          features: [
            'Formació 1:1',
            'IA aplicada',
            'Productivitat digital',
            'Acompanyament pas a pas',
          ],
          cta: 'Vull aprendre',
          ariaLabel: 'Sol·licitar coaching personalitzat',
        },
        {
          title: 'Suport Tècnic i Solució de Problemes IT',
          features: [
            'Windows, macOS, Linux',
            'Xarxes i connectivitat',
            'Impressores, backups, diagnòstics',
            'Manteniment preventiu',
          ],
          cta: 'Necessito suport',
          ariaLabel: 'Sol·licitar suport tècnic',
        },
        {
          title: 'IA Aplicada i Automatització',
          features: [
            'ChatGPT professional',
            'Fluxos automatitzats',
            'Integracions',
            'Assessorament estratègic',
          ],
          cta: 'Implementar IA',
          ariaLabel: 'Sol·licitar implementació d\'IA',
        },
      ],
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
      title: 'Coach Tecnológico y Especialista IT',
      subtitle: 'Acompaño a profesionales y pequeñas empresas a aprender tecnología, trabajar con IA y resolver problemas IT con claridad, seguridad y un enfoque práctico.',
      cta: 'Reserva tu sesión gratuita',
      secondaryCta: 'Cómo puedo ayudarte',
      complementaryLine: 'Soporte técnico N1/N2 • IA aplicada • Redes • Seguridad básica',
      ariaLabels: {
        goToContact: 'Ir a la página de contacto',
        viewAllServices: 'Ver todos los servicios disponibles',
      },
    },
    services: {
      title: 'Servicios Profesionales',
      subtitle: 'Soluciones claras y prácticas para avanzar en tecnología.',
      items: [
        {
          title: 'Tech Coaching Personalizado',
          features: [
            'Formación 1:1',
            'IA aplicada',
            'Productividad digital',
            'Acompañamiento paso a paso',
          ],
          cta: 'Quiero aprender',
          ariaLabel: 'Solicitar coaching personalizado',
        },
        {
          title: 'Soporte Técnico y Solución de Problemas IT',
          features: [
            'Windows, macOS, Linux',
            'Redes y conectividad',
            'Impresoras, backups, diagnósticos',
            'Mantenimiento preventivo',
          ],
          cta: 'Necesito soporte',
          ariaLabel: 'Solicitar soporte técnico',
        },
        {
          title: 'IA Aplicada y Automatización',
          features: [
            'ChatGPT profesional',
            'Flujos automatizados',
            'Integraciones',
            'Asesoramiento estratégico',
          ],
          cta: 'Implementar IA',
          ariaLabel: 'Solicitar implementación de IA',
        },
      ],
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
      title: 'Tech Coach & IT Specialist',
      subtitle: 'I help professionals and small businesses learn technology, work with AI, and solve IT problems with clarity, security, and a practical approach.',
      cta: 'Book your free session',
      secondaryCta: 'How can I help you',
      complementaryLine: 'N1/N2 Technical Support • Applied AI • Networks • Basic Security',
      ariaLabels: {
        goToContact: 'Go to contact page',
        viewAllServices: 'View all available services',
      },
    },
    services: {
      title: 'Professional Services',
      subtitle: 'Clear and practical solutions to advance in technology.',
      items: [
        {
          title: 'Personalized Tech Coaching',
          features: [
            '1:1 Training',
            'Applied AI',
            'Digital productivity',
            'Step-by-step guidance',
          ],
          cta: 'I want to learn',
          ariaLabel: 'Request personalized coaching',
        },
        {
          title: 'Technical Support & IT Troubleshooting',
          features: [
            'Windows, macOS, Linux',
            'Networks and connectivity',
            'Printers, backups, diagnostics',
            'Preventive maintenance',
          ],
          cta: 'I need support',
          ariaLabel: 'Request technical support',
        },
        {
          title: 'Applied AI & Automation',
          features: [
            'Professional ChatGPT',
            'Automated workflows',
            'Integrations',
            'Strategic consulting',
          ],
          cta: 'Implement AI',
          ariaLabel: 'Request AI implementation',
        },
      ],
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
 * Get services content for a specific locale
 * @param locale - Target locale
 * @returns Services content
 */
export function getServicesContent(locale: Locale) {
  return translations[locale].services;
}

/**
 * Get all translations for a specific locale
 * @param locale - Target locale
 * @returns All translations
 */
export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}