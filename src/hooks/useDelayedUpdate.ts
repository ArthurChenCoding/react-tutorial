import { useState, useEffect } from 'react';

export const useDelayedUpdate = (value: any, delay: number) => {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return [delayedValue, setDelayedValue] as const;
};