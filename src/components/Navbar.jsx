import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ImageOptimizer from './ImageOptimizer';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
                                <Link to="/" className="logo">
                        <ImageOptimizer 
                          src="/Vora_Robotics_Horizontal_Logo_RGB_Green_White.png" 
                          alt="Vora Robotics"
                          loading="eager"
                        />
                      </Link>
                                                        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                                    <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>Home</Link></li>
                                    <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>About</Link></li>
                                    <li><Link to="/team" className={`nav-link ${location.pathname === '/team' ? 'active' : ''}`} onClick={closeMobileMenu}>Team</Link></li>
                                    <li><Link to="/products-services" className={`nav-link ${location.pathname === '/products-services' ? 'active' : ''}`} onClick={closeMobileMenu}>Products & Services</Link></li>
                                    <li><Link to="/news-events" className={`nav-link ${location.pathname === '/news-events' ? 'active' : ''}`} onClick={closeMobileMenu}>News & Events</Link></li>
                                    <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>Contact</Link></li>
                                  </ul>
          <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
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
