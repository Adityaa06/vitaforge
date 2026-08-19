import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onStartPrototype }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [spinLogo, setSpinLogo] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    if (newClicks >= 5) {
      setSpinLogo(true);
      setClicks(0);
      setTimeout(() => setSpinLogo(false), 600);
    }
  };

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen]);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="container navbar-container">
        <button 
          className={`navbar-logo ${spinLogo ? 'easter-egg-spin' : ''}`}
          onClick={handleLogoClick}
          title="Click me!"
          aria-label="VitaForge Logo"
          style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', outlineOffset: '4px' }}
        >
          <span className="logo-icon" aria-hidden="true"></span>
          <span className="logo-text">VitaForge</span>
        </button>

        {/* Desktop Menu */}
        <div className="navbar-links">
          <a href="#features" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'features')}>Features</a>
          <a href="#how-it-works" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'how-it-works')}>How It Works</a>
          <a href="#product" className="nav-link" onClick={(e) => handleSmoothScroll(e, 'product')}>Preview</a>
        </div>

        <div className="navbar-actions">
          <button 
            className="btn btn-primary" 
            onClick={() => { closeMenu(); if(onStartPrototype) onStartPrototype(); }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-toggle" 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#features" className="mobile-nav-link" onClick={(e) => handleSmoothScroll(e, 'features')}>Features</a>
          <a href="#how-it-works" className="mobile-nav-link" onClick={(e) => handleSmoothScroll(e, 'how-it-works')}>How It Works</a>
          <a href="#product" className="mobile-nav-link" onClick={(e) => handleSmoothScroll(e, 'product')}>Preview</a>
          <button className="btn btn-primary w-full" onClick={() => { closeMenu(); if(onStartPrototype) onStartPrototype(); }}>Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
