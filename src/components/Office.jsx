import { MapPinIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';

export default function Office() {
  const { office } = AppConfig;
  return (
    <div id="office" className="overflow-hidden bg-white py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary/10 to-pink-200/20 px-4 py-2 text-sm font-bold text-primary ring-1 ring-primary/20 mb-4">
            <MapPinIcon aria-hidden="true" className="h-4 w-4" />
            {office.highlight}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight font-display">
            {office.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            {office.description}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:mt-20 sm:gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {office.images.map((image, key) => (
            <div key={key} className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-pink-200/50 hover:scale-[1.02]">
              <Image
                alt={image.alt}
                src={image.src}
                width={384}
                height={384}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="aspect-square w-full rounded-xl object-cover ring-1 ring-gray-400/10 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
