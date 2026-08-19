import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = ({ onStartPrototype }) => {
  const handleHowItWorksScroll = (e) => {
    e.preventDefault();
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="hero section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <div className="badge">
            <span className="badge-dot"></span>
            Introducing VitaForge
          </div>
          <h1 className="heading-lg">
            Turn your experience into a <span className="text-gradient">resume worth reading.</span>
          </h1>
          <p className="hero-subtitle text-muted">
            VitaForge helps you structure, improve, and format your career history into a professional, ATS-friendly resume in minutes.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onStartPrototype}>
              Build My Resume <ArrowRight size={18} />
            </button>
            <a href="#how-it-works" className="btn btn-secondary" onClick={handleHowItWorksScroll}>
              <Play size={18} fill="currentColor" /> See How It Works
            </a>
          </div>
        </div>

        <div className="hero-visual animate-float">
          <div className="mockup-window glass-card">
            <div className="mockup-header">
              <div className="mockup-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="mockup-title">Resume Score: 92/100</div>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
                <div className="mockup-progress">
                  <div className="progress-label"><span>Profile Completion</span><span>85%</span></div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: '85%'}}></div></div>
                </div>
              </div>
              <div className="mockup-main">
                <div className="skeleton skeleton-heading"></div>
                <div className="skeleton skeleton-block"></div>
                <div className="skeleton skeleton-heading"></div>
                <div className="skeleton skeleton-block"></div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
