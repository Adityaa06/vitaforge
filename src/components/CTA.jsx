import React from 'react';
import './CTA.css';

const CTA = ({ onStartPrototype }) => {
  return (
    <section className="cta section" id="get-started">
      <div className="container">
        <div className="cta-card glass-card text-center">
          <h2 className="heading-md">Your next opportunity starts with a better first impression.</h2>
          <p className="cta-desc text-muted">
            Start shaping your experience into a clearer, more confident professional story.
          </p>
          <button className="btn btn-primary btn-large" onClick={onStartPrototype}>
            Start Building for Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
