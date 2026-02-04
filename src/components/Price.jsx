'use client';

import React, { useState } from 'react';
import { AppConfig } from 'config/AppConfig';
import { CheckIcon } from '@heroicons/react/20/solid';

const frequencies = [
  { value: 'online', label: 'Online', priceSuffix: '' },
  { value: 'presencial', label: 'Presencial', priceSuffix: '' },
];

export default function Price() {
  const { pricing, schedule } = AppConfig;
  const [frequency, setFrequency] = useState('online');

  return (
    <form className="group/tiers bg-white py-24 sm:py-32" id="pricing">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold text-primary">{pricing.title}</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Escolha o plano ideal para você
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-700 sm:text-xl">
          {pricing.description}
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Tipo de atendimento">
            <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold inset-ring inset-ring-primary/20">
              {frequencies.map((freq) => (
                <label key={freq.value} className="group relative rounded-full px-2.5 py-1 has-checked:bg-primary">
                  <input
                    value={freq.value}
                    checked={frequency === freq.value}
                    onChange={() => setFrequency(freq.value)}
                    name="frequency"
                    type="radio"
                    className="absolute inset-0 appearance-none rounded-full"
                  />
                  <span className="text-gray-600 group-has-checked:text-white">{freq.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {pricing.plans.map((plan, idx) => {
            const isFeatured = idx >= 2;
            return (
              <div
                key={plan.name}
                data-featured={isFeatured ? 'true' : undefined}
                className={`group/tier rounded-3xl p-8 ring-1 ring-primary/10 bg-white transition-shadow duration-200
                  ${isFeatured ? 'border-2 border-primary bg-primary/5 shadow-2xl scale-[1.03]' : 'shadow-lg hover:shadow-2xl'}
                `}
              >
                <div className="flex items-center mb-4 justify-center gap-x-4">
                  <h3
                    id={`tier-${plan.name}`}
                    className={`text-2xl text-center font-bold ${isFeatured ? 'text-primary' : 'text-gray-900'}`}
                  >
                    {plan.name}
                  </h3>
                </div>
                {plan.duration && (
                  <div className="text-xs text-gray-500 text-center mb-2">⏱️ Duração média: {plan.duration}</div>
                )}
                {isFeatured && (
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20 shadow-sm">Popular</span>
                )}
                <p className="mt-6 flex items-baseline gap-x-1 justify-center">
                  <span className="text-4xl font-semibold tracking-tight text-primary">
                    {plan[frequency]}
                  </span>
                </p>

                <a
                  href={schedule.link.href}
                  aria-describedby={schedule.link.label}
                  className="mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-primary inset-ring-1 inset-ring-indigo-200 group-data-featured/tier:bg-primary group-data-featured/tier:text-white group-data-featured/tier:shadow-xs group-data-featured/tier:inset-ring-0 hover:inset-ring-primary group-data-featured/tier:hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {schedule.link.label}
                </a>

                <ul role="list" className="mt-8 space-y-3 text-sm text-gray-700">
                  {plan.details.map((feature) => (
                    <li key={feature} className="flex gap-x-2 items-center">
                      <CheckIcon aria-hidden="true" className="h-5 w-5 flex-none text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>


        <div className="mt-10 text-center">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded font-medium text-sm">
            {pricing.payment}
          </span>
        </div>
      </div>
    </form>
  );
}
