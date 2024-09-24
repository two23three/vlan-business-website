import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import nairobi from "./img/nairobi.webp";
import customerservice from "./img/customerservice.webp";
import security from "./img/security1.webp";

const slideData = [
  {
    image: security,
    title: "Welcome to Vlan Business Technologies",
    description: "Your one-stop IT solutions provider and security systems"
  },
  {
    image: nairobi,
    title: "Vpos Point of Sale System",
    description: "Streamline your business operations with our cutting-edge POS system"
  },
  {
    image: customerservice,
    title: "Vlan College of Business & Technology",
    description: "Empowering the next generation of tech professionals"
  }
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[25vh] md:h-[50vh] overflow-hidden">
      {slideData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              filter: 'blur(0px)', // keep the image sharp
              WebkitBackfaceVisibility: 'hidden', // fix for improved rendering on mobile browsers
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center justify-start p-4 md:p-8">
            <div className="text-left text-white max-w-2xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 leading-tight">{slide.title}</h1>
              <p className="text-sm md:text-lg lg:text-xl opacity-80">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-colors p-1 md:p-2 rounded-full text-white"
      >
        <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 transition-colors p-1 md:p-2 rounded-full text-white"
      >
        <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 md:space-x-2">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
