
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-mall-primary">Super Mall</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-mall-primary font-medium">Home</Link>
            <Link to="/shops" className="text-gray-700 hover:text-mall-primary font-medium">Shops</Link>
            <Link to="/food-court" className="text-gray-700 hover:text-mall-primary font-medium">Food Court</Link>
            <Link to="/movie-hall" className="text-gray-700 hover:text-mall-primary font-medium">Movie Hall</Link>
            <Link to="/arcade" className="text-gray-700 hover:text-mall-primary font-medium">Arcade</Link>
            <Link to="/kids-zone" className="text-gray-700 hover:text-mall-primary font-medium">Kids Zone</Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleSearch}>
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleSearch} className="mr-2">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Search bar */}
        {searchVisible && (
          <div className="py-2 px-2 border-t animate-fade-in">
            <div className="flex">
              <Input type="text" placeholder="Search the mall..." className="w-full" />
              <Button variant="ghost" size="icon" onClick={toggleSearch}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-2 border-t animate-fade-in">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Home</Link>
            <Link to="/shops" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Shops</Link>
            <Link to="/food-court" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Food Court</Link>
            <Link to="/movie-hall" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Movie Hall</Link>
            <Link to="/arcade" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Arcade</Link>
            <Link to="/kids-zone" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={toggleMenu}>Kids Zone</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
