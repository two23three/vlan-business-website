import React from 'react';

const locations = [
  {
    name: 'Vlan Chockaa Campus (Main)',
    address: '123 Main Street, Chockaa City',
    phone: '(123) 456-7890',
  },
  {
    name: 'Vlan Malaa Campus',
    address: '456 Branch Road, Malaa Town',
    phone: '(098) 765-4321',
  },
];

const Locations = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{location.name}</h3>
              <p className="text-gray-700">{location.address}</p>
              <p className="text-gray-700">{location.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
