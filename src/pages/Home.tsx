import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  const handleClick = () => {
    setIsAnimating(true);
  };

  return (
    <div className="home">
      <h1>Welcome to React Showcase</h1>
      <AnimatedSection>
        <p>This content will fade in and slide up when scrolled into view.</p>
      </AnimatedSection>
      <button 
        className={`fancy-button ${isAnimating ? 'animate' : ''}`} 
        onClick={handleClick}
      >
        Click for Magic!
      </button>
      {isAnimating && (
        <div className="particle-container">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              '--tx': `${(Math.random() - 0.5) * 500}px`,
              '--ty': `${(Math.random() - 0.5) * 500}px`
            } as React.CSSProperties} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
