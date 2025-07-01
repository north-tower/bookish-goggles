import { Button } from "@/components/ui/button";

const AboutServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services & Solutions</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Custom Software Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Software Development</h3>
                <p className="text-gray-600 mb-6">
                  Bespoke web and mobile applications tailored to client needs. Enterprise solutions for businesses seeking digital transformation.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Web Apps</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Mobile Apps</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Enterprise</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Digital Transformation</span>
                </div>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  Let's chat →
                </Button>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-32 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
                <p className="text-gray-600 mb-6">
                  Cross-platform (iOS & Android) and native mobile applications. Solutions in fintech, e-commerce, healthtech, and agritech.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">iOS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Android</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Fintech</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">E-commerce</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Healthtech</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Agritech</span>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                    Let's chat →
                  </Button>
                  <Button variant="outline">
                    Learn more
                  </Button>
                </div>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-32 h-24 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">📱</span>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
                <p className="text-gray-600 mb-6">
                  Responsive, secure, and high-performance web applications. E-commerce platforms, CMS, and SaaS products.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Web Apps</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">E-commerce</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">CMS</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">SaaS</span>
                </div>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  Let's chat →
                </Button>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-32 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">🌐</span>
                </div>
              </div>
            </div>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
                <p className="text-gray-600 mb-6">
                  Intuitive and engaging user experiences for digital products.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">UI Design</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">UX Design</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Prototyping</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Wireframes</span>
                </div>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  Let's chat →
                </Button>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-32 h-24 bg-gradient-to-br from-pink-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">🎨</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud & DevOps Solutions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud & DevOps Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Cloud integration, deployment, and scalable infrastructure for modern businesses.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Cloud</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">DevOps</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Infrastructure</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Deployment</span>
                </div>
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  Let's chat →
                </Button>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-32 h-24 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">☁️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
