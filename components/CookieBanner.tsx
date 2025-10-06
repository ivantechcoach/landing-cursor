/**
 * Cookie Banner Component
 * GDPR-compliant cookie consent banner with category management
 */

'use client';

import { useState, useEffect } from 'react';
import { useLocaleSwitcher } from '@/lib/hooks/useLocaleSwitcher';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieBannerProps {
  className?: string;
}

export default function CookieBanner({ className = "" }: CookieBannerProps) {
  const { getCurrentLocale } = useLocaleSwitcher();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false
  });

  const currentLocale = getCurrentLocale();

  // Cookie banner content based on language
  const content = {
    ca: {
      title: 'Cookies i Privacitat',
      message: 'Utilitzem cookies per millorar la teva experiència al nostre lloc web. Les cookies essencials són necessàries per al funcionament bàsic.',
      acceptAll: 'Acceptar totes',
      acceptSelected: 'Acceptar seleccionades',
      rejectAll: 'Rebutjar totes',
      showDetails: 'Veure detalls',
      hideDetails: 'Ocultar detalls',
      essential: 'Cookies essencials',
      essentialDesc: 'Necessàries per al funcionament bàsic del lloc web.',
      analytics: 'Cookies analítiques',
      analyticsDesc: 'Ens ajuden a entendre com els visitants interactuen amb el lloc web.',
      marketing: 'Cookies de màrqueting',
      marketingDesc: 'Utilitzades per mostrar anuncis rellevants i mesurar l\'efectivitat de les campanyes.',
      required: 'Requerides',
      optional: 'Opcionals'
    },
    es: {
      title: 'Cookies y Privacidad',
      message: 'Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Las cookies esenciales son necesarias para el funcionamiento básico.',
      acceptAll: 'Aceptar todas',
      acceptSelected: 'Aceptar seleccionadas',
      rejectAll: 'Rechazar todas',
      showDetails: 'Ver detalles',
      hideDetails: 'Ocultar detalles',
      essential: 'Cookies esenciales',
      essentialDesc: 'Necesarias para el funcionamiento básico del sitio web.',
      analytics: 'Cookies analíticas',
      analyticsDesc: 'Nos ayudan a entender cómo los visitantes interactúan con el sitio web.',
      marketing: 'Cookies de marketing',
      marketingDesc: 'Utilizadas para mostrar anuncios relevantes y medir la efectividad de las campañas.',
      required: 'Requeridas',
      optional: 'Opcionales'
    },
    en: {
      title: 'Cookies and Privacy',
      message: 'We use cookies to improve your experience on our website. Essential cookies are necessary for basic functionality.',
      acceptAll: 'Accept all',
      acceptSelected: 'Accept selected',
      rejectAll: 'Reject all',
      showDetails: 'Show details',
      hideDetails: 'Hide details',
      essential: 'Essential cookies',
      essentialDesc: 'Necessary for the basic functioning of the website.',
      analytics: 'Analytics cookies',
      analyticsDesc: 'Help us understand how visitors interact with the website.',
      marketing: 'Marketing cookies',
      marketingDesc: 'Used to show relevant ads and measure campaign effectiveness.',
      required: 'Required',
      optional: 'Optional'
    }
  };

  const currentContent = content[currentLocale];

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookie-consent', JSON.stringify(onlyEssential));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg ${className}`}>
      <div className="content-max-width container-padding py-4">
        <div className="max-w-4xl mx-auto">
          {/* Main message */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {currentContent.title}
            </h3>
            <p className="text-gray-700 text-sm">
              {currentContent.message}
            </p>
          </div>

          {/* Cookie details */}
          {showDetails && (
            <div className="mb-4 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-3">
                {/* Essential cookies */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="essential"
                    checked={preferences.essential}
                    disabled
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <label htmlFor="essential" className="text-sm font-medium text-gray-900">
                      {currentContent.essential}
                      <span className="ml-2 text-xs text-gray-500">({currentContent.required})</span>
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      {currentContent.essentialDesc}
                    </p>
                  </div>
                </div>

                {/* Analytics cookies */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="analytics"
                    checked={preferences.analytics}
                    onChange={() => togglePreference('analytics')}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <label htmlFor="analytics" className="text-sm font-medium text-gray-900">
                      {currentContent.analytics}
                      <span className="ml-2 text-xs text-gray-500">({currentContent.optional})</span>
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      {currentContent.analyticsDesc}
                    </p>
                  </div>
                </div>

                {/* Marketing cookies */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="marketing"
                    checked={preferences.marketing}
                    onChange={() => togglePreference('marketing')}
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <label htmlFor="marketing" className="text-sm font-medium text-gray-900">
                      {currentContent.marketing}
                      <span className="ml-2 text-xs text-gray-500">({currentContent.optional})</span>
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      {currentContent.marketingDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                {currentContent.acceptAll}
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                {currentContent.rejectAll}
              </button>
              {!showDetails && (
                <button
                  onClick={handleAcceptSelected}
                  className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  {currentContent.acceptSelected}
                </button>
              )}
            </div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 focus:outline-none focus:underline transition-colors"
            >
              {showDetails ? currentContent.hideDetails : currentContent.showDetails}
            </button>
          </div>

          {/* Accept selected button when details are shown */}
          {showDetails && (
            <div className="mt-3 text-center">
              <button
                onClick={handleAcceptSelected}
                className="px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                {currentContent.acceptSelected}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
