import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, ShoppingCart, Monitor, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import laptop from './img/laptop.webp';
import repair from './img/repair.webp';
import electric from './img/electricfence.jpg';
import biometric from './img/biometric.png';
import cctv from './img/cctc.png';
import pos from './img/pointofsale.jpeg';
import dashboard from './img/dasboard.jpg';
import SMS from './img/SMS.webp';
import itlab from "./img/itlab.jpeg"
import bizz from "./img/business.jpeg"
import grad from "./img/graduation.jpeg"
import printing from "./img/printing.jpg"
const services = [
  {
    icon: ShieldCheck,
    title: 'Security Systems',
    description: 'CCTV cameras, biometrics, and electric fences for your safety.',
    slug: 'security-systems',
    fullDescription: 'Our security systems provide comprehensive protection for your home or business. We offer state-of-the-art CCTV cameras, advanced biometric access control, and robust electric fences. Our solutions are customized to meet your specific security needs, ensuring peace of mind and safety for you, your family, or your business.',
    features: [
      'High-resolution CCTV cameras with night vision',
      'Biometric access control systems',
      'Electric fence installation and maintenance',
      '24/7 monitoring services',
      'Mobile app integration for remote viewing'
    ],
    images: [
      { src: cctv, alt: 'CCTV camera installation', description: 'Our team installing high-resolution CCTV cameras for a business complex.' },
      { src: biometric, alt: 'Biometric access control', description: 'Advanced biometric access control system in action at a corporate office.' },
      { src: electric, alt: 'Electric fence', description: 'A robust electric fence providing perimeter security for a residential property.' }
    ]
  },
  {
    icon: ShoppingCart,
    title: 'Management Systems',
    description: 'POS, Retail, and School management systems for efficient operations.',
    slug: 'management-systems',
    fullDescription: 'Our management systems are designed to streamline operations for various industries. Whether you run a restaurant, supermarket, hotel, or school, our solutions can help you manage inventory, process transactions, and analyze data efficiently. We offer customized solutions that integrate seamlessly with your existing processes.',
    features: [
      'Point of Sale (POS) systems for retail and hospitality',
      'Inventory management and stock control',
      'Customer relationship management (CRM)',
      'Financial reporting and analytics',
      'School management systems for admissions, attendance, and grading'
    ],
    images: [
      { src: pos, alt: 'POS system in use', description: 'A restaurant using our intuitive POS system for quick and accurate order processing.' },
      { src: dashboard, alt: 'Inventory management dashboard', description: 'Real-time inventory management dashboard for a supermarket chain.' },
      { src: SMS, alt: 'School management system', description: 'Teachers use our school management system to track student attendance and grades.' }
    ]
  },
  {
    icon: Monitor,
    title: 'Computer Sales & Repair',
    description: 'Sales and repair of computers, printers, laptops, and adaptors.',
    slug: 'computer-sales-repair',
    fullDescription: 'We offer a wide range of computer products and repair services to keep your technology running smoothly. From new laptops and desktops to printer repairs and adapter replacements, our team of experienced technicians can handle all your IT needs. We pride ourselves on quick turnaround times and quality service.',
    features: [
      'Sales of new and refurbished computers and laptops',
      'Printer repairs and maintenance',
      'Hardware upgrades and software installations',
      'Data recovery services',
      'IT consultancy for small businesses'
    ],
    images: [
      { src: repair, alt: 'Computer repair technician', description: 'Our skilled technician diagnosing and repairing a laptop.' },
      { src: laptop, alt: 'Computer sales ', description: 'We have the latest computer models and accessories.' },
      {
        src: printing, 
        alt: 'Printing services process', 
        description: 'High-quality printing services using advanced printing equipment.'
      }
      
    ]
  },
  {
    icon: GraduationCap,
    title: 'College Programs',
    description: 'Comprehensive IT and business courses for career advancement.',
    slug: 'college-programs',
    fullDescription: 'Our college programs offer cutting-edge education in IT and business, designed to prepare students for successful careers in the digital age. With a focus on practical skills and industry-relevant knowledge, our courses provide a solid foundation for professional growth and development.',
    features: [
      'Hands-on training in the latest technologies',
      'Industry-experienced instructors',
      'Flexible learning options (full-time, part-time, online)',
      'Career counseling and job placement assistance',
      'Internship opportunities with leading companies'
    ],
    images: [
      { src: itlab, alt: 'IT lab', description: 'State-of-the-art IT lab with the latest equipment.' },
      { src: bizz, alt: 'Business class', description: 'An engaging business strategy class in progress, led by an industry expert.' },
      { src: grad, alt: 'Graduation ceremony', description: 'Proud graduates receiving their diplomas at our annual graduation ceremony.' }
    ]
  }
];

const ServiceDetails = () => {
    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);
  
    if (!service) {
      return <div>Service not found</div>;
    }
  
    const Icon = service.icon;
  
    return (
      <div className="py-16 bg-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="text-blue-500 hover:underline mb-4 inline-block font-semibold">&larr; Back to Services</Link>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Icon className="w-20 h-20 text-blue-600 mb-6 mx-auto" />
            <h1 className="text-5xl font-bold text-gray-900 font-serif mb-4">{service.title}</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-light">{service.description}</p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-gray-700 mb-12 font-serif leading-relaxed"
            >
              {service.fullDescription}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-semibold mb-8 text-center font-serif">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {service.images.map((image, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
                  >
                    <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
                    <div className="p-6">
                      <p className="text-sm text-gray-600 font-light">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h2 className="text-3xl font-semibold mb-6 text-center font-serif">Key Features</h2>
              <ul className="space-y-4 mb-12">
                {service.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                    className="text-gray-700 flex items-center"
                  >
                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-center"
            >
              <a
                href="https://wa.me/+254720067010"
                className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-full hover:bg-green-600 transition duration-300 ease-in-out text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us for More Information
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceDetails;