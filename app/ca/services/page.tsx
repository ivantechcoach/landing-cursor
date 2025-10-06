/**
 * Página de Servicios - Español
 * Ruta: /es/services
 * Optimized for performance with WebP images and lazy loading
 */
import type { Metadata } from 'next';
import Image from 'next/image';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata('es', 'services');

const services = [
  {
    id: 'web-development',
    title: 'Desarrollo Web',
    description: 'Creación de sitios web modernos y responsivos usando las últimas tecnologías.',
    image: '/images/services/webdevelopment.webp',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'ai-solutions',
    title: 'Soluciones de IA',
    description: 'Implementación de inteligencia artificial para automatizar procesos y mejorar la eficiencia.',
    image: '/images/services/ai.webp',
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'OpenAI']
  },
  {
    id: 'it-support',
    title: 'Soporte Técnico',
    description: 'Mantenimiento y soporte técnico integral para sistemas y aplicaciones empresariales.',
    image: '/images/services/itsupport.webp',
    technologies: ['DevOps', 'Cloud Computing', 'Monitoring', 'Automation']
  },
  {
    id: 'security',
    title: 'Seguridad Informática',
    description: 'Protección de sistemas y datos con las mejores prácticas de ciberseguridad.',
    image: '/images/services/security.webp',
    technologies: ['Cybersecurity', 'Penetration Testing', 'Security Audits', 'Compliance']
  }
];

export default function ServicesPageES() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mis Servicios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} - Servicio profesional`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 2 ? "eager" : "lazy"}
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
