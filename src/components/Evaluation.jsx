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
          <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary/10 to-pink-200/20 px-4 py-2 text-sm font-bold text-primary ring-1 ring-primary/20 mb-4">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {evaluation.highlight}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {evaluation.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            {evaluation.description}
          </p>
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {evaluation.includes.map((feature, key) => (
                <div key={key} className="pt-6">
                  <div className="group flow-root rounded-xl bg-linear-to-br from-pink-50 to-white px-6 pb-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ring-1 ring-pink-100 hover:ring-primary/30">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-xl bg-linear-to-br from-primary to-pink-600 p-3 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                          <HeartIcon aria-hidden="true" className="size-8 text-white" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg/8 font-bold tracking-tight text-gray-900 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="mt-5 text-base/7 text-gray-700">{feature.description}</p>
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
