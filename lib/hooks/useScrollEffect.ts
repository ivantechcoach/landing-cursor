/**
 * useScrollEffect Hook
 * Custom hook for handling scroll effects like sticky navigation
 * Inspired by debbie.codes navbar behavior
 */

import { useState, useEffect } from 'react';

interface UseScrollEffectOptions {
  threshold?: number;
  throttleMs?: number;
}

export function useScrollEffect(options: UseScrollEffectOptions = {}) {
  const { threshold = 50, throttleMs = 16 } = options;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          // Add some hysteresis to prevent flickering
          if (scrollTop > threshold && !isScrolled) {
            setIsScrolled(true);
          } else if (scrollTop <= threshold && isScrolled) {
            setIsScrolled(false);
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
    };
  }, [threshold, isScrolled]);

  return { isScrolled };
}
