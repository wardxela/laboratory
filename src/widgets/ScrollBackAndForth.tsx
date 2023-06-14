'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { clsx } from '@/shared/lib';

export function ScrollBackAndForth() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [state, setState] = useState<'init' | 'bottom' | 'top'>('init');
  const prevPageCoords = useRef({ x: 0, y: 0 });

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (isTransitioning) {
        setIsTransitioning(false);
        return;
      }
      switch (state) {
        case 'init':
          if (document.documentElement.scrollTop > 300) {
            setState('bottom');
          }
          break;
        case 'bottom':
          if (document.documentElement.scrollTop < 300) {
            setState('init');
          }
          break;
        case 'top':
          setState('bottom');
          break;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [state, isTransitioning]);

  useEffect(() => setState('init'), [pathname]);

  const handleClick = () => {
    switch (state) {
      case 'bottom':
        setState('top');
        setIsTransitioning(true);
        prevPageCoords.current.x = document.documentElement.scrollLeft;
        prevPageCoords.current.y = document.documentElement.scrollTop;
        window.scroll(0, 0);
        break;
      case 'top':
        setIsTransitioning(true);
        setState('bottom');
        window.scroll(prevPageCoords.current.x, prevPageCoords.current.y);
        break;
    }
  };

  if (state === 'init') {
    return null;
  }

  return (
    <button className="w-full h-full flex group" onClick={handleClick}>
      <div className="group-hover:bg-slate-100 flex-shrink h-full transition-colors dark:group-hover:group-hover:bg-slate-950">
        <div className="sticky top-20 text-slate-300 select-none dark:text-slate-700 font-semibold group-hover:text-slate-500 transition-colors dark:group-hover:text-slate-400">
          <div
            className={clsx({
              'flex pl-8 pr-16 items-center gap-2 transition-transform': true,
              'group-hover:translate-y-1': state === 'top',
              'group-hover:-translate-y-1': state === 'bottom',
            })}
          >
            {state === 'top' ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Вниз</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Вверх</span>
              </>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
