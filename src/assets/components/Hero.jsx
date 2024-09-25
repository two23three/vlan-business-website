import React from 'react';
import background from './img/background.webp';
import Slideshow from './SlideShow';
import ServiceSlideshow from './ServiceSlideshow';
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
        
        <div className="w-full max-w-7xl mx-auto ">
          <BoxReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-white/90 backdrop-blur-sm  shadow-lg p-6">
              {/* Left Column */}
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 font-serif">
                  Vlan Business Technologies
                </h2>
                <p className="text-gray-800 text-sm md:text-base mb-4 leading-relaxed">
                  Your one-stop IT solutions provider and security systems. We are a pioneer and a leading player in East Africa's technology solutions space.
                </p>
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  For 14 years, we have implemented technology systems in more than 2000 + enterprises allover kenya
                </p>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-between">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900 font-serif">
                  We enable companies to
                </h2>
                <ul className="text-gray-800 space-y-2 text-sm md:text-base">
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
            </div>
          </BoxReveal>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Our Services</h2>
            <ServiceSlideshow />
          </div>

          <CallToAction />

          <div className="animate-fade-in-up animation-delay-800 bg-white rounded-lg shadow-lg overflow-hidden">
            <SplitAccordionCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;