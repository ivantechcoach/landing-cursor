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
  language?: 'ca' | 'es' | 'en';
  className?: string;
}

export default function FinalCTASection({ language = 'ca', className = "" }: FinalCTASectionProps) {
  const pathname = usePathname();
  const { getCurrentLocale } = useLocaleSwitcher();
  const currentLocale = getCurrentLocale();

  // Content based on language
  // ADD: AI/Cyber content to replace redundant CTAs
  const content = {
    es: {
      title: '¿Listo para dar el siguiente paso en tu carrera?',
      subtitle: 'Descubre cómo la IA y la Ciberseguridad pueden ayudarte a avanzar de forma segura y práctica.',
      infoTitle: 'Aprende a usar la Inteligencia Artificial y la Ciberseguridad con confianza',
      infoText: 'Descubre cómo la IA puede simplificar tus tareas diarias y cómo proteger tu información digital paso a paso.'
    },
    en: {
      title: 'Ready to take the next step in your career?',
      subtitle: 'Discover how AI and Cybersecurity can help you move forward safely and practically.',
      infoTitle: 'Learn to use Artificial Intelligence and Cybersecurity with confidence',
      infoText: 'See how AI can simplify everyday tasks and how to protect your digital information step by step.'
    },
    ca: {
      title: 'Llest per donar el següent pas en la teva carrera?',
      subtitle: 'Descobreix com la IA i la Ciberseguretat poden ajudar-te a avançar de manera segura i pràctica.',
      infoTitle: 'Aprèn a utilitzar la Intel·ligència Artificial i la Ciberseguretat amb confiança',
      infoText: 'Descobreix com la IA pot simplificar les tasques diàries i com protegir la teva informació digital pas a pas.'
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
        {/* ADD: AI/Cyber info block replacing redundant CTAs (no CTA buttons here) */}
        <div className="ai-cyber-block mx-auto max-w-3xl">
          <h3 className="text-heading-3">{currentContent.infoTitle}</h3>
          <p className="text-body text-white/90 mt-2">{currentContent.infoText}</p>
        </div>
      </div>
    </section>
  );
}
