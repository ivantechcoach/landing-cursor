/**
 * useLocaleSwitcher Hook
 * Custom hook for handling locale switching with path/hash preservation
 */

import { useRouter, usePathname } from 'next/navigation';
import { useCallback, useEffect, useTransition } from 'react';
import { Locale, getLocaleFromPathname, getPathnameWithoutLocale, buildLocalizedPath } from '../i18n';

export function useLocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // Restore scroll position after locale change
  useEffect(() => {
    const restoreScroll = () => {
      try {
        const savedScrollY = sessionStorage.getItem('scrollY');
        if (savedScrollY) {
          const scrollY = parseInt(savedScrollY, 10);
          // Wait for DOM to be ready, then restore scroll position
          // Use multiple frames to ensure content is rendered
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              window.scrollTo({ top: scrollY, behavior: 'instant' });
              // Clear the stored value after restoring
              sessionStorage.removeItem('scrollY');
            });
          });
        }
      } catch {}
    };

    // Small delay to ensure page content is rendered after navigation
    const timeoutId = setTimeout(restoreScroll, 100);
    return () => clearTimeout(timeoutId);
  }, [pathname]);

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

    // Preserve current scroll position before navigation
    const scrollY = window.scrollY;
    try {
      sessionStorage.setItem('scrollY', String(scrollY));
    } catch {}

    // Navigate to new locale preserving path, hash, and search params
    // Use replace() instead of push() to avoid full page refresh and history entry
    // scroll: false prevents automatic scroll to top
    // Wrap in startTransition to avoid blocking the UI
    startTransition(() => {
      router.replace(newPath, { scroll: false });
    });
  }, [router, pathname, startTransition]);

  const getCurrentLocale = useCallback((): Locale => {
    return getLocaleFromPathname(pathname);
  }, [pathname]);

  return {
    switchLocale,
    getCurrentLocale,
    isPending,
  };
}
