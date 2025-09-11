import React from 'react';
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
      <h1 className="services-title">Our Services</h1>
      {/* Section 1: Vehicle Maintenance & Repair */}
      <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="services-section">
        <h2 className="services-section-title">Vehicle Maintenance & Repair</h2>
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
