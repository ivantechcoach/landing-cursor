"use client";

/**
 * FinalCTASection Component
 * Final call-to-action section with contact and about links
 * Optimized for conversion and accessibility
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buildLocalizedLink } from '@/lib/i18n';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';

interface FinalCTASectionProps {
  language?: 'es' | 'en' | 'cat';
  className?: string;
}

export default function FinalCTASection({ language = 'es', className = "" }: FinalCTASectionProps) {
  const pathname = usePathname();
  const { getCurrentLocale } = useLocaleSwitcher();
  const currentLocale = getCurrentLocale();

  // Content based on language
  const content = {
    es: {
      title: '¿Listo para dar el siguiente paso en tu carrera?',
      subtitle: 'Agenda tu sesión diagnóstica gratuita y descubre cómo puedo ayudarte a alcanzar tus objetivos profesionales.',
      primaryCTA: 'Agenda tu sesión GRATIS',
      secondaryCTA: 'Conoce mi historia',
      primaryCTAAria: 'Agendar sesión diagnóstica gratuita',
      secondaryCTAAria: 'Conocer la historia de Ivan Tech Coach'
    },
    en: {
      title: 'Ready to take the next step in your career?',
      subtitle: 'Schedule your free diagnostic session and discover how I can help you achieve your professional goals.',
      primaryCTA: 'Schedule your FREE session',
      secondaryCTA: 'Learn my story',
      primaryCTAAria: 'Schedule free diagnostic session',
      secondaryCTAAria: 'Learn about Ivan Tech Coach\'s story'
    },
    cat: {
      title: 'Llest per donar el següent pas en la teva carrera?',
      subtitle: 'Agenda la teva sessió diagnòstica gratuïta i descobreix com et puc ajudar a aconseguir els teus objectius professionals.',
      primaryCTA: 'Agenda la teva sessió GRATUÏTA',
      secondaryCTA: 'Coneix la meva història',
      primaryCTAAria: 'Agendar sessió diagnòstica gratuïta',
      secondaryCTAAria: 'Coneixer la història d\'Ivan Tech Coach'
    }
  };

  const currentContent = content[currentLocale];

  return (
    <section className={`section-padding bg-gradient-to-r from-blue-600 to-purple-600 ${className}`} aria-labelledby="final-cta-heading">
      <div className="content-max-width container-padding text-center">
        <h2 id="final-cta-heading" className="text-heading-1 text-white mb-6">
          {currentContent.title}
        </h2>
        <p className="text-body-large text-blue-100 mb-8 max-w-4xl mx-auto">
          {currentContent.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={buildLocalizedLink(pathname, '/contact')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-600"
            aria-label={currentContent.primaryCTAAria}
          >
            {currentContent.primaryCTA}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href={buildLocalizedLink(pathname, '/about')}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-600"
            aria-label={currentContent.secondaryCTAAria}
          >
            {currentContent.secondaryCTA}
          </Link>
        </div>
      </div>
    </section>
  );
}
