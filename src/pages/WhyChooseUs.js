
        /* moved to CSS block below */
// ...existing imports and code...
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const bgImg = '/images/1.jpeg';
const expImg = '/images/experience.jpeg';
const techImg = '/images/technicians.jpeg';
const supplierImg = '/images/1.jpeg';
const onlineImg = '/images/online-expert.jpeg';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const reasons = [
  { title: 'Trusted Expertise', desc: 'Decades of combined experience and proven results.', img: expImg },
  { title: 'Complete Solution', desc: 'From repairs to parts and online ordering.', img: supplierImg },
  { title: 'Quick Turnaround', desc: 'Fast, efficient service to minimize downtime.', img: techImg },
  { title: 'Transparent Pricing', desc: 'Clear, honest pricing for every service.', img: onlineImg },
  { title: 'Nationwide Reach', desc: 'Serving customers across the country.', img: supplierImg },
];

function WhyChooseUs() {
  const bgRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.backgroundPositionY = `${scrollY * 0.3}px`;
      }
      document.querySelectorAll('.why-card').forEach((card, i) => {
        const offset = scrollY * (0.08 + i * 0.02);
        card.style.transform = `translateY(${offset}px) scale(1.04)`;
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="why-bg" ref={bgRef}>
      <style>{`
        @media (max-width: 600px) {
          .testimonial-row {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: center !important;
          }
          .testimonial-row > div {
            padding: 16px 8px !important;
            min-width: 90vw !important;
            max-width: 98vw !important;
          }
          .testimonial-text {
            font-size: 1rem !important;
          }
        }
          
        @media (min-width: 900px) {
          .why-testimonials .testimonial-row {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 32px;
            justify-content: center;
            align-items: stretch;
          }
        }
        @media (min-width: 900px) {
          .testimonial-text {
            font-size: 1.5rem !important;
          }
        }
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');
        .why-bg {
          font-family: 'Oswald', Arial, sans-serif;
          position: relative;
          background: url(${bgImg}) center/cover no-repeat;
          min-height: 100vh;
          padding: 48px 16px;
          transition: background-position 0.3s;
        }
        .why-bg::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 20, 40, 0.85);
          z-index: 1;
        }
        .why-bg > * {
          position: relative;
          z-index: 2;
        }
        .why-title {
         font-size: 2.5rem;
         font-weight: bold;
         color: #fff;
         margin-bottom: 40px;
         text-align: center;
         letter-spacing: 1px;
         text-shadow: 0 2px 8px rgba(10,61,98,0.18);
        }
        .why-bg, .why-bg *, .why-card-content h3, .why-card-content p {
         color: #fff !important;
        }
        .why-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 48px;
          justify-content: center;
          width: 100%;
          margin-top: 32px;
        }
        .why-card {
          position: relative;
          background: rgba(99,110,114,0.85);
          color: #fff;
          border-radius: 32px;
          padding: 0;
          box-shadow: 0 8px 32px rgba(10,61,98,0.18);
          width: 100%;
          max-width: 600px;
          min-height: 320px;
          backdrop-filter: blur(2px);
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(.23,1,.32,1);
        }
        .why-card-img {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
        }
        .why-card-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          background: rgba(10, 61, 98, 0.7);
          z-index: 2;
        }
        .why-card-content {
          position: relative;
          z-index: 3;
          text-align: center;
          padding: 48px 32px;
        }
        .why-card-content h3 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 18px;
        }
        .why-card-content p {
          font-size: 1.25rem;
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
            className="why-card parallax-card"
          >
            <img src={reason.img} alt={reason.title} className="why-card-img" />
            <div className="why-card-overlay" />
            <div className="why-card-content">
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="why-testimonials" style={{ background: '#fff', padding: '48px 0', marginTop: '48px' }}>
        <style>{`.testimonial-text { color: #1976D2 !important; }`}</style>
        <h2 className="testimonial-text" style={{ color: '#1976D2', textAlign: 'center' }}>What Our Clients Say</h2>
  <div className="testimonial-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: '18px', padding: '32px 24px', maxWidth: '400px', minWidth: '260px', boxShadow: '0 4px 16px rgba(25,118,210,0.12)', textAlign: 'center' }}>
            <p className="testimonial-text" style={{ fontStyle: 'italic', marginBottom: '18px', textAlign: 'center', fontWeight: 500, fontSize: '1.1rem' }}>
              “Excellent from start to finish and easy to deal with. Couldn’t recommend enough.”
            </p>
            <p className="testimonial-text" style={{ fontWeight: 'bold', textAlign: 'center', margin: 0 }}>- Joanne Roberts</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '18px', padding: '32px 24px', maxWidth: '400px', minWidth: '260px', boxShadow: '0 4px 16px rgba(25,118,210,0.12)', textAlign: 'center' }}>
            <p className="testimonial-text" style={{ fontStyle: 'italic', marginBottom: '18px', textAlign: 'center', fontWeight: 500, fontSize: '1.1rem' }}>
              Amazing service!! smooth transaction good customer care!!! great service. would definitely come back.”
            </p>
            <p className="testimonial-text" style={{ fontWeight: 'bold', textAlign: 'center', margin: 0 }}>- Jerome Thando</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '18px', padding: '32px 24px', maxWidth: '400px', minWidth: '260px', boxShadow: '0 4px 16px rgba(25,118,210,0.12)', textAlign: 'center' }}>
            <p className="testimonial-text" style={{ fontStyle: 'italic', marginBottom: '18px', textAlign: 'center', fontWeight: 500, fontSize: '1.1rem' }}>
              I had been searching for a replacement part for weeks with no luck. Capital Business Group not only found the exact part I needed but had it sourced and ready faster than I expected. They saved me so much time and frustration.”
            </p>
            <p className="testimonial-text" style={{ fontWeight: 'bold', textAlign: 'center', margin: 0 }}>- Michael Lee</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '18px', padding: '32px 24px', maxWidth: '400px', minWidth: '260px', boxShadow: '0 4px 16px rgba(25,118,210,0.12)', textAlign: 'center' }}>
            <p className="testimonial-text" style={{ fontStyle: 'italic', marginBottom: '18px', textAlign: 'center', fontWeight: 500, fontSize: '1.1rem' }}>
              “Finding the right car parts can be a nightmare — I had tried multiple suppliers with no success. The team’s knowledge and network were outstanding; they located the part quickly and at a fair price.”
            </p>
            <p className="testimonial-text" style={{ fontWeight: 'bold', textAlign: 'center', margin: 0 }}>- Serena Manolo</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;
