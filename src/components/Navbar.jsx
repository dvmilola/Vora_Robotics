import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
                                <Link to="/" className="logo">
                        <img src="Assets/Vora_Robotics_Horizontal_Logo_RGB_Green_White.png" alt="Vora Robotics" />
                      </Link>
                                                        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                                    <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                                    <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link></li>
                                    <li><Link to="/team" className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`}>Team</Link></li>
                                    <li><Link to="/products-services" className={`nav-link ${location.pathname === '/products-services' ? 'active' : ''}`}>Products & Services</Link></li>
                                    <li><Link to="/news-events" className={`nav-link ${location.pathname === '/news-events' ? 'active' : ''}`}>News & Events</Link></li>
                                    <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
                                  </ul>
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
