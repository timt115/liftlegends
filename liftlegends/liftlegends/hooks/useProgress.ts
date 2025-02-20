import { useState, useEffect } from 'react';
/*
export const useProgress = (): number => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 1 ? prevProgress + 0.01 : 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return progress;
};
*/


export const useProgress = (): number => {
  const [progress, setProgress] = useState(0.5); // Set a static value for progress

  useEffect(() => {
    // No interval needed for static value
  }, []);

  return progress;
};