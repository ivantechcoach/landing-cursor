/**
 * Home Page - English
 * Route: /en
 * Refactored with modular components for better maintainability
 */
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata('en');

export default function HomePageEN() {
  return (
    <>
      {/* Hero Section */}
      <Hero language="en" />

      {/* Testimonials Section */}
      <Testimonials language="en" />
      
      {/* Final CTA Section */}
      <FinalCTASection language="en" />
    </>
  );
}
