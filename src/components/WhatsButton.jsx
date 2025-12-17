'use client';

import React, { useState } from 'react';
import { AppConfig } from "config/AppConfig";
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const WhatsButton = () => {
  const { whatsapp } = AppConfig;
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <Link
        target="_blank"
        rel="noreferrer"
        href={whatsapp}
        aria-label="Fale conosco pelo WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-green-500 text-3xl sm:text-4xl text-white shadow-lg transition-all duration-300 hover:bg-green-600 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-2 animate-pulse-slow"
      >
        <FaWhatsapp />

        {/* Tooltip */}
        {showTooltip && (
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white shadow-lg animate-fade-in">
            Fale conosco!
            <span className="absolute right-0 top-1/2 -mr-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
          </span>
        )}
      </Link>
    </div>
  );
};
export default WhatsButton;
