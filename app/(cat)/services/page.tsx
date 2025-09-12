/**
 * Pàgina de Serveis - Català
 * Ruta: /cat/services
 */
export default function ServicesPageCAT() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        Els meus Serveis
      </h1>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Desenvolupament Web</h3>
          <p className="text-gray-600">
            Creació de llocs web moderns i responsius utilitzant les últimes tecnologies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Aplicacions Mòbils</h3>
          <p className="text-gray-600">
            Desenvolupament d'aplicacions mòbils natives i híbrides per a iOS i Android.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Consultoria Tècnica</h3>
          <p className="text-gray-600">
            Assessorament en arquitectura de programari i millors pràctiques de desenvolupament.
          </p>
        </div>
      </div>
    </main>
  );
}
