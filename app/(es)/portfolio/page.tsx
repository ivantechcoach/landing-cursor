/**
 * Página de Portfolio - Español
 * Ruta: /es/portfolio
 */
export default function PortfolioPageES() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        Mi Portfolio
      </h1>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Proyecto E-commerce</h3>
            <p className="text-gray-600 mb-4">
              Plataforma de comercio electrónico completa con carrito de compras y pagos integrados.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MongoDB</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">App de Gestión</h3>
            <p className="text-gray-600 mb-4">
              Aplicación web para gestión de inventarios con dashboard interactivo.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">PostgreSQL</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Sitio Corporativo</h3>
            <p className="text-gray-600 mb-4">
              Sitio web corporativo con CMS personalizado y optimización SEO.
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
