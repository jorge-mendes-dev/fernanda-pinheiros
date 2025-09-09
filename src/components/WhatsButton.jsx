'use client';

import React from 'react';
import { AppConfig } from "config/AppConfig";
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const WhatsButton = () => {
  const { whatsapp } = AppConfig;
  return (
    <div className="rounded-md">
      <div className="z-50">
        <Link
          target="_blank"
          rel="noreferrer"
          href={whatsapp}
          style={{ zIndex: 999999 }}
          className={`z-90 duration-300" fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-4xl text-white drop-shadow-lg hover:animate-bounce hover:bg-green-600 hover:drop-shadow-2xl`}
        >
          <FaWhatsapp />
        </Link>
      </div>
    </div>
  );
};
export default WhatsButton;
