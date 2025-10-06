"use client";

/**
 * WhyChooseSection Component
 * Reusable section explaining why to choose Ivan Tech Coach
 * Optimized for accessibility and i18n
 */

import { getUITranslations } from '@/lib/translations';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';

interface WhyChooseSectionProps {
  language?: 'ca' | 'es' | 'en';
  className?: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export default function WhyChooseSection({ language = 'ca', className = "" }: WhyChooseSectionProps) {
  const { getCurrentLocale } = useLocaleSwitcher();
  const currentLocale = getCurrentLocale();
  const ui = getUITranslations(currentLocale);

  // Content based on language
  const content = {
    es: {
      title: '¿Por qué elegir Ivan Tech Coach?',
      subtitle: 'Más de 5 años ayudando a profesionales a acelerar sus carreras tecnológicas',
      features: [
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          ),
          title: 'Coaching Personalizado',
          description: 'Cada sesión está adaptada a tus necesidades específicas y objetivos profesionales únicos.',
          gradient: 'from-blue-500 to-purple-500'
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          title: 'Tecnologías Actuales',
          description: 'Aprende las tecnologías más demandadas del mercado laboral actual con casos reales.',
          gradient: 'from-purple-500 to-pink-500'
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: 'Resultados Garantizados',
          description: 'Metodología probada que ha ayudado a más de 100 profesionales a conseguir sus objetivos.',
          gradient: 'from-green-500 to-blue-500'
        }
      ]
    },
    en: {
      title: 'Why choose Ivan Tech Coach?',
      subtitle: 'Over 5 years helping professionals accelerate their tech careers',
      features: [
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          ),
          title: 'Personalized Coaching',
          description: 'Each session is tailored to your specific needs and unique professional goals.',
          gradient: 'from-blue-500 to-purple-500'
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          title: 'Current Technologies',
          description: 'Learn the most in-demand technologies in today\'s job market with real cases.',
          gradient: 'from-purple-500 to-pink-500'
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: 'Guaranteed Results',
          description: 'Proven methodology that has helped over 100 professionals achieve their goals.',
          gradient: 'from-green-500 to-blue-500'
        }
      ]
    },
    ca: {
      title: 'Per què triar Ivan Tech Coach?',
      subtitle: 'Més de 5 anys ajudant professionals a accelerar les seves carreres tecnològiques',
      features: [
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          ),
          title: 'Coaching Personalitzat',
          description: 'Cada sessió està adaptada a les teves necessitats específiques i objectius professionals únics.',
          gradient: 'from-blue-500 to-purple-500'
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          ),
          title: 'Tecnologies Actuals',
          description: 'Aprèn les tecnologies més demandades del mercat laboral actual amb casos reals.',
          gradient: 'from-purple-500 to-pink-500'
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: 'Resultats Garantits',
          description: 'Metodologia provada que ha ajudat a més de 100 professionals a aconseguir els seus objectius.',
          gradient: 'from-green-500 to-blue-500'
        }
      ]
    }
  };

  const currentContent = content[currentLocale];

  return (
    <section className={`section-padding bg-white ${className}`} aria-labelledby="why-choose-heading">
      <div className="content-max-width container-padding">
        <div className="text-center mb-16">
          <h2 id="why-choose-heading" className="text-heading-1 text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              tabIndex={0}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-heading-3 mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-body text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
