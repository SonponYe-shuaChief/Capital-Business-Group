import React, { useEffect } from 'react';
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
      {/* Hero Banner with Parallax */}
      <section className="home-hero parallax-bg">
        <h1 className="home-title">Capital Business Group</h1>
        <p className="home-subtext">Your trusted partner for vehicle repairs, parts, and online ordering.</p>
        <div className="home-cta-group">
          <Link to="/contact" className="btn btn-primary">Book a Service</Link>
          <Link to="/shop" className="btn btn-secondary">Order Parts</Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="home-mission">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-values">
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="mission-card parallax-card low-opacity">
            <h3>Reliability</h3>
            <p>Consistent, dependable service for every customer.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="mission-card parallax-card low-opacity">
            <h3>Convenience</h3>
            <p>Easy booking, online ordering, and fast delivery.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="mission-card parallax-card low-opacity">
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
            <h3>Repairs</h3>
            <p>Expert maintenance and repair for all vehicle types.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="service-card parallax-card low-opacity">
            <h3>Parts</h3>
            <p>OEM and aftermarket parts for every need.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="service-card parallax-card low-opacity">
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
            <h3>Trust</h3>
            <p>Proven track record and trusted by thousands.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="why-card">
            <h3>Transparency</h3>
            <p>Clear pricing and honest service.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="why-card">
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
