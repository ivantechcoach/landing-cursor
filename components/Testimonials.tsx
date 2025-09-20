/**
 * Testimonials Component
 * Customer testimonials section to build trust and credibility
 * Optimized for lead generation
 */
import Image from 'next/image';

interface TestimonialsProps {
  language?: 'es' | 'en' | 'cat';
}

export default function Testimonials({ language = 'es' }: TestimonialsProps) {
  // Testimonials content based on language
  const content = {
    es: {
      title: 'Lo que dicen mis clientes',
      subtitle: 'Profesionales que han transformado sus carreras con mi coaching',
      testimonials: [
        {
          name: 'María González',
          role: 'Desarrolladora Frontend',
          company: 'TechCorp',
          content: 'Ivan me ayudó a dar el salto de junior a senior en solo 6 meses. Su metodología es increíble y realmente funciona.',
          rating: 5,
          image: '/images/testimonials/maria.jpg'
        },
        {
          name: 'Carlos Ruiz',
          role: 'DevOps Engineer',
          company: 'StartupXYZ',
          content: 'El coaching de Ivan no solo mejoró mis habilidades técnicas, sino también mi confianza profesional. Altamente recomendado.',
          rating: 5,
          image: '/images/testimonials/carlos.jpg'
        },
        {
          name: 'Ana Martínez',
          role: 'Product Manager',
          company: 'InnovateLab',
          content: 'Gracias a Ivan pude hacer la transición exitosa de marketing a tecnología. Su enfoque personalizado es excepcional.',
          rating: 5,
          image: '/images/testimonials/ana.jpg'
        },
        {
          name: 'David López',
          role: 'Full Stack Developer',
          company: 'DigitalAgency',
          content: 'Ivan me preparó perfectamente para mi entrevista de trabajo. Conseguí el puesto que quería en una empresa top.',
          rating: 5,
          image: '/images/testimonials/david.jpg'
        },
        {
          name: 'Laura Sánchez',
          role: 'UX Designer',
          company: 'DesignStudio',
          content: 'El coaching de Ivan me ayudó a entender mejor el lado técnico de mi trabajo. Ahora colaboro mejor con los desarrolladores.',
          rating: 5,
          image: '/images/testimonials/laura.jpg'
        },
        {
          name: 'Roberto García',
          role: 'Tech Lead',
          company: 'EnterpriseCorp',
          content: 'Ivan me enseñó las habilidades de liderazgo que necesitaba para mi nuevo rol. Su experiencia es invaluable.',
          rating: 5,
          image: '/images/testimonials/roberto.jpg'
        }
      ]
    },
    en: {
      title: 'What my clients say',
      subtitle: 'Professionals who have transformed their careers with my coaching',
      testimonials: [
        {
          name: 'Maria Gonzalez',
          role: 'Frontend Developer',
          company: 'TechCorp',
          content: 'Ivan helped me jump from junior to senior in just 6 months. His methodology is incredible and really works.',
          rating: 5,
          image: '/images/testimonials/maria.jpg'
        },
        {
          name: 'Carlos Ruiz',
          role: 'DevOps Engineer',
          company: 'StartupXYZ',
          content: 'Ivan\'s coaching not only improved my technical skills but also my professional confidence. Highly recommended.',
          rating: 5,
          image: '/images/testimonials/carlos.jpg'
        },
        {
          name: 'Ana Martinez',
          role: 'Product Manager',
          company: 'InnovateLab',
          content: 'Thanks to Ivan I was able to successfully transition from marketing to technology. His personalized approach is exceptional.',
          rating: 5,
          image: '/images/testimonials/ana.jpg'
        },
        {
          name: 'David Lopez',
          role: 'Full Stack Developer',
          company: 'DigitalAgency',
          content: 'Ivan prepared me perfectly for my job interview. I got the position I wanted at a top company.',
          rating: 5,
          image: '/images/testimonials/david.jpg'
        },
        {
          name: 'Laura Sanchez',
          role: 'UX Designer',
          company: 'DesignStudio',
          content: 'Ivan\'s coaching helped me better understand the technical side of my work. Now I collaborate better with developers.',
          rating: 5,
          image: '/images/testimonials/laura.jpg'
        },
        {
          name: 'Roberto Garcia',
          role: 'Tech Lead',
          company: 'EnterpriseCorp',
          content: 'Ivan taught me the leadership skills I needed for my new role. His experience is invaluable.',
          rating: 5,
          image: '/images/testimonials/roberto.jpg'
        }
      ]
    },
    cat: {
      title: 'El que diuen els meus clients',
      subtitle: 'Professionals que han transformat les seves carreres amb el meu coaching',
      testimonials: [
        {
          name: 'María González',
          role: 'Desenvolupadora Frontend',
          company: 'TechCorp',
          content: 'Ivan em va ajudar a donar el salt de junior a senior en només 6 mesos. La seva metodologia és increïble i realment funciona.',
          rating: 5,
          image: '/images/testimonials/maria.jpg'
        },
        {
          name: 'Carlos Ruiz',
          role: 'DevOps Engineer',
          company: 'StartupXYZ',
          content: 'El coaching d\'Ivan no només va millorar les meves habilitats tècniques, sinó també la meva confiança professional. Altament recomanat.',
          rating: 5,
          image: '/images/testimonials/carlos.jpg'
        },
        {
          name: 'Ana Martínez',
          role: 'Product Manager',
          company: 'InnovateLab',
          content: 'Gràcies a Ivan vaig poder fer la transició exitosa de màrqueting a tecnologia. El seu enfocament personalitzat és excepcional.',
          rating: 5,
          image: '/images/testimonials/ana.jpg'
        },
        {
          name: 'David López',
          role: 'Full Stack Developer',
          company: 'DigitalAgency',
          content: 'Ivan em va preparar perfectament per a la meva entrevista de treball. Vaig aconseguir el lloc que volia en una empresa top.',
          rating: 5,
          image: '/images/testimonials/david.jpg'
        },
        {
          name: 'Laura Sánchez',
          role: 'UX Designer',
          company: 'DesignStudio',
          content: 'El coaching d\'Ivan em va ajudar a entendre millor el costat tècnic del meu treball. Ara col·laboro millor amb els desenvolupadors.',
          rating: 5,
          image: '/images/testimonials/laura.jpg'
        },
        {
          name: 'Roberto García',
          role: 'Tech Lead',
          company: 'EnterpriseCorp',
          content: 'Ivan em va ensenyar les habilitats de lideratge que necessitava per al meu nou rol. La seva experiència és inestimable.',
          rating: 5,
          image: '/images/testimonials/roberto.jpg'
        }
      ]
    },
  };

  const currentContent = content[language];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/testimonials/testimoniosbg.webp"
          alt="Testimonials background"
          fill
          className="object-cover opacity-10"
          quality={75}
          loading="lazy"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para transformar tu carrera?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a más de 100 profesionales que ya han dado el salto con mi coaching personalizado.
            </p>
            <a
              href={`/${language}/contact`}
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Agenda tu sesión gratuita
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
