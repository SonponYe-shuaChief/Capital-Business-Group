import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#0A3D62] text-white py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-lg">Capital Business Group</span>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/contact" className="hover:text-[#E67E22]">Contact</Link>
          <Link to="/services" className="hover:text-[#E67E22]">Book Service</Link>
          <Link to="/shop" className="hover:text-[#E67E22]">Shop</Link>
        </div>
        <div className="text-sm mt-4 md:mt-0">
          <span>Phone: <a href="tel:+1234567890" className="hover:text-[#E67E22]">+1 234 567 890</a></span><br />
          <span>Email: <a href="mailto:info@capitalbusinessgroup.com" className="hover:text-[#E67E22]">info@capitalbusinessgroup.com</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
