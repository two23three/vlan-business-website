import React from 'react';
import background from "./img/background.webp";
import Globe from "/components/magicui/globe"; 
import BoxReveal from "/components/magicui/box-reveal";

const Hero = () => {
  return (
    <div 
      className="relative py-16 bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Adjusted Globe position */}
      <div className="absolute inset-0 top-1/3 transform -translate-y-1/3 w-full h-auto flex justify-center z-0 opacity-40 pointer-events-none">
        <Globe className="w-full max-w-[28rem] md:max-w-[28rem]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Welcome to VLAN BUSINESS TECHNOLOGIES
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Your one-stop solution for IT services and security systems
        </p>
        
        {/* Box Reveal Content, now part of main content */}
        <div className="relative h-full w-full items-center justify-center overflow-hidden pt-8">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold text-white">
              Vlan POS<span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem] text-white">
              Point of Sale system for{" "}
              <span className="text-[#5046e6]">Retail & Restaurants</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-[1.5rem] text-white">
              <p>
                -&gt; Feature-rich POS system built with
                <span className="font-semibold text-[#5046e6]"> React</span>,
                <span className="font-semibold text-[#5046e6]"> Typescript</span>,
                <span className="font-semibold text-[#5046e6]"> Tailwind CSS</span>,
                and
                <span className="font-semibold text-[#5046e6]"> Framer Motion</span>.
                <br />
                -&gt; Efficient, customizable, and scalable for any business. <br />
              </p>
            </div>
          </BoxReveal>
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 mt-8 rounded-full hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;
