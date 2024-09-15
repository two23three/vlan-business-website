import React from 'react';
import { ShieldCheck, ShoppingCart, Laptop } from 'lucide-react';
import { BorderBeam } from "/components/magicui/border-beam.jsx";

const services = [
  {
    icon: ShieldCheck,
    title: 'Security Systems',
    description: 'CCTV cameras, biometrics, and electric fences for your safety.',
  },
  {
    icon: ShoppingCart,
    title: 'Management Systems',
    description: (
      <>
        POS, Retail, and School management systems for efficient operations.
        <ul className="list-disc list-inside mt-2">
          <li>Restaurants & Clubs</li>
          <li>Supermarkets</li>
          <li>Hotels</li>
          <li>Wines & Spirits</li>
          <li>Wholesalers</li>
        </ul>
      </>
    ),
  },
  {
    icon: Laptop,
    title: 'Computer Sales & Repair',
    description: 'Sales and repair of computers, printers, laptops, and adaptors.',
  },
];

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative p-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md relative z-10">
                <service.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
                <BorderBeam />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a
            href="https://wa.me/+254701584681"
            className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
