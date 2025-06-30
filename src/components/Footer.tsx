
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold mb-4">diffco</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with top-class software development solutions worldwide.
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
              Based in Silicon Valley
            </p>
            <p className="text-gray-400 text-sm">
              Operating worldwide
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Diffco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
