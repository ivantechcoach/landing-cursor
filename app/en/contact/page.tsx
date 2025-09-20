/**
 * Contact Page - English
 * Route: /en/contact
 */
'use client';

export default function ContactPageEN() {
  // Get environment variables
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE;
  const contactAddress = process.env.NEXT_PUBLIC_CONTACT_ADDRESS;
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-center py-8">
        Contact
      </h1>
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactEmail ? (
                <div className="flex items-center">
                  <span className="font-medium mr-3">Email:</span>
                  <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">
                    {contactEmail}
                  </a>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="font-medium mr-3">Email:</span>
                  <span className="text-gray-500 italic">Configure NEXT_PUBLIC_CONTACT_EMAIL</span>
                </div>
              )}
              {contactPhone ? (
                <div className="flex items-center">
                  <span className="font-medium mr-3">Phone:</span>
                  <a href={`tel:${contactPhone}`} className="text-blue-600 hover:underline">
                    {contactPhone}
                  </a>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="font-medium mr-3">Phone:</span>
                  <span className="text-gray-500 italic">Configure NEXT_PUBLIC_CONTACT_PHONE</span>
                </div>
              )}
              {contactAddress && (
                <div className="flex items-center">
                  <span className="font-medium mr-3">Address:</span>
                  <span>{contactAddress}</span>
                </div>
              )}
              <div className="flex items-center">
                <span className="font-medium mr-3">LinkedIn:</span>
                <a href="#" className="text-blue-600 hover:underline">
                  linkedin.com/in/ivan-tech-coach
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-3">GitHub:</span>
                <a href="#" className="text-blue-600 hover:underline">
                  github.com/ivan-tech-coach
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send me a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
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
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
