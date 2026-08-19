import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="navbar-logo" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="logo-icon small-logo"></span>
              <span className="logo-text">VitaForge</span>
            </div>
            <p className="text-muted" style={{ fontSize: '0.9rem', maxWidth: '300px', lineHeight: '1.6' }}>
              Helping professionals build modern, ATS-friendly resumes that stand out.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-heading">Product</h4>
              <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')}>Features</a>
              <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, 'how-it-works')}>How It Works</a>
              <a href="#product" onClick={(e) => handleSmoothScroll(e, 'product')}>Interactive Demo</a>
            </div>
            <div className="link-group">
              <h4 className="link-heading">Resources</h4>
              <a href="#get-started" onClick={(e) => handleSmoothScroll(e, 'get-started')}>Resume Guide</a>
              <a href="#get-started" onClick={(e) => handleSmoothScroll(e, 'get-started')}>ATS Tips</a>
              <a href="#get-started" onClick={(e) => handleSmoothScroll(e, 'get-started')}>Examples</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-muted" style={{ fontSize: '0.85rem' }}>
            &copy; {new Date().getFullYear()} VitaForge. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#get-started" onClick={(e) => handleSmoothScroll(e, 'get-started')}>Privacy Policy</a>
            <a href="#get-started" onClick={(e) => handleSmoothScroll(e, 'get-started')}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
