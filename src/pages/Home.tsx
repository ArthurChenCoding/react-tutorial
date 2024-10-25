import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to React Showcase</h1>
      <AnimatedSection>
        <p>This content will fade in and slide up when scrolled into view.</p>
      </AnimatedSection>
      {/* Add more content */}
    </div>
  );
};

export default Home;
