/**
 * Content Preview Component
 * Shows previews of blog posts and portfolio projects
 * Optimized for lead generation and engagement
 * Server Component - receives pathname as prop
 */
import Link from 'next/link';
import Image from 'next/image';
import { buildLocalizedLink } from '@/lib/i18n';

interface ContentPreviewProps {
  language?: 'es' | 'en' | 'cat';
  pathname: string;
}

export default function ContentPreview({ language = 'es', pathname }: ContentPreviewProps) {
  // Content based on language
  const content = {
    es: {
      blog: {
        title: 'Últimos Artículos',
        subtitle: 'Consejos y estrategias para acelerar tu carrera tecnológica',
        cta: 'Ver todos los artículos',
        posts: [
          {
            title: 'Cómo hacer la transición de Junior a Senior Developer',
            excerpt: 'Descubre las 5 habilidades clave que necesitas dominar para dar el salto profesional.',
            date: '15 Mar 2024',
            readTime: '8 min',
            category: 'Desarrollo',
            slug: 'transicion-junior-senior-developer'
          },
          {
            title: 'Las 10 tecnologías más demandadas en 2024',
            excerpt: 'Un análisis completo de las tecnologías que están marcando tendencia en el mercado laboral.',
            date: '8 Mar 2024',
            readTime: '12 min',
            category: 'Tecnología',
            slug: 'tecnologias-demandadas-2024'
          },
          {
            title: 'Preparación para entrevistas técnicas: Guía completa',
            excerpt: 'Todo lo que necesitas saber para destacar en tus entrevistas de trabajo tecnológicas.',
            date: '1 Mar 2024',
            readTime: '15 min',
            category: 'Carrera',
            slug: 'preparacion-entrevistas-tecnicas'
          }
        ]
      },
      portfolio: {
        title: 'Proyectos Destacados',
        subtitle: 'Casos de éxito de profesionales que han transformado sus carreras',
        cta: 'Ver portfolio completo',
        projects: [
          {
            title: 'Migración a Cloud Native',
            description: 'Ayudé a un equipo de 15 desarrolladores a migrar su arquitectura monolítica a microservicios.',
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Node.js'],
            result: 'Reducción del 60% en tiempo de despliegue',
            image: '/images/portfolio/cloud-migration.jpg'
          },
          {
            title: 'Transformación DevOps',
            description: 'Implementé una cultura DevOps completa en una startup, mejorando la productividad del equipo.',
            technologies: ['CI/CD', 'Terraform', 'Monitoring', 'GitOps'],
            result: 'Aumento del 80% en velocidad de entrega',
            image: '/images/portfolio/devops-transformation.jpg'
          },
          {
            title: 'Coaching de Liderazgo Técnico',
            description: 'Formé a 5 desarrolladores para convertirse en tech leads efectivos en sus equipos.',
            technologies: ['Leadership', 'Mentoring', 'Agile', 'Communication'],
            result: '100% de promociones internas exitosas',
            image: '/images/portfolio/leadership-coaching.jpg'
          }
        ]
      }
    },
    en: {
      blog: {
        title: 'Latest Articles',
        subtitle: 'Tips and strategies to accelerate your tech career',
        cta: 'View all articles',
        posts: [
          {
            title: 'How to transition from Junior to Senior Developer',
            excerpt: 'Discover the 5 key skills you need to master to make the professional leap.',
            date: 'Mar 15, 2024',
            readTime: '8 min',
            category: 'Development',
            slug: 'junior-to-senior-developer-transition'
          },
          {
            title: 'Top 10 most in-demand technologies in 2024',
            excerpt: 'A comprehensive analysis of the technologies that are setting trends in the job market.',
            date: 'Mar 8, 2024',
            readTime: '12 min',
            category: 'Technology',
            slug: 'in-demand-technologies-2024'
          },
          {
            title: 'Technical interview preparation: Complete guide',
            excerpt: 'Everything you need to know to stand out in your tech job interviews.',
            date: 'Mar 1, 2024',
            readTime: '15 min',
            category: 'Career',
            slug: 'technical-interview-preparation'
          }
        ]
      },
      portfolio: {
        title: 'Featured Projects',
        subtitle: 'Success stories from professionals who have transformed their careers',
        cta: 'View complete portfolio',
        projects: [
          {
            title: 'Cloud Native Migration',
            description: 'Helped a team of 15 developers migrate their monolithic architecture to microservices.',
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Node.js'],
            result: '60% reduction in deployment time',
            image: '/images/portfolio/cloud-migration.jpg'
          },
          {
            title: 'DevOps Transformation',
            description: 'Implemented a complete DevOps culture in a startup, improving team productivity.',
            technologies: ['CI/CD', 'Terraform', 'Monitoring', 'GitOps'],
            result: '80% increase in delivery speed',
            image: '/images/portfolio/devops-transformation.jpg'
          },
          {
            title: 'Technical Leadership Coaching',
            description: 'Trained 5 developers to become effective tech leads in their teams.',
            technologies: ['Leadership', 'Mentoring', 'Agile', 'Communication'],
            result: '100% successful internal promotions',
            image: '/images/portfolio/leadership-coaching.jpg'
          }
        ]
      }
    },
    cat: {
      blog: {
        title: 'Últims Articles',
        subtitle: 'Consells i estratègies per accelerar la teva carrera tecnològica',
        cta: 'Veure tots els articles',
        posts: [
          {
            title: 'Com fer la transició de Junior a Senior Developer',
            excerpt: 'Descobreix les 5 habilitats clau que necessites dominar per donar el salt professional.',
            date: '15 Mar 2024',
            readTime: '8 min',
            category: 'Desenvolupament',
            slug: 'transicio-junior-senior-developer'
          },
          {
            title: 'Les 10 tecnologies més demandades el 2024',
            excerpt: 'Una anàlisi completa de les tecnologies que estan marcant tendència al mercat laboral.',
            date: '8 Mar 2024',
            readTime: '12 min',
            category: 'Tecnologia',
            slug: 'tecnologies-demandades-2024'
          },
          {
            title: 'Preparació per a entrevistes tècniques: Guia completa',
            excerpt: 'Tot el que necessites saber per destacar en les teves entrevistes de treball tecnològiques.',
            date: '1 Mar 2024',
            readTime: '15 min',
            category: 'Carrera',
            slug: 'preparacio-entrevistes-tecniques'
          }
        ]
      },
      portfolio: {
        title: 'Projectes Destacats',
        subtitle: 'Casos d\'èxit de professionals que han transformat les seves carreres',
        cta: 'Veure portfolio complet',
        projects: [
          {
            title: 'Migració a Cloud Native',
            description: 'Vaig ajudar un equip de 15 desenvolupadors a migrar la seva arquitectura monolítica a microserveis.',
            technologies: ['AWS', 'Docker', 'Kubernetes', 'Node.js'],
            result: 'Reducció del 60% en temps de desplegament',
            image: '/images/portfolio/cloud-migration.jpg'
          },
          {
            title: 'Transformació DevOps',
            description: 'Vaig implementar una cultura DevOps completa en una startup, millorant la productivitat de l\'equip.',
            technologies: ['CI/CD', 'Terraform', 'Monitoring', 'GitOps'],
            result: 'Augment del 80% en velocitat d\'entrega',
            image: '/images/portfolio/devops-transformation.jpg'
          },
          {
            title: 'Coaching de Lideratge Tècnic',
            description: 'Vaig formar 5 desenvolupadors per convertir-se en tech leads efectius en els seus equips.',
            technologies: ['Leadership', 'Mentoring', 'Agile', 'Communication'],
            result: '100% de promocions internes exitoses',
            image: '/images/portfolio/leadership-coaching.jpg'
          }
        ]
      }
    },
  };

  const currentContent = content[language];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Blog Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentContent.blog.title}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {currentContent.blog.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {currentContent.blog.posts.map((post, index) => (
                <article
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={buildLocalizedLink(pathname, `/blog/${post.slug}`)}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={buildLocalizedLink(pathname, `/blog/${post.slug}`)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Leer más
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={buildLocalizedLink(pathname, '/blog')}
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {currentContent.blog.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Portfolio Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {currentContent.portfolio.title}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {currentContent.portfolio.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {currentContent.portfolio.projects.map((project, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-gray-500">Resultado: </span>
                        <span className="font-semibold text-green-600">{project.result}</span>
                      </div>
                      
                      <Link
                        href={buildLocalizedLink(pathname, '/portfolio')}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                      >
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={buildLocalizedLink(pathname, '/portfolio')}
                className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {currentContent.portfolio.cta}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}