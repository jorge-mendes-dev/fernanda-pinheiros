import { AppConfig } from 'config/AppConfig';
import {
  HeartIcon
} from '@heroicons/react/24/outline'

export default function Evaluation() {
  const { evaluation } = AppConfig;
  return (
    <>
      <div className="relative bg-white py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-semibold text-primary">{evaluation.highlight}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {evaluation.title}
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            {evaluation.description}
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {evaluation.includes.map((feature, key) => (
                <div key={key} className="pt-6">
                  <div className="flow-root rounded-lg bg-pink-50 px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-primary p-3 shadow-lg">
                          <HeartIcon aria-hidden="true" className="size-8 text-white" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg/8 font-semibold tracking-tight text-gray-900">{feature.title}</h3>
                      <p className="mt-5 text-base/7 text-zinc-900">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
