/**
 * Pàgina de Blog - Català
 * Ruta: /cat/blog
 */
export default function BlogPageCAT() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        El meu Blog
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Les Millors Pràctiques en Desenvolupament Web Modern
            </h2>
            <p className="text-gray-600 mb-4">
              Descobreix les tècniques i eines més efectives per crear aplicacions web 
              escalables i mantenibles el 2024.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">15 de Març, 2024</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Desenvolupament
              </span>
            </div>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Optimització de Rendiment en React
            </h2>
            <p className="text-gray-600 mb-4">
              Aprèn tècniques avançades per millorar el rendiment de les teves aplicacions 
              React i proporcionar una millor experiència d'usuari.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">8 de Març, 2024</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                React
              </span>
            </div>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Introducció a TypeScript per a Desenvolupadors JavaScript
            </h2>
            <p className="text-gray-600 mb-4">
              Guia completa per migrar de JavaScript a TypeScript i aprofitar 
              tots els seus beneficis en projectes de gran escala.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">1 de Març, 2024</span>
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
