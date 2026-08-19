import React from 'react';
import { LayoutTemplate, Settings2, Sparkles, CheckSquare, Download, Layers } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <LayoutTemplate size={24} />,
      title: 'Smart Resume Structure',
      description: 'Pre-defined templates that guide you to put the right information in the right place.'
    },
    {
      icon: <CheckSquare size={24} />,
      title: 'ATS-Friendly Formatting',
      description: 'Ensure your resume passes through Applicant Tracking Systems without breaking.'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'AI Writing Suggestions',
      description: 'Get contextual recommendations to make your experience sound more impactful.'
    },
    {
      icon: <Settings2 size={24} />,
      title: 'Easy Customization',
      description: 'Tailor your resume for specific job descriptions with just a few clicks.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Real-time Resume Score',
      description: 'Know exactly how strong your resume is before you even apply.'
    },
    {
      icon: <Download size={24} />,
      title: 'Export-Ready Layout',
      description: 'Download pixel-perfect PDFs that look great on screen and printed out.'
    }
  ];

  return (
    <section className="features section" id="features">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--space-lg)' }}>
          <h2 className="heading-md">Everything you need to stand out.</h2>
          <p className="text-muted">Powerful features designed to simplify the resume creation process.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
