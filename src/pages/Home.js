import React, { useEffect, useState } from 'react';
import { FaCarSide, FaTools, FaUserShield, FaShippingFast, FaHandshake, FaRegClock, FaCogs, FaBoxes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const carouselImages = [
  '/images/quick-turnaround.jpeg',
  '/images/customer-service.jpeg',
  '/images/online-expert.jpeg',
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: window.innerWidth < 600 ? '12px' : '32px',
        margin: window.innerWidth < 600 ? '16px 0' : '32px 0',
        flexWrap: window.innerWidth < 600 ? 'wrap' : 'nowrap',
      }}
    >
      {carouselImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`carousel-${idx}`}
          style={{
            maxWidth:
              window.innerWidth < 600
                ? idx === current
                  ? '90vw'
                  : '32vw'
                : idx === current
                ? '600px'
                : '220px',
            width:
              window.innerWidth < 600
                ? idx === current
                  ? '90vw'
                  : '32vw'
                : idx === current
                ? '100%'
                : '120px',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            opacity: idx === current ? 1 : 0.4,
            filter: idx === current ? 'none' : 'blur(0.6px)',
            transition: 'all 0.5s',
            zIndex: idx === current ? 2 : 1,
          }}
        />
      ))}
    </div>
  );
}

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

        /* Hero Section */
          .home-hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 52px 28px;
            background: linear-gradient(rgba(12,27,58,0.93), rgba(25,118,210,0.85)), url('/images/1.jpeg') center/cover no-repeat;
            color: #fff;
            background-attachment: fixed;
            background-position: center;
            gap: 44px;
          }

        .home-title {
          font-size: 2.25rem;
          font-weight: bold;
          margin-bottom: 32px;
        }

        .home-subtext {
          font-size: 1.25rem;
          margin-bottom: 38px;
          text-align: center;
        }

        .home-cta-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .btn {
          padding: 38px 40px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 1.25rem;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          width: 90vw;
          max-width: 340px;
        }
          @media (max-width: 600px) {
            .btn {
              padding: 16px 8px;
              font-size: 1rem;
              width: 70vw;
              height: 3vh;
              max-width: 98vw;
              border-radius: 10px;
            }
            .home-cta-group {
              gap: 8px;
            }
          }
        .btn:hover {
          transform: translateY(-2px);
        }
        .btn-primary {
         background: #ece9e2ff;
         color: #a37622ff;
        }
        .btn-primary:hover {
         background: #08034dff;
         color: #fff;
        }
        .btn-secondary {
         background: #182b50;
         color: #fff;
         border: 2px solid #0A3D62;
        }
        .btn-secondary:hover {
         background: #ffffffff;
         color: #e7a935ff;
        }

        /* Section Titles */
        .section-title {
          font-size: 1.75rem;
          font-weight: bold;
          margin-bottom: 38px;
          text-align: center;
        }

        /* Unified Card Style */
        .info-card, .mission-card, .service-card, .why-card {
          background: #fff;
          border-radius: 20px;
          padding: 44px 36px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.06);
          width: 85vw;
          max-width: 400px;
          font-size: 1.15rem;
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
          @media (max-width: 600px) {
            .info-card, .mission-card, .service-card, .why-card {
              padding: 18px 8px;
              width: 90vw;
              max-width: 98vw;
              font-size: 1rem;
              border-radius: 14px;
            }
            .info-card h3, .mission-card h3, .service-card h3, .why-card h3 {
              font-size: 1.1rem;
              margin-bottom: 16px;
            }
            .info-card p, .mission-card p, .service-card p, .why-card p {
              font-size: 0.95rem;
            }
          }
        .info-card:hover, .mission-card:hover, .service-card:hover, .why-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
        }
        .info-card h3, .mission-card h3, .service-card h3, .why-card h3 {
          font-size: 1.4rem;
          margin-bottom: 28px;
        }
        .info-card p, .mission-card p, .service-card p, .why-card p {
          font-size: 1.15rem;
          color: #555;
        }

        /* Grid Layouts */
        .mission-values, .services-grid, .why-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 36px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .home-hero {
            flex-direction: row;
            text-align: left;
            padding: 64px 16px;
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
          .mission-values, .services-grid, .why-grid {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            gap: 40px;
          }
        }

        /* Footer CTA */
        .home-footer-cta {
          background: #0A3D62;
          color: #fff;
          text-align: center;
          padding: 52px 36px;
        }
        .footer-cta-title {
          font-size: 1.7rem;
          font-weight: bold;
          margin-bottom: 32px;
        }
        .footer-cta-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .footer-cta-group {
            flex-direction: row;
            gap: 16px;
          }
        }
      `}</style>

      {/* Hero Banner */}
      <section className="home-hero parallax-bg">
        <div>
          <motion.h1 className="home-title" initial="hidden" animate="visible" variants={heroVariants}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <img src={'/images/logo.png'} alt="Logo" style={{ height: '160px', width: '160px', objectFit: 'contain', borderRadius: '18px', boxShadow: '0 4px 24px rgba(0,0,0,0.18)', marginBottom: '18px' }} />
              <span style={{ color: '#fff' }}>Capital Business Group</span>
            </div>
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
      {/* Professional Team Image After Hero */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
  <img src={'/images/technicians.jpeg'} alt="Our Team" style={{ width: '820px', height: '320px', maxWidth: '96vw', objectFit: 'cover', borderRadius: '38px', boxShadow: '0 8px 32px rgba(25,118,210,0.13)', opacity: 0.93 }} />
      </div>
      

      {/* Mission Statement */}
      <section className="home-mission">
        <h2 className="section-title">Our Mission</h2>
        <div className="mission-values">
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} className="mission-card">
            <FaUserShield style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Reliability</h3>
            <p>Consistent, dependable service for every customer.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} className="mission-card">
            <FaShippingFast style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Convenience</h3>
            <p>Easy booking, online ordering, and fast delivery.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} className="mission-card">
            <FaHandshake style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Customer-first</h3>
            <p>Your satisfaction is our top priority.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="home-services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} className="service-card">
            <FaCogs style={{ fontSize: '2rem', marginBottom: '8px', color: '#0A3D62' }} />
            <h3>Repairs</h3>
            <p>Expert maintenance and repair for all vehicle types.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} className="service-card">
            <FaBoxes style={{ fontSize: '2rem', marginBottom: '8px', color: '#0A3D62' }} />
            <h3>Parts</h3>
            <p>OEM and aftermarket parts for every need.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} className="service-card">
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
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} className="why-card">
            <FaUserShield style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Trust</h3>
            <p>Proven track record and trusted by thousands.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} className="why-card">
            <FaHandshake style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Transparency</h3>
            <p>Clear pricing and honest service.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} className="why-card">
            <FaRegClock style={{ fontSize: '2rem', marginBottom: '8px', color: '#E67E22' }} />
            <h3>Quick Turnaround</h3>
            <p>Fast service to get you back on the road.</p>
          </motion.div>
        </div>
      </section>


      {/* Shop Image Before Footer CTA */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
  <img src={'/images/parts.jpeg'} alt="Shop Parts" style={{ width: '820px', height: '320px', maxWidth: '96vw', objectFit: 'cover', borderRadius: '38px', boxShadow: '0 8px 32px rgba(230,126,34,0.13)', opacity: 0.93 }} />
      </div>
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
