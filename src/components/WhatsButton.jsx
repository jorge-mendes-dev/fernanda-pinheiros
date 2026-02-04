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
      {/* Ripple effect */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={whatsapp}
        aria-label="Fale conosco pelo WhatsApp - Abre em nova aba"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="relative flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-4xl text-white shadow-2xl transition-[background-position,transform,box-shadow] duration-300 hover:from-green-500 hover:to-green-700 hover:scale-110 hover:shadow-green-500/50 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-offset-2"
      >
        <FaWhatsapp className="drop-shadow-md" />

        {/* Tooltip */}
        {showTooltip && (
          <span className="absolute right-full mr-4 whitespace-nowrap rounded-xl bg-gray-900 px-4 py-3 text-sm font-bold text-white shadow-2xl animate-fade-in">
            Fale conosco!
            <span className="absolute right-0 top-1/2 -mr-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></span>
          </span>
        )}
      </Link>
    </div>
  );
};
export default WhatsButton;
