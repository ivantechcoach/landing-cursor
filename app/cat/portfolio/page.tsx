/**
 * Pàgina de Portfolio - Català
 * Ruta: /cat/portfolio
 */
import type { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata('cat', 'portfolio');

export default function PortfolioPageCAT() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        El meu Portfolio
      </h1>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Projecte E-commerce</h3>
            <p className="text-gray-600 mb-4">
              Plataforma de comerç electrònic completa amb cistell de compres i pagaments integrats.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MongoDB</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">App de Gestió</h3>
            <p className="text-gray-600 mb-4">
              Aplicació web per a gestió d'inventaris amb dashboard interactiu.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">PostgreSQL</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Lloc Web Corporatiu</h3>
            <p className="text-gray-600 mb-4">
              Lloc web corporatiu amb CMS personalitzat i optimització SEO.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Vue.js</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Strapi</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
