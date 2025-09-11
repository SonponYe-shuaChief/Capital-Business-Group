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
      <style>{`
        .why-bg {
          background: #fff;
          padding: 48px 16px;
        }
        .why-title {
          font-size: 2rem;
          font-weight: bold;
          color: #0A3D62;
          margin-bottom: 24px;
          text-align: center;
        }
        .why-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
        }
        .why-card {
          background: #636E72;
          color: #fff;
          border-radius: 12px;
          padding: 32px 24px;
          box-shadow: 0 2px 8px rgba(99,110,114,0.08);
          width: 100%;
          max-width: 320px;
        }
        .why-card h3 {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .why-card p {
          font-size: 1rem;
        }
      `}</style>
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
