/**
 * Página de Blog - Español
 * Ruta: /es/blog
 */
export default function BlogPageES() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        Mi Blog
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Las Mejores Prácticas en Desarrollo Web Moderno
            </h2>
            <p className="text-gray-600 mb-4">
              Descubre las técnicas y herramientas más efectivas para crear aplicaciones web 
              escalables y mantenibles en 2024.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">15 de Marzo, 2024</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Desarrollo
              </span>
            </div>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Optimización de Rendimiento en React
            </h2>
            <p className="text-gray-600 mb-4">
              Aprende técnicas avanzadas para mejorar el rendimiento de tus aplicaciones 
              React y proporcionar una mejor experiencia de usuario.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">8 de Marzo, 2024</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                React
              </span>
            </div>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Introducción a TypeScript para Desarrolladores JavaScript
            </h2>
            <p className="text-gray-600 mb-4">
              Guía completa para migrar de JavaScript a TypeScript y aprovechar 
              todos sus beneficios en proyectos de gran escala.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">1 de Marzo, 2024</span>
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
