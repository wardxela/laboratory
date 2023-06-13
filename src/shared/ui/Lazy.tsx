'use client';

import { PropsWithChildren, useEffect, useRef, useState } from 'react';

/**
 * Renders element only when its parent appears on the screen
 */
export function Lazy({ children }: PropsWithChildren) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        }),
      {
        threshold: 0,
      }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef}>{isVisible ? children : null}</div>;
}
