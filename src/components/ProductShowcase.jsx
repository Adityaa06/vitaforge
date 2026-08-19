import React, { useState, useEffect } from 'react';
import { LayoutDashboard, FileText, Code, Eye, Sparkles } from 'lucide-react';
import './ProductShowcase.css';

const AnimatedCounter = ({ end, duration = 1500, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

const ProductShowcase = ({ activeTab, setActiveTab, highlight }) => {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      period: '2021 - Present',
      desc: 'Led the development of a React-based component library used by 5 product teams...'
    },
    {
      id: 2,
      title: 'Web Developer',
      period: '2018 - 2021',
      desc: 'Built and maintained responsive web applications using JavaScript and CSS...'
    }
  ]);
  const [hasAddedExp, setHasAddedExp] = useState(false);
  
  const [selectedSkills, setSelectedSkills] = useState(['react', 'js', 'css']);
  
  const [previewDetailed, setPreviewDetailed] = useState(true);

  const tabs = [
    { id: 'overview', icon: <LayoutDashboard size={18} />, label: 'Overview' },
    { id: 'content', icon: <FileText size={18} />, label: 'Content' },
    { id: 'skills', icon: <Code size={18} />, label: 'Skills' },
    { id: 'preview', icon: <Eye size={18} />, label: 'Preview' }
  ];

  const handleAddExperience = () => {
    if (hasAddedExp) return;
    setExperiences(prev => [
      ...prev,
      {
        id: 3,
        title: 'Junior Developer',
        period: '2016 - 2018',
        desc: 'Assisted in building UI components and fixing bugs for client websites.'
      }
    ]);
    setHasAddedExp(true);
  };

  const toggleSkill = (skillId) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) ? prev.filter(id => id !== skillId) : [...prev, skillId]
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-pane animate-fade-in-up" key="overview">
            <div className="dashboard-stats">
              <div className="stat-card">
                <div className="stat-value text-gradient">
                  <AnimatedCounter end={92} />/100
                </div>
                <div className="stat-label">Resume Score</div>
              </div>
              <div className="stat-card">
                <div className="stat-value" style={{color: '#10b981'}}>High</div>
                <div className="stat-label">ATS Readability</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">
                  <AnimatedCounter end={85} suffix="%" />
                </div>
                <div className="stat-label">Profile Completion</div>
              </div>
            </div>
            <div className="dashboard-suggestions">
              <h4 className="dashboard-subtitle"><Sparkles size={16} /> AI Suggestions</h4>
              <ul className="suggestion-list">
                <li>Strengthen the impact of your recent position with quantifiable metrics.</li>
                <li>Add 2 more technical skills to match your target role.</li>
                <li>Consider shortening your summary to 3-4 impactful sentences.</li>
              </ul>
            </div>
          </div>
        );
      case 'content':
        return (
          <div className="tab-pane animate-fade-in-up" key="content">
            <h4 className="dashboard-subtitle">Experience Sections</h4>
            <div className="experience-list">
              {experiences.map((exp) => (
                <div className={`content-item ${exp.id === 3 ? 'animate-slide-down' : ''}`} key={exp.id}>
                  <div className="content-item-header">
                    <strong>{exp.title}</strong>
                    <span>{exp.period}</span>
                  </div>
                  <p className="content-item-desc">{exp.desc}</p>
                </div>
              ))}
            </div>
            <button 
              className={`btn ${hasAddedExp ? 'btn-secondary' : 'btn-primary'} w-full`} 
              style={{marginTop: '1rem'}}
              onClick={handleAddExperience}
              disabled={hasAddedExp}
              aria-disabled={hasAddedExp}
            >
              {hasAddedExp ? 'Experience Added ✓' : '+ Add Experience'}
            </button>
          </div>
        );
      case 'skills':
        const allSkills = [
          { id: 'js', label: 'JavaScript (ES6+)' },
          { id: 'react', label: 'React.js' },
          { id: 'ts', label: 'TypeScript' },
          { id: 'css', label: 'CSS/SCSS' },
          { id: 'node', label: 'Node.js' },
          { id: 'graphql', label: 'GraphQL' },
          { id: 'jest', label: 'Jest' },
          { id: 'html', label: 'HTML5' },
          { id: 'git', label: 'Git' }
        ];
        return (
          <div className="tab-pane animate-fade-in-up" key="skills">
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
              <h4 className="dashboard-subtitle" style={{marginBottom: 0}}>Technical Skills</h4>
              <span className="text-muted" style={{fontSize: '0.85rem'}} aria-live="polite">
                {selectedSkills.length} skills selected
              </span>
            </div>
            <div className="skills-tags">
              {allSkills.map(skill => (
                <button 
                  key={skill.id}
                  className={`skill-tag-btn ${selectedSkills.includes(skill.id) ? 'selected' : ''}`}
                  onClick={() => toggleSkill(skill.id)}
                  aria-pressed={selectedSkills.includes(skill.id)}
                >
                  {skill.label}
                </button>
              ))}
            </div>
          </div>
        );
      case 'preview':
        return (
          <div className="tab-pane animate-fade-in-up" key="preview">
            <div style={{display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem'}}>
              <button 
                className="btn btn-secondary" 
                style={{padding: '0.5rem 1rem', fontSize: '0.85rem'}}
                onClick={() => setPreviewDetailed(!previewDetailed)}
              >
                {previewDetailed ? 'Show Compact View' : 'Show Detailed View'}
              </button>
            </div>
            <div className="preview-document">
              <div className="preview-header-real">
                <h2 style={{margin: '0 0 0.5rem', color: '#1a202c'}}>Alex Morgan</h2>
                <p style={{margin: 0, color: '#4a5568', fontSize: '0.9rem'}}>Frontend Developer | alex.morgan@demo.com | (555) 123-4567</p>
              </div>
              <hr style={{borderColor: '#e2e8f0', margin: '1.5rem 0'}} />
              <div className="preview-body-real">
                <div className="preview-section-real">
                  <h3 style={{color: '#2d3748', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.25rem', marginBottom: '1rem', fontSize: '1.1rem'}}>Experience</h3>
                  
                  <div className="preview-job-real" style={{marginBottom: '1.5rem'}}>
                    <div className="job-header" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#1a202c'}}>
                      <strong>Senior Frontend Engineer</strong>
                      <span style={{color: '#4a5568', fontSize: '0.9rem'}}>2021 - Present</span>
                    </div>
                    {previewDetailed && (
                      <ul style={{margin: 0, paddingLeft: '1.5rem', color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        <li>Architected and led the migration of a legacy dashboard to React, improving load times by 40%.</li>
                        <li>Mentored 3 junior developers and established team-wide code review standards.</li>
                      </ul>
                    )}
                  </div>
                  
                  <div className="preview-job-real" style={{marginBottom: '1.5rem'}}>
                    <div className="job-header" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: '#1a202c'}}>
                      <strong>Web Developer</strong>
                      <span style={{color: '#4a5568', fontSize: '0.9rem'}}>2018 - 2021</span>
                    </div>
                    {previewDetailed && (
                      <ul style={{margin: 0, paddingLeft: '1.5rem', color: '#4a5568', fontSize: '0.9rem', lineHeight: '1.5'}}>
                        <li>Developed responsive interfaces ensuring cross-browser compatibility.</li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="preview-section-real">
                  <h3 style={{color: '#2d3748', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.25rem', marginBottom: '1rem', fontSize: '1.1rem'}}>Skills</h3>
                  <p style={{color: '#4a5568', fontSize: '0.9rem', margin: 0}}>JavaScript, React, TypeScript, CSS/SCSS, Node.js, HTML5</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="product-showcase section" id="product">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 'var(--space-lg)' }}>
          <h2 className="heading-md">See your resume transform.</h2>
          <p className="text-muted">A powerful editor that guides you to a better resume.</p>
        </div>

        <div className={`dashboard-interface glass-card ${highlight ? 'highlight-active' : ''}`}>
          <div className="dashboard-sidebar">
            <div className="dashboard-logo">
              <span className="logo-icon small"></span>
              Workspace
            </div>
            <nav className="dashboard-nav" role="tablist">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`dashboard-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
          <div className="dashboard-main">
            <div className="dashboard-topbar">
              <div className="topbar-title">Frontend Engineer Resume</div>
              <button className="btn btn-primary" style={{padding: '0.5rem 1rem', fontSize: '0.875rem'}}>Export PDF</button>
            </div>
            <div className="dashboard-content-area" aria-live="polite">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
