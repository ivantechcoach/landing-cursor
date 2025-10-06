/**
 * Footer Component
 * Minimal footer with social media, copyright and legal links only
 */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buildLocalizedLink } from '@/lib/i18n';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';

interface FooterProps {
  language?: 'ca' | 'es' | 'en';
}

export default function Footer({ language = 'ca' }: FooterProps) {
  const pathname = usePathname();
  const { getCurrentLocale } = useLocaleSwitcher();
  
  // Get current locale
  const currentLocale = getCurrentLocale();
  
  // Footer content based on language
  const content = {
    ca: {
      title: 'Ivan Tech Coach',
      description: 'Coaching Tecnològic Professional - Transforma la teva carrera tecnològica amb coaching personalitzat.',
      followUs: 'Segueix-nos',
      rights: 'Tots els drets reservats.',
      madeBy: 'Fet per Ivan amb l\'ajuda d\'IA com Gemini i Cursor per demostrar habilitats de Context Engineering i Vibe Coding.',
      legal: {
        privacy: 'Política de privacitat',
        cookies: 'Política de cookies',
        terms: 'Termes d\'ús'
      }
    },
    es: {
      title: 'Ivan Tech Coach',
      description: 'Coaching Tecnológico Profesional - Transforma tu carrera tecnológica con coaching personalizado.',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados.',
      madeBy: 'Hecho por Ivan con la ayuda de IA como Gemini y Cursor para demostrar habilidades de Context Engineering y Vibe Coding.',
      legal: {
        privacy: 'Política de privacidad',
        cookies: 'Política de cookies',
        terms: 'Términos de uso'
      }
    },
    en: {
      title: 'Ivan Tech Coach',
      description: 'Professional Tech Coaching - Transform your tech career with personalized coaching.',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
      madeBy: 'Made by Ivan with the help of AI like Gemini and Cursor to demonstrate Context Engineering and Vibe Coding skills.',
      legal: {
        privacy: 'Privacy Policy',
        cookies: 'Cookie Policy',
        terms: 'Terms of Use'
      }
    },
  };

  const currentContent = content[currentLocale];

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="content-max-width container-padding py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-2">{currentContent.title}</h3>
            <p className="text-gray-300 text-sm max-w-md">
              {currentContent.description}
            </p>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1 text-center">
            <h4 className="text-sm font-semibold mb-3 text-gray-400">{currentContent.followUs}</h4>
            <div className="flex justify-center space-x-4" role="list" aria-label="Social media links">
              <a
                href="https://linkedin.com/in/ivan-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="LinkedIn - Connect with Ivan on LinkedIn"
                role="listitem"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/ivan-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="GitHub - View Ivan's code on GitHub"
                role="listitem"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/ivan-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Twitter - Follow Ivan on Twitter"
                role="listitem"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-1">
            <div className="flex flex-col space-y-2 text-sm">
              <Link
                href={buildLocalizedLink(pathname, '/privacy-policy')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {currentContent.legal.privacy}
              </Link>
              <Link
                href={buildLocalizedLink(pathname, '/cookie-policy')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {currentContent.legal.cookies}
              </Link>
              <Link
                href={buildLocalizedLink(pathname, '/terms-of-use')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {currentContent.legal.terms}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {currentContent.title}. {currentContent.rights}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            {currentContent.madeBy}
          </p>
        </div>
      </div>
    </footer>
  );
}