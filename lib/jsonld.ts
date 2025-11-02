/**
 * JSON-LD helper utilities
 */

export type SupportedLocale = 'ca' | 'es' | 'en';

function getBaseUrl(): string {
  return 'https://ivantechcoach.com';
}

export function buildBreadcrumbJsonLd(locale: SupportedLocale, segments: string[]): object {
  const base = getBaseUrl();
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: locale.toUpperCase(),
      item: `${base}/${locale}`,
    },
    ...segments.map((seg, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: seg.charAt(0).toUpperCase() + seg.slice(1),
      item: `${base}/${locale}/${segments.slice(0, index + 1).join('/')}`,
    })),
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

export function buildFaqJsonLd(qa: { question: string; answer: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function buildArticleJsonLd(params: {
  locale: SupportedLocale;
  url: string;
  title: string;
  description: string;
  image?: string;
  datePublished: string; // ISO
  dateModified?: string; // ISO
  authorName: string;
}): object {
  const {
    locale,
    url,
    title,
    description,
    image,
    datePublished,
    dateModified,
    authorName,
  } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: locale === 'ca' ? 'ca-ES' : locale === 'es' ? 'es-ES' : 'en-US',
    mainEntityOfPage: url,
    image: image ? [image] : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ivan Tech Coach',
      logo: {
        '@type': 'ImageObject',
        url: `${getBaseUrl()}/images/branding/logo.svg`,
      },
    },
  };
}


