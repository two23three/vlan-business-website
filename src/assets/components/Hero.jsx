import React from 'react';
import background from "./img/background.webp";
import Globe from "/components/magicui/globe"; 

const Hero = () => {
  return (
    <div 
      className="relative py-16 bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Globe behind the content */}
      <div className="absolute inset-0 top-1/2 transform -translate-y-1/2 w-full h-auto flex justify-center z-0 opacity-40 pointer-events-none">
        <Globe className="w-full max-w-[28rem] md:max-w-[28rem]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-2xl mx-auto">
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
  );
};

export default Hero;
