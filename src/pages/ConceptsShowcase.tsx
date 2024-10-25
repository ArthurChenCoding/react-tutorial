import React, { useState, useEffect } from 'react';
import { useDelayedUpdate } from '../hooks/useDelayedUpdate';
import ReduxCounter from '../components/ReduxCounter';

const ConceptsShowcase: React.FC = () => {
  const [count, setCount] = useState(0);
  const [delayedCount, setDelayedCount] = useDelayedUpdate(count, 1000);

  useEffect(() => {
    document.title = `Count: ${count}`;
    return () => {
      document.title = 'React Showcase';
    };
  }, [count]);

  return (
    <div>
      <h1>React Concepts Showcase</h1>
      <div>
        <h2>useState and useEffect Example</h2>
        <p>Count: {count}</p>
        <p>Delayed Count: {delayedCount}</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default ConceptsShowcase;