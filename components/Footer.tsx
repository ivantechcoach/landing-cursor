/**
 * Footer Component
 * Reusable footer component with links and social media
 */
'use client';

import Link from 'next/link';

interface FooterProps {
  language?: 'es' | 'en' | 'cat';
}

export default function Footer({ language = 'es' }: FooterProps) {
  // Get environment variables
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
  const contactAddress = process.env.NEXT_PUBLIC_CONTACT_ADDRESS;

  // Footer content based on language
  const content = {
    es: {
      title: 'Ivan Tech Coach',
      description: 'Coaching Tecnológico Profesional - Transforma tu carrera tecnológica con coaching personalizado.',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados.',
      madeBy: 'Hecho por Ivan con la ayuda de IA como Gemini y Cursor para demostrar habilidades de Context Engineering y Vibe Coding.',
      contactCTA: 'Contáctame',
    },
    en: {
      title: 'Ivan Tech Coach',
      description: 'Professional Tech Coaching - Transform your tech career with personalized coaching.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      madeBy: 'Made by Ivan with the help of AI like Gemini and Cursor to demonstrate Context Engineering and Vibe Coding skills.',
      contactCTA: 'Contact Me',
    },
    cat: {
      title: 'Ivan Tech Coach',
      description: 'Coaching Tecnològic Professional - Transforma la teva carrera tecnològica amb coaching personalitzat.',
      quickLinks: 'Enllaços Ràpids',
      contact: 'Contacte',
      followUs: 'Segueix-nos',
      rights: 'Tots els drets reservats.',
      madeBy: 'Fet per Ivan amb l\'ajuda d\'IA com Gemini i Cursor per demostrar habilitats de Context Engineering i Vibe Coding.',
      contactCTA: 'Contacta\'m',
    },
  };

  const currentContent = content[language];

  const quickLinks = {
    es: [
      { name: 'Inicio', href: '/es' },
      { name: 'Acerca de', href: '/es/about' },
      { name: 'Servicios', href: '/es/services' },
      { name: 'Portfolio', href: '/es/portfolio' },
      { name: 'Blog', href: '/es/blog' },
      { name: 'Contacto', href: '/es/contact' },
    ],
    en: [
      { name: 'Home', href: '/en' },
      { name: 'About', href: '/en/about' },
      { name: 'Services', href: '/en/services' },
      { name: 'Portfolio', href: '/en/portfolio' },
      { name: 'Blog', href: '/en/blog' },
      { name: 'Contact', href: '/en/contact' },
    ],
    cat: [
      { name: 'Inici', href: '/cat' },
      { name: 'Sobre mi', href: '/cat/about' },
      { name: 'Serveis', href: '/cat/services' },
      { name: 'Portfolio', href: '/cat/portfolio' },
      { name: 'Blog', href: '/cat/blog' },
      { name: 'Contacte', href: '/cat/contact' },
    ],
  };

  const currentLinks = quickLinks[language];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{currentContent.title}</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {currentContent.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/ivan-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/ivan-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/ivan-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/ivan-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{currentContent.quickLinks}</h4>
            <ul className="space-y-2">
              {currentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{currentContent.contact}</h4>
            <div className="space-y-2 text-gray-300">
              {contactEmail ? (
                <a 
                  href={`mailto:${contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {contactEmail}
                </a>
              ) : (
                <Link 
                  href={`/${language}/contact`}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  {currentContent.contactCTA}
                </Link>
              )}
              {contactPhone && (
                <a 
                  href={`tel:${contactPhone}`}
                  className="hover:text-white transition-colors block"
                >
                  {contactPhone}
                </a>
              )}
              {contactAddress && (
                <p>{contactAddress}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">&copy; 2024 {currentContent.title}. {currentContent.rights}</p>
            <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed mb-4">
              {currentContent.madeBy}
            </p>
            <div className="bg-gray-800/50 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong>Transparencia sobre IA:</strong> Este sitio web fue desarrollado con la asistencia de herramientas de IA (Gemini y Cursor) 
                para demostrar habilidades de Context Engineering y Vibe Coding. El contenido y la estrategia de marca son auténticos y 
                representan la experiencia real de Ivan como Tech Coach profesional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
