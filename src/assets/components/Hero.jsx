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
          <div className="grid grid-cols-1 md:grid-cols-2  mb-8 md:mb-12">
            {/* Left Column */}
            <div className="h-full">
              <BoxReveal width="100%" boxColor="#1e3a8a" duration={0.9}>
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 shadow-lg transform transition duration-500 ease-in-out hover:scale-105 h-full flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-serif">
                      Vlan Business Technologies
                    </h2>
                    <p className="text-white text-sm md:text-lg mb-4 leading-relaxed">
                      Your one-stop IT solutions provider and security systems. We are a pioneer and a leading player in East Africa's technology solutions space.
                    </p>
                  </div>
                  <p className="text-white text-sm md:text-lg leading-relaxed">
                    For over 27 years, our ISO-Certified company has delivered technology solutions to 500+ enterprises in over 37 countries globally.
                  </p>
                </div>
              </BoxReveal>
            </div>

            {/* Right Column */}
            <div className="h-full">
              <BoxReveal width="100%" boxColor="#DC2626" duration={0.7}>
                <div className="bg-gradient-to-br from-gray-100 to-white p-6 shadow-lg transform transition duration-500 ease-in-out hover:scale-105 h-full flex flex-col justify-between">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 font-serif">
                    We enable companies to
                  </h2>
                  <ul className="text-gray-800 space-y-2 text-sm md:text-lg">
                    {[
                      "Empower your business with cutting-edge technology",
                      "Optimize every dollar through smart innovation",
                      "Gain real-time insights with actionable data",
                      "Strengthen cybersecurity with advanced protection",
                      "Minimize operational risks through intelligent solutions",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BoxReveal>
            </div>
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