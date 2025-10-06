/**
 * Debbie Codes Navbar Hook
 * Pure JavaScript implementation for navbar behavior like debbie.codes
 */

import { useEffect, useState } from 'react';

interface UseDebbieCodesNavbarOptions {
  threshold?: number;
}

export function useDebbieCodesNavbar(options: UseDebbieCodesNavbarOptions = {}) {
  const { threshold = 30 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          // Only change state when crossing the threshold
          if (scrollTop > threshold && !isScrolled) {
            setIsScrolled(true);
            // Add class to body to prevent content jumping
            document.body.classList.add('navbar-fixed');
          } else if (scrollTop <= threshold && isScrolled) {
            setIsScrolled(false);
            // Remove class from body
            document.body.classList.remove('navbar-fixed');
          }
          
          lastScrollY = scrollTop;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('navbar-fixed');
    };
  }, [threshold, isScrolled]);

  return { isScrolled };
}
