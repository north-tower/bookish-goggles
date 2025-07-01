import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navigationItems = [
    { href: "#about", label: "About us", hasDropdown: false },
    { href: "#cases", label: "Cases", hasDropdown: false },
    { 
      href: "#services", 
      label: "Services", 
      hasDropdown: true,
      dropdownItems: [
        "Staff Augmentation",
        "Custom Development", 
        "AI Solutions",
        "Cloud Services"
      ]
    },
    { href: "#solutions", label: "Solutions", hasDropdown: false },
    { href: "#clients", label: "Clients", hasDropdown: false },
    { href: "#blog", label: "Blog", hasDropdown: false },
    { href: "#contacts", label: "Contacts", hasDropdown: false }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-700/50' 
          : 'bg-transparent'
      }`}
      style={{
        background: isScrolled 
          ? `linear-gradient(135deg, 
              rgba(17, 24, 39, 0.95) 0%, 
              rgba(31, 41, 55, 0.95) 50%, 
              rgba(17, 24, 39, 0.95) 100%),
              radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(229, 231, 235, 0.05) 0%, 
              transparent 50%)`
          : 'transparent'
      }}
    >
      {/* Animated top border */}
      <div 
        className={`absolute top-0 left-0 h-0.5 transition-all duration-700 ${
          isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
        style={{
          background: 'linear-gradient(90deg, #e5e7eb 0%, #e3f2fd 50%, #f59e0b 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo with animations */}
          <a 
            href="/" 
            className={`group relative text-2xl font-bold transition-all duration-400 hover:scale-110 ${
              isScrolled ? 'text-gray-100' : 'text-white'
            }`}
          >
            <div className="relative flex items-center">
              <span 
                className="relative z-10 transition-all duration-400"
                style={{
                  background: 'linear-gradient(135deg, #e5e7eb 0%, #e3f2fd 50%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Aer
              </span>
              <span className={`relative z-10 transition-all duration-400 ${
                isScrolled ? 'text-gray-100' : 'text-white'
              }`}>
                es
              </span>
              
              {/* Animated sparkle */}
              <Sparkles 
                className="ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-400 animate-spin"
                style={{ 
                  color: '#f59e0b',
                  animationDuration: '3s'
                }}
              />
              
              {/* Glowing background on hover */}
              <div 
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-all duration-400 blur-md -z-10"
                style={{
                  background: 'linear-gradient(135deg, #e5e7eb 0%, #e3f2fd 50%, #f59e0b 100%)'
                }}
              />
            </div>
          </a>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a 
                  href={item.href} 
                  className={`relative flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  
                  {/* Enhanced hover effects */}
                  <div 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-400 -z-10"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(229, 231, 235, 0.1) 0%, 
                        rgba(227, 242, 253, 0.15) 50%, 
                        rgba(245, 158, 11, 0.1) 100%)`
                    }}
                  />
                  
                  {/* Animated underline */}
                  <span 
                    className="absolute -bottom-1 left-4 right-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                    style={{
                      background: 'linear-gradient(90deg, #e5e7eb 0%, #e3f2fd 50%, #f59e0b 100%)'
                    }}
                  />
                </a>

                {/* Enhanced Dropdown Menu */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-56 transition-all duration-400 transform origin-top ${
                      activeDropdown === index 
                        ? 'opacity-100 scale-100 translate-y-0' 
                        : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div 
                      className="bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 py-2 overflow-hidden"
                      style={{
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {/* Dropdown gradient background */}
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          background: 'linear-gradient(135deg, rgba(229, 231, 235, 0.05) 0%, rgba(227, 242, 253, 0.1) 100%)'
                        }}
                      />
                      
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={`#${dropdownItem.toLowerCase().replace(' ', '-')}`}
                          className="relative block px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 group/item"
                        >
                          <span className="relative z-10">{dropdownItem}</span>
                          <div 
                            className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-center"
                            style={{ backgroundColor: '#f59e0b' }}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Enhanced CTA Button */}
            <button 
              className="group relative px-6 py-3 font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-400 overflow-hidden border border-transparent hover:border-gray-600/30"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #e5e7eb 100%)',
                color: '#111827'
              }}
            >
              <span className="relative z-10 flex items-center font-bold">
                Let's chat
                <div className="ml-2 w-2 h-2 rounded-full bg-current animate-pulse" />
              </span>
              
              {/* Animated background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: 'linear-gradient(135deg, #e5e7eb 0%, #f59e0b 100%)'
                }}
              />
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 scale-x-0 group-hover:scale-x-100 group-hover:animate-pulse transition-transform duration-700" />
            </button>
            
            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800/50' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X size={24} className="transform rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="transition-transform duration-300" />
                )}
                
                {/* Button glow effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 hover:opacity-20 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #e5e7eb 0%, #e3f2fd 50%, #f59e0b 100%)',
                    filter: 'blur(8px)'
                  }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div 
          className="relative backdrop-blur-xl border-t border-gray-700/50"
          style={{
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)'
          }}
        >
          {/* Mobile menu gradient overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'linear-gradient(135deg, #e5e7eb 0%, #e3f2fd 50%, #f59e0b 100%)'
            }}
          />
          
          <div className="relative px-4 py-6 space-y-2">
            {navigationItems.map((item, index) => (
              <div key={index} className="group">
                <a 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium rounded-xl transition-all duration-300 group-hover:scale-105"
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                  
                  {/* Mobile item indicator */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-r-full"
                    style={{ backgroundColor: '#f59e0b' }}
                  />
                </a>
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-gray-700/50">
              <button 
                className="w-full px-6 py-4 font-bold rounded-xl shadow-lg transition-all duration-400 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #e5e7eb 100%)',
                  color: '#111827'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's chat
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(200%) rotate(45deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;