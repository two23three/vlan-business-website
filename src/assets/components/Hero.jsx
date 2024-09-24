import React from 'react';
import background from './img/background.webp';
import Slideshow from './SlideShow';
import SplitAccordionCards from './SplitAccordionCards';
import CallToAction from './CallToAction';
import BoxReveal from '/components/magicui/box-reveal';

const Hero = () => {
  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-start"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 w-full flex flex-col">
        <div className="w-full">
          <Slideshow />
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-0 mt-0">
          <div className="flex flex-col md:flex-row mb-8 md:mb-12">
            {/* Left Column */}
            <BoxReveal width="100%" boxColor="#1e3a8a" duration={0.9}>
              <div className="md:w-full bg-blue p-6 shadow-lg transform transition duration-700 ease-in-out hover:scale-105">
                <h2 className="text-xl md:text-3xl font-bold mb-4 text-white font-serif">
                  Vlan Business Technologies
                </h2>
                <p className="text-white text-sm md:text-lg mb-4">
                  Your one-stop IT solutions provider and security systems. We are a pioneer and a leading player in East Africa's technology solutions space.
                </p>
                <p className="text-white text-sm md:text-lg">
                  For over 27 years, our ISO-Certified company has delivered technology solutions to 500+ enterprises in over 37 countries globally.
                </p>
              </div>
            </BoxReveal>

            {/* Right Column */}
            <BoxReveal width="100%" boxColor="red" duration={0.7}>
              <div className="md:w-full bg-white p-6 shadow-lg mb-6 md:mb-0 transform transition duration-700 ease-in-out hover:scale-105">
                <h2 className="text-xl md:text-3xl font-bold mb-4 text-blue font-serif">
                  We enable companies to
                </h2>
                <ul className="text-black space-y-2 text-sm md:text-lg">
                  <li> • Empower your business with cutting-edge technology</li>
                  <li> • Optimize every dollar through smart innovation</li>  
                  <li> • Gain real-time insights with actionable data</li>  
                  <li> • Strengthen cybersecurity with advanced protection</li> 
                  <li> • Minimize operational risks through intelligent solutions</li>  
                  <li> • Boost customer retention with personalized experiences</li> 
                </ul>
              </div>
            </BoxReveal>
          </div>

          <CallToAction />

          <div className="animate-fade-in-up animation-delay-800 bg-white">
            <SplitAccordionCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
