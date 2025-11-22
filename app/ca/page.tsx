/**
 * Página de inicio - Català
 * Ruta: /ca
 * Refactorizada amb components modulares per millor mantenibilitat
 */
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import TechIconsSection from '@/components/sections/TechIconsSection';
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

      {/* Services Section with Tech Background */}
      <section className="services-background">
        <ServicesSection language="ca" />
      </section>

      {/* FAQ Section with AI Tech Background */}
      <section className="faq-background" style={{ marginBottom: 0, paddingBottom: 0 }}>
        <FAQSection language="ca" />
      </section>
      
      {/* Final CTA Section */}
      <FinalCTASection language="ca" />
      
      {/* Tech Icons Section */}
      <TechIconsSection />
    </>
  );
}
