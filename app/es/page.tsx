/**
 * Página de inicio - Español
 * Ruta: /es
 * Refactorizada con componentes modulares para mejor mantenibilidad
 */
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import HeroCTA from '@/components/sections/HeroCTA';
import Testimonials from '@/components/Testimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = generateSEOMetadata('es');

export default function HomePageES() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd('es', [])) }}
      />
      {/* Hero Section */}
      <Hero language="es" />

      {/* Services Section */}
      <ServicesSection language="es" />

      {/* Hero CTA Section - After wave transition */}
      <HeroCTA language="es" />

      {/* Testimonials Section */}
      <Testimonials language="es" />
      
      {/* Final CTA Section */}
      <FinalCTASection language="es" />
    </>
  );
}
