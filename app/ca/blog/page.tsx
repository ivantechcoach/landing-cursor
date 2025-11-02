import { buildBreadcrumbJsonLd } from '@/lib/jsonld';
/**
 * Pàgina de Blog - Català
 * Ruta: /ca/blog
 */
export default function BlogPageCA() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd('ca', ['blog'])) }}
      />
      <h1 className="text-4xl font-bold text-center py-8">
        El meu blog
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Bones pràctiques en el desenvolupament web modern
            </h2>
            <p className="text-gray-600 mb-4">
              Descobreix les tècniques i eines més efectives per crear aplicacions web escalables i mantenibles el 2024.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">15 de març de 2024</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Desenvolupament
              </span>
            </div>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Optimització del rendiment en React
            </h2>
            <p className="text-gray-600 mb-4">
              Aprèn tècniques avançades per millorar el rendiment de les teves aplicacions React i oferir una millor experiència d'usuari.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">8 de març de 2024</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                React
              </span>
            </div>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Introducció a TypeScript per a desenvolupadors JavaScript
            </h2>
            <p className="text-gray-600 mb-4">
              Guia completa per migrar de JavaScript a TypeScript i aprofitar tots els seus beneficis en projectes a gran escala.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">1 de març de 2024</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                TypeScript
              </span>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
