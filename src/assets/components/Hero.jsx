import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import background from "./img/background.webp";
import Globe from "/components/magicui/globe"; 
import BoxReveal from "/components/magicui/box-reveal";
import { cn } from "/lib/utils"; 
import Marquee from "/components/magicui/marquee";

const reviews = [ 
  {
    name: "Sarah",
    username: "@sarah_retailpro",
    body: "VLAN POS transformed our retail operations. The efficiency is unmatched!",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Michael",
    username: "@mike_restaurantowner",
    body: "This POS system streamlined our restaurant's workflow. Highly recommended!",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Emily",
    username: "@emily_techexpert",
    body: "As an IT professional, I'm impressed by VLAN's robust security features.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "David",
    username: "@david_smallbiz",
    body: "VLAN's IT services have been a game-changer for our small business.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Lisa",
    username: "@lisa_retailmanager",
    body: "The customization options in VLAN POS are exactly what we needed. Love it!",
    img: "https://avatar.vercel.sh/lisa",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4 m-2",
        "border-gray-950/[.1] bg-white",
        "dark:border-gray-50/[.1] dark:bg-white"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-xs text-gray-800 dark:text-white">{body}</blockquote>
    </figure>
  );
};



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

      <div className="relative z-10 bg-black bg-opacity-60 p-8 rounded-lg text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-light mb-4 text-white font-serif italic">
          Welcome to
        </h2>
        <h1 className="text-5xl font-bold mb-6 text-white font-serif tracking-wide">
          Vlan Business Technologies
        </h1>
        <p className="text-2xl text-gray-200 mb-8 font-sans leading-relaxed">
          Your one-stop solution for IT services and security systems
        </p>
        <div className="flex justify-center space-x-4">
              <a
                href="https://wa.me/254720067010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                WhatsApp Us
              </a>
        </div>
        <div className="relative h-full w-full items-center justify-center overflow-hidden pt-8">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.8rem] font-semibold text-white font-serif tracking-wide">
              Vlan POS<span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1.25rem] text-white font-sans tracking-normal">
              Point of Sale system for{" "}
              <span className="text-[#FFD700]">Retail & Restaurants</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#FF4500"} duration={0.5}>
            <div className="mt-[1.5rem] text-white">
              <p className="text-lg font-sans leading-relaxed">
               
                -&gt; Efficient, customizable, and scalable for any business. <br />
              </p>
            </div>
          </BoxReveal>
        </div>

        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-6 py-3 mt-8 rounded-full hover:bg-blue-700 transition duration-300 text-lg tracking-wider"
        >
          Learn More
        </button>
      </div>

      <div className="relative flex h-[300px] w-full max-w-2xl flex-row items-center justify-center overflow-hidden rounded-lg border-none bg-transparent md:shadow-none mt-8"> 
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent dark:from-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-transparent dark:from-transparent"></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 font-serif tracking-wide">
              Unlock the Power of VLAN POS
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-sans leading-relaxed">
              Our feature-packed POS system is perfect for retail and restaurants. It offers seamless integration with your business, ensuring you provide top-tier customer service with ease. 
            </p>
            <p className="text-2xl font-semibold text-green-600 mb-4 font-sans">
              From <span className="text-red-500">Ksh 50,000</span> — a small investment for big rewards!
            </p>
            <p className="text-sm text-gray-600 mb-6 font-sans leading-relaxed">
              Boost your business efficiency now!
            </p>

            {/* Button Group */}
            <div className="flex justify-center space-x-4">
              <a
                href="https://wa.me/254720067010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                WhatsApp Us
              </a>

              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;