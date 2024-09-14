import React from 'react';
import FlipText from "/components/magicui/flip-text"; // Importing FlipText

const locations = [
  {
    name: 'Vlan Chockaa Campus (Main)',
    address: 'Midax petrol station, Chockaa ',
    phone: '0720067010, 0736328241',
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d366.6377610394639!2d36.95247693093899!3d-1.2503405216344856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f14d36220046d%3A0x8e40627b92161f21!2sMidax%20Petrol%20Station!5e0!3m2!1sen!2ske!4v1726207933101!5m2!1sen!2ske"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    name: 'Vlan Malaa Campus',
    address: 'Along Kamulu Heights Road -200meters from Malaa stage',
    phone: '0720067010, 0736328241',
    map: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.24362585309177!2d37.13831797242163!3d-1.2773954490438282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6758ae4b6c9b%3A0x6c614697106c5473!2sKamulu%20Heights%20Malaa!5e1!3m2!1sen!2ske!4v1726208467254!5m2!1sen!2ske"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
];

const Locations = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        
        {/* FlipText Demo */}
        <FlipText
          className="text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8"
          word="Our Locations"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{location.name}</h3>
              <p className="text-gray-700">{location.address}</p>
              <p className="text-gray-700">{location.phone}</p>
              <div className="mt-4">{location.map}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
