import { HeartIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';

export default function Consult() {
  const { consult } = AppConfig;
  return (
    <div id='consult' className="overflow-hidden bg-white py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8 flex flex-col justify-center">
            <div className="lg:max-w-lg">
              <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary/10 to-pink-200/20 px-4 py-2 text-sm font-bold text-primary ring-1 ring-primary/20 mb-4">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                {consult.highlight}
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight font-display">
                {consult.title}
              </h2>
              <dl className="mt-8 sm:mt-10 max-w-xl space-y-6 sm:space-y-8 text-base text-gray-600 lg:max-w-none">
                {consult.description.map((feature, key) => (
                  <div key={key} className="relative pl-9 group">
                    <dt className="inline font-medium text-gray-900 leading-relaxed">
                      <HeartIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-primary group-hover:scale-110 transition-transform" />
                      {feature}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex justify-center items-center group">
            <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 group-hover:shadow-pink-200/50 group-hover:scale-[1.02]">
              <Image
                alt={consult.image.alt}
                src={consult.image.src}
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 400px"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl ring-1 ring-gray-400/10 transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
