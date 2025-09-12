/**
 * Home Page - English
 * Route: /en
 */
import Hero from '@/components/Hero';

export default function HomePageEN() {
  return (
    <main className="min-h-screen">
      <Hero language="en" />
      
      {/* Additional sections can be added here */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why choose Ivan Tech Coach?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Personalized Coaching</h3>
                <p className="text-gray-600">
                  Each session is tailored to your specific needs and professional goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Current Technologies</h3>
                <p className="text-gray-600">
                  Learn the most in-demand technologies in today's job market.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Guaranteed Results</h3>
                <p className="text-gray-600">
                  Proven methodology that has helped more than 100 professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
