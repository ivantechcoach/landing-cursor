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
import { useDebbieCodesNavbar } from '@/lib/hooks/useDebbieCodesNavbar';
import { Locale, LOCALES, getLocaleDisplayName, getLocaleShortCode, buildLocalizedLink } from '@/lib/i18n';
import { getNavigationItems, getUITranslations } from '@/lib/translations';

interface HeaderProps {
  language?: 'ca' | 'es' | 'en';
}

export default function Header({ language = 'ca' }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { switchLocale, getCurrentLocale } = useLocaleSwitcher();
  const { isScrolled } = useDebbieCodesNavbar({ threshold: 50 });
  const mainRef = useRef<HTMLElement>(null);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  
  // Get current locale and translations
  const currentLocale = getCurrentLocale();
  const currentNav = getNavigationItems(currentLocale);
  const ui = getUITranslations(currentLocale);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageSelect = (newLocale: Locale) => {
    switchLocale(newLocale);
    setIsLanguageMenuOpen(false);
    
    // Move focus to main content after locale change
    setTimeout(() => {
      const mainElement = document.querySelector('main h1') as HTMLElement;
      if (mainElement) {
        mainElement.focus();
      }
    }, 100);
  };

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    if (isLanguageMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

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
      
      <header 
        className={`navbar-debbie-codes fixed top-0 left-0 right-0 bg-white ${isScrolled ? 'shadow-md' : ''} z-50`}
        role="banner"
        style={{ height: '80px' }}
      >
        <div className="content-max-width container-padding">
        <div className="flex justify-between items-center h-20">
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
                loading="lazy"
              />
              <span className="text-2xl font-bold text-gray-900 transition-colors duration-300">
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
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 header-link-focus ${
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

          {/* Language Selector - Compact Dropdown */}
          <div className="hidden md:flex items-center" ref={languageMenuRef}>
            <div className="relative">
              <button
                type="button"
                onClick={toggleLanguageMenu}
                className="language-selector-button flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 header-button-focus bg-gray-100 hover:bg-gray-200 text-gray-700 solid"
                aria-label={ui.selectLanguage}
                aria-expanded={isLanguageMenuOpen}
                aria-haspopup="true"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>{getLocaleShortCode(currentLocale)}</span>
                <svg 
                  className={`w-3 h-3 transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20 py-2 z-50 language-dropdown lang-switcher">
                  {LOCALES.map((locale) => {
                    const isActive = currentLocale === locale;
                    return (
                      <button
                        key={locale}
                        type="button"
                        onClick={() => handleLanguageSelect(locale)}
                        className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-150 flex items-center justify-between ${
                          isActive
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                        aria-current={isActive ? 'true' : 'false'}
                        aria-label={ui.changeLanguage(getLocaleDisplayName(locale))}
                      >
                        <span>{getLocaleDisplayName(locale)}</span>
                        <span className="text-xs text-gray-500">{getLocaleShortCode(locale)}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="header-focus transition-all duration-300 p-2 rounded-md text-gray-700 hover:text-blue-600"
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

        {/* Mobile Navigation Menu - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-50 md:hidden" 
            id="mobile-menu"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          >
            <div className="flex flex-col h-full">
              {/* Header with profile and close button */}
              <div className="flex justify-between items-center p-6 border-b border-white/20">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/about/portrait-ivan.webp"
                    alt="Ivan Tech Coach - Portrait"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-600"
                    loading="lazy"
                  />
                  <span className="text-xl font-bold text-white">
                    Ivan Tech Coach
                  </span>
                </div>
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className="text-white hover:text-white/80 transition-colors p-2"
                  aria-label="Cerrar menú"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center items-center space-y-8 px-6">
                <nav role="navigation" aria-label={ui.mobileNavigation} className="text-center">
                  {currentNav.map((item) => {
                    const localizedHref = buildLocalizedLink(pathname, item.href);
                    const isActive = pathname === localizedHref;
                    return (
                      <Link
                        key={item.name}
                        href={localizedHref}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block text-2xl font-medium transition-colors header-link-focus mb-6 ${
                          isActive
                            ? 'text-blue-400'
                            : 'text-white hover:text-blue-400'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                        aria-label={item.ariaLabel}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Language Switcher - Mobile */}
              <div className="p-6 border-t border-white/20">
                <div className="text-center">
                  <h3 className="text-sm font-medium text-white/80 mb-4">{ui.selectLanguage}</h3>
                  <div className="flex justify-center space-x-2" role="group" aria-label={ui.selectLanguage}>
                    {LOCALES.map((locale) => {
                      const isActive = currentLocale === locale;
                      return (
                        <button
                          key={locale}
                          type="button"
                          onClick={() => {
                            handleLanguageSelect(locale);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 header-button-focus flex flex-col items-center ${
                            isActive
                              ? 'bg-blue-600 text-white'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                          }`}
                          aria-pressed={isActive}
                          aria-current={isActive ? 'true' : 'false'}
                          aria-label={ui.changeLanguage(getLocaleDisplayName(locale))}
                          data-active={isActive}
                        >
                          <span className="text-lg font-bold">{getLocaleShortCode(locale)}</span>
                          <span className="text-xs">{getLocaleDisplayName(locale)}</span>
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
