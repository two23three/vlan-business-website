import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Contact Us</h1>
        <p className="text-lg mb-4">
          If you have any inquiries or need further information, feel free to reach us through the following methods:
        </p>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Contact Details</h2>
          <div className="flex items-center mb-2">
            <FaEnvelope className="text-blue-600 mr-2" />
            <a
              href="mailto:vlanbtechnologies@gmail.com"
              className="text-blue-600 hover:underline font-medium"
            >
              Email Us
            </a>
          </div>
          <div className="flex items-center">
            <FaWhatsapp className="text-green-600 mr-2" />
            <a
              href="https://wa.me/+254720067010"
              className="text-blue-600 hover:underline font-medium"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
