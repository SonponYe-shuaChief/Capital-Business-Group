import React from 'react';
const partsImg = '/images/parts.jpeg';
const maintenanceImg = '/images/oil-change.jpeg';
const onlineImg = '/images/online-expert.jpeg';
const bgImg = '/images/1.jpeg';
import { motion } from 'framer-motion';
import { MdLocalGasStation, MdAssignment, MdSearch, MdBuild, MdSettingsInputComponent, MdRadioButtonChecked, MdAcUnit, MdSettings, MdElectricalServices, MdLabel, MdBatteryFull, MdCardGiftcard, MdLocalShipping, MdHandshake, MdShoppingCart } from 'react-icons/md';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const maintenanceServices = [
  { icon: <MdLocalGasStation />, name: 'Oil Change' },
  { icon: <MdAssignment />, name: 'MOTs' },
  { icon: <MdSearch />, name: 'Diagnostics' },
  { icon: <MdBuild />, name: 'Brakes' },
  { icon: <MdSettingsInputComponent />, name: 'Suspension' },
  { icon: <MdRadioButtonChecked />, name: 'Tyres' },
  { icon: <MdAcUnit />, name: 'Aircon' },
  { icon: <MdSettings />, name: 'Engines' },
  { icon: <MdElectricalServices />, name: 'Electrical' },
];

const partsServices = [
  { icon: <MdLabel />, name: 'OEM & Aftermarket' },
  { icon: <MdBatteryFull />, name: 'Batteries' },
  { icon: <MdRadioButtonChecked />, name: 'Tyres' },
  { icon: <MdBuild />, name: 'Brakes' },
  { icon: <MdSettingsInputComponent />, name: 'Suspension' },
  { icon: <MdCardGiftcard />, name: 'Accessories' },
];

const onlineServices = [
  { icon: <MdLocalShipping />, name: 'Nationwide Delivery' },
  { icon: <MdHandshake />, name: 'Trade Support' },
  { icon: <MdShoppingCart />, name: 'Flexible Ordering' },
];

