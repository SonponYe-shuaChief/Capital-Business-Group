import React, { useEffect } from 'react';
import { FaCarSide, FaTools, FaUserShield, FaShippingFast, FaHandshake, FaRegClock, FaCogs, FaBoxes } from 'react-icons/fa';
import heroImg from '../assets/images/1.jpeg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.home-hero');
      if (hero) {
        const scrolled = window.scrollY;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
      document.querySelectorAll('.parallax-card').forEach((card, i) => {
        const offset = window.scrollY * (0.05 + i * 0.01);
        card.style.transform = `translateY(${offset}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
  <div className="home-bg">
      <style>{`
        .home-bg {
          background: #f7fafc;
          font-family: 'Poppins', 'Inter', 'Open Sans', 'Segoe UI', 'Arial', sans-serif;
        }
        .home-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 32px 8px;
          background: linear-gradient(rgba(25,118,210,0.85), rgba(230,126,34,0.85)), url(${heroImg}) center/cover no-repeat;
          color: #fff;
          background-attachment: fixed;
          background-position: center;
          gap: 24px;
        }
        .home-hero-img {
          width: 180px;
          height: 180px;
          object-fit: cover;
          border-radius: 18px;
          box-shadow: 0 4px 16px rgba(25,118,210,0.18);
          margin-bottom: 16px;
        }
        .home-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .home-subtext {
          font-size: 1rem;
          margin-bottom: 18px;
        }
        .home-cta-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        .btn {
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          width: 90vw;
          max-width: 320px;
        }
        .btn-primary {
          background: #E67E22;
          color: #fff;
        }
        .btn-primary:hover {
          background: #d35400;
        }
        .btn-secondary {
          background: #fff;
          color: #0A3D62;
          border: 2px solid #E67E22;
        }
        .btn-secondary:hover {
          background: #E67E22;
          color: #fff;
        }
        .section-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 18px;
          text-align: center;
        }
        .mission-values {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }
        .mission-card {
          background: #636E72;
          color: #fff;
          border-radius: 12px;
          padding: 20px 12px;
          box-shadow: 0 2px 8px rgba(99,110,114,0.08);
          width: 90vw;
          max-width: 320px;
          font-size: 0.95rem;
        }
        .parallax-card {
          transition: transform 0.4s cubic-bezier(.23,1,.32,1);
        }
        .low-opacity {
          opacity: 0.85;
          transition: opacity 0.3s, box-shadow 0.3s;
          will-change: transform, opacity;
        }
        .low-opacity:hover {
          opacity: 1;
          box-shadow: 0 8px 24px rgba(10,61,98,0.18);
        }
        .home-mission {
          margin-top: 32px;
        }
        .home-services {
          margin-top: 32px;
        }
        .services-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }
        .service-card {
          background: #fff;
          border: 2px solid #636E72;
          border-radius: 12px;
          padding: 20px 12px;
          box-shadow: 0 2px 8px rgba(99,110,114,0.08);
          width: 90vw;
          max-width: 320px;
          font-size: 0.95rem;
        }
        .home-why {
          background: #f8f9fa;
          padding: 32px 8px;
        }
        .why-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }
        .why-card {
          background: #fff;
          border: 2px solid #E67E22;
          border-radius: 12px;
          padding: 20px 12px;
          box-shadow: 0 2px 8px rgba(230,126,34,0.08);
          width: 90vw;
          max-width: 320px;
          color: #E67E22;
          font-size: 0.95rem;
        }
        .home-footer-cta {
          background: #0A3D62;
          color: #fff;
          text-align: center;
          padding: 24px 8px;
        }
        .footer-cta-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .footer-cta-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }
        /* Mobile specific tweaks */
        @media (min-width: 480px) {
          .home-hero-img {
            width: 240px;
            height: 240px;
          }
          .home-title {
            font-size: 2.2rem;
          }
          .section-title {
            font-size: 1.7rem;
          }
        }
        @media (min-width: 768px) {
          .home-hero {
            flex-direction: row;
            text-align: left;
            padding: 64px 16px;
            gap: 48px;
          }
          .home-hero-img {
            width: 340px;
            height: 340px;
            margin-bottom: 0;
          }
          .home-title {
            font-size: 2.5rem;
          }
          .home-subtext {
            font-size: 1.25rem;
          }
          .home-cta-group {
            flex-direction: row;
            gap: 16px;
          }
          .mission-values {
            flex-direction: row;
            justify-content: center;
            gap: 24px;
          }
          .services-grid {
            flex-direction: row;
            justify-content: center;
            gap: 24px;
          }
          .why-grid {
            flex-direction: row;
            justify-content: center;
            gap: 24px;
          }
          .mission-card, .service-card, .why-card {
            width: 100%;
            max-width: 320px;
            font-size: 1rem;
            padding: 32px 24px;
          }
          .home-mission, .home-services {
            margin-top: 48px;
          }
          .home-why {
            padding: 48px 16px;
          }
          .home-footer-cta {
            padding: 32px 16px;
          }
          .footer-cta-title {
            font-size: 1.5rem;
          }
          .footer-cta-group {
            flex-direction: row;
            gap: 16px;
          }
        }
      `}</style>

      {/* Hero Banner with Parallax & Image */}
      <section className="home-hero parallax-bg">
        <img src={heroImg} alt="Professional" className="home-hero-img" />
        <div>
          <motion.h1 className="home-title" initial="hidden" animate="visible" variants={heroVariants}>
            <FaCarSide style={{ fontSize: '2.5rem', marginBottom: '12px', color: '#1976D2' }} /> <br />
            Capital Business Group
          </motion.h1>
          <motion.p className="home-subtext" initial="hidden" animate="visible" variants={heroVariants}>
            Your trusted partner for vehicle repairs, parts, and online ordering.
          </motion.p>
          <div className="home-cta-group">
            <Link to="/contact" className="btn btn-primary"><FaTools style={{ marginRight: 8 }} /> Book a Service</Link>
            <Link to="/shop" className="btn btn-secondary"><FaBoxes style={{ marginRight: 8 }} /> Order Parts</Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="home-mission">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-values">
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="mission-card parallax-card low-opacity">
            <FaUserShield style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Reliability</h3>
            <p>Consistent, dependable service for every customer.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="mission-card parallax-card low-opacity">
            <FaShippingFast style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Convenience</h3>
            <p>Easy booking, online ordering, and fast delivery.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="mission-card parallax-card low-opacity">
            <FaHandshake style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Customer-first</h3>
            <p>Your satisfaction is our top priority.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="home-services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="service-card parallax-card low-opacity">
            <FaCogs style={{ fontSize: '2rem', marginBottom: '8px', color: '#0A3D62' }} />
            <h3>Repairs</h3>
            <p>Expert maintenance and repair for all vehicle types.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="service-card parallax-card low-opacity">
            <FaBoxes style={{ fontSize: '2rem', marginBottom: '8px', color: '#0A3D62' }} />
            <h3>Parts</h3>
            <p>OEM and aftermarket parts for every need.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="service-card parallax-card low-opacity">
            <FaShippingFast style={{ fontSize: '2rem', marginBottom: '8px', color: '#0A3D62' }} />
            <h3>Online Ordering</h3>
            <p>Order parts and accessories online, delivered nationwide.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="home-why">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="why-grid">
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="why-card">
            <FaUserShield style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Trust</h3>
            <p>Proven track record and trusted by thousands.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="why-card">
            <FaHandshake style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Transparency</h3>
            <p>Clear pricing and honest service.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="why-card">
            <FaRegClock style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Quick Turnaround</h3>
            <p>Fast service to get you back on the road.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="home-footer-cta">
        <h2 className="footer-cta-title">Ready to get started?</h2>
        <div className="footer-cta-group">
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          <Link to="/services" className="btn btn-secondary">Book a Service</Link>
        </div>
      </section>
    </div>
  );
}
export default Home;
