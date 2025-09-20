/**
 * Services Page - English
 * Route: /en/services
 * Optimized for performance with WebP images and lazy loading
 */
import Image from 'next/image';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Creation of modern and responsive websites using the latest technologies.',
    image: '/images/services/webdevelopment.webp',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Implementation of artificial intelligence to automate processes and improve efficiency.',
    image: '/images/services/ai.webp',
    technologies: ['Machine Learning', 'Python', 'TensorFlow', 'OpenAI']
  },
  {
    id: 'it-support',
    title: 'IT Support',
    description: 'Comprehensive maintenance and technical support for enterprise systems and applications.',
    image: '/images/services/itsupport.webp',
    technologies: ['DevOps', 'Cloud Computing', 'Monitoring', 'Automation']
  },
  {
    id: 'security',
    title: 'Cybersecurity',
    description: 'Protection of systems and data with cybersecurity best practices.',
    image: '/images/services/security.webp',
    technologies: ['Cybersecurity', 'Penetration Testing', 'Security Audits', 'Compliance']
  }
];

export default function ServicesPageEN() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business into the digital future
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
                  alt={`${service.title} - Professional service`}
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
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
