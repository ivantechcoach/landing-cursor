/** @type {import('next').NextConfig} */
const nextConfig = {
  // Internationalization configuration
  i18n: {
    locales: ['es', 'en', 'cat'],
    defaultLocale: 'es',
    localeDetection: false,
  },
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Build optimizations
  swcMinify: true,
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Redirects for SEO - Removed to avoid conflict with app/page.tsx
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/es',
  //       permanent: true,
  //     },
  //   ];
  // },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
