
import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Why Choose Us', path: '/why-choose-us' },
  { name: 'Contact', path: '/contact' },
  { name: 'Shop', path: '/shop' },
];

function Navbar() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 60) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScroll = currentScroll;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveTab(location.pathname);
    setMenuOpen(false); // Close menu on route change
  }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <nav className={`navbar fade-navbar${visible ? ' fade-in' : ' fade-out'}`}> 
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} alt="Logo" style={{ height: '72px', width: '72px', objectFit: 'contain', borderRadius: '15px', boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.15rem', color: '#0A3D62' }}>Capital Business Group</span>
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="navbar-hamburger"
          aria-label="Open menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        {/* Desktop links */}
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`navbar-link${activeTab === link.path ? ' active tab-animate' : ''}`}
                style={{ padding: '10px 28px', fontSize: '1.28rem', minHeight: '54px', display: 'flex', alignItems: 'center' }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile dropdown/side-drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="navbar-mobile-menu"
              ref={menuRef}
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <ul>
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`navbar-link mobile${activeTab === link.path ? ' active tab-animate' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
