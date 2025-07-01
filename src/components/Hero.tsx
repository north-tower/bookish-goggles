import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Code, Users, Brain, Play, Award, Globe, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const heroRef = useRef(null);

  const dynamicWords = ['innovation', 'excellence', 'transformation', 'success'];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Synchronized typing animation
    const wordInterval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % dynamicWords.length);
        setIsTyping(true);
      }, 600);
    }, 4000);

    // Master animation phase controller
    const phaseInterval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 3);
    }, 8000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(wordInterval);
      clearInterval(phaseInterval);
    };
  }, []);

  const services = [
    {
      icon: Users,
      title: "Staff Augmentation",
      description: "Scale your team with elite developers who integrate seamlessly into your workflow",
      stats: "500+ Developers"
    },
    {
      icon: Code,
      title: "Custom Software Development", 
      description: "Build cutting-edge solutions that transform your business operations",
      stats: "200+ Projects"
    },
    {
      icon: Brain,
      title: "AI Development",
      description: "Harness the power of AI to revolutionize your industry",
      stats: "50+ AI Solutions"
    }
  ];

  const testimonialLogos = [
    { name: "Google", width: "w-16" },
    { name: "Microsoft", width: "w-20" },
    { name: "Apple", width: "w-12" },
    { name: "Amazon", width: "w-18" },
    { name: "Meta", width: "w-14" }
  ];

  const achievementStats = [
    { icon: Award, value: "98%", label: "Client Satisfaction" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Zap, value: "24/7", label: "Support Available" }
  ];

  return (
    <section ref={heroRef} className="relative min-h-screen bg-gray-900 text-gray-100 flex items-center overflow-hidden">
      {/* Enhanced dynamic gradient background with custom palette */}
      <div 
        className="absolute inset-0 opacity-90 transition-all duration-2000"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(229, 231, 235, 0.15) 0%, 
              rgba(227, 242, 253, 0.12) 25%, 
              rgba(245, 158, 11, 0.08) 50%,
              rgba(17, 24, 39, 0.95) 75%),
            linear-gradient(135deg, rgba(229, 231, 235, 0.05) 0%, rgba(17, 24, 39, 1) 100%)
          `
        }}
      ></div>
      
      {/* Synchronized animated grid */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(229, 231, 235, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(229, 231, 235, 0.04) 1px, transparent 1px),
              linear-gradient(rgba(227, 242, 253, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(227, 242, 253, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 40px 40px, 40px 40px',
            animation: `grid-move 32s linear infinite, grid-pulse 8s ease-in-out infinite`
          }}
        ></div>
      </div>

      {/* Synchronized floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-3 h-3' :
              i % 3 === 1 ? 'w-2 h-2' :
              'w-1 h-1'
            }`}
            style={{
              background: i % 3 === 0 ? 'rgba(229, 231, 235, 0.4)' :
                         i % 3 === 1 ? 'rgba(227, 242, 253, 0.5)' :
                         'rgba(245, 158, 11, 0.6)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + (i % 3) * 2}s ease-in-out infinite, glow ${4 + (i % 2) * 2}s ease-in-out infinite alternate`,
              animationDelay: `${(i * 0.5)}s`
            }}
          />
        ))}
      </div>

      {/* Synchronized flowing light streaks */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 opacity-60"
            style={{
              width: '300px',
              background: `linear-gradient(90deg, 
                transparent 0%, 
                ${i % 2 === 0 ? 'rgba(229, 231, 235, 0.6)' : 'rgba(245, 158, 11, 0.8)'} 50%, 
                transparent 100%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `streak ${12 + (i * 2)}s linear infinite`,
              animationDelay: `${i * 2}s`,
              transform: `rotate(${25 + (i * 15)}deg)`
            }}
          />
        ))}
      </div>

      {/* Synchronized pulse waves */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border opacity-20"
            style={{
              width: `${200 + (i * 150)}px`,
              height: `${200 + (i * 150)}px`,
              borderColor: i === 0 ? '#e5e7eb' : i === 1 ? '#e3f2fd' : '#f59e0b',
              animation: `pulse-wave ${6 + (i * 2)}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="max-w-6xl">
          {/* Enhanced status badge */}
          <div className={`flex items-center mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="relative mr-4">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#f59e0b' }}></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: '#f59e0b' }}></div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-lg border border-gray-600/30 rounded-full px-6 py-2 shadow-xl">
              <span className="text-gray-200 text-sm font-medium tracking-wide">
                🚀 Based in Kenya • Operating Worldwide • 24/7 Available
              </span>
            </div>
          </div>
          
          {/* Enhanced main heading with synchronized animations */}
          <h1 className={`text-3xl md:text-5xl xl:text-6xl font-bold leading-tight mb-8 transition-all duration-1200 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="block mb-2 tracking-tight text-gray-100">Where Vision Meets Code</span>
            <span className="block">
              <span 
                className="relative"
                style={{
                  background: 'linear-gradient(135deg, #e5e7eb 0%, #e3f2fd 50%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                top-class{' '}
                <span 
                  className={`inline-block transition-all duration-600 ${
                    isTyping ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  {dynamicWords[currentWord]}
                </span>
              </span>
              <Sparkles 
                className="inline-block ml-4 w-8 h-8 md:w-12 md:h-12 animate-spin" 
                style={{ 
                  color: '#f59e0b',
                  animationDuration: '6s',
                  filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.4))'
                }} 
              />
            </span>
          </h1>

          {/* Enhanced subtitle with metrics */}
          <div className={`mb-12 transition-all duration-1200 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
              We craft exceptional digital experiences that drive growth, innovation, and competitive advantage for forward-thinking companies.
            </p>
            
            {/* Achievement stats with custom palette */}
            <div className="flex flex-wrap gap-6 mb-8">
              {achievementStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center bg-gray-800/40 backdrop-blur-lg rounded-xl px-6 py-3 border border-gray-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{
                      boxShadow: '0 4px 20px rgba(229, 231, 235, 0.1)'
                    }}
                  >
                    <Icon className="w-5 h-5 mr-3" style={{ color: '#e3f2fd' }} />
                    <span className="font-bold mr-2" style={{ color: '#f59e0b' }}>{stat.value}</span>
                    <span className="text-gray-300 text-sm">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1200 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button 
              className="group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-400 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #e5e7eb 100%)',
                color: '#111827',
                boxShadow: '0 8px 32px rgba(245, 158, 11, 0.3)'
              }}
            >
              <span className="relative z-10 flex items-center font-bold">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: 'linear-gradient(135deg, #e5e7eb 0%, #f59e0b 100%)'
                }}
              ></div>
            </button>
            
            <button 
              className="group relative bg-transparent border-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-400 transform hover:scale-105 overflow-hidden"
              style={{
                borderColor: '#e5e7eb',
                color: '#e5e7eb'
              }}
            >
              <span className="relative z-10 flex items-center group-hover:text-gray-900 transition-colors duration-400">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </span>
              <div 
                className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                style={{ backgroundColor: '#e5e7eb' }}
              ></div>
            </button>
          </div>

          {/* Trusted by section */}
          <div className={`mb-16 transition-all duration-1200 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-400 text-sm mb-4 tracking-wide">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap items-center gap-8 opacity-70">
              {testimonialLogos.map((logo, index) => (
                <div 
                  key={index} 
                  className={`${logo.width} h-10 bg-gray-700/50 rounded-lg opacity-60 hover:opacity-100 transition-all duration-400 flex items-center justify-center hover:scale-110 border border-gray-600/30`}
                >
                  <span className="text-xs font-medium" style={{ color: '#e5e7eb' }}>{logo.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced service cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className={`group relative bg-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-600 transform hover:scale-105 hover:-translate-y-4 cursor-pointer overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    transitionDelay: `${800 + index * 200}ms`,
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {/* Enhanced gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-600 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(229, 231, 235, 0.1) 0%, 
                        rgba(227, 242, 253, 0.15) 50%, 
                        rgba(245, 158, 11, 0.1) 100%)`
                    }}
                  ></div>

                  {/* Animated border gradient */}
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-600"
                    style={{
                      background: `linear-gradient(135deg, #e5e7eb 0%, #e3f2fd 50%, #f59e0b 100%)`
                    }}
                  ></div>

                  {/* Stats badge */}
                  <div className="absolute top-4 right-4 bg-gray-900/70 backdrop-blur-sm rounded-full px-4 py-2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-400 border border-gray-600/30">
                    {service.stats}
                  </div>

                  {/* Enhanced icon container */}
                  <div 
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-400"
                    style={{
                      background: 'linear-gradient(135deg, rgba(229, 231, 235, 0.1) 0%, rgba(227, 242, 253, 0.15) 100%)',
                      boxShadow: '0 4px 16px rgba(227, 242, 253, 0.2)'
                    }}
                  >
                    <Icon 
                      className="w-8 h-8 group-hover:scale-110 transition-all duration-400" 
                      style={{ color: index === 0 ? '#e5e7eb' : index === 1 ? '#e3f2fd' : '#f59e0b' }}
                    />
                    
                    {/* Synchronized pulse effects */}
                    <div 
                      className="absolute inset-0 rounded-2xl scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-40 transition-all duration-800"
                      style={{
                        background: `linear-gradient(135deg, 
                          ${index === 0 ? '#e5e7eb' : index === 1 ? '#e3f2fd' : '#f59e0b'} 0%, 
                          transparent 100%)`
                      }}
                    ></div>
                    <div 
                      className="absolute inset-0 rounded-2xl scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-20 transition-all duration-1200 delay-200"
                      style={{
                        background: `radial-gradient(circle, 
                          ${index === 0 ? '#e5e7eb' : index === 1 ? '#e3f2fd' : '#f59e0b'} 0%, 
                          transparent 70%)`
                      }}
                    ></div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-400 text-gray-100">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-400 mb-6">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <span 
                      className="mr-2"
                      style={{ color: index === 0 ? '#e5e7eb' : index === 1 ? '#e3f2fd' : '#f59e0b' }}
                    >
                      Learn more
                    </span>
                    <ArrowRight 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: index === 0 ? '#e5e7eb' : index === 1 ? '#e3f2fd' : '#f59e0b' }}
                    />
                  </div>

                  {/* Interactive corner accent */}
                  <div 
                    className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-15 transition-all duration-600 rounded-tl-full"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, 
                        ${index === 0 ? '#e5e7eb' : index === 1 ? '#e3f2fd' : '#f59e0b'} 100%)`
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced synchronized animations */}
      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(80px, 80px); }
        }
        @keyframes grid-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg) scale(1); 
          }
          33% { 
            transform: translateY(-20px) rotate(120deg) scale(1.1); 
          }
          66% { 
            transform: translateY(-10px) rotate(240deg) scale(0.9); 
          }
        }
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 5px currentColor; 
            filter: brightness(1);
          }
          50% { 
            box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; 
            filter: brightness(1.3);
          }
        }
        @keyframes streak {
          0% { 
            transform: translateX(-300px) rotate(var(--rotation, 45deg)); 
            opacity: 0; 
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateX(calc(100vw + 300px)) rotate(var(--rotation, 45deg)); 
            opacity: 0; 
          }
        }
        @keyframes pulse-wave {
          0%, 100% { 
            transform: scale(0.8); 
            opacity: 0.3; 
          }
          50% { 
            transform: scale(1.2); 
            opacity: 0.1; 
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;