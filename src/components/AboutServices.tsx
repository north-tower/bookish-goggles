
import { Button } from "@/components/ui/button";

const AboutServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Team Augmentation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Team augmentation</h3>
                <p className="text-gray-600 mb-6">
                  We provide experts or teams tailored to your project, ensuring 
                  skill and compatibility with your goals and culture. They will 
                  collaborate closely, infusing fresh energy and ideas.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Cultural fit</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Diversity</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Instant hire</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">...</span>
                </div>
                
                <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                  Let's chat →
                </Button>
              </div>
              <div className="ml-6 flex-shrink-0">
                <div className="w-32 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">👥</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
                <p className="text-gray-600 mb-6">
                  We specialize in developing the following native and cross-platform mobile applications for iOS and Android.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Swift</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Flutter</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Kotlin</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">React Native</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">...</span>
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
                <div className="w-32 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">📱</span>
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
