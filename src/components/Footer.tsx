
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mall-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Super Mall</h3>
            <p className="text-gray-300 mb-4">Your one-stop digital destination for shopping, dining, and entertainment.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/shops" className="text-gray-300 hover:text-white">Shops</Link></li>
              <li><Link to="/food-court" className="text-gray-300 hover:text-white">Food Court</Link></li>
              <li><Link to="/movie-hall" className="text-gray-300 hover:text-white">Movie Hall</Link></li>
              <li><Link to="/arcade" className="text-gray-300 hover:text-white">Arcade</Link></li>
              <li><Link to="/kids-zone" className="text-gray-300 hover:text-white">Kids Zone</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Super Mall Application. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
