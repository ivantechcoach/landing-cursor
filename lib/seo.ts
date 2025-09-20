/**
 * SEO Metadata Configuration for Ivan Tech Coach
 * Centralized SEO metadata management for all locales
 */

import type { Metadata } from 'next';
import { Locale } from './i18n';

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogImageAlt: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  twitterImageAlt: string;
  locale: string;
  alternateUrls: {
    es: string;
    en: string;
    cat: string;
  };
}

export const seoMetadata: Record<Locale, SEOMetadata> = {
  es: {
    title: 'Ivan Tech Coach - Coaching Tecnológico Profesional | Transforma tu Carrera',
    description: 'Transforma tu carrera tecnológica con coaching personalizado. Aprende las habilidades más demandadas del mercado y acelera tu crecimiento profesional con Ivan Tech Coach. ¡Sesión gratuita!',
    keywords: [
      'coaching tecnológico',
      'mentoría tecnológica',
      'carrera profesional',
      'desarrollo web',
      'programación',
      'devops',
      'ciberseguridad',
      'inteligencia artificial',
      'liderazgo técnico',
      'transformación digital',
      'coaching personalizado',
      'mentor profesional',
      'cursos tecnológicos',
      'formación IT'
    ],
    ogTitle: 'Ivan Tech Coach - Coaching Tecnológico Profesional',
    ogDescription: 'Transforma tu carrera tecnológica con coaching personalizado. Aprende las habilidades más demandadas del mercado y acelera tu crecimiento profesional.',
    ogImage: '/images/branding/og-cover.jpg',
    ogImageAlt: 'Ivan Tech Coach - Coaching Tecnológico Profesional - Transforma tu carrera tecnológica',
    twitterTitle: 'Ivan Tech Coach - Coaching Tecnológico Profesional',
    twitterDescription: 'Transforma tu carrera tecnológica con coaching personalizado. Aprende las habilidades más demandadas del mercado.',
    twitterImage: '/images/branding/og-cover.jpg',
    twitterImageAlt: 'Ivan Tech Coach - Coaching Tecnológico Profesional',
    locale: 'es_ES',
    alternateUrls: {
      es: 'https://ivantechcoach.com/es',
      en: 'https://ivantechcoach.com/en',
      cat: 'https://ivantechcoach.com/cat'
    }
  },
  en: {
    title: 'Ivan Tech Coach - Professional Technology Coaching | Transform Your Career',
    description: 'Transform your technology career with personalized coaching. Learn the most in-demand skills in the market and accelerate your professional growth with Ivan Tech Coach. Free session!',
    keywords: [
      'technology coaching',
      'tech mentorship',
      'professional career',
      'web development',
      'programming',
      'devops',
      'cybersecurity',
      'artificial intelligence',
      'technical leadership',
      'digital transformation',
      'personalized coaching',
      'professional mentor',
      'technology courses',
      'IT training'
    ],
    ogTitle: 'Ivan Tech Coach - Professional Technology Coaching',
    ogDescription: 'Transform your technology career with personalized coaching. Learn the most in-demand skills in the market and accelerate your professional growth.',
    ogImage: '/images/branding/og-cover.jpg',
    ogImageAlt: 'Ivan Tech Coach - Professional Technology Coaching - Transform your tech career',
    twitterTitle: 'Ivan Tech Coach - Professional Technology Coaching',
    twitterDescription: 'Transform your technology career with personalized coaching. Learn the most in-demand skills in the market.',
    twitterImage: '/images/branding/og-cover.jpg',
    twitterImageAlt: 'Ivan Tech Coach - Professional Technology Coaching',
    locale: 'en_US',
    alternateUrls: {
      es: 'https://ivantechcoach.com/es',
      en: 'https://ivantechcoach.com/en',
      cat: 'https://ivantechcoach.com/cat'
    }
  },
  cat: {
    title: 'Ivan Tech Coach - Coaching Tecnològic Professional | Transforma la Teva Carrera',
    description: 'Transforma la teva carrera tecnològica amb coaching personalitzat. Aprèn les habilitats més demandades del mercat i accelera el teu creixement professional amb Ivan Tech Coach. ¡Sessió gratuïta!',
    keywords: [
      'coaching tecnològic',
      'mentoria tecnològica',
      'carrera professional',
      'desenvolupament web',
      'programació',
      'devops',
      'ciberseguretat',
      'intel·ligència artificial',
      'lideratge tècnic',
      'transformació digital',
      'coaching personalitzat',
      'mentor professional',
      'cursos tecnològics',
      'formació IT'
    ],
    ogTitle: 'Ivan Tech Coach - Coaching Tecnològic Professional',
    ogDescription: 'Transforma la teva carrera tecnològica amb coaching personalitzat. Aprèn les habilitats més demandades del mercat i accelera el teu creixement professional.',
    ogImage: '/images/branding/og-cover.jpg',
    ogImageAlt: 'Ivan Tech Coach - Coaching Tecnològic Professional - Transforma la teva carrera tecnològica',
    twitterTitle: 'Ivan Tech Coach - Coaching Tecnològic Professional',
    twitterDescription: 'Transforma la teva carrera tecnològica amb coaching personalitzat. Aprèn les habilitats més demandades del mercat.',
    twitterImage: '/images/branding/og-cover.jpg',
    twitterImageAlt: 'Ivan Tech Coach - Coaching Tecnològic Professional',
    locale: 'ca_ES',
    alternateUrls: {
      es: 'https://ivantechcoach.com/es',
      en: 'https://ivantechcoach.com/en',
      cat: 'https://ivantechcoach.com/cat'
    }
  }
};

