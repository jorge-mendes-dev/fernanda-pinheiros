import Image from 'next/image';
import { AppConfig } from '../config/AppConfig';

export default function About() {
  const { about } = AppConfig;

  return (
    <div className="overflow-hidden bg-white py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              {about.title}
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              {about.description}
            </p>
            {about.paragraph.map((text, index) => (
              <p key={index} className="mt-1 text-base/7 text-gray-600">
                {text}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt={about.alt}
                src={about.images[0]}
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  alt={about.alt}
                  src={about.images[1]}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt={about.alt}
                  src={about.images[2]}
                  className="aspect-[4/3] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover "
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt={about.alt}
                  src={about.images[3]}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
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
