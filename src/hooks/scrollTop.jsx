import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsTransitioning(true); 
    const timeout = setTimeout(() => {
      setIsTransitioning(false); 
    }, 500);

    return () => clearTimeout(timeout); 
  }, [pathname]);

  return isTransitioning ? <div className="scroll-transition" /> : <div className="scroll-transition over" />;
}

export default ScrollToTopOnNavigate;