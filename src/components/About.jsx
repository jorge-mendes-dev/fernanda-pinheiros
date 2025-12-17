import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';

export default function About() {
  const { about } = AppConfig;

  return (
    <div className="overflow-hidden bg-white py-20 sm:py-24 md:py-28 lg:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-6">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Conheça minha história
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              {about.title}
            </h2>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
              {about.description}
            </p>
            <div className="mt-6 space-y-4">
              {about.paragraph.map((text, index) => (
                <p key={index} className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-4 sm:gap-6 lg:contents">
            <div className="w-full sm:w-1/2 lg:ml-auto lg:w-auto lg:flex-none lg:self-end mb-4 sm:mb-0 group">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  alt={about.alt}
                  src={about.images[0]}
                  className="aspect-[7/5] w-full sm:w-[24rem] lg:w-[37rem] max-w-none bg-gray-50 object-cover transition-transform duration-500 group-hover:scale-105"
                  width={1000}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-full sm:w-1/2 lg:w-auto flex-none justify-end self-end mb-4 sm:mb-0">
                <Image
                  alt={about.alt}
                  src={about.images[1]}
                  className="aspect-[4/3] w-full sm:w-[16rem] lg:w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex w-full sm:w-1/2 lg:w-auto flex-auto justify-end mb-4 sm:mb-0">
                <Image
                  alt={about.alt}
                  src={about.images[2]}
                  className="aspect-[4/3] w-full sm:w-[24rem] lg:w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="hidden sm:block sm:w-1/2 lg:w-auto lg:flex-none">
                <Image
                  alt={about.alt}
                  src={about.images[3]}
                  className="aspect-[4/3] w-full sm:w-[16rem] lg:w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
