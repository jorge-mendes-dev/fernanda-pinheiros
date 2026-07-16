import React from 'react';
import { AppConfig } from 'config/AppConfig';
import { CheckIcon } from '@heroicons/react/20/solid';

export default function Price() {
  const { pricing } = AppConfig;

  return (
    <section className="bg-white py-16 sm:py-20" id="pricing">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl font-display">
          {pricing.title}
        </h2>

        <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 md:items-start">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`group relative flex h-full flex-col rounded-2xl p-6 shadow-lg ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                plan.featured
                  ? 'bg-linear-to-br from-primary/5 via-white to-pink-50/60 ring-primary/30 hover:ring-primary/50'
                  : 'bg-white ring-gray-900/5 hover:ring-primary/20'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-primary to-pink-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                  Mais completo
                </span>
              )}

              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/10 to-pink-100 text-2xl transition-transform duration-300 group-hover:scale-110"
              >
                {plan.emoji}
              </span>

              <h3 className="mt-4 text-base font-bold text-gray-900">{plan.name}</h3>

              <p className="mt-2 text-3xl font-bold tracking-tight text-primary">{plan.price}</p>
              <p className="mt-1 text-sm text-gray-600">{plan.description}</p>

              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Incluso</p>
                <ul role="list" className="mt-3 space-y-2 text-sm text-gray-700">
                  {plan.details.map((feature) => (
                    <li key={feature} className="flex gap-x-2 items-start">
                      <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-primary/10">
                        <CheckIcon aria-hidden="true" className="h-3 w-3 text-primary" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.note && (
                <p className="mt-5 text-xs text-gray-400 italic">{plan.note}</p>
              )}
            </div>
          ))}
        </div>

        {pricing.tagline && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-medium text-gray-700">
            {pricing.tagline} 💚
          </p>
        )}
      </div>
    </section>
  );
}
