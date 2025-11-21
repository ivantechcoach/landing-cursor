/**
 * Página de inicio - Español
 * Ruta: /es
 * Refactorizada con componentes modulares para mejor mantenibilidad
 */
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import SectionTransition from '@/components/sections/SectionTransition';
import FAQSection from '@/components/sections/FAQSection';
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

      {/* Services Section with Tech Background */}
      <section className="services-background">
        <ServicesSection language="es" />
      </section>

      {/* FAQ Section with AI Tech Background */}
      <section className="faq-background" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <FAQSection language="es" />
      </section>
      
      {/* Final CTA Section */}
      <FinalCTASection language="es" />
    </>
  );
}
