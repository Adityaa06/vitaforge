import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Add your experience",
      description: "Input your work history, education, and skills into our structured editor."
    },
    {
      number: "02",
      title: "Improve and organize",
      description: "Use our intelligent suggestions to refine your content and arrange sections optimally."
    },
    {
      number: "03",
      title: "Review and export",
      description: "Preview your formatted resume, check your score, and export as a clean PDF."
    }
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--space-lg)' }}>
          <h2 className="heading-md">How VitaForge works</h2>
          <p className="text-muted">A simple, effective process to get you interview-ready.</p>
        </div>
        
        <div className="steps-container">
          <div className="steps-line"></div>
          {steps.map((step, index) => (
            <div key={index} className="step-card glass-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
