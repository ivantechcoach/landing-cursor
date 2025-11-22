"use client";

/**
 * ServicesSection Component
 * Professional services section with 3 service cards
 * Clean, modern design with i18n support
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';
import { getServicesContent } from '@/lib/translations';
import { buildLocalizedLink } from '@/lib/i18n';
import TechBackground from '@/components/backgrounds/TechBackground';

interface ServicesSectionProps {
  language?: 'ca' | 'es' | 'en';
  className?: string;
}

export default function ServicesSection({ className = "" }: ServicesSectionProps) {
  const { getCurrentLocale } = useLocaleSwitcher();
  const pathname = usePathname();
  const currentLocale = getCurrentLocale();
  
  const servicesContent = getServicesContent(currentLocale);
  const contactLink = buildLocalizedLink(pathname, '/contact');

  // Icon components for each service
  const icons = [
    // Tech Coaching - Chalkboard/Teacher icon
    (
      <svg 
        key={0}
        className="w-12 h-12 text-white" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
        />
      </svg>
    ),
    // Technical Support - Tools icon
    (
      <svg 
        key={1}
        className="w-12 h-12 text-white" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
        />
      </svg>
    ),
    // AI & Automation - Robot icon
    (
      <svg 
        key={2}
        className="w-12 h-12 text-white" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
        />
      </svg>
    ),
  ];

  return (
    <section 
      className={`pt-24 md:pt-32 pb-24 bg-white dark:bg-neutral-900 relative ${className}`} 
      aria-labelledby="services-heading"
    >
      <TechBackground iconCount={8} />
      <div className="content-max-width container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 
            id="services-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {servicesContent.title}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {servicesContent.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesContent.items.map((service, index) => (
            <div 
              key={index}
              className="rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md hover:shadow-lg p-8 transition-all duration-300 hover:scale-105"
              role="article"
              aria-labelledby={`service-${index}-title`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-[#7A00F5] to-[#66FFCC] rounded-full flex items-center justify-center mb-6">
                {icons[index]}
              </div>
              
              {/* Title */}
              <h3 
                id={`service-${index}-title`}
                className="text-xl font-bold text-gray-900 dark:text-white mb-4"
              >
                {service.title}
              </h3>
              
              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="text-gray-600 dark:text-gray-300 flex items-start"
                  >
                    <svg 
                      className="w-5 h-5 text-[#7A00F5] mr-2 mt-0.5 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <Link
                href={contactLink}
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#7A00F5] border border-[#7A00F5] rounded-lg hover:bg-[#7A00F5] hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7A00F5] focus:ring-offset-2"
                aria-label={service.ariaLabel}
              >
                {service.cta}
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

