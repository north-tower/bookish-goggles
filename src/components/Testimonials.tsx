import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Award, Users, Building, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Updated testimonials with enhanced content
  const testimonials = [
    {
      id: 1,
      company: "flashgrid",
      logo: "◊",
      tags: ["Website", "Corporate"],
      title: "We've delivered a powerful corporate website for the enterprise segment",
      quote: "The Aeres Technologies team studied FlashGrid's product and marketing strategy to make sure all of our requirements were addressed. Their attention to detail and technical expertise transformed our digital presence.",
      author: "Art Danielov",
      position: "CEO & CTO at FlashGrid",
      initials: "AD",
      projectIcon: "🏢"
    },
    {
      id: 2,
      company: "techcorp",
      logo: "⚡",
      tags: ["Mobile App", "E-commerce"],
      title: "Revolutionary mobile commerce platform that transformed our business",
      quote: "Aeres Technologies' innovative approach and technical expertise exceeded our expectations. The app increased our sales by 300% in just 6 months with seamless user experience.",
      author: "Sarah Chen",
      position: "VP of Digital at TechCorp",
      initials: "SC",
      projectIcon: "📱"
    },
    {
      id: 3,
      company: "innovate",
      logo: "🚀",
      tags: ["AI/ML", "Platform"],
      title: "Cutting-edge AI platform that revolutionized our data analytics",
      quote: "The Aeres Technologies team's deep understanding of machine learning and scalable architecture delivered results beyond our wildest dreams. Our data processing is now 10x faster.",
      author: "Michael Rodriguez",
      position: "CTO at Innovate Solutions",
      initials: "MR",
      projectIcon: "🤖"
    }
  ];

  const awards = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Top Staff Augmentation Company",
      source: "Clutch",
      rating: 5.0,
      year: "2024"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Top 10 Software Developers",
      source: "DesignRush",
      rating: 4.9,
      year: "2024"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Best Enterprise Solutions",
      source: "TechReview",
      rating: 4.8,
      year: "2024"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-10 w-40 h-40 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gray-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 right-1/2 w-2 h-2 bg-amber-400 rotate-45 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl mb-8 shadow-lg shadow-amber-500/25 transform hover:scale-110 transition-transform duration-300">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-6 leading-tight">
            Client Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results through innovative solutions
          </p>
        </div>
        
        {/* Main testimonial card with new design */}
        <div className={`bg-white rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-700 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} border border-gray-100`}>
          {/* Decorative top bar */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-blue-300 to-gray-300"></div>
          
          {/* Content area */}
          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {/* Company info and navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4 shadow-lg">
                      {current.logo}
                    </div>
                    <div>
                      <h4 className="text-gray-800 font-bold text-xl capitalize">{current.company}</h4>
                      <p className="text-gray-500 text-sm">Success Story</p>
                    </div>
                  </div>
                  
                  {/* Enhanced navigation */}
                  <div className="flex gap-3">
                    <button 
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg border border-blue-200"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-amber-400 hover:bg-amber-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Enhanced tags */}
                <div className="flex gap-3 flex-wrap">
                  {current.tags.map((tag, index) => (
                    <span key={index} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 hover:bg-blue-100 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Title with enhanced styling */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                  {current.title}
                </h3>
                
                {/* Enhanced quote */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-amber-400 mb-4" />
                  <blockquote className="text-lg md:text-xl leading-relaxed text-gray-700 italic relative pl-4 border-l-4 border-amber-400">
                    {current.quote}
                  </blockquote>
                </div>
                
                {/* Author info with enhanced design */}
                <div className="flex items-center pt-6 border-t border-gray-100">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center mr-4 border-4 border-white shadow-lg">
                    <span className="text-gray-700 font-bold text-lg">{current.initials}</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-800">{current.author}</div>
                    <div className="text-gray-600">{current.position}</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced visual showcase */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="w-80 h-96 bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl p-8 border-2 border-gray-200 transform transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 shadow-xl hover:shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-white/80 to-gray-50/50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden border border-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-blue-400/5"></div>
                      <div className="text-6xl mb-4 animate-bounce relative z-10">
                        {current.projectIcon}
                      </div>
                      <div className="text-gray-600 font-medium text-center relative z-10">
                        <div className="w-24 h-2 bg-gray-200 rounded-full mb-2"></div>
                        <div className="w-32 h-2 bg-amber-200 rounded-full mb-2"></div>
                        <div className="w-20 h-2 bg-blue-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced floating elements */}
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-amber-400 rounded-full animate-pulse flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
            
            {/* Enhanced progress indicators */}
            <div className="flex justify-center mt-12 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    index === currentTestimonial 
                      ? 'bg-amber-400 w-8 shadow-lg' 
                      : 'bg-gray-300 w-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced awards section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Industry Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {award.icon}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
                
                <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {award.title}
                </h4>
                <p className="text-gray-600 mb-6">{award.source}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(award.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="font-bold text-xl text-gray-800">{award.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;