const SolutionsHero = () => {
  return (
    <section className="pt-32 pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Our solutions</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Aeres Technologies, we turn your business needs and product ideas into digital solutions—ranging from bespoke web and mobile applications to sophisticated AI-driven platforms. Our services include custom software development, mobile and web apps, UI/UX design, and cloud & DevOps solutions, all delivered with a client-centric, agile approach.
            </p>
          </div>
          
          {/* Abstract decoration */}
          <div className="hidden lg:block relative">
            <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20"></div>
            <div className="absolute top-16 right-16 w-32 h-32 bg-purple-500 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsHero;
