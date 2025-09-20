/**
 * useLocaleSwitcher Hook
 * Custom hook for handling locale switching with path/hash preservation
 */

import { useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { Locale, getLocaleFromPathname, getPathnameWithoutLocale, buildLocalizedPath } from '../i18n';

export function useLocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = useCallback((newLocale: Locale) => {
    // Get current locale and pathname without locale
    const currentLocale = getLocaleFromPathname(pathname);
    const pathWithoutLocale = getPathnameWithoutLocale(pathname);
    
    // If already on the same locale, do nothing
    if (currentLocale === newLocale) {
      return;
    }

    // Get current URL parts
    const currentUrl = new URL(window.location.href);
    const hash = currentUrl.hash.slice(1); // Remove # from hash
    const search = currentUrl.search.slice(1); // Remove ? from search

    // Build new localized path
    const newPath = buildLocalizedPath(newLocale, pathWithoutLocale, hash, search);

    // Navigate to new locale preserving path, hash, and search params
    router.push(newPath);
  }, [router, pathname]);

  const getCurrentLocale = useCallback((): Locale => {
    return getLocaleFromPathname(pathname);
  }, [pathname]);

  return {
    switchLocale,
    getCurrentLocale,
  };
}
