import React from 'react';
import { AppConfig } from 'config/AppConfig';
import { CheckIcon } from '@heroicons/react/20/solid';
import {
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

// plan.icon in AppConfig.pricing.plans
const PLAN_ICONS = {
  consult: ClipboardDocumentCheckIcon,
  online: ComputerDesktopIcon,
  office: MapPinIcon,
};

export default function Price() {
  const { pricing } = AppConfig;

  return (
    <section className="bg-white py-20 sm:py-24" id="pricing">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <div className="from-primary/10 text-primary ring-primary/20 mb-4 inline-flex items-center gap-2 rounded-full bg-linear-to-r to-pink-200/20 px-4 py-2 text-sm font-bold ring-1">
            <CurrencyDollarIcon aria-hidden="true" className="h-4 w-4" />
            {pricing.highlight}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {pricing.title}
          </h2>
          {pricing.tagline && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              {pricing.tagline}
            </p>
          )}
        </div>

        <div className="mx-auto mt-14 grid max-w-md grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 md:items-start">
          {pricing.plans.map(plan => {
            const Icon = PLAN_ICONS[plan.icon] ?? ClipboardDocumentCheckIcon;
            return (
              <div
                key={plan.name}
                className={`group relative flex h-full flex-col rounded-2xl p-6 shadow-lg ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  plan.featured
                    ? 'from-primary/5 ring-primary/30 hover:ring-primary/50 bg-linear-to-br via-white to-pink-50/60'
                    : 'hover:ring-primary/20 bg-white ring-gray-900/5'
                }`}
              >
                {plan.featured && (
                  <span className="from-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r to-pink-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                    Mais completo
                  </span>
                )}

                <span
                  aria-hidden="true"
                  className="from-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br to-pink-100 transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon className="h-6 w-6" />
                </span>

                <h3 className="mt-4 text-base font-bold text-gray-900">
                  {plan.name}
                </h3>

                <p className="text-primary mt-2 text-3xl font-bold tracking-tight">
                  {plan.price}
                </p>
                <p className="mt-1 text-sm text-gray-600">{plan.description}</p>

                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                    Incluso
                  </p>
                  <ul
                    role="list"
                    className="mt-3 space-y-2 text-sm text-gray-700"
                  >
                    {plan.details.map(feature => (
                      <li key={feature} className="flex items-start gap-x-2">
                        <span className="bg-primary/10 mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full">
                          <CheckIcon
                            aria-hidden="true"
                            className="text-primary h-3 w-3"
                          />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.note && (
                  <p className="mt-5 text-xs text-gray-400 italic">
                    {plan.note}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {pricing.payment && (
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm font-medium text-gray-600">
            {pricing.payment}
          </p>
        )}
      </div>
    </section>
  );
}
