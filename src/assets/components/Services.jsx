import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ShoppingCart, Laptop, GraduationCap } from 'lucide-react';
import { BorderBeam } from "/components/magicui/border-beam.jsx";
import grad from "./img/grad.webp"
import desktop from "./img/desktop.webp";
import security from "./img/security.webp"
import management from "./img/management.webp"

const services = [
  {
    icon: ShieldCheck,
    title: 'Security Systems',
    description: 'CCTV cameras, biometrics, and electric fences for your safety.',
    slug: 'security-systems',
    image: security
  },
  {
    icon: ShoppingCart,
    title: 'Management Systems',
    description: 'POS, Retail, and School management systems for efficient operations.',
    slug: 'management-systems',
    image: management
  },
  {
    icon: Laptop,
    title: 'Computer Sales & Repair',
    description: 'Sales and repair of computers, printers, laptops, and adaptors.',
    slug: 'computer-sales-repair',
    image: desktop
  },
  {
    icon: GraduationCap,
    title: 'College Programs',
    description: 'Comprehensive IT and business courses for career advancement.',
    slug: 'college-programs',
    image: grad
  }
];

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
              <div className="relative h-64 w-full">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-75"></div>
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white">
                <service.icon className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                >
                  Explore More
                </Link>
              </div>
              <BorderBeam />
            </div>
          ))}
        </div>
        <div className="mt-16">
          <a
            href="https://wa.me/+254701584681"
            className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300 ease-in-out text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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