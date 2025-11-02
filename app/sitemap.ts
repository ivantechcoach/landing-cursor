/**
 * Sitemap Configuration with Hreflang
 * Generates sitemap with proper hreflang attributes for multilingual SEO
 */
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ivantechcoach.com';
  
  // Define all routes for each locale
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/services', priority: 0.9 },
    { path: '/portfolio', priority: 0.7 },
    { path: '/blog', priority: 0.6 },
    { path: '/contact', priority: 0.8 },
  ];

  const locales = ['es', 'en', 'ca'];
  const sitemap: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each route and locale
  routes.forEach(route => {
    locales.forEach(locale => {
      const url = `${baseUrl}/${locale}${route.path}`;
      
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: route.path === '' ? 'weekly' : 'monthly',
        priority: route.priority,
        alternates: {
          languages: {
            'es-ES': `${baseUrl}/es${route.path}`,
            'en-US': `${baseUrl}/en${route.path}`,
            'ca-ES': `${baseUrl}/ca${route.path}`,
          },
        },
      });
    });
  });

  // Add root redirect entry
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
    alternates: {
      languages: {
        'es-ES': `${baseUrl}/es`,
        'en-US': `${baseUrl}/en`,
        'ca-ES': `${baseUrl}/ca`,
        'x-default': `${baseUrl}/es`,
      },
    },
  });

  return sitemap;
}
