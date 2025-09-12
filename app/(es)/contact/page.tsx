/**
 * Página de Contacto - Español
 * Ruta: /es/contact
 */
export default function ContactPageES() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        Contacto
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-medium mr-3">Email:</span>
                <a href="mailto:contacto@ejemplo.com" className="text-blue-600 hover:underline">
                  contacto@ejemplo.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-3">Teléfono:</span>
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-3">LinkedIn:</span>
                <a href="#" className="text-blue-600 hover:underline">
                  linkedin.com/in/mi-perfil
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-3">GitHub:</span>
                <a href="#" className="text-blue-600 hover:underline">
                  github.com/mi-usuario
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Envíame un Mensaje</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu mensaje aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
