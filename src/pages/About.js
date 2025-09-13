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
          background: #f7fafc;
          padding: 48px 16px;
          font-family: 'Poppins', 'Inter', 'Open Sans', 'Segoe UI', 'Arial', sans-serif;
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
          .about-intro {
            max-width: 700px;
            margin: 0 auto 40px auto;
            font-size: 1.2rem;
            line-height: 1.7;
            color: #222e3a;
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
        @media (max-width: 900px) {
          .about-bg {
            padding: 24px 4px;
          }
          .about-title {
            font-size: 1.5rem;
            margin-bottom: 18px;
          }
          .about-intro {
            font-size: 1rem;
            padding: 0 4px;
          }
          .about-highlights {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
          .about-card {
            max-width: 98vw;
            min-height: 180px;
            padding: 8px 2px;
          }
          .about-card-content {
            padding: 24px 8px;
          }
          .about-card-content h3 {
            font-size: 1.1rem;
          }
          .about-card-content p {
            font-size: 0.95rem;
          }
        }
      `}</style>
      <h1 className="about-title">About Us</h1>
      <motion.section initial="hidden" animate="visible" variants={cardVariants} className="about-intro">
        <div className="about-intro">
          Capital Business Group is a modern business solutions provider, committed to helping individuals and companies grow with reliable services and innovation. With years of experience, we focus on trust, innovation, and customer success. Our vision is to deliver excellence, support business growth, and remain a reliable partner for the future.
        </div>
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
