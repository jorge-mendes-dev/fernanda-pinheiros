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
          <h2 className="text-base/7 font-semibold text-pink-800">
            {tips.title}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {tips.subtitle}
          </p>
          <p className="mt-6 text-base/7 text-zinc-900">
            {tips.description}
          </p>
           <Instagram />
          <div className="mt-2">
            <Link 
              href={tips.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {tips.link.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
