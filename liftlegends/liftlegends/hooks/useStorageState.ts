import { useState, useEffect } from 'react';

export function useStorageState(key: string) {
  const isBrowser = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  const [state, setState] = useState(() => {
    if (isBrowser) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : [false, null];
    }
    return [false, null];
  });

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state, isBrowser]);

  return [state, setState] as const;
}