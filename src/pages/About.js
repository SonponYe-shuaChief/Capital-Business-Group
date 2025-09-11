import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function About() {
  return (
    <div className="about-bg">
      <style>{`
        .about-bg {
          background: #fff;
          padding: 48px 16px;
        }
        .about-title {
          font-size: 2rem;
          font-weight: bold;
          color: #0A3D62;
          margin-bottom: 24px;
          text-align: center;
        }
        .about-intro {
          max-width: 600px;
          margin: 0 auto 32px auto;
          font-size: 1.1rem;
        }
        .about-highlights {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        }
        @media (min-width: 768px) {
          .about-highlights {
            flex-direction: row;
            justify-content: center;
          }
        }
        .about-card {
          background: #636E72;
          color: #fff;
          border-radius: 12px;
          padding: 32px 24px;
          box-shadow: 0 2px 8px rgba(99,110,114,0.08);
          width: 100%;
          max-width: 320px;
        }
      `}</style>
      <h1 className="about-title">About Us</h1>
      <motion.section initial="hidden" animate="visible" variants={cardVariants} className="about-intro">
        <p className="text-lg mb-4">Capital Business Group is your trusted partner for vehicle maintenance, repairs, and parts. With over 10 years of experience, we have serviced thousands of vehicles and built strong relationships with suppliers and customers alike.</p>
        <p className="text-lg mb-4">Our team of skilled technicians is dedicated to providing reliable, convenient, and customer-first service. We are trusted by individuals and businesses, and our online expertise ensures you get the best solutions, fast.</p>
      </motion.section>
      <section className="about-highlights">
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="about-card">
          <h3>10+ Years Experience</h3>
          <p>Thousands of vehicles serviced, trusted by the community.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="about-card">
          <h3>Skilled Technicians</h3>
          <p>Expertise in all aspects of vehicle care and parts supply.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="about-card">
          <h3>Supplier Relationships</h3>
          <p>Strong connections for quality parts and accessories.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="about-card">
          <h3>Online Expertise</h3>
          <p>Efficient online ordering and support for all customers.</p>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
