import React from 'react';
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
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <motion.section initial="hidden" animate="visible" variants={heroVariants} className="flex flex-col items-center justify-center text-center py-16 px-4 bg-[#0A3D62] text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Capital Business Group</h1>
        <p className="text-lg md:text-xl mb-6">Your trusted partner for vehicle repairs, parts, and online ordering.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-[#E67E22] text-white px-6 py-3 rounded font-semibold hover:bg-[#d35400] transition">Book a Service</Link>
          <Link to="/shop" className="bg-white text-[#0A3D62] border border-[#E67E22] px-6 py-3 rounded font-semibold hover:bg-[#E67E22] hover:text-white transition">Order Parts</Link>
        </div>
      </motion.section>

      {/* Mission Statement */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-[#636E72] text-white rounded-lg p-6 shadow-md w-full md:w-1/3">
            <h3 className="font-bold text-lg mb-2">Reliability</h3>
            <p>Consistent, dependable service for every customer.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-[#636E72] text-white rounded-lg p-6 shadow-md w-full md:w-1/3">
            <h3 className="font-bold text-lg mb-2">Convenience</h3>
            <p>Easy booking, online ordering, and fast delivery.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-[#636E72] text-white rounded-lg p-6 shadow-md w-full md:w-1/3">
            <h3 className="font-bold text-lg mb-2">Customer-first</h3>
            <p>Your satisfaction is our top priority.</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Preview */}
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-white border border-[#636E72] rounded-lg p-6 shadow hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2 text-[#0A3D62]">Repairs</h3>
            <p>Expert maintenance and repair for all vehicle types.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-white border border-[#636E72] rounded-lg p-6 shadow hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2 text-[#0A3D62]">Parts</h3>
            <p>OEM and aftermarket parts for every need.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-white border border-[#636E72] rounded-lg p-6 shadow hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2 text-[#0A3D62]">Online Ordering</h3>
            <p>Order parts and accessories online, delivered nationwide.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 bg-[#f8f9fa]">
        <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-white border border-[#E67E22] rounded-lg p-6 shadow w-full md:w-1/3">
            <h3 className="font-bold text-lg mb-2 text-[#E67E22]">Trust</h3>
            <p>Proven track record and trusted by thousands.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-white border border-[#E67E22] rounded-lg p-6 shadow w-full md:w-1/3">
            <h3 className="font-bold text-lg mb-2 text-[#E67E22]">Transparency</h3>
            <p>Clear pricing and honest service.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" variants={cardVariants} viewport={{ once: true }} className="bg-white border border-[#E67E22] rounded-lg p-6 shadow w-full md:w-1/3">
            <h3 className="font-bold text-lg mb-2 text-[#E67E22]">Quick Turnaround</h3>
            <p>Fast service to get you back on the road.</p>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-8 px-4 text-center bg-[#0A3D62] text-white">
        <h2 className="text-xl font-bold mb-4">Ready to get started?</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-[#E67E22] text-white px-6 py-3 rounded font-semibold hover:bg-[#d35400] transition">Contact Us</Link>
          <Link to="/services" className="bg-white text-[#0A3D62] border border-[#E67E22] px-6 py-3 rounded font-semibold hover:bg-[#E67E22] hover:text-white transition">Book a Service</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
