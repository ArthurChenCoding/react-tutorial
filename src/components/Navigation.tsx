import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  onNavClick: (index: number) => void;
}

function Navigation({ onNavClick }: NavigationProps) {
  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
  };

  return (
    <nav>
      <ul>
        <li><Link to="/" style={linkStyle} onClick={() => onNavClick(0)}>Home</Link></li>
        <li><Link to="/concepts" style={linkStyle} onClick={() => onNavClick(1)}>React Concepts</Link></li>
        <li><Link to="/snippets" style={linkStyle} onClick={() => onNavClick(2)}>Code Snippets</Link></li>
        <li><Link to="/playground" style={linkStyle} onClick={() => onNavClick(3)}>Interactive Playground</Link></li>
        <li><Link to="/performance" style={linkStyle} onClick={() => onNavClick(4)}>Performance Metrics</Link></li>
        <li><Link to="/about" style={linkStyle} onClick={() => onNavClick(5)}>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
