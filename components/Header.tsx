/**
 * Header Component
 * Reusable header component with navigation and language switcher
 */
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';
import { Locale, LOCALES, getLocaleDisplayName, getLocaleShortCode, buildLocalizedLink } from '@/lib/i18n';
import { getNavigationItems, getUITranslations } from '@/lib/translations';

interface HeaderProps {
  language?: 'es' | 'en' | 'cat';
}

export default function Header({ language = 'es' }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { switchLocale, getCurrentLocale } = useLocaleSwitcher();
  const mainRef = useRef<HTMLElement>(null);
  
  // Get current locale and translations
  const currentLocale = getCurrentLocale();
  const currentNav = getNavigationItems(currentLocale);
  const ui = getUITranslations(currentLocale);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle locale switching with focus management
  const handleLocaleSwitch = (newLocale: Locale) => {
    switchLocale(newLocale);
    
    // Move focus to main content after locale change
    // Use setTimeout to ensure DOM is updated
    setTimeout(() => {
      const mainElement = document.querySelector('main h1') as HTMLElement;
      if (mainElement) {
        mainElement.focus();
      }
    }, 100);
  };

  return (
    <>
      {/* Skip Link - First in tab order */}
      <a 
        href={buildLocalizedLink(pathname, '', 'main-content')}
        className="skip-link"
        onFocus={(e) => {
          // Ensure skip link is visible when focused
          e.target.style.top = '1rem';
        }}
        onBlur={(e) => {
          // Hide skip link when not focused
          e.target.style.top = '-100%';
        }}
      >
        {ui.skipToContent}
      </a>
      
      <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
        <div className="content-max-width container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href={buildLocalizedLink(pathname, '/')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity header-focus"
              aria-label={`${currentNav[0].name} — Ivan Tech Coach`}
            >
              <Image
                src="/images/about/portrait-ivan.webp"
                alt="Ivan Tech Coach - Portrait"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-600"
                priority
              />
              <span className="text-2xl font-bold text-gray-900">
                Ivan Tech Coach
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" role="navigation" aria-label={ui.mainNavigation}>
            {currentNav.map((item) => {
              const localizedHref = buildLocalizedLink(pathname, item.href);
              const isActive = pathname === localizedHref;
              return (
                <Link
                  key={item.name}
                  href={localizedHref}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors header-link-focus ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={item.ariaLabel}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-1" role="group" aria-label={ui.selectLanguage}>
            {LOCALES.map((locale) => {
              const isActive = currentLocale === locale;
              return (
                <button
                  key={locale}
                  type="button"
                  onClick={() => handleLocaleSwitch(locale)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 header-button-focus ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  aria-pressed={isActive}
                  aria-current={isActive ? 'true' : 'false'}
                  aria-label={ui.changeLanguage(getLocaleDisplayName(locale))}
                  data-active={isActive}
                >
                  {getLocaleShortCode(locale)}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 header-focus transition-colors p-2 rounded-md"
              aria-label={ui.toggleMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <nav role="navigation" aria-label={ui.mobileNavigation}>
                {currentNav.map((item) => {
                  const localizedHref = buildLocalizedLink(pathname, item.href);
                  const isActive = pathname === localizedHref;
                  return (
                    <Link
                      key={item.name}
                      href={localizedHref}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors header-link-focus ${
                        isActive
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={item.ariaLabel}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <div className="px-3">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">{ui.selectLanguage}</h3>
                  <div className="flex space-x-2" role="group" aria-label={ui.selectLanguage}>
                    {LOCALES.map((locale) => {
                      const isActive = currentLocale === locale;
                      return (
                        <button
                          key={locale}
                          type="button"
                          onClick={() => {
                            handleLocaleSwitch(locale);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 header-button-focus ${
                            isActive
                              ? 'bg-blue-600 text-white shadow-sm'
                              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          aria-pressed={isActive}
                          aria-current={isActive ? 'true' : 'false'}
                          aria-label={ui.changeLanguage(getLocaleDisplayName(locale))}
                          data-active={isActive}
                        >
                          {getLocaleDisplayName(locale)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
