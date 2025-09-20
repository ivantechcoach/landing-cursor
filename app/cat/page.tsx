/**
 * Pàgina d'inici - Català
 * Ruta: /cat
 * Refactoritzada amb components modolars per a millor mantenibilitat
 */
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata('cat');

export default function HomePageCAT() {
  return (
    <>
      {/* Hero Section */}
      <Hero language="cat" />

      {/* Testimonials Section */}
      <Testimonials language="cat" />
      
      {/* Final CTA Section */}
      <FinalCTASection language="cat" />
    </>
  );
}
