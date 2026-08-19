import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './Trust.css';

const Trust = () => {
  const points = [
    { title: "Clear Structure", desc: "Organized exactly how hiring managers prefer to read it." },
    { title: "Relevant Skills", desc: "Highlight what matters most for the role you want." },
    { title: "Strong Summaries", desc: "Make your first impression count with impactful intros." },
    { title: "Easy Customization", desc: "Adapt your resume for different applications instantly." }
  ];

  return (
    <section className="trust section">
      <div className="container">
        <div className="trust-header text-center">
          <h2 className="heading-md">Built around the things recruiters actually scan first.</h2>
          <p className="text-muted">No gimmicks. Just proven formatting and structuring principles.</p>
        </div>
        
        <div className="trust-grid">
          {points.map((point, index) => (
            <div key={index} className="trust-card glass-card">
              <CheckCircle2 className="trust-icon" size={24} />
              <div>
                <h3 className="trust-title">{point.title}</h3>
                <p className="trust-desc">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
