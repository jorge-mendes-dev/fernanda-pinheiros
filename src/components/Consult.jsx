import { HeartIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';

export default function Consult() {
  const { consult } = AppConfig;
  return (
    <div className="overflow-hidden bg-white py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8 flex flex-col justify-center">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold text-primary">{consult.highlight}</h2>
              <p className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-pretty text-gray-900">
                {consult.title}
              </p>
              <dl className="mt-8 sm:mt-10 max-w-xl space-y-6 sm:space-y-8 text-base text-gray-600 lg:max-w-none">
                {consult.description.map((feature, key) => (
                  <div key={key} className="relative pl-9">
                    <dt className="inline font-base text-gray-900">
                      <HeartIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-primary" />
                      {feature}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              alt={consult.image.alt}
              src={consult.image.src}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, 400px"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
