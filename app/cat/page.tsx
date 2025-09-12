/**
 * Pàgina d'inici - Català
 * Ruta: /cat
 */
import Hero from '@/components/Hero';

export default function HomePageCAT() {
  return (
    <main className="min-h-screen">
      <Hero language="cat" />
      
      {/* Additional sections can be added here */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Per què triar Ivan Tech Coach?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Coaching Personalitzat</h3>
                <p className="text-gray-600">
                  Cada sessió està adaptada a les teves necessitats específiques i objectius professionals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Tecnologies Actuals</h3>
                <p className="text-gray-600">
                  Aprèn les tecnologies més demandades del mercat laboral actual.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Resultats Garantits</h3>
                <p className="text-gray-600">
                  Metodologia provada que ha ajudat a més de 100 professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
