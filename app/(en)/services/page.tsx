/**
 * Services Page - English
 * Route: /en/services
 */
export default function ServicesPageEN() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        My Services
      </h1>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Web Development</h3>
          <p className="text-gray-600">
            Creation of modern and responsive websites using the latest technologies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Mobile Applications</h3>
          <p className="text-gray-600">
            Development of native and hybrid mobile applications for iOS and Android.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Technical Consulting</h3>
          <p className="text-gray-600">
            Software architecture advice and development best practices.
          </p>
        </div>
      </div>
    </main>
  );
}
