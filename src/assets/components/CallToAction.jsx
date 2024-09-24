import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12 animate-fade-in-up animation-delay-600">
        <a
          href="https://wa.me/254720067010"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-600 transition duration-300 text-sm md:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
        >
          <FaWhatsapp className="mr-2 text-lg md:text-2xl" />
          WhatsApp Us
        </a>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-blue-700 transition duration-300 text-sm md:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
        >
          Learn More
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 p-4">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-2xl w-full max-w-sm md:max-w-2xl text-center">
            <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-6 text-gray-900 font-serif tracking-wide">
              Unlock the Power of VLAN POS
            </h2>
            <p className="text-sm md:text-xl text-gray-700 mb-4 md:mb-8 font-sans leading-relaxed">
              Our feature-packed POS system is perfect for retail and restaurants. It offers seamless integration with your business, ensuring you provide top-tier customer service with ease.
            </p>
            <p className="text-lg md:text-3xl font-semibold text-green-600 mb-3 md:mb-6 font-sans leading-relaxed">
              For only Ksh. 50,000
            </p>
            <button
              onClick={closeModal}
              className="mt-4 md:mt-6 bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-blue-700 transition duration-300 text-sm md:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CallToAction;
