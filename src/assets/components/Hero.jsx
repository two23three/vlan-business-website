import React, { useState } from 'react';
import background from "./img/background.webp";
import Globe from "/components/magicui/globe"; 
import BoxReveal from "/components/magicui/box-reveal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div 
      className="relative py-16 bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 top-1/3 transform -translate-y-1/3 w-full h-auto flex justify-center z-0 opacity-40 pointer-events-none">
        <Globe className="w-full max-w-[28rem] md:max-w-[28rem]" />
      </div>

      <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to VLAN BUSINESS TECHNOLOGIES
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Your one-stop solution for IT services and security systems
        </p>
        
        <div className="relative h-full w-full items-center justify-center overflow-hidden pt-8">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold text-white">
              Vlan POS<span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem] text-white">
              Point of Sale system for{" "}
              <span className="text-[#FFD700]">Retail & Restaurants</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#FF4500"} duration={0.5}>
            <div className="mt-[1.5rem] text-white">
              <p>
                -&gt; Feature-rich POS system built with
                <span className="font-semibold text-[#FF4500]"> React</span>,
                <span className="font-semibold text-[#FF4500]"> Typescript</span>,
                <span className="font-semibold text-[#FF4500]"> Tailwind CSS</span>,
                and
                <span className="font-semibold text-[#FF4500]"> Framer Motion</span>.
                <br />
                -&gt; Efficient, customizable, and scalable for any business. <br />
              </p>
            </div>
          </BoxReveal>
        </div>

        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-6 py-2 mt-8 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Learn More
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Unlock the Power of VLAN POS
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our feature-packed POS system is perfect for retail and restaurants. It offers seamless integration with your business, ensuring you provide top-tier customer service with ease. 
            </p>
            <p className="text-2xl font-semibold text-green-600 mb-4">
              Only <span className="text-red-500">Ksh 50,000</span> — a small investment for big rewards!
            </p>
            <p className="text-sm text-gray-600">
              This price includes lifetime access, updates, and full support. Boost your business efficiency now!
            </p>

            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 mt-6 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
