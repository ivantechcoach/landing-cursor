/**
 * Página de inicio - Español
 * Ruta: /es
 * Refactorizada con componentes modulares para mejor mantenibilidad
 */
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata('es');

export default function HomePageES() {
  return (
    <>
      {/* Hero Section */}
      <Hero language="es" />

      {/* Testimonials Section */}
      <Testimonials language="es" />
      
      {/* Final CTA Section */}
      <FinalCTASection language="es" />
    </>
  );
}
