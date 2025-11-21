"use client";

/**
 * FAQSection Component
 * Educational FAQ section with accessible accordion
 * Mobile-first design optimized for 40-60 year old audiences
 * Supports ES/CAT/EN languages
 */

import { useState, useEffect } from 'react';
import TechBackground from '@/components/backgrounds/TechBackground';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQContent {
  title: string;
  subtitle: string;
  items: FAQItem[];
}

interface FAQSectionProps {
  language?: 'ca' | 'es' | 'en';
}

export default function FAQSection({ language = 'es' }: FAQSectionProps) {
  // FAQ content based on language
  const content: Record<'ca' | 'es' | 'en', FAQContent> = {
    es: {
      title: 'Preguntas y Respuestas',
      subtitle: 'Resuelve tus dudas sobre Inteligencia Artificial y desarrollo web',
      items: [
        {
          question: '¿Qué es la Inteligencia Artificial y cómo puedo usarla en mi día a día?',
          answer: 'La IA es un conjunto de tecnologías que permiten que las máquinas aprendan a realizar tareas. Puedes usarla para escribir textos, automatizar trabajos, aprender idiomas, organizar tu tiempo y mucho más.',
        },
        {
          question: '¿Qué diferencia hay entre ChatGPT, Gemini y otros modelos de IA?',
          answer: 'ChatGPT destaca por su calidad conversacional; Gemini por su velocidad y acceso a herramientas de Google; y modelos como Claude, Llama o Perplexity cada uno aporta algo distinto. Yo trabajo con varios para elegir el más adecuado según cada tarea.',
        },
        {
          question: '¿Qué es Cursor AI y por qué puede ayudarme si desarrollo webs o soy freelance?',
          answer: 'Cursor es un editor de código con IA integrada. Te permite programar más rápido, reducir errores y entender proyectos complejos con ayuda de un copiloto inteligente.',
        },
        {
          question: '¿Vercel es obligatorio para desplegar páginas web modernas?',
          answer: 'No, pero facilita muchísimo el despliegue. Es ideal para proyectos creados con Next.js, frameworks modernos o para freelancers que necesitan rapidez y escalabilidad.',
        },
        {
          question: '¿La IA puede reemplazar mi trabajo?',
          answer: 'No. La IA reemplaza tareas repetitivas, pero no reemplaza a los profesionales que saben usarla como herramienta. Tu valor aumenta si aprendes a trabajar con ella.',
        },
        {
          question: '¿Es seguro usar herramientas de IA?',
          answer: 'Sí, siempre que uses plataformas oficiales, evites compartir datos sensibles y sigas buenas prácticas de ciberseguridad (actualizaciones, contraseñas robustas, MFA).',
        },
        {
          question: '¿Qué IA recomiendas para empezar si no tengo experiencia?',
          answer: 'ChatGPT Plus es la opción más equilibrada. Tiene buen rendimiento, interfaz clara y es fácil de aprender.',
        },
        {
          question: '¿Puedo integrar IA en mi negocio aunque no sepa programar?',
          answer: 'Sí. Hay soluciones sin código, automatizaciones con n8n, asistentes personalizados y flujos de trabajo que puedo ayudarte a implementar.',
        },
        {
          question: '¿Cómo sé si mi web necesita una actualización?',
          answer: 'Si es lenta, no es responsive, tiene colores ilegibles, o no está optimizada para SEO, es hora de modernizarla. Puedes enviarme tu sitio y lo analizamos.',
        },
        {
          question: '¿Ofreces formación o acompañamiento para aprender a usar IA?',
          answer: 'Sí, ofrezco sesiones personalizadas para aprender a usar IA en tu trabajo, negocio o estudio, desde nivel básico hasta avanzado.',
        },
      ],
    },
    ca: {
      title: 'Preguntes i Respostes',
      subtitle: 'Resol els teus dubtes sobre Intel·ligència Artificial i desenvolupament web',
      items: [
        {
          question: 'Què és la Intel·ligència Artificial i com puc usar-la al meu dia a dia?',
          answer: 'La IA és un conjunt de tecnologies que permeten que les màquines aprenguin a realitzar tasques. Pots usar-la per escriure textos, automatitzar treballs, aprendre idiomes, organitzar el teu temps i molt més.',
        },
        {
          question: 'Quina diferència hi ha entre ChatGPT, Gemini i altres models d\'IA?',
          answer: 'ChatGPT destaca per la seva qualitat conversacional; Gemini per la seva velocitat i accés a eines de Google; i models com Claude, Llama o Perplexity cadascun aporta alguna cosa diferent. Jo treballo amb diversos per triar el més adequat segons cada tasca.',
        },
        {
          question: 'Què és Cursor AI i per què pot ajudar-me si desenvolupo webs o sóc freelance?',
          answer: 'Cursor és un editor de codi amb IA integrada. Et permet programar més ràpid, reduir errors i entendre projectes complexos amb ajuda d\'un copilot intel·ligent.',
        },
        {
          question: 'Vercel és obligatori per desplegar pàgines web modernes?',
          answer: 'No, però facilita moltíssim el desplegament. És ideal per a projectes creats amb Next.js, frameworks moderns o per a freelancers que necessiten rapidesa i escalabilitat.',
        },
        {
          question: 'La IA pot reemplaçar la meva feina?',
          answer: 'No. La IA reemplaça tasques repetitives, però no reemplaça als professionals que saben usar-la com a eina. El teu valor augmenta si aprens a treballar amb ella.',
        },
        {
          question: 'És segur usar eines d\'IA?',
          answer: 'Sí, sempre que usis plataformes oficials, evitis compartir dades sensibles i segueixis bones pràctiques de ciberseguretat (actualitzacions, contrasenyes robustes, MFA).',
        },
        {
          question: 'Quina IA recomanes per començar si no tinc experiència?',
          answer: 'ChatGPT Plus és l\'opció més equilibrada. Té bon rendiment, interfície clara i és fàcil d\'aprendre.',
        },
        {
          question: 'Puc integrar IA al meu negoci encara que no sàpiga programar?',
          answer: 'Sí. Hi ha solucions sense codi, automatitzacions amb n8n, assistents personalitzats i fluxos de treball que puc ajudar-te a implementar.',
        },
        {
          question: 'Com sé si la meva web necessita una actualització?',
          answer: 'Si és lenta, no és responsive, té colors il·legibles, o no està optimitzada per a SEO, és hora de modernitzar-la. Pots enviar-me el teu lloc i ho analitzem.',
        },
        {
          question: 'Ofereixes formació o acompanyament per aprendre a usar IA?',
          answer: 'Sí, ofereixo sessions personalitzades per aprendre a usar IA al teu treball, negoci o estudi, des de nivell bàsic fins a avançat.',
        },
      ],
    },
    en: {
      title: 'Questions and Answers',
      subtitle: 'Resolve your doubts about Artificial Intelligence and web development',
      items: [
        {
          question: 'What is Artificial Intelligence and how can I use it in my daily life?',
          answer: 'AI is a set of technologies that allow machines to learn to perform tasks. You can use it to write texts, automate jobs, learn languages, organize your time and much more.',
        },
        {
          question: 'What\'s the difference between ChatGPT, Gemini and other AI models?',
          answer: 'ChatGPT stands out for its conversational quality; Gemini for its speed and access to Google tools; and models like Claude, Llama or Perplexity each bring something different. I work with several to choose the most suitable one for each task.',
        },
        {
          question: 'What is Cursor AI and why can it help me if I develop websites or I\'m a freelancer?',
          answer: 'Cursor is a code editor with integrated AI. It allows you to program faster, reduce errors and understand complex projects with the help of an intelligent copilot.',
        },
        {
          question: 'Is Vercel mandatory for deploying modern web pages?',
          answer: 'No, but it greatly facilitates deployment. It\'s ideal for projects created with Next.js, modern frameworks or for freelancers who need speed and scalability.',
        },
        {
          question: 'Can AI replace my job?',
          answer: 'No. AI replaces repetitive tasks, but it doesn\'t replace professionals who know how to use it as a tool. Your value increases if you learn to work with it.',
        },
        {
          question: 'Is it safe to use AI tools?',
          answer: 'Yes, as long as you use official platforms, avoid sharing sensitive data and follow good cybersecurity practices (updates, strong passwords, MFA).',
        },
        {
          question: 'What AI do you recommend to start if I have no experience?',
          answer: 'ChatGPT Plus is the most balanced option. It has good performance, a clear interface and is easy to learn.',
        },
        {
          question: 'Can I integrate AI into my business even if I don\'t know how to program?',
          answer: 'Yes. There are no-code solutions, automations with n8n, custom assistants and workflows that I can help you implement.',
        },
        {
          question: 'How do I know if my website needs an update?',
          answer: 'If it\'s slow, not responsive, has illegible colors, or isn\'t optimized for SEO, it\'s time to modernize it. You can send me your site and we\'ll analyze it.',
        },
        {
          question: 'Do you offer training or support to learn how to use AI?',
          answer: 'Yes, I offer personalized sessions to learn how to use AI in your work, business or studies, from basic to advanced level.',
        },
      ],
    },
  };

  const currentContent = content[language];
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  /**
   * Reset open items when language changes
   * This prevents wrong FAQ items from appearing open when switching languages
   */
  useEffect(() => {
    setOpenItems(new Set());
  }, [language]);

  /**
   * Toggle accordion item open/closed state
   * @param index - Index of the FAQ item
   */
  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section 
      className="faq-background relative"
      style={{ paddingTop: 'clamp(64px, 8vw, 96px)', paddingBottom: 0, marginBottom: 0 }}
      aria-labelledby="faq-heading"
    >
      <TechBackground iconCount={10} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingBottom: 0 }}>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 md:mb-4"
          >
            {currentContent.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {currentContent.subtitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4" role="region" aria-labelledby="faq-heading">
          {currentContent.items.map((item, index) => {
            const isOpen = openItems.has(index);
            const buttonId = `faq-button-${index}`;
            const contentId = `faq-content-${index}`;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Question Button */}
                <button
                  id={buttonId}
                  type="button"
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#66FFCC] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(index)}
                >
                  <span 
                    className="text-base sm:text-lg font-semibold text-gray-900 leading-relaxed flex-1"
                    style={{ fontSize: 'clamp(16px, 4vw, 18px)', lineHeight: '1.6' }}
                  >
                    {item.question}
                  </span>
                  
                  {/* Plus/Minus Icon */}
                  <span 
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#66FFCC]/10 text-[#66FFCC] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer Content */}
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div 
                    className={`px-4 sm:px-6 pb-4 sm:pb-5 text-gray-700 transition-opacity duration-300 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      fontSize: 'clamp(16px, 4vw, 18px)', 
                      lineHeight: '1.6' 
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

