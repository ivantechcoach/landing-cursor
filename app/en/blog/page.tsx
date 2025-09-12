/**
 * Blog Page - English
 * Route: /en/blog
 */
export default function BlogPageEN() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        My Blog
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-8">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Best Practices in Modern Web Development
            </h2>
            <p className="text-gray-600 mb-4">
              Discover the most effective techniques and tools for creating scalable 
              and maintainable web applications in 2024.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">March 15, 2024</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Development
              </span>
            </div>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Performance Optimization in React
            </h2>
            <p className="text-gray-600 mb-4">
              Learn advanced techniques to improve the performance of your React 
              applications and provide a better user experience.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">March 8, 2024</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                React
              </span>
            </div>
          </article>
          
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">
              Introduction to TypeScript for JavaScript Developers
            </h2>
            <p className="text-gray-600 mb-4">
              Complete guide to migrate from JavaScript to TypeScript and take 
              advantage of all its benefits in large-scale projects.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">March 1, 2024</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                TypeScript
              </span>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
