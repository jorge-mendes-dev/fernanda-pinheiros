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
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <span className="rounded-full bg-pink-600/10 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-inset ring-indigo-600/10">
                {header.tag}
              </span>
               <span className="rounded-full ml-1 bg-pink-600/10 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-inset ring-indigo-600/10">
                {crn}
              </span>
            </div>
            <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl">
              {header.title}
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              {header.description}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-x-6">
              <Link
                href={header.button.href}
                target="_blank"
                className="rounded-md bg-primary px-4 py-3 sm:px-3.5 sm:py-2.5 text-sm font-semibold text-white text-center shadow-sm transition-all hover:bg-pink-600 hover:shadow-md hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {header.button.label}
              </Link>
              <Link
                href={header.link.href}
                target="_blank"
                className="text-sm sm:text-sm/6 font-semibold text-gray-900 flex align-center items-center justify-center sm:justify-start px-4 py-3 sm:px-0 sm:py-0 rounded-md sm:rounded-none hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {header.link.label}<FaWhatsapp className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            alt={header.image.alt}
            src={header.image.src}
            className="aspect-[3/2] w-full rounded bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
    </div>
  );
}