/**
 * Generate complete metadata for a specific locale and page
 */
export function generateMetadata(locale: Locale, page?: string): Metadata {
  const seo = seoMetadata[locale];
  const baseUrl = 'https://ivantechcoach.com';
  
  // Dynamic title based on page
  let title = seo.title;
  let description = seo.description;
  
  if (page) {
    switch (page) {
      case 'about':
        title = locale === 'es' 
          ? 'Sobre Mí - Ivan Tech Coach | Experiencia y Metodología'
          : locale === 'en'
          ? 'About Me - Ivan Tech Coach | Experience and Methodology'
          : 'Sobre Mi - Ivan Tech Coach | Experiència i Metodologia';
        description = locale === 'es'
          ? 'Conoce mi experiencia de más de 5 años en coaching tecnológico. Descubre mi metodología personalizada y cómo puedo ayudarte a acelerar tu carrera profesional.'
          : locale === 'en'
          ? 'Learn about my over 5 years of experience in technology coaching. Discover my personalized methodology and how I can help you accelerate your professional career.'
          : 'Coneix la meva experiència de més de 5 anys en coaching tecnològic. Descobreix la meva metodologia personalitzada i com puc ajudar-te a accelerar la teva carrera professional.';
        break;
      case 'services':
        title = locale === 'es'
          ? 'Servicios - Ivan Tech Coach | Coaching Tecnológico Personalizado'
          : locale === 'en'
          ? 'Services - Ivan Tech Coach | Personalized Technology Coaching'
          : 'Serveis - Ivan Tech Coach | Coaching Tecnològic Personalitzat';
        description = locale === 'es'
          ? 'Descubre mis servicios de coaching tecnológico: desarrollo web, DevOps, ciberseguridad, IA y liderazgo técnico. Metodología personalizada y resultados garantizados.'
          : locale === 'en'
          ? 'Discover my technology coaching services: web development, DevOps, cybersecurity, AI and technical leadership. Personalized methodology and guaranteed results.'
          : 'Descobreix els meus serveis de coaching tecnològic: desenvolupament web, DevOps, ciberseguretat, IA i lideratge tècnic. Metodologia personalitzada i resultats garantits.';
        break;
      case 'portfolio':
        title = locale === 'es'
          ? 'Portfolio - Ivan Tech Coach | Casos de Éxito y Proyectos'
          : locale === 'en'
          ? 'Portfolio - Ivan Tech Coach | Success Cases and Projects'
          : 'Portfolio - Ivan Tech Coach | Casos d\'Èxit i Projectes';
        description = locale === 'es'
          ? 'Explora mi portfolio con casos de éxito de profesionales que han transformado sus carreras tecnológicas con mi coaching personalizado.'
          : locale === 'en'
          ? 'Explore my portfolio with success cases of professionals who have transformed their technology careers with my personalized coaching.'
          : 'Explora el meu portfolio amb casos d\'èxit de professionals que han transformat les seves carreres tecnològiques amb el meu coaching personalitzat.';
        break;
      case 'contact':
        title = locale === 'es'
          ? 'Contacto - Ivan Tech Coach | Agenda tu Sesión Gratuita'
          : locale === 'en'
          ? 'Contact - Ivan Tech Coach | Schedule your Free Session'
          : 'Contacte - Ivan Tech Coach | Agenda la Teva Sessió Gratuïta';
        description = locale === 'es'
          ? 'Contacta conmigo para agendar tu sesión diagnóstica gratuita. Descubre cómo puedo ayudarte a transformar tu carrera tecnológica.'
          : locale === 'en'
          ? 'Contact me to schedule your free diagnostic session. Discover how I can help you transform your technology career.'
          : 'Contacta amb mi per agendar la teva sessió diagnòstica gratuïta. Descobreix com puc ajudar-te a transformar la teva carrera tecnològica.';
        break;
      case 'blog':
        title = locale === 'es'
          ? 'Blog - Ivan Tech Coach | Artículos sobre Tecnología y Carrera'
          : locale === 'en'
          ? 'Blog - Ivan Tech Coach | Articles about Technology and Career'
          : 'Blog - Ivan Tech Coach | Articles sobre Tecnologia i Carrera';
        description = locale === 'es'
          ? 'Lee mis artículos sobre tecnología, carrera profesional y desarrollo personal. Consejos prácticos y tendencias del sector tecnológico.'
          : locale === 'en'
          ? 'Read my articles about technology, professional career and personal development. Practical tips and technology sector trends.'
          : 'Llegeix els meus articles sobre tecnologia, carrera professional i desenvolupament personal. Consells pràctics i tendències del sector tecnològic.';
        break;
    }
  }

  return {
    title: {
      default: title,
      template: `%s | ${locale === 'es' ? 'Ivan Tech Coach' : locale === 'en' ? 'Ivan Tech Coach' : 'Ivan Tech Coach'}`,
    },
    description,
    keywords: seo.keywords,
    authors: [{ name: 'Ivan Tech Coach' }],
    creator: 'Ivan Tech Coach',
    publisher: 'Ivan Tech Coach',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}${page ? `/${page}` : ''}`,
      languages: {
        'es-ES': seo.alternateUrls.es,
        'en-US': seo.alternateUrls.en,
        'ca-ES': seo.alternateUrls.cat,
      },
    },
    openGraph: {
      type: 'website',
      locale: seo.locale,
      url: `${baseUrl}/${locale}${page ? `/${page}` : ''}`,
      title: page ? title : seo.ogTitle,
      description: page ? description : seo.ogDescription,
      siteName: 'Ivan Tech Coach',
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: seo.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page ? title : seo.twitterTitle,
      description: page ? description : seo.twitterDescription,
      images: [seo.twitterImage],
      creator: '@ivantechcoach',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'tu-google-verification-code',
    },
  };
}

/**
 * Get HTML lang attribute for a specific locale
 */
export function getHtmlLang(locale: Locale): string {
  const langMap = {
    'es': 'es-ES',
    'en': 'en-US',
    'cat': 'ca-ES'
  };
  return langMap[locale] || 'es-ES';
}
