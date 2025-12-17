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
          <h2 className="text-base/7 font-bold text-pink-900">
            {tips.title}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl">
            {tips.subtitle}
          </p>
          <p className="mt-6 text-base/7 text-gray-900 font-medium">
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
