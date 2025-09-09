import DeveloperSignature from './DeveloperSignature';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">Aeres Technologies</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Aeres Technologies is a dynamic tech company based in Nairobi, Kenya, specializing in innovative mobile and web-based solutions. We leverage cutting-edge technology to build scalable, user-friendly applications that solve real-world problems for businesses and consumers across Africa and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Staff Augmentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">
              Nairobi, Kenya
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Email: info@aerestech.com
            </p>
            <p className="text-gray-400 text-sm mb-2">
              Phone: +254 700 000 000
            </p>
            <p className="text-gray-400 text-sm">
              Social: @aerestech (Twitter, LinkedIn, Instagram)
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400 relative">
          <p>&copy; 2025 Aeres Technologies. All rights reserved.</p>
          
          {/* Developer signature in copyright section */}
          <div className="mt-4 flex justify-center">
            <DeveloperSignature 
              variant="minimal" 
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
        
        {/* Floating developer signature watermark */}
        <div className="absolute bottom-4 right-4 opacity-20 hover:opacity-40 transition-opacity duration-500">
          <DeveloperSignature 
            variant="badge" 
            className="transform rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
