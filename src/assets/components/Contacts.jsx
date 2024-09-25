import React from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-100 to-blue-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto p-8 bg-white shadow-2xl rounded-xl max-w-2xl"
      >
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-lg mb-8 text-gray-700 text-center">
          If you have any inquiries or need further information, feel free to reach us through the following methods:
        </p>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Details</h2>
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center mb-4 group"
          >
            <FaEnvelope className="text-blue-600 mr-3 text-xl group-hover:scale-110 transition-transform" />
            <a
              href="mailto:vlanbtechnologies@gmail.com"
              className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors duration-300"
            >
              Email Us
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center mb-4 group"
          >
            <FaWhatsapp className="text-green-600 mr-3 text-xl group-hover:scale-110 transition-transform" />
            <a
              href="https://wa.me/0720067010"
              className="text-green-600 hover:text-green-800 font-medium text-lg transition-colors duration-300"
            >
              WhatsApp Us
            </a>
          </motion.div>
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center mb-4 group"
          >
            <FaMapMarkerAlt className="text-red-600 mr-3 text-xl group-hover:scale-110 transition-transform" />
            <span className="text-gray-700 font-medium text-lg">
              P.O. BOX 79473-00200, Nairobi
            </span>
          </motion.div>
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center group"
          >
            <FaPhone className="text-purple-600 mr-3 text-xl group-hover:scale-110 transition-transform" />
            <span className="text-gray-700 font-medium text-lg">
              Tel: 0720-067010, 0736-328241
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;