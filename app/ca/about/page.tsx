/**
 * Página Acerca de - Español
 * Ruta: /es/about
 */
import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { buildBreadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = generateSEOMetadata('ca', 'about');

export default function AboutPageCA() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd('ca', ['about'])) }}
      />
      <h1 className="text-4xl font-bold text-center py-8">
        Sobre mi
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-lg text-gray-700 leading-relaxed">
          Soc un desenvolupador apassionat per la tecnologia i la innovació. Amb més de 5 anys d'experiència en desenvolupament web,
          estic especialitzat a crear solucions digitals que combinen funcionalitat, disseny i un rendiment excepcional.
        </p>
      </div>
    </main>
  );
}
