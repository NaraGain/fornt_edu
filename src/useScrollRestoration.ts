// src/useScrollRestoration.ts
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScroll } from './ScrollContext';

const useScrollRestoration = () => {
  const location = useLocation();
  const { scrollPositions, setScrollPosition } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(location.pathname, window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, setScrollPosition]);

  useEffect(() => {
    if (scrollPositions[location.pathname] !== undefined) {
      window.scrollTo(0, scrollPositions[location.pathname]);
    }
  }, [location.pathname, scrollPositions]);
};

export default useScrollRestoration;
