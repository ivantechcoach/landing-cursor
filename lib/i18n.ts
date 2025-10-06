/**
 * i18n Utility Functions
 * Custom internationalization utilities for Ivan Tech Coach
 */

export type Locale = 'es' | 'en' | 'cat';

export const LOCALES: Locale[] = ['es', 'en', 'cat'];

export const DEFAULT_LOCALE: Locale = 'es';

/**
 * Get locale from pathname
 * @param pathname - Current pathname (e.g., '/es/about', '/en/services')
 * @returns Locale or default locale
 */
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (LOCALES.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return DEFAULT_LOCALE;
}

/**
 * Get pathname without locale prefix
 * @param pathname - Current pathname (e.g., '/es/about', '/en/services')
 * @returns Pathname without locale (e.g., '/about', '/services')
 */
export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (LOCALES.includes(firstSegment as Locale)) {
    return `/${segments.slice(1).join('/')}`;
  }
  
  return pathname;
}

/**
 * Build localized pathname
 * @param locale - Target locale
 * @param pathname - Current pathname without locale
 * @param hash - Optional hash fragment
 * @param search - Optional search params
 * @returns Localized pathname
 */
export function buildLocalizedPath(
  locale: Locale,
  pathname: string = '/',
  hash?: string,
  search?: string
): string {
  // Ensure pathname starts with /
  const cleanPathname = pathname.startsWith('/') ? pathname : `/${pathname}`;
  
  // Build the full path
  let fullPath = `/${locale}${cleanPathname}`;
  
  // Add search params if provided
  if (search) {
    fullPath += `?${search}`;
  }
  
  // Add hash if provided
  if (hash) {
    fullPath += `#${hash}`;
  }
  
  return fullPath;
}

/**
 * Get locale display name
 * @param locale - Locale code
 * @returns Display name for the locale
 */
export function getLocaleDisplayName(locale: Locale): string {
  const displayNames = {
    es: 'Español',
    en: 'English',
    cat: 'Català',
  };
  
  return displayNames[locale];
}

/**
 * Get locale short code for display
 * @param locale - Locale code
 * @returns Short code (ES, EN, CAT)
 */
export function getLocaleShortCode(locale: Locale): string {
  return locale.toUpperCase();
}

/**
 * Build localized link with current locale
 * @param pathname - Current pathname
 * @param targetPath - Target path (e.g., '/about', '/contact')
 * @param hash - Optional hash fragment
 * @param search - Optional search params
 * @returns Localized link
 */
export function buildLocalizedLink(
  pathname: string,
  targetPath: string,
  hash?: string,
  search?: string
): string {
  const currentLocale = getLocaleFromPathname(pathname);
  return buildLocalizedPath(currentLocale, targetPath, hash, search);
}