import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "./img/Screenshot_from_2024-09-15_17-59-32-removebg-preview.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-orange-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title Container */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="VLAN Business Technologies" className="w-12 h-12" />
          <div className="text-white font-bold text-xl">VLAN BUSINESS TECHNOLOGIES</div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          <Link to="/services" className="text-white hover:text-blue-300">Services</Link>
          <Link to="/locations" className="text-white hover:text-blue-300">Locations</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-black-500 p-4 space-y-4">
          <Link to="/" className="block text-white hover:text-blue-300">Home</Link>
          <Link to="/services" className="block text-white hover:text-blue-300">Services</Link>
          <Link to="/locations" className="block text-white hover:text-blue-300">Locations</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
