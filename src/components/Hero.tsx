
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <div className="flex items-center mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
            <span className="text-gray-300 text-sm font-medium">Based in Silicon Valley. Operate worldwide.</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Empower your business
            <br />
            with{" "}
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              top-class software development
            </span>
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Staff Augmentation</h3>
              <p className="text-gray-400">Enabling your team to reach project goals.</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors group">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <div className="w-6 h-6 bg-green-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom software development</h3>
              <p className="text-gray-400">Build software tailored to your business</p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI development</h3>
              <p className="text-gray-400">Disrupt the market</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
