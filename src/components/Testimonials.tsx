
const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our cases and testimonials from delighted clients
          </h2>
        </div>
        
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="text-white text-2xl mr-3">◊</div>
                <span className="text-purple-200 font-medium">flashgrid</span>
              </div>
              
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-700 rounded-full text-sm">Website</span>
                <span className="px-3 py-1 bg-purple-700 rounded-full text-sm">Corporate</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                We've delivered a powerful corporate website for the enterprise segment
              </h3>
              
              <blockquote className="text-lg mb-6 italic">
                "The Diffco team studied FlashGrid's product and marketing strategy to make sure all of our requirements were addressed."
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">AD</span>
                </div>
                <div>
                  <div className="font-semibold">Art Danielov</div>
                  <div className="text-purple-200 text-sm">CEO & CTO at FlashGrid</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                    <div className="text-white text-6xl">📱</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg mr-2">🏆</span>
              <span className="font-semibold text-gray-900">Top Staff Augmentation Company</span>
            </div>
            <p className="text-gray-600 mb-4">Clutch</p>
            <div className="text-right">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 font-bold">5.0</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg mr-2">🏆</span>
              <span className="font-semibold text-gray-900">Top 10 Software Developers</span>
            </div>
            <p className="text-gray-600 mb-4">DesignRush</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
