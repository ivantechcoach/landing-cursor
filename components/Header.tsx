/**
 * Header Component
 * Reusable header component with navigation and language switcher
 */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface HeaderProps {
  language?: 'es' | 'en' | 'cat';
}

export default function Header({ language = 'es' }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Navigation items based on language
  const navigation = {
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

  const currentNav = navigation[language];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href={`/${language}`} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image
                src="/images/branding/logo.svg"
                alt="Ivan Tech Coach Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-gray-900">
                Ivan Tech Coach
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {currentNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="/es"
              className={`px-2 py-1 text-sm rounded transition-colors ${
                language === 'es' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              ES
            </Link>
            <Link
              href="/en"
              className={`px-2 py-1 text-sm rounded transition-colors ${
                language === 'en' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              EN
            </Link>
            <Link
              href="/cat"
              className={`px-2 py-1 text-sm rounded transition-colors ${
                language === 'cat' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              CAT
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {currentNav.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex space-x-4 px-3">
                  <Link
                    href="/es"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm rounded transition-colors ${
                      language === 'es' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    ES
                  </Link>
                  <Link
                    href="/en"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm rounded transition-colors ${
                      language === 'en' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    EN
                  </Link>
                  <Link
                    href="/cat"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-3 py-2 text-sm rounded transition-colors ${
                      language === 'cat' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    CAT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
