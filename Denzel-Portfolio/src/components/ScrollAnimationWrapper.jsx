import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = () => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This is the key change: check if the element is entering or exiting
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Triggers when 20% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup function to disconnect the observer
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [elementRef, isVisible];
};

const ScrollAnimationWrapper = ({ children, animationClass }) => {
  const [elementRef, isVisible] = useScrollAnimation();

  return (
    <div 
      ref={elementRef}
      // Toggle the class based on the isVisible state
      className={`scroll-animated-element ${isVisible ? animationClass : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;