function Services() {
  return (
    <div className="services-bg">
      <style>{`
        .services-bg {
          position: relative;
          background: url(${bgImg}) center/cover no-repeat;
          min-height: 100vh;
          padding: 48px 16px;
        }
        .services-bg::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%;
          height: 100%;
          background: rgba(12, 27, 58, 0.9);
          z-index: 1;
        }
        .services-bg > * {
          position: relative;
          z-index: 2;
        }
        .services-title {
          font-size: 2.8rem;
          font-weight: bold;
          color: #f8fcffff;
          margin-bottom: 32px;
          text-align: center;
        }
        .services-section {
          margin-bottom: 40px;
        }
        .services-section-title {
          font-size: 1.7rem;
          font-weight: bold;
          color: #f0a86eff;
          margin-bottom: 18px;
          text-align: center;
        }
        .services-list {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          list-style: none;
          padding: 0;
          color: #636E72;
        }
        .services-list li {
        
          border-radius: 6px;
          padding: 8px 16px;
          font-size: 1rem;
        }
        .presentable-list {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          justify-content: center;
          margin-top: 16px;
        }
        .service-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: none;
          border: none;
          border-radius: 16px;
          box-shadow: none;
          padding: 40px 32px;
          min-width: 180px;
          max-width: 220px;
          margin-bottom: 12px;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .service-item:hover {
          transform: translateY(-6px) scale(1.06);
          box-shadow: 0 8px 32px rgba(25,118,210,0.22);
        }
        .service-icon {
          font-size: 2.8rem;
          margin-bottom: 16px;
          color: #ffffffff;
        }
        .service-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffffff;
          text-align: center;
          letter-spacing: 0.5px;
        }
          @media (max-width: 768px) {
            .services-bg {
              padding: 24px 4px;
            }
            .services-title {
              font-size: 2rem;
              margin-bottom: 20px;
            }
            .services-section-title {
              font-size: 1.2rem;
              margin-bottom: 12px;
            }
            .presentable-list {
              gap: 16px;
            }
            .service-item {
              padding: 20px 8px;
              min-width: 120px;
              max-width: 160px;
            }
            .service-icon {
              font-size: 2rem;
              margin-bottom: 8px;
            }
            .service-name {
              font-size: 1rem;
            }
            .services-section > div {
              flex-direction: column !important;
              gap: 16px !important;
              padding: 16px 8px !important;
            }
            .services-section img {
              width: 120px !important;
              height: 120px !important;
              border-radius: 16px !important;
            }
            .services-section div[style] {
              font-size: 1rem !important;
            }
          }
      `}</style>
      <h1 className="services-title">Our Services</h1>
      {/* Section 1: Vehicle Maintenance & Repair */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="services-section">
        <h2 className="services-section-title">Vehicle Maintenance & Repair</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '900px', margin: '0 auto 28px auto', gap: '32px', background: 'rgba(25, 118, 210, 0.13)', borderRadius: '18px', padding: '28px 24px' }}>
          <img src={maintenanceImg} alt="Maintenance" style={{ width: '220px', height: '220px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.16)' }} />
          <div style={{ fontSize: '1.18rem', color: '#f8fcffff', textAlign: 'left' }}>
            <strong>Comprehensive Vehicle Maintenance & Repair</strong><br />
            We offer a full range of maintenance and repair services, including routine servicing, MOT preparation, diagnostics, brake and suspension repairs, tyre fitting, air-conditioning, and more. Our skilled technicians use state-of-the-art diagnostic tools and follow manufacturer specifications to ensure your car gets the care it deserves.
          </div>
        </div>
        <ul className="services-list presentable-list">
          {maintenanceServices.map(service => (
            <li key={service.name} className="service-item">
              <span className="service-icon">{service.icon}</span>
              <span className="service-name">{service.name}</span>
            </li>
          ))}
        </ul>
      </motion.section>
      {/* Section 2: Parts & Accessories */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="services-section">
        <h2 className="services-section-title">Parts & Accessories</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '900px', margin: '0 auto 28px auto', gap: '32px', background: 'rgba(25, 118, 210, 0.13)', borderRadius: '18px', padding: '28px 24px' }}>
          <img src={partsImg} alt="Parts" style={{ width: '220px', height: '220px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.16)' }} />
          <div style={{ fontSize: '1.18rem', color: '#f8fcffff', textAlign: 'left' }}>
            <strong>Quality Parts & Accessories</strong><br />
            We stock and supply a wide range of vehicle parts and accessories for all major makes and models. From genuine OEM parts to high-quality aftermarket options, our knowledgeable team helps you choose the right part first time—saving you time and money.
          </div>
        </div>
        <ul className="services-list presentable-list">
          {partsServices.map(service => (
            <li key={service.name} className="service-item">
              <span className="service-icon">{service.icon}</span>
              <span className="service-name">{service.name}</span>
            </li>
          ))}
        </ul>
      </motion.section>
      {/* Section 3: Online Ordering & Delivery */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="services-section">
        <h2 className="services-section-title">Online Ordering & Delivery</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '900px', margin: '0 auto 28px auto', gap: '32px', background: 'rgba(25, 118, 210, 0.13)', borderRadius: '18px', padding: '28px 24px' }}>
          <img src={onlineImg} alt="Online" style={{ width: '220px', height: '220px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.16)' }} />
          <div style={{ fontSize: '1.18rem', color: '#f8fcffff', textAlign: 'left' }}>
            <strong>Online Retail & Delivery</strong><br />
            We make it easy for customers to access the parts and accessories they need—wherever they are. Flexible ordering options, nationwide delivery, and trade support make our online service convenient, fast, and reliable for everyone.
          </div>
        </div>
        <ul className="services-list presentable-list">
          {onlineServices.map(service => (
            <li key={service.name} className="service-item">
              <span className="service-icon">{service.icon}</span>
              <span className="service-name">{service.name}</span>
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}

export default Services;
