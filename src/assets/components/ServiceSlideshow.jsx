import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import biometrics from "./img/vlangraphics/biometrics.jpg";
import biometrics2 from "./img/vlangraphics/biometrics1.jpg";
import structuredCabling1 from "./img/vlangraphics/cabling.jpeg";
import structuredCabling2 from "./img/vlangraphics/structuredcabling2.jpg";
import retailpos from "./img/vlangraphics/retail pos.jpg";
import receipt from "./img/vlangraphics/receipt printer.jpg";
import postouchmachine from "./img/vlangraphics/pos-touch-machine.jpg";
import boxscanner from "./img/vlangraphics/box scanners.jpg";

const servicesData = [
  {
    title: "IT Solutions",
    description: "Comprehensive IT solutions for your business. We provide cutting-edge technology integration, network setup, and infrastructure management to streamline your operations and boost productivity.",
    images: [
      { 
        src: structuredCabling1, 
        alt: "Structured Cabling", 
        description: "Our engineer meticulously installing structured cabling to ensure optimal network performance."
      },
      { 
        src: structuredCabling2, 
        alt: "Network Setup", 
        description: "The result of our structured cabling installation: a clean, organized, and efficient network infrastructure."
      },
      { 
        src: biometrics, 
        alt: "Biometric Solutions", 
        description: "Advanced biometric access control system, enhancing security and streamlining entry processes."
      }
    ]
  },
  {
    title: "Security Systems",
    description: "State-of-the-art security systems for your premises. Our advanced biometric and surveillance solutions ensure the highest level of protection for your assets and personnel.",
    images: [
      { 
        src: biometrics, 
        alt: "Biometric Security", 
        description: "Cutting-edge biometric scanner in action, providing secure and swift access control."
      },
      { 
        src: biometrics2, 
        alt: "Advanced Security Systems", 
        description: "Comprehensive security system dashboard, allowing for real-time monitoring and management."
      }
    ]
  },
  {
    title: "POS Systems",
    description: "Efficient point of sale systems for Hotel, Restaurants, Clubs and Retail. Our POS solutions combine hardware and software to streamline transactions, inventory management, and customer data collection for a seamless retail experience.",
    images: [
      { 
        src: retailpos, 
        alt: "Retail POS System", 
        description: "Modern retail POS system in use, facilitating quick and accurate transactions."
      },
      { 
        src: postouchmachine, 
        alt: "POS Touch Machine", 
        description: "User-friendly touch-screen POS machine, simplifying order processing and inventory management."
      },
      { 
        src: boxscanner, 
        alt: "Box Scanner", 
        description: "High-speed box scanner in operation, enhancing inventory tracking and reducing checkout times."
      },
      {
        src: receipt, 
        alt: "Receipt Printer", 
        description: "High-quality, durable receipt printer in use, ensuring consistent and accurate order processing."
      }

    ]
  }
];

const ServiceSlideshow = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    const service = servicesData[currentService];
    if (currentImage < service.images.length - 1) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentService((currentService + 1) % servicesData.length);
      setCurrentImage(0);
    }
  };

  const prevSlide = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      const prevServiceIndex = (currentService - 1 + servicesData.length) % servicesData.length;
      setCurrentService(prevServiceIndex);
      setCurrentImage(servicesData[prevServiceIndex].images.length - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentService, currentImage]);

  const service = servicesData[currentService];
  const image = service.images[currentImage];

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-gray-100">
      <div className="flex flex-col md:flex-row h-full">
        {/* Image Container */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-4 md:p-8 flex items-center justify-center bg-white">
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-full max-h-full object-cover shadow-lg"
          />
        </div>

        {/* Text Container */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-800 p-4 md:p-8 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">{service.title}</h1>
          <p className="text-md md:text-lg lg:text-xl text-gray-300 mb-4">{service.description}</p>
          <p className="text-sm text-gray-400 mb-2">Image {currentImage + 1} of {service.images.length}</p>
          {/* Image Description */}
          <p className="text-sm italic text-gray-300">{image.description}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full text-white z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-colors p-2 rounded-full text-white z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {servicesData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentService(index);
              setCurrentImage(0);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentService ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSlideshow;
