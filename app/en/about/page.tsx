/**
 * About Page - English
 * Route: /en/about
 */
import { buildBreadcrumbJsonLd } from '@/lib/jsonld';

export default function AboutPageEN() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd('en', ['about'])) }}
      />
      <h1 className="text-4xl font-bold text-center py-8">
        About Me
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a passionate developer with a love for technology and innovation. 
          With over 5 years of experience in web development, I specialize in 
          creating digital solutions that combine functionality, design, and 
          exceptional performance.
        </p>
      </div>
    </main>
  );
}
