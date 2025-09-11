import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

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
  return (
    <nav className="sticky top-0 z-50 bg-[#0A3D62] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="font-bold text-xl tracking-wide flex items-center">
          <span className="mr-2">🚗</span> Capital Business Group
        </Link>
        <ul className="flex space-x-4">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`hover:text-[#E67E22] font-semibold transition-colors duration-200 ${location.pathname === link.path ? 'text-[#E67E22]' : ''}`}
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
