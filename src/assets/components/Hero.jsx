import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import background from "./img/background.webp";
import Globe from "/components/magicui/globe";
import BoxReveal from "/components/magicui/box-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/components/ui/accordion";

const straightLineListStyles = `
.straight-line-list {
  position: relative;
  padding-left: 1.5rem;
}

.straight-line-list li {
  position: relative;
  list-style: none;
  margin-left: 0.5rem;
}

.straight-line-list li::before {
  content: '•';
  position: absolute;
  left: -1.5rem;
  top: 0;
  font-size: 1.2rem;
  color: white;
}
`;

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <style>{straightLineListStyles}</style>
      <div 
        className="relative py-8 md:py-16 bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center px-4 md:px-8"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        <div className="absolute inset-0 top-1/3 transform -translate-y-1/3 w-full h-auto flex justify-center z-0 opacity-30 pointer-events-none">
          <Globe className="w-full max-w-[18rem] md:max-w-[36rem] animate-spin-slow" />
        </div>

        <div className="relative z-10 p-4 md:p-8 rounded-lg text-center w-full max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-5xl font-light mb-2 md:mb-4 text-white font-serif italic animate-fade-in-up">
            Welcome to
          </h2>
          <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 text-white font-serif tracking-wide animate-fade-in-up animation-delay-200">
            Vlan Business Technologies
          </h1>
          <p className="text-lg md:text-3xl text-gray-200 mb-6 md:mb-8 font-sans leading-relaxed animate-fade-in-up animation-delay-400">
            Your one-stop solution for IT solutions and security systems
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 md:mb-12 animate-fade-in-up animation-delay-600">
            <a
              href="https://wa.me/254720067010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-green-600 transition duration-300 text-base md:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              <FaWhatsapp className="mr-2 text-xl md:text-2xl" />
              WhatsApp Us
            </a>
            <button
              onClick={openModal}
              className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-blue-700 transition duration-300 text-base md:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto"
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fade-in-up animation-delay-800">
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <div className="text-white p-4 md:p-6 rounded-lg bg-opacity-20 bg-white backdrop-filter backdrop-blur-sm h-full flex flex-col">
                <h3 className="text-2xl md:text-4xl font-semibold font-serif tracking-wide mb-3 md:mb-4">
                  Vpos Point of Sale System
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">Our Services</AccordionTrigger>
                    <AccordionContent>
                      <ul className="straight-line-list text-sm md:text-base font-sans text-left space-y-1 md:space-y-2">
                        <li>Sales and repair of laptops/computers/printers</li>
                        <li>Installation and maintenance of CCTV cameras</li>
                        <li>Structured cabling for data and voice</li>
                        <li>Electric Fence/Razor</li>
                        <li>DSTV</li>
                        <li>Biometrics</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </BoxReveal>

            <BoxReveal boxColor={"#FF4500"} duration={0.5}>
              <div className="text-white p-4 md:p-6 rounded-lg bg-opacity-20 bg-white backdrop-filter backdrop-blur-sm h-full flex flex-col">
                <h3 className="text-2xl md:text-4xl font-semibold font-serif tracking-wide mb-3 md:mb-4">
                  Vlan College of Business & Technology
                </h3>
                <p className="text-lg md:text-xl font-sans mb-3 md:mb-4">
                  Minimum entry grade C- and above in KCSE
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-white">Diploma Programs</AccordionTrigger>
                    <AccordionContent>
                      <ul className="straight-line-list list-disc list-inside space-y-1 text-sm">
                        <li>Information Communication Technology</li>
                        <li>Software Engineering</li>
                        <li>Sales and Marketing</li>
                        <li>Purchasing and Supply Chain Management</li>
                        <li>Business Administration</li>
                        <li>Tourism Management</li>
                        <li>Social Work and Community Development</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-white">Professional Certifications</AccordionTrigger>
                    <AccordionContent>
                      <ul className="straight-line-list list-disc list-inside space-y-1 text-sm">
                        <li>Digital Marketing</li>
                        <li>A+ Certification</li>
                        <li>N+ Certification</li>
                        <li>CISCO (CCNA) Certification</li>
                        <li>Cyber Security</li>
                        <li><span className="font-bold text-yellow-400">Hairdressing & Beauty</span></li>
                      </ul>
                      <p className="font-semibold mt-3 mb-1 text-sm">KASNEB (ATD & CPA) New Syllabus</p>
                      <p className="font-semibold mt-3 mb-1 text-sm">Accounting Packages</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-white">Language Courses</AccordionTrigger>
                    <AccordionContent>
                      <ul className="straight-line-list list-disc list-inside space-y-1 text-sm">
                        <li>English</li>
                        <li>French</li>
                        <li>German</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </BoxReveal>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 p-4">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-md md:max-w-2xl text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-900 font-serif tracking-wide">
                Unlock the Power of VLAN POS
              </h2>
              <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 font-sans leading-relaxed">
                Our feature-packed POS system is perfect for retail and restaurants. It offers seamless integration with your business, ensuring you provide top-tier customer service with ease. 
              </p>
              <p className="text-xl md:text-3xl font-semibold text-green-600 mb-4 md:mb-6 font-sans">
                From <span className="text-red-500">Ksh 50,000</span> — a small investment for big rewards!
              </p>
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 text-lg md:text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;