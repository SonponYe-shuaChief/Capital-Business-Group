import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  }, [location.pathname]);

  return (
    <nav className={`navbar fade-navbar${visible ? ' fade-in' : ' fade-out'}`}> 
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">🚗</span> Capital Business Group
        </Link>
        <ul className="navbar-links">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`navbar-link${activeTab === link.path ? ' active tab-animate' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
