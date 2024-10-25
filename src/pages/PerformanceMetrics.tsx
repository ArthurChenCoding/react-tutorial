import React, { useState, useEffect } from 'react';
import '../styles/PerformanceMetrics.css';

const PerformanceMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState({ renderCount: 0, time: 0 });

  useEffect(() => {
    // Example of a condition to prevent infinite updates
    if (metrics.renderCount < 10) {
      const timer = setTimeout(() => {
        setMetrics(prevMetrics => ({
          ...prevMetrics,
          renderCount: prevMetrics.renderCount + 1,
          time: prevMetrics.time + 1000
        }));
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [metrics]);

  return (
    <div className="performance-metrics">
      <h1>Performance Metrics</h1>
      <div className="metrics">
        <p>Render Count: {metrics.renderCount}</p>
        <p>Time: {metrics.time}ms</p>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
