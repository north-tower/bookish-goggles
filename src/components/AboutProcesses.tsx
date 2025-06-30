
import { Grid3X3, Box, FileText } from "lucide-react";

const AboutProcesses = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Process content */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 text-sm font-medium rounded-full mb-4">
                PROCESSES
              </span>
              <h2 className="text-4xl font-bold text-gray-900">How we build</h2>
            </div>

            {/* Discovery Stage */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Grid3X3 className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery stage</h3>
                  <p className="text-gray-600 mb-4">
                    We prioritize our clients' success, understanding your unique needs, and delivering tailored 
                    solutions that drive your business growth. The workflow roll-out is usually:
                  </p>
                </div>
              </div>

              <div className="ml-16 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                  <span className="text-gray-700">Get to know your project</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                  <span className="text-gray-700">R&D</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                  <span className="text-gray-700">PRD and wireframes development</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                  <span className="text-gray-700">Development plan and estimate</span>
                </div>
              </div>
            </div>

            {/* Development Stage */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Box className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Development stage</h3>
                  <p className="text-gray-600">
                    We develop your product in iterative substages, allowing for regular testing, feedback, and 
                    adjustments to ensure alignment with your expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Continuous Development */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous development and support</h3>
                  <p className="text-gray-600">
                    Post-launch, we provide ongoing support, troubleshoot issues, and develop additional features to 
                    keep your product up-to-date and valuable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProcesses;
