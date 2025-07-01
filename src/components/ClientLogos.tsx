import { useState, useEffect, useRef } from 'react';
import { Star, Award, TrendingUp, Users, Globe, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredClient, setHoveredClient] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const clients = [
    { 
      name: "Whole Foods", 
      logo: "🏪", 
      industry: "Retail",
      description: "Revolutionized their supply chain management with AI-driven insights",
      metric: "40% efficiency boost"
    },
    { 
      name: "Starbucks", 
      logo: "☕", 
      industry: "Food & Beverage",
      description: "Enhanced customer loyalty platform with personalized experiences",
      metric: "2M+ active users"
    },
    { 
      name: "Dun & Bradstreet", 
      logo: "📊", 
      industry: "Financial Services",
      description: "Built advanced analytics dashboard for risk assessment",
      metric: "99.8% accuracy rate"
    },
    { 
      name: "PivotTree", 
      logo: "🌳", 
      industry: "Technology",
      description: "Developed AI-powered automation solutions",
      metric: "60% cost reduction"
    },
    { 
      name: "Nuance", 
      logo: "🎯", 
      industry: "Healthcare Tech",
      description: "Created voice recognition systems for medical records",
      metric: "95% accuracy rate"
    },
    { 
      name: "Mars", 
      logo: "🍫", 
      industry: "Manufacturing",
      description: "Optimized production workflows and quality control",
      metric: "30% faster production"
    },
    { 
      name: "American Express", 
      logo: "💳", 
      industry: "Financial Services",
      description: "Built secure payment systems with fraud detection",
      metric: "99.99% uptime"
    },
    { 
      name: "Nokia", 
      logo: "📞", 
      industry: "Telecommunications",
      description: "Developed network management and monitoring tools",
      metric: "50% faster deployment"
    },
    { 
      name: "ChemTreat", 
      logo: "⚗️", 
      industry: "Chemical",
      description: "Created process optimization platform for manufacturing",
      metric: "25% waste reduction"
    },
    { 
      name: "Shift", 
      logo: "🚗", 
      industry: "Automotive",
      description: "Built comprehensive car marketplace platform",
      metric: "10M+ listings"
    },
    { 
      name: "Hilton", 
      logo: "🏨", 
      industry: "Hospitality",
      description: "Enhanced booking and CRM systems for better guest experience",
      metric: "35% booking increase"
    }
  ];

  const stats = [
    { icon: Users, label: "Global Clients", value: "500+", color: "text-amber-600" },
    { icon: Globe, label: "Countries", value: "25+", color: "text-blue-600" },
    { icon: Award, label: "Success Rate", value: "99%", color: "text-amber-600" },
    { icon: TrendingUp, label: "ROI Average", value: "300%", color: "text-blue-600" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate featured client
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-200 via-white to-blue-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-amber-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-gray-200 to-blue-100 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-amber-100 to-gray-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-amber-50 border-2 border-blue-200 text-blue-800 rounded-full text-sm font-semibold mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Star className="w-5 h-5 mr-2 text-amber-600" />
            Trusted by Fortune 500 Leaders
            <CheckCircle className="w-4 h-4 ml-2 text-blue-600" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent block mb-2">
              Products we built power
            </span>
            <span className="bg-gradient-to-r from-blue-600 via-amber-600 to-blue-700 bg-clip-text text-transparent animate-pulse">
              industry giants
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            From Fortune 500 enterprises to innovative startups, our cutting-edge solutions drive unprecedented growth and digital transformation across industries.
          </p>

          {/* Featured Success Story Carousel */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 max-w-2xl mx-auto">
            <div className="text-sm text-blue-600 font-semibold mb-2">Latest Success Story</div>
            <div className="transition-all duration-500">
              <div className="flex items-center justify-center mb-3">
                <span className="text-3xl mr-3">{clients[activeIndex]?.logo}</span>
                <div className="text-left">
                  <div className="font-bold text-gray-800">{clients[activeIndex]?.name}</div>
                  <div className="text-sm text-gray-500">{clients[activeIndex]?.industry}</div>
                </div>
              </div>
              <div className="text-amber-600 font-bold text-lg">{clients[activeIndex]?.metric}</div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-amber-100 rounded-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
                  <div className="absolute inset-1 bg-white rounded-3xl"></div>
                  <Icon className={`w-10 h-10 ${stat.color} relative z-10 group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-8 shadow-md border-2 border-gray-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-4 hover:rotate-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredClient(index)}
              onMouseLeave={() => setHoveredClient(null)}
            >
              {/* Enhanced Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Main Content */}
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {client.logo}
                </div>
                
                <h3 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                  {client.name}
                </h3>
                
                <div className="text-sm text-gray-500 mb-4 font-medium">
                  {client.industry}
                </div>

                <div className="text-xs text-amber-600 font-bold bg-amber-50 px-3 py-1 rounded-full inline-block mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {client.metric}
                </div>
                
                {/* Hover Description */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {client.description}
                  </p>
                  <div className="inline-flex items-center text-xs text-blue-600 font-semibold">
                    View Case Study
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 animate-pulse"></div>
              <div className="absolute top-1/2 left-2 w-1 h-8 bg-gradient-to-b from-blue-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Bottom CTA Section */}
        <div className={`relative bg-gradient-to-br from-gray-100 via-blue-50 to-amber-50 rounded-3xl p-12 border-2 border-blue-200 shadow-xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 left-8 w-16 h-16 border-4 border-blue-600 rounded-full"></div>
            <div className="absolute top-8 right-8 w-12 h-12 border-4 border-amber-600 rounded-full"></div>
            <div className="absolute bottom-8 left-1/4 w-8 h-8 border-4 border-blue-600 rounded-full"></div>
            <div className="absolute bottom-8 right-1/4 w-10 h-10 border-4 border-amber-600 rounded-full"></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-md border-2 border-amber-200">
                <Zap className="w-6 h-6 text-amber-600 animate-pulse" />
                <span className="text-sm font-bold text-gray-700">Ready to join the leaders?</span>
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent"> Proven Excellence</span>
            </h3>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
              Join Fortune 500 companies who've accelerated their growth with our industry-specific solutions. From AI-powered automation to scalable platforms, we deliver results that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center shadow-lg border-2 border-transparent hover:border-blue-300">
                Start Your Transformation
                <TrendingUp className="ml-3 w-6 h-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
              </button>
              
              <button className="group bg-white hover:bg-gray-50 text-gray-800 px-10 py-5 rounded-full font-bold text-lg border-3 border-gray-300 hover:border-amber-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center">
                Explore Success Stories
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex justify-center items-center space-x-8 opacity-70">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                ISO 27001 Certified
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                GDPR Compliant
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                24/7 Support
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-1/4 left-8 animate-bounce opacity-60" style={{ animationDelay: '1s', animationDuration: '3s' }}>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg rotate-12">
            <CheckCircle className="text-white w-6 h-6" />
          </div>
        </div>
        
        <div className="absolute top-1/3 right-12 animate-pulse opacity-50" style={{ animationDelay: '3s' }}>
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg"></div>
        </div>
        
        <div className="absolute bottom-1/4 right-8 animate-bounce opacity-60" style={{ animationDelay: '5s', animationDuration: '4s' }}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-amber-500 rounded-xl shadow-lg -rotate-12"></div>
        </div>

        <div className="absolute top-2/3 left-16 animate-pulse opacity-40" style={{ animationDelay: '7s' }}>
          <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-blue-400 rounded-full shadow-md"></div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;