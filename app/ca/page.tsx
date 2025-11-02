/**
 * Página de inicio - Català
 * Ruta: /ca
 * Refactorizada amb components modulares per millor mantenibilitat
 */
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HeroCTA from '@/components/sections/HeroCTA';
import Testimonials from '@/components/Testimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = generateSEOMetadata('ca');

export default function HomePageCA() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd('ca', [])) }}
      />
      {/* Hero Section */}
      <Hero language="ca" />

      {/* Hero CTA Section - After wave transition */}
      <HeroCTA language="ca" />

      {/* Testimonials Section */}
      <Testimonials language="ca" />
      
      {/* Final CTA Section */}
      <FinalCTASection language="ca" />
    </>
  );
}
