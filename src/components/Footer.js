import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" style={{ background: '#03071fff', color: '#fff', padding: '32px 0 16px 0' }}>
      <div className="footer-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1100px', margin: '0 auto', gap: '32px' }}>
        <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', minWidth: '220px' }}>
          <img src={'/images/capital.jpg'} alt="Logo" style={{ height: '48px', width: '48px', objectFit: 'contain', borderRadius: '8px', marginBottom: '8px' }} />
          <span className="footer-logo" style={{ fontWeight: 'bold', fontSize: '1.15rem', marginBottom: '6px' }}>Capital Business Group</span>
          <p className="footer-copyright" style={{ fontSize: '0.95rem', margin: 0 }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="footer-links" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '180px', gap: '8px' }}>
          <Link to="/contact" className="footer-link" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: '2px' }}>Contact</Link>
          <Link to="/services" className="footer-link" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: '2px' }}>Book Service</Link>
          {/* <Link to="/shop" className="footer-link" style={{ color: '#fff', textDecoration: 'none', fontSize: '1rem', marginBottom: '2px' }}>Shop</Link> */}
        </div>
        <div className="footer-contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', minWidth: '220px', gap: '6px' }}>
          <span style={{ fontSize: '1rem' }}>Phone: <a href="tel:+1234567890" className="footer-contact-link" style={{ color: '#fff', textDecoration: 'underline' }}>+1 234 567 890</a></span>
          <span style={{ fontSize: '1rem' }}>Email: <a href="mailto:info@capitalbusinessgroup.com" className="footer-contact-link" style={{ color: '#fff', textDecoration: 'underline' }}>info@capitalbusinessgroup.com</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
