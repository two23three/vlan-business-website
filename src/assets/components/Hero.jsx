import React from 'react';
import background from "./img/background.webp";

const Hero = () => {
  return (
    <div 
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="container mx-auto text-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg inline-block">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Welcome to VLAN BUSINESS TECHNOLOGIES
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Your one-stop solution for IT services and security systems
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
