
const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services we provide
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Staff Augmentation */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Staff Augmentation</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide skilled engineers or dedicated teams tailored to your project, seamlessly aligning with your goals and company culture. Our experts work closely with you, becoming an integral part of your team's success.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cultural fit</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Top 1%</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Instant hire</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-60 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center">
              <div className="text-white text-6xl">👥</div>
            </div>
          </div>
          
          {/* Mobile Development */}
          <div className="md:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We specialize in developing native and cross-platform mobile applications for iOS and Android.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Swift</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">React Native</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Flutter</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Java</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Kotlin</span>
            </div>
          </div>
          <div className="md:order-1 flex justify-center">
            <div className="w-80 h-60 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
              <div className="text-white text-6xl">📱</div>
            </div>
          </div>
          
          {/* Backend Development */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Back-end Development</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are experienced in high-load and complex backend infrastructure development for mobile or web apps and enterprise services.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Go</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">C#</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Java</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-60 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center">
              <div className="text-white text-6xl">🔧</div>
            </div>
          </div>
          
          {/* AI Development */}
          <div className="md:order-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Development</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team specializes in AI, data analysis, and machine learning. We integrate your products with leading AI models like OpenAI GPT, Anthropic, Azure AI, AutoGPT, LLAMA, Gemini, and more to streamline operations, enhance customer experiences, and drive market innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">LLM</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Tensorflow</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Computer Vision</span>
            </div>
          </div>
          <div className="md:order-1 flex justify-center">
            <div className="w-80 h-60 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center">
              <div className="text-white text-6xl">🤖</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
