import Image from 'next/image';
import Link from 'next/link';
import { AppConfig } from "config/AppConfig";
import Instagram from './Instagram';

export default function Tips() {
  const { tips } = AppConfig;
  return (
    <div className="relative bg-pink-300" id="tips">
      <div className="relative h-80 overflow-hidden bg-primary md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <Image
          alt={tips.image.alt}
          src={tips.image.src}
          className="h-full w-full object-cover aspect-[4/3]"
          width={1000}
          height={1000}
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-bold text-pink-900 ring-1 ring-pink-900/20 mb-6">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            {tips.title}
          </div>
          <h2 className="text-4xl font-black tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            {tips.subtitle}
          </h2>
          <p className="mt-8 text-lg text-gray-900 font-semibold leading-relaxed drop-shadow-sm">
            {tips.description}
          </p>
           <Instagram />
          <div className="mt-2">
            <Link
              href={tips.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-lg bg-white/10 backdrop-blur-sm px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-white/20 hover:shadow-xl hover:scale-105 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {tips.link.label}
              <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
