import { useState, useEffect, useRef } from 'react';
import { Users, Smartphone, Server, Brain, ArrowRight, CheckCircle, Zap, Target } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "We provide skilled engineers or dedicated teams tailored to your project, seamlessly aligning with your goals and company culture. Our experts work closely with you, becoming an integral part of your team's success.",
      tags: ["Cultural fit", "Top 1%", "Instant hire", "Remote-first", "Time zone aligned"],
      gradient: "from-gray-400 to-gray-500",
      bgGradient: "from-gray-100 to-gray-200",
      accentColor: "#f59e0b",
      stats: [
        { icon: Target, label: "Perfect Match Rate", value: "98%" },
        { icon: Zap, label: "Onboarding Time", value: "< 2 days" },
        { icon: CheckCircle, label: "Client Satisfaction", value: "100%" }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "We specialize in developing native and cross-platform mobile applications for iOS and Android, creating stunning user experiences that drive engagement and business growth.",
      tags: ["Swift", "React Native", "Flutter", "Java", "Kotlin", "SwiftUI"],
      gradient: "from-blue-300 to-blue-400",
      bgGradient: "from-blue-50 to-blue-100",
      accentColor: "#e3f2fd",
      stats: [
        { icon: Target, label: "App Store Rating", value: "4.8+" },
        { icon: Zap, label: "Development Speed", value: "50% faster" },
        { icon: CheckCircle, label: "Bug-free Releases", value: "99.5%" }
      ]
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "We are experienced in high-load and complex backend infrastructure development for mobile or web apps and enterprise services, ensuring scalability and reliability.",
      tags: ["Node.js", "Go", "Python", "C#", "Java", "Microservices"],
      gradient: "from-gray-500 to-gray-600",
      bgGradient: "from-gray-50 to-gray-100",
      accentColor: "#e5e7eb",
      stats: [
        { icon: Target, label: "Uptime Guarantee", value: "99.9%" },
        { icon: Zap, label: "Response Time", value: "< 100ms" },
        { icon: CheckCircle, label: "Load Capacity", value: "1M+ req/min" }
      ]
    },
    {
      icon: Brain,
      title: "AI Development",
      description: "Our team specializes in AI, data analysis, and machine learning. We integrate your products with leading AI models like OpenAI GPT, Anthropic, Azure AI, and more to drive innovation.",
      tags: ["LLM Integration", "TensorFlow", "Python", "Computer Vision", "NLP", "MLOps"],
      gradient: "from-amber-400 to-amber-500",
      bgGradient: "from-amber-50 to-amber-100",
      accentColor: "#f59e0b",
      stats: [
        { icon: Target, label: "Model Accuracy", value: "95%+" },
        { icon: Zap, label: "Processing Speed", value: "10x faster" },
        { icon: CheckCircle, label: "Cost Reduction", value: "60%" }
      ]
    }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #e3f2fd15 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #f59e0b15 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium mb-6 border border-blue-200">
            <Zap className="w-4 h-4 mr-2" />
            Premium Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Services that drive
            <br />
            <span style={{ color: '#f59e0b' }}>
              exceptional results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver cutting-edge solutions that transform businesses and accelerate growth through innovation and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            const isActive = activeService === index;
            
            return (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-8`}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <div className="w-12 h-1 rounded" style={{ backgroundColor: service.accentColor }}></div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map((tag, tagIndex) => (
                        <span 
                          key={tag}
                          className={`px-4 py-2 bg-gradient-to-r ${service.bgGradient} text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:scale-105 transition-transform duration-200 cursor-default`}
                          style={{ animationDelay: `${tagIndex * 100}ms` }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                      {service.stats.map((stat, statIndex) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={stat.label} className="text-center">
                            <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 opacity-90 shadow-md`}>
                              <StatIcon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-gray-900 mb-1">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {stat.label}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* CTA Button */}
                    <button className={`group inline-flex items-center px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Interactive Visual */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                  <div className="relative">
                    {/* Main Card */}
                    <div className={`w-96 h-80 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center relative overflow-hidden transform hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl ${
                      isActive ? 'ring-4 ring-opacity-50' : ''
                    }`} style={{ 
                      ringColor: isActive ? service.accentColor : 'transparent' 
                    }}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                      </div>
                      
                      {/* Icon */}
                      <div className="relative z-10">
                        <Icon className="w-24 h-24 text-white drop-shadow-lg" />
                      </div>

                      {/* Floating Elements */}
                      <div className="absolute top-6 right-6 w-6 h-6 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-8 left-8 w-4 h-4 bg-white bg-opacity-30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-1/3 left-6 w-3 h-3 bg-white bg-opacity-25 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                    </div>

                    {/* Floating Cards */}
                    <div className="absolute -right-4 -top-4 w-20 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300 border border-gray-100">
                      <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                    </div>
                    <div className="absolute -left-4 -bottom-4 w-16 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300 border border-gray-100">
                      <div className={`w-4 h-4 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Navigation Dots */}
        <div className="flex justify-center mt-16 space-x-3">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeService === index 
                  ? 'scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              style={{
                backgroundColor: activeService === index ? '#f59e0b' : undefined
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;