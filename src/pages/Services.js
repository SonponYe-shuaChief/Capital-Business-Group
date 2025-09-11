import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Services() {
  return (
    <div className="bg-white py-12 px-4">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6 text-center">Our Services</h1>
      {/* Section 1: Vehicle Maintenance & Repair */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-[#E67E22]">Vehicle Maintenance & Repair</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[#636E72]">
          <li>Oil Change</li>
          <li>MOTs</li>
          <li>Diagnostics</li>
          <li>Brakes</li>
          <li>Suspension</li>
          <li>Tyres</li>
          <li>Aircon</li>
          <li>Engines</li>
          <li>Electrical</li>
        </ul>
      </motion.section>
      {/* Section 2: Parts & Accessories */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-[#E67E22]">Parts & Accessories</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[#636E72]">
          <li>OEM & Aftermarket</li>
          <li>Batteries</li>
          <li>Tyres</li>
          <li>Brakes</li>
          <li>Suspension</li>
          <li>Accessories</li>
        </ul>
      </motion.section>
      {/* Section 3: Online Ordering & Delivery */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants}>
        <h2 className="text-xl font-bold mb-4 text-[#E67E22]">Online Ordering & Delivery</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#636E72]">
          <li>Nationwide Delivery</li>
          <li>Trade Support</li>
          <li>Flexible Ordering</li>
        </ul>
      </motion.section>
    </div>
  );
}

export default Services;
