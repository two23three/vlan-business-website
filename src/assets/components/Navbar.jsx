import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
        <div className="text-white font-bold text-xl">VLAN BUSINESS TECHNOLOGIES</div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          <Link to="/services" className="text-white hover:text-blue-300">Services</Link>
          <Link to="/locations" className="text-white hover:text-blue-300">Locations</Link>
          <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black-500 p-4 space-y-4">
          <Link to="/" className="block text-white hover:text-blue-300">Home</Link>
          <Link to="/services" className="block text-white hover:text-blue-300">Services</Link>
          <Link to="/locations" className="block text-white hover:text-blue-300">Locations</Link>
          <Link to="/contact" className="block text-white hover:text-blue-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
