import { HeartIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';

export default function Consult() {
  const { consult } = AppConfig;
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-primary">{consult.highlight}</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {consult.title}
              </p>
            
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
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
          <Image
            alt={consult.image.alt}
            src={consult.image.src}
            width={700}
            height={700}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />  
        </div>
      </div>
    </div>
  )
}