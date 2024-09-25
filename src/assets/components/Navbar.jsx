import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 p-2 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo and Mobile Menu Button Container */}
          <div className="flex items-center space-x-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-2">
              <div className="text-white font-bold text-xl">Vlan Business Technologies</div>
                <div className="md:hidden">
                  <motion.button 
                    onClick={toggleMenu} 
                    className="text-white p-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                    whileTap={{ scale: 0.95 }}
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.button>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
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
        </div>

        {/* Mobile Menu Links */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="md:hidden bg-blue-800 p-2 space-y-2 rounded-b-lg shadow-lg mt-2"
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
                    className="block text-white hover:text-blue-300 transition-colors duration-200 font-medium py-1"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;