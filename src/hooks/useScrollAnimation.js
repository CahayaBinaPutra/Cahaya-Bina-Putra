import { useState, useEffect } from 'react';

const useScrollAnimation = () => {
  const [elements, setElements] = useState([]);
  const [activeElements, setActiveElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveElements((prev) => [...prev, entry.target]);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [elements]);

  const addElement = (el) => {
    if (el && !elements.includes(el)) {
      setElements((prev) => [...prev, el]);
    }
  };

  return [addElement, activeElements];
};

export default useScrollAnimation;