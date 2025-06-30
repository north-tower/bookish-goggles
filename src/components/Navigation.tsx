
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white text-xl font-bold">
            diffco
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About us</Link>
            <Link to="/cases" className="text-gray-300 hover:text-white transition-colors">Cases</Link>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Clients</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contacts</a>
          </div>

          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6">
            Let's chat
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
