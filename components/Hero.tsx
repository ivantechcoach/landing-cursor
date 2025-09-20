/**
 * Hero Component
 * Main hero section for the homepage with CTA and wave effect
 * Optimized for lead generation with professional imagery
 */
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  language?: 'es' | 'en' | 'cat';
}

export default function Hero({ language = 'es' }: HeroProps) {
  // Hero content based on language
  const content = {
    es: {
      title: 'Ivan Tech Coach',
      subtitle: 'Transforma tu carrera tecnológica con coaching personalizado. Aprende las habilidades más demandadas del mercado y acelera tu crecimiento profesional.',
      cta: 'Agenda tu sesión diagnóstica GRATIS',
      ctaLink: '/es/contact',
      secondaryCta: 'Conoce mi historia',
      stats: {
        experience: '5+',
        experienceLabel: 'Años de experiencia',
        students: '100+',
        studentsLabel: 'Profesionales formados',
        success: '95%',
        successLabel: 'Tasa de éxito'
      }
    },
    en: {
      title: 'Ivan Tech Coach',
      subtitle: 'Transform your tech career with personalized coaching. Learn the most in-demand market skills and accelerate your professional growth.',
      cta: 'Schedule your FREE diagnostic session',
      ctaLink: '/en/contact',
      secondaryCta: 'Learn my story',
      stats: {
        experience: '5+',
        experienceLabel: 'Years of experience',
        students: '100+',
        studentsLabel: 'Professionals trained',
        success: '95%',
        successLabel: 'Success rate'
      }
    },
    cat: {
      title: 'Ivan Tech Coach',
      subtitle: 'Transforma la teva carrera tecnològica amb coaching personalitzat. Aprèn les habilitats més demandades del mercat i accelera el teu creixement professional.',
      cta: 'Agenda la teva sessió diagnòstica GRATUÏTA',
      ctaLink: '/cat/contact',
      secondaryCta: 'Coneix la meva història',
      stats: {
        experience: '5+',
        experienceLabel: 'Anys d\'experiència',
        students: '100+',
        studentsLabel: 'Professionals formats',
        success: '95%',
        successLabel: 'Taxa d\'èxit'
      }
    },
  };

  const currentContent = content[language];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/main-hero.webp"
          alt="Ivan Tech Coach - Professional Tech Coaching"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="text-sm font-medium">🚀 Coaching Tecnológico Profesional</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Ivan</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent">
                Tech Coach
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              {currentContent.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href={currentContent.ctaLink}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                <span className="relative z-10">{currentContent.cta}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg 
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                href={`/${language}/about`}
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
              >
                {currentContent.secondaryCta}
                <svg 
                  className="ml-2 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">{currentContent.stats.experience}</div>
                <div className="text-sm text-blue-200">{currentContent.stats.experienceLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 mb-1">{currentContent.stats.students}</div>
                <div className="text-sm text-blue-200">{currentContent.stats.studentsLabel}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-1">{currentContent.stats.success}</div>
                <div className="text-sm text-blue-200">{currentContent.stats.successLabel}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Optimized background - removed heavy blur filter */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Sesión Diagnóstica</h3>
                  <p className="text-blue-200 text-sm">Identifica tus fortalezas y oportunidades de crecimiento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG - Fixed height to prevent CLS */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10" style={{ height: '80px' }}>
        <svg
          className="relative block w-full h-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="xMidYMax slice"
          style={{ width: '100%', height: '100%' }}
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="50%" stopColor="#f8fafc" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="url(#waveGradient)"
            className="wave-path"
          />
        </svg>
      </div>
    </section>
  );
}
