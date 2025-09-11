import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">Capital Business Group</span>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="footer-links">
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/services" className="footer-link">Book Service</Link>
          <Link to="/shop" className="footer-link">Shop</Link>
        </div>
        <div className="footer-contact">
          <span>Phone: <a href="tel:+1234567890" className="footer-contact-link">+1 234 567 890</a></span><br />
          <span>Email: <a href="mailto:info@capitalbusinessgroup.com" className="footer-contact-link">info@capitalbusinessgroup.com</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
