/**
 * Página Acerca de - Español
 * Ruta: /es/about
 */
import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata('es', 'about');

export default function AboutPageES() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        Acerca de Mí
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-lg text-gray-700 leading-relaxed">
          Soy un desarrollador apasionado por la tecnología y la innovación. 
          Con más de 5 años de experiencia en el desarrollo web, me especializo 
          en crear soluciones digitales que combinan funcionalidad, diseño y 
          rendimiento excepcional.
        </p>
      </div>
    </main>
  );
}
