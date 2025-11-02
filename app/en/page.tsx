/**
 * Home Page - English
 * Route: /en
 * Refactored with modular components for better maintainability
 */
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HeroCTA from '@/components/sections/HeroCTA';
import Testimonials from '@/components/Testimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = generateSEOMetadata('en');

export default function HomePageEN() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd('en', [])) }}
      />
      {/* Hero Section */}
      <Hero language="en" />

      {/* Hero CTA Section - After wave transition */}
      <HeroCTA language="en" />

      {/* Testimonials Section */}
      <Testimonials language="en" />
      
      {/* Final CTA Section */}
      <FinalCTASection language="en" />
    </>
  );
}
