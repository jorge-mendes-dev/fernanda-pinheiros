'use client';

import { useEffect } from 'react';
import { HeartIcon } from '@heroicons/react/20/solid'
import { AppConfig } from "config/AppConfig";

const tiers = [
  {
    name: 'Instagram',
    description: 'Dicas diárias, receitas saudáveis e conteúdo educativo sobre nutrição.',
    handle: '@nutri_fernandasouza',
    href: 'https://www.instagram.com/nutri_fernandasouza/',
    color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
    textColor: 'text-pink-600',
    embedType: 'instagram',
    icon: (
      <svg className="size-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    highlights: [
      { description: 'Posts diários com dicas de nutrição' },
      { description: 'Receitas saudáveis e práticas' },
      { description: 'Stories com conteúdo exclusivo' },
      { description: 'Lives com especialistas' },
      { description: 'Respostas a dúvidas frequentes' },
    ],
  },
  {
    name: 'TikTok',
    description: 'Vídeos rápidos e dinâmicos sobre alimentação saudável e bem-estar.',
    handle: '@nutri_fernandasouza',
    href: 'https://www.tiktok.com/@nutri_fernandasouza',
    color: 'bg-black',
    textColor: 'text-gray-900',
    embedType: 'tiktok',
    icon: (
      <svg className="size-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    highlights: [
      { description: 'Vídeos curtos e educativos' },
      { description: 'Tendências de alimentação saudável' },
      { description: 'Dicas rápidas de nutrição' },
      { description: 'Desafios e transformações' },
      { description: 'Conteúdo dinâmico e divertido' },
    ],
  },
];

export default function Tips() {
  const { tips } = AppConfig;

  useEffect(() => {
    // Instagram embed script
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    // TikTok embed script
    if (!document.getElementById("tiktok-embed-script")) {
      const script = document.createElement("script");
      script.id = "tiktok-embed-script";
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white py-24 sm:py-32" id="tips">
      <div className="mx-auto max-w-4xl px-6 flex flex-col items-center text-center lg:max-w-7xl lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-primary ring-1 ring-pink-200 mb-6">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
          </svg>
          {tips.title}
        </div>
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl lg:text-pretty font-display">
          {tips.subtitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-600 mx-auto sm:text-xl/8">
          {tips.description}
        </p>
      </div>

      <div className="relative pt-16 sm:pt-24">
        <div className="absolute inset-x-0 top-48 bottom-0 bg-[radial-gradient(circle_at_center_center,#ff7da4,#f9a8d4,#fdf2f8_70%)] lg:bg-[radial-gradient(circle_at_center_150%,#ff7da4,#f9a8d4,#fdf2f8_70%)]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 justify-center">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="-m-2 grid grid-cols-1 rounded-4xl bg-white/2.5 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 mx-auto w-full max-w-md lg:max-w-lg"
              >
                <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
                  <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <div className="flex items-center gap-4">
                      <div className={`${tier.color} rounded-2xl p-3 text-white shadow-lg`}>
                        {tier.icon}
                      </div>
                      <div>
                        <h2 className={`text-lg font-semibold ${tier.textColor}`}>
                          {tier.name}
                        </h2>
                        <p className="text-sm text-gray-500">{tier.handle}</p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm/6 text-pretty text-gray-600">{tier.description}</p>

                    <div className="mt-8">
                      <a
                        href={tier.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Seguir ${tier.name} - Abre em nova aba`}
                        className={`inline-block w-full rounded-md ${tier.color} px-3.5 py-2.5 text-center text-sm/6 font-semibold text-white shadow-lg transition-[transform,box-shadow] duration-300 hover:shadow-xl hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2`}
                      >
                        Seguir no {tier.name}
                      </a>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-sm/6 font-semibold text-gray-950">O que você encontra:</h3>
                      <ul className="mt-3 space-y-3">
                        {tier.highlights.map((highlight) => (
                          <li
                            key={highlight.description}
                            className="flex items-start gap-4 text-sm/6 text-gray-600"
                          >
                            <span className="inline-flex h-6 items-center">
                              <HeartIcon
                                aria-hidden="true"
                                className="size-4 fill-primary"
                              />
                            </span>
                            {highlight.description}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social Media Embed */}
                    <div className="mt-8 flex justify-center">
                      {tier.embedType === 'instagram' ? (
                        <blockquote
                          className="instagram-media"
                          data-instgrm-permalink={AppConfig.social.instagram}
                          data-instgrm-version="14"
                          style={{ margin: '0 !important', width: '100%', maxWidth: '540px' }}
                        ></blockquote>
                      ) : (
                        <blockquote
                          className="tiktok-embed"
                          cite={AppConfig.social.tiktok}
                          data-unique-id={AppConfig.social.tiktokUsername}
                          data-embed-type="creator"
                          style={{ margin: '0 auto', width: '100%', maxWidth: '540px' }}
                        >
                          <section>
                            <a target="_blank" rel="noopener noreferrer" href={AppConfig.social.tiktok}>@{AppConfig.social.tiktokUsername}</a>
                          </section>
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center pb-16">
            <p className="text-lg text-white font-semibold drop-shadow-lg">
              Não perca nenhuma dica! Acompanhe todo o conteúdo nas redes sociais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
