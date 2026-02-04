import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
  const { header, crn } = AppConfig;

  return (
    <div className="relative isolate overflow-hidden bg-white pt-16">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-32 xl:col-span-6">
          <div className="mx-auto max-w-lg lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex sm:gap-2 lg:mt-16">
              <span className="rounded-full bg-gradient-to-r from-primary/10 to-pink-200/20 px-4 py-2 text-sm font-bold text-primary ring-1 ring-inset ring-primary/20 shadow-sm">
                {header.tag}
              </span>
               <span className="rounded-full bg-gradient-to-r from-primary/10 to-pink-200/20 px-4 py-2 text-sm font-bold text-primary ring-1 ring-inset ring-primary/20 shadow-sm">
                {crn}
              </span>
            </div>
            <h1 className="mt-24 text-balance text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent sm:mt-10 sm:text-7xl lg:text-8xl font-display">
              {header.title}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-600 leading-relaxed sm:text-xl/8">
              {header.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-x-4">
              <Link
                href={header.button.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${header.button.label} - Abre em nova aba`}
                className="group relative rounded-xl bg-gradient-to-r from-primary to-pink-500 px-6 py-4 text-base font-bold text-white text-center shadow-lg transition-[transform,shadow,background-position] duration-300 hover:shadow-xl hover:scale-105 hover:from-pink-500 hover:to-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  {header.button.label}
                  <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href={header.link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${header.link.label} - Abre WhatsApp em nova aba`}
                className="group flex items-center justify-center sm:justify-start px-6 py-4 text-base font-bold text-gray-900 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-[border-color,background-color,transform] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <FaWhatsapp className="mr-2 h-5 w-5 text-green-500 group-hover:scale-110 transition-transform" />
                {header.link.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-pink-300/30 rounded-2xl lg:rounded-none" />
          <Image
            alt={header.image.alt}
            src={header.image.src}
            className="aspect-[3/2] w-full rounded-2xl lg:rounded-none bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full shadow-2xl lg:shadow-none"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </div>
  );
}
