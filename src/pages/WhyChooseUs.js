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
  <div className="why-bg">
  <h1 className="why-title">Why Choose Us</h1>
      <div className="why-grid">
        {reasons.map((reason, idx) => (
          <motion.div
            key={reason.title}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            className="why-card"
          >
            <h3>{reason.title}</h3>
            <p>{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
