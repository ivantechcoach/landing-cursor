"use client";

/**
 * TechIconsSection Component
 * Section with animated tech icons (Cybersecurity, AI, IT, Technology)
 * White background with scroll + fade animations
 */

import { useEffect, useState } from 'react';

interface TechIcon {
  id: string;
  name: string;
  icon: JSX.Element;
  delay: number;
}

const techIcons: TechIcon[] = [
  {
    id: 'cybersecurity',
    name: 'Ciberseguridad',
    delay: 0,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
  },
  {
    id: 'ai',
    name: 'Inteligencia Artificial',
    delay: 0.2,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        <circle cx="9" cy="9" r="1.5"/>
        <circle cx="15" cy="9" r="1.5"/>
      </svg>
    ),
  },
  {
    id: 'it',
    name: 'IT',
    delay: 0.4,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
      </svg>
    ),
  },
  {
    id: 'technology',
    name: 'Tecnología',
    delay: 0.6,
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
];

export default function TechIconsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('tech-icons-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="tech-icons-section"
      className="relative bg-white overflow-hidden"
      style={{ 
        zIndex: 10,
        paddingTop: 'clamp(48px, 6vw, 64px)',
        paddingBottom: 'clamp(48px, 6vw, 64px)'
      }}
      aria-label="Tech icons section"
    >
      <div className="content-max-width container-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {techIcons.map((icon) => (
            <div
              key={icon.id}
              className={`tech-icon-wrapper flex flex-col items-center justify-center ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${icon.delay}s`,
                animationFillMode: 'both',
              }}
              aria-label={icon.name}
            >
              <div className="tech-icon-float w-16 h-16 md:w-20 md:h-20 text-gray-700 opacity-80 hover:opacity-100 transition-opacity duration-300">
                {icon.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

