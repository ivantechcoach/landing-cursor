/**
 * Página de inicio - Español
 * Ruta: /es
 * Optimizada para generación de leads
 */
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import ContentPreview from '@/components/ContentPreview';

export default function HomePageES() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero language="es" />
      
      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Ivan Tech Coach?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 5 años ayudando a profesionales a acelerar sus carreras tecnológicas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Coaching Personalizado</h3>
              <p className="text-gray-600">
                Cada sesión está adaptada a tus necesidades específicas y objetivos profesionales únicos.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Tecnologías Actuales</h3>
              <p className="text-gray-600">
                Aprende las tecnologías más demandadas del mercado laboral actual con casos reales.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Resultados Garantizados</h3>
              <p className="text-gray-600">
                Metodología probada que ha ayudado a más de 100 profesionales a conseguir sus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials language="es" />
      
      {/* Content Preview Section */}
      <ContentPreview language="es" />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para dar el siguiente paso en tu carrera?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Agenda tu sesión diagnóstica gratuita y descubre cómo puedo ayudarte a alcanzar tus objetivos profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/es/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Agenda tu sesión GRATIS
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/es/about"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Conoce mi historia
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
