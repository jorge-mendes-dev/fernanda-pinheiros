'use client';

import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import FadeIn from 'components/FadeIn';
import Template from 'components/Template';
import Loader from 'components/Loader';
import { AppConfig } from 'config/AppConfig';
import { DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const Reader = dynamic(() => import('components/Reader'), {
  ssr: false,
  loading: () => <Loader />,
});

export default function Docs() {
  const [selectedDoc, setSelectedDoc] = useState(AppConfig.docs[0]);

  return (
    <Suspense fallback={<Loader />}>
      <Template>
        <>
          <FadeIn delay={0.2}>
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              {/* Header Section */}
              <div className="mb-12 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
                  <DocumentTextIcon className="h-8 w-8 text-primary" />
                </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Materiais e Guias
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                  Acesse nossos guias nutricionais e conheça as opções de
                  acompanhamento disponíveis
                </p>
              </div>

              {/* Document Selector Grid */}
              <div className="mb-12">
                <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Selecione um documento
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {AppConfig.docs.map((doc, index) => (
                    <button
                      key={doc.slug}
                      onClick={() => setSelectedDoc(doc)}
                      className={`group relative overflow-hidden rounded-2xl border-2 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                        selectedDoc.slug === doc.slug
                          ? 'border-primary bg-linear-to-br from-primary/5 to-primary/10 shadow-lg'
                          : 'border-gray-200 bg-white hover:border-primary/30 hover:bg-gray-50'
                      }`}
                    >
                      {/* Selection indicator */}
                      {selectedDoc.slug === doc.slug && (
                        <div className="absolute right-4 top-4">
                          <CheckCircleIcon className="h-6 w-6 text-primary" />
                        </div>
                      )}

                      {/* Document number badge */}
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                        {index + 1}
                      </div>

                      <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-primary">
                        {doc.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600">
                        {doc.description}
                      </p>

                      {/* Decorative element */}
                      <div
                        className={`absolute -bottom-2 -right-2 h-24 w-24 rounded-full opacity-5 transition-opacity ${
                          selectedDoc.slug === doc.slug
                            ? 'bg-primary opacity-10'
                            : 'bg-gray-400 group-hover:opacity-10'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* PDF Reader Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-700">
                    Visualizando:
                  </h2>
                  <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                    {selectedDoc.title.split(' - ')[1] || selectedDoc.title}
                  </span>
                </div>
                <div className="overflow-hidden rounded-2xl bg-rose-100 shadow-2xl ring-1 ring-gray-900/5">
                  <Reader selected={selectedDoc} />
                </div>
              </div>
            </div>
          </FadeIn>
        </>
      </Template>
    </Suspense>
  );
}
