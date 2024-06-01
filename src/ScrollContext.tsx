// src/ScrollContext.tsx
import React, { createContext, useContext, useState } from 'react';

type ScrollContextType = {
  scrollPositions: Record<string, number>;
  setScrollPosition: (path: string, position: number) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});

  const setScrollPosition = (path: string, position: number) => {
    setScrollPositions(prev => ({ ...prev, [path]: position }));
  };

  return (
    <ScrollContext.Provider value={{ scrollPositions, setScrollPosition }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};
