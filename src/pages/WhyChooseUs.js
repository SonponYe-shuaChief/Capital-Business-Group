import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const reasons = [
  { title: 'Trusted Expertise', desc: 'Decades of combined experience and proven results.' },
  { title: 'Complete Solution', desc: 'From repairs to parts and online ordering.' },
  { title: 'Quick Turnaround', desc: 'Fast, efficient service to minimize downtime.' },
  { title: 'Transparent Pricing', desc: 'Clear, honest pricing for every service.' },
  { title: 'Nationwide Reach', desc: 'Serving customers across the country.' },
];

function WhyChooseUs() {
  return (
    <div className="bg-white py-12 px-4">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6 text-center">Why Choose Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {reasons.map((reason, idx) => (
          <motion.div
            key={reason.title}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="bg-[#636E72] text-white rounded-lg p-6 shadow-md"
          >
            <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
            <p>{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
