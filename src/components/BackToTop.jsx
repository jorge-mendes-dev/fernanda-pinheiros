'use client';

import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Voltar ao topo da página"
          className="fixed bottom-28 right-6 z-40 flex items-center justify-center h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-amber-50 text-pink-600 shadow-xl transition-[transform,box-shadow] duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 focus:outline-none focus:ring-4 focus:ring-primary/50 focus:ring-offset-2 animate-fade-in group"
        >
          <ArrowUpIcon className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </>
  );
}
