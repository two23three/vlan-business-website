import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "./img/Screenshot_from_2024-09-15_17-59-32-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Locations', path: '/locations' },
    { name: 'Contacts', path: '/contact' }  // Changed from 'Contacts' to 'Contact'
  ];

  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title Container */}
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center">
            <img src={logo} alt="VLAN Business Technologies" className="w-12 h-12 rounded-full shadow-md" />
            <div className="text-white font-bold text-xl tracking-wide">Vlan Business Technologies LTD</div>
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <motion.div key={item.name} variants={linkVariants} whileHover="hover">
              <Link 
                to={item.path}
                className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu} 
            className="text-white p-2 rounded-md hover:bg-red-700 transition-colors duration-200"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-red-800 p-4 space-y-4 rounded-b-lg shadow-lg"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.path}
                  className="block text-white hover:text-blue-300 transition-colors duration-200 font-medium py-2"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;