import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import ProductShowcase from './components/ProductShowcase'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showcaseActiveTab, setShowcaseActiveTab] = useState('overview');
  const [showcaseHighlight, setShowcaseHighlight] = useState(false);

  const handleGoToPrototype = (tabId = 'content') => {
    // Navigate to product section smoothly
    const element = document.getElementById('product');
    if (element) {
      // Add slight offset for navbar if possible, or just scroll
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Set active tab
    setShowcaseActiveTab(tabId);
    
    // Trigger highlight effect
    setShowcaseHighlight(true);
    setTimeout(() => {
      setShowcaseHighlight(false);
    }, 2000);
  };

  return (
    <>
      <Navbar onStartPrototype={() => handleGoToPrototype('content')} />
      <main>
        <Hero onStartPrototype={() => handleGoToPrototype('content')} />
        <Trust />
        <ProductShowcase 
          activeTab={showcaseActiveTab} 
          setActiveTab={setShowcaseActiveTab} 
          highlight={showcaseHighlight} 
        />
        <Features />
        <HowItWorks />
        <CTA onStartPrototype={() => handleGoToPrototype('content')} />
      </main>
      <Footer />
    </>
  )
}

export default App
