import React from 'react';
import bgImg from '../assets/images/1.jpeg';
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
          color: #E67E22;
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
          background: #f8f9fa;
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
          background: #fff;
          border: none;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(25,118,210,0.18);
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
          color: #1976D2;
        }
        .service-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1976D2;
          text-align: center;
          letter-spacing: 0.5px;
        }
      `}</style>
      <h1 className="services-title">Our Services</h1>
      {/* Section 1: Vehicle Maintenance & Repair */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="services-section">
        <h2 className="services-section-title">Vehicle Maintenance & Repair</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto 18px auto', fontSize: '1.08rem', color: '#f8fcffff', background: 'rgba(25, 118, 210, 0.13)', borderRadius: '8px', padding: '18px 16px' }}>
          We offer a full range of maintenance and repair services, including:<br />
          <ul style={{ margin: '10px 0 0 18px', color: '#E67E22' }}>
            <li>Routine servicing (oil changes, filters, fluid checks)</li>
            <li>MOT preparation and testing</li>
            <li>Diagnostics and fault finding</li>
            <li>Brake, clutch, suspension, and exhaust repairs</li>
            <li>Tyre fitting and wheel alignment</li>
            <li>Air-conditioning servicing and re-gassing</li>
            <li>Engine, gearbox, and electrical system repairs</li>
          </ul>
          <br />Our skilled technicians use state-of-the-art diagnostic tools and follow manufacturer specifications to ensure your car gets the care it deserves.
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
        <div style={{ maxWidth: '700px', margin: '0 auto 18px auto', fontSize: '1.08rem', color: '#f8fcffff', background: 'rgba(25, 118, 210, 0.13)', borderRadius: '8px', padding: '18px 16px' }}>
          We stock and supply a wide range of vehicle parts and accessories for all major makes and models:<br />
          <ul style={{ margin: '10px 0 0 18px', color: '#E67E22' }}>
            <li>Genuine OEM parts and high-quality aftermarket options</li>
            <li>Batteries, bulbs, wiper blades, and filters</li>
            <li>Braking components, suspension kits, and steering parts</li>
            <li>Tyres and alloy wheels</li>
            <li>Car care products, oils, and consumables</li>
            <li>Accessories such as phone mounts, mats, seat covers, and more</li>
          </ul>
          <br />Our knowledgeable team can help you choose the right part first time — saving you time and money.
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
        <div style={{ maxWidth: '700px', margin: '0 auto 18px auto', fontSize: '1.08rem', color: '#f8fcffff', background: 'rgba(25, 118, 210, 0.13)', borderRadius: '8px', padding: '18px 16px' }}>
          We make it easy for customers to access the parts and accessories they need — wherever they are.<br />
          <ul style={{ margin: '10px 0 0 18px', color: '#E67E22' }}>
            <li>Flexible ordering options: Order by phone, email, or through our team directly</li>
            <li>Nationwide delivery: Reliable shipping straight to your home, garage, or business</li>
            <li>Trade support: We work with mechanics and fleet operators to supply parts quickly</li>
          </ul>
          <br />Whether you’re a trade customer or an individual, our online service is designed for convenience, speed, and reliability.
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
