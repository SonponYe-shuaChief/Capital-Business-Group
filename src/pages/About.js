import React from 'react';
import expImg from '../assets/images/experience.jpeg';
import techImg from '../assets/images/technicians.jpeg';
import supplierImg from '../assets/images/1.jpeg';
import onlineImg from '../assets/images/online expert.jpeg';
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
          font-size: 3rem;
          font-weight: bold;
          color: #0A3D62;
          margin-bottom: 32px;
          text-align: center;
        }
        .about-intro {
          max-width: 700px;
          margin: 0 auto 40px auto;
          font-size: 1.5rem;
          line-height: 1.7;
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
          position: relative;
          background: #222;
          color: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(99,110,114,0.12);
          width: 100%;
          max-width: 400px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .about-card-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }
        .about-card-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 61, 98, 0.7);
          z-index: 2;
        }
        .about-card-content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 48px 32px;
        }
        .about-card-content h3 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 16px;
        }
        .about-card-content p {
          font-size: 1.25rem;
        }
      `}</style>
      <h1 className="about-title">About Us</h1>
      <motion.section initial="hidden" animate="visible" variants={cardVariants} className="about-intro">
        <p className="text-lg mb-4">Capital Business Group is your trusted partner for vehicle maintenance, repairs, and parts. With over 10 years of experience, we have serviced thousands of vehicles and built strong relationships with suppliers and customers alike.</p>
        <p className="text-lg mb-4">Our team of skilled technicians is dedicated to providing reliable, convenient, and customer-first service. We are trusted by individuals and businesses, and our online expertise ensures you get the best solutions, fast.</p>
      </motion.section>
      <section className="about-highlights">
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="about-card">
          <img src={expImg} alt="Experience" className="about-card-bg" />
          <div className="about-card-overlay" />
          <div className="about-card-content">
            <h3>10+ Years Experience</h3>
            <p>Thousands of vehicles serviced, trusted by the community.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="about-card">
          <img src={techImg} alt="Technicians" className="about-card-bg" />
          <div className="about-card-overlay" />
          <div className="about-card-content">
            <h3>Skilled Technicians</h3>
            <p>Expertise in all aspects of vehicle care and parts supply.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="about-card">
          <img src={supplierImg} alt="Supplier" className="about-card-bg" />
          <div className="about-card-overlay" />
          <div className="about-card-content">
            <h3>Supplier Relationships</h3>
            <p>Strong connections for quality parts and accessories.</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="about-card">
          <img src={onlineImg} alt="Online Expert" className="about-card-bg" />
          <div className="about-card-overlay" />
          <div className="about-card-content">
            <h3>Online Expertise</h3>
            <p>Efficient online ordering and support for all customers.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
