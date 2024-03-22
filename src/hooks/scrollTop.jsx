import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`scroll-transition ${isTransitioning ? '' : 'over'}`} />
  );
}

export default ScrollToTopOnNavigate;