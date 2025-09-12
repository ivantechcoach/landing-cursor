/**
 * Página de Servicios - Español
 * Ruta: /es/services
 */
export default function ServicesPageES() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        Mis Servicios
      </h1>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Desarrollo Web</h3>
          <p className="text-gray-600">
            Creación de sitios web modernos y responsivos usando las últimas tecnologías.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Aplicaciones Móviles</h3>
          <p className="text-gray-600">
            Desarrollo de aplicaciones móviles nativas e híbridas para iOS y Android.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Consultoría Técnica</h3>
          <p className="text-gray-600">
            Asesoramiento en arquitectura de software y mejores prácticas de desarrollo.
          </p>
        </div>
      </div>
    </main>
  );
}
