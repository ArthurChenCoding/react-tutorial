import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

interface NavigationProps {
  onNavClick: (index: number) => void;
}

function Navigation({ onNavClick }: NavigationProps) {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/" onClick={() => onNavClick(0)}>Home</Link></li>
        <li><Link to="/concepts" onClick={() => onNavClick(1)}>React Concepts</Link></li>
        <li><Link to="/snippets" onClick={() => onNavClick(2)}>Code Snippets</Link></li>
        <li><Link to="/playground" onClick={() => onNavClick(3)}>Interactive Playground</Link></li>
        <li><Link to="/performance" onClick={() => onNavClick(4)}>Performance Metrics</Link></li>
        <li><Link to="/about" onClick={() => onNavClick(5)}>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
