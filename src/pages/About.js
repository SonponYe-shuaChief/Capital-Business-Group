import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function About() {
  return (
    <div className="bg-white py-12 px-4">
      <h1 className="text-3xl font-bold text-[#0A3D62] mb-6 text-center">About Us</h1>
      <motion.section initial="hidden" animate="visible" variants={cardVariants} className="max-w-2xl mx-auto mb-8">
        <p className="text-lg mb-4">Capital Business Group is your trusted partner for vehicle maintenance, repairs, and parts. With over 10 years of experience, we have serviced thousands of vehicles and built strong relationships with suppliers and customers alike.</p>
        <p className="text-lg mb-4">Our team of skilled technicians is dedicated to providing reliable, convenient, and customer-first service. We are trusted by individuals and businesses, and our online expertise ensures you get the best solutions, fast.</p>
      </motion.section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-[#636E72] text-white rounded-lg p-6 shadow-md">
          <h3 className="font-bold text-lg mb-2">10+ Years Experience</h3>
          <p>Thousands of vehicles serviced, trusted by the community.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-[#636E72] text-white rounded-lg p-6 shadow-md">
          <h3 className="font-bold text-lg mb-2">Skilled Technicians</h3>
          <p>Expertise in all aspects of vehicle care and parts supply.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-[#636E72] text-white rounded-lg p-6 shadow-md">
          <h3 className="font-bold text-lg mb-2">Supplier Relationships</h3>
          <p>Strong connections for quality parts and accessories.</p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-[#636E72] text-white rounded-lg p-6 shadow-md">
          <h3 className="font-bold text-lg mb-2">Online Expertise</h3>
          <p>Efficient online ordering and support for all customers.</p>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
