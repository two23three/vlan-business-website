import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import Services from './assets/components/Services';
import ServiceDetails from './assets/components/ServiceDetails';
import Locations from './assets/components/Locations';
import Footer from './assets/components/Footer';
import Contact from './assets/components/Contacts';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} /> {/* Add this line */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
