import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Card, CardHeader, CardTitle, CardContent } from "/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "/components/ui/accordion";

const SplitAccordionCards = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordionChange = (value) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* First Card */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg overflow-hidden">
          <CardHeader className="bg-blue-900 bg-opacity-50 p-6">
            <CardTitle className="text-2xl md:text-3xl font-bold text-blue-100">Our Services</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Accordion type="single" collapsible value={openItem} onValueChange={handleAccordionChange}>
              <AccordionItem value="services-1" className="border-b border-blue-700">
                <AccordionTrigger className="text-blue-200 text-lg md:text-xl font-semibold hover:text-blue-100 transition-colors duration-200">
                  Point of Sale Solutions
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm md:text-base text-gray-300">
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Sales and repair of laptops/computers/printers</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Installation and maintenance of CCTV cameras</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Structured cabling for data and voice</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Electric Fence/Razor</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>DSTV</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Biometrics</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Second Card */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg overflow-hidden">
          <CardHeader className="bg-blue-900 bg-opacity-50 p-6">
            <CardTitle className="text-2xl md:text-3xl font-bold text-blue-100">Educational Programs</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Accordion type="single" collapsible value={openItem} onValueChange={handleAccordionChange}>
              <AccordionItem value="edu-1" className="border-b border-blue-700">
                <AccordionTrigger className="text-blue-200 text-lg md:text-xl font-semibold hover:text-blue-100 transition-colors duration-200">
                  Diploma Programs
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm md:text-base text-gray-300">
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Information Communication Technology</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Software Engineering</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Sales and Marketing</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Purchasing and Supply Chain Management</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Business Administration</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Tourism Management</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Social Work and Community Development</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="edu-2" className="border-b border-blue-700">
                <AccordionTrigger className="text-blue-200 text-lg md:text-xl font-semibold hover:text-blue-100 transition-colors duration-200">
                  Professional Certifications
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm md:text-base text-gray-300">
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Digital Marketing</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>A+ Certification</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>N+ Certification</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>CISCO (CCNA) Certification</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>Cyber Security</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span><span className="font-bold text-blue-200">Hairdressing & Beauty</span></li>
                  </ul>
                  <p className="font-semibold mt-2 mb-1 text-sm md:text-base text-gray-300">KASNEB (ATD & CPA) New Syllabus</p>
                  <p className="font-semibold mt-2 mb-1 text-sm md:text-base text-gray-300">Accounting Packages</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="edu-3" className="border-b border-blue-700">
                <AccordionTrigger className="text-blue-200 text-lg md:text-xl font-semibold hover:text-blue-100 transition-colors duration-200">
                  Language Courses
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-2 text-sm md:text-base text-gray-300">
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>English</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>French</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-300">•</span>German</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Third Card */}
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border border-blue-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg overflow-hidden">
          <CardHeader className="bg-blue-900 bg-opacity-50 p-6">
            <CardTitle className="text-2xl md:text-3xl font-bold text-blue-100">Want to see more?</CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex flex-col justify-center items-center h-full">
            <p className="text-lg md:text-xl text-gray-300 mb-6 text-center">Explore all our services and discover how we can help you succeed.</p>
            <Link to="/services" className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200 transform hover:scale-105">
              Discover Our Services
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SplitAccordionCards;