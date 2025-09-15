import React from 'react';
const expImg = '/images/experience.jpeg';
const techImg = '/images/technicians.jpeg';
const supplierImg = '/images/1.jpeg';
const onlineImg = '/images/online-expert.jpeg';
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
          font-size: 3.2rem;
          font-weight: bold;
          color: #0A3D62;
          margin-bottom: 40px;
          text-align: center;
          letter-spacing: 1px;
        }
        .about-intro {
          max-width: 900px;
          margin: 0 auto 48px auto;
          font-size: 1.45rem;
          line-height: 1.85;
          color: #1a2636;
          background: #f3f6fa;
          border-radius: 18px;
          padding: 32px 28px;
          box-shadow: 0 4px 24px rgba(25,118,210,0.08);
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
          color: #fff;;
        }
        .about-card-content h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 16px;
          color: #fff;
        }
        .about-card-content p {
          font-size: 1.5rem;
          color: #fff;
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
          <span
            style={{
              fontSize: '1.7rem',
              fontWeight: 'bold',
              color: '#0A3D62',
              display: 'block',
              marginBottom: '18px',
              alignItems: 'center',
              whiteSpace: 'nowrap',
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              textAlign: 'center'
            }}
            className="about-slogan"
          >
            Welcome to Capital Business Group
          </span>
          <style>{`
            @media (max-width: 600px) {
              .about-slogan {
                font-size: 1rem !important;
              }
            }
          `}</style>
          <span style={{ fontSize: '1.85rem', fontWeight: '900', color: '#1a0652ff', display: 'block', marginBottom: '18px' }}>Passionate about keeping drivers on the road safely, affordably, and with complete peace of mind.</span>
          <span style={{ display: 'block', marginBottom: '18px' }}>With years of experience in the automotive sector, we provide a comprehensive range of services — from vehicle repairs and maintenance, to retailing high-quality parts and accessories, to convenient online ordering and delivery.</span>
          <span style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#0A3D62', display: 'block', margin: '32px 0 12px 0' }}>Our Mission</span>
          <ul style={{ margin: '0 0 24px 24px', fontSize: '1.00rem', color: '#1976D2', lineHeight: '2.1' }}>
            <li><strong>Reliability:</strong> Deliver top-quality work and products you can trust.</li>
            <li><strong>Convenience:</strong> Make car care easy with both in-person and online solutions.</li>
            <li><strong>Customer-first service:</strong> Put you back on the road quickly and confidently.</li>
          </ul>
          <span style={{ display: 'block', marginBottom: '18px' }}>Whether you’re a car owner, a fleet manager, or a DIY enthusiast, we have the skills, parts, and digital solutions to keep your vehicle running smoothly.</span>
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0A3D62', display: 'block', margin: '32px 0 12px 0', textAlign: 'center' }}>Our Experience</span>
          <span style={{ display: 'block', marginBottom: '18px' }}>Experience isn’t just about the number of years we’ve been in business — it’s about the knowledge, skill, and trust we’ve built with every customer we’ve served.</span>
          <span style={{ display: 'block', marginBottom: '18px' }}>With close to a decade of experience in the automotive industry, we’ve worked on everything from small family cars to commercial fleets. Our technicians are fully trained and stay up to date with the latest vehicle technology, ensuring we can service modern vehicles with complex electronic systems as well as older, classic models.</span>
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0A3D62', display: 'block', margin: '32px 0 12px 0', textAlign: 'center' }}>Our Track Record</span>
          <ul style={{ margin: '0 0 24px 24px', fontSize: '1.00rem', color: '#1976D2', lineHeight: '2.1' }}>
            <li>Thousands of vehicles serviced — from routine MOTs to major repairs</li>
            <li>Long-standing supplier relationships — allowing us to source genuine and aftermarket parts quickly and at competitive prices</li>
            <li>Trusted by individuals and businesses — including fleet operators, car enthusiasts, and garages across the UK</li>
            <li>Proven online expertise — delivering parts and accessories nationwide through our service</li>
          </ul>
          <span style={{ display: 'block', marginBottom: '18px' }}>We believe our experience shows in everything we do: clear communication, attention to detail, and work that stands the test of time.</span>
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
