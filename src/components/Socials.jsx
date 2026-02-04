'use client';

import { useEffect } from 'react';
import { AppConfig } from "config/AppConfig";

export default function Socials() {
  const { tiktokVideos } = AppConfig;

  useEffect(() => {
    if (!document.getElementById("tiktok-embed-script")) {
      const script = document.createElement("script");
      script.id = "tiktok-embed-script";
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-white to-purple-50 py-24 sm:py-32 overflow-hidden" id="videos">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,125,164,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-primary ring-1 ring-pink-200/50 shadow-sm mb-6 backdrop-blur-sm">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            Vídeos no TikTok
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl font-display">
            Conteúdo <span className="text-primary">Exclusivo</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Acompanhe dicas diárias, receitas e transformações no meu TikTok
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:auto-rows-[minmax(550px,auto)]">
          {tiktokVideos.map((video, index) => {
            const isLarge = video.size === 'large';

            return (
              <div
                key={video.id}
                className={`group relative min-h-[550px] ${isLarge ? 'lg:row-span-2' : ''} ${
                  index === tiktokVideos.length - 1 ? 'lg:col-start-2' : ''
                }`}
              >
                {/* Background with gradient border effect */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/20 via-purple-200/20 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                {/* Card */}
                <div className="relative h-full min-h-full rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-[box-shadow] duration-500 overflow-visible border border-gray-100/50 backdrop-blur-sm">
                  <div className={`flex h-full min-h-full items-center justify-center ${isLarge ? 'p-6' : 'p-4'}`}>
                    {video.url ? (
                      <blockquote
                        className="tiktok-embed w-full"
                        cite={video.url}
                        data-video-id={video.url.split('/').pop()}
                        style={{ maxWidth: '100%', minWidth: '288px' }}
                      >
                        <section>
                          <a target="_blank" rel="noopener noreferrer" href={video.url} aria-label="Ver vídeo no TikTok - Abre em nova aba">
                            Ver vídeo
                          </a>
                        </section>
                      </blockquote>
                    ) : (
                      <div className={`flex flex-col items-center justify-center text-center ${isLarge ? 'p-8' : 'p-6'} bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl w-full`}>
                        <svg className={`${isLarge ? 'h-16 w-16' : 'h-12 w-12'} text-gray-300 mb-4`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                        <p className="text-sm text-gray-400 font-medium">
                          Adicione a URL do vídeo
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={AppConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 px-10 py-5 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-gray-700/50"
          >
            <svg className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            <span className="text-base">Ver Todos os Vídeos no TikTok</span>
            <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <a
            href={AppConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-10 py-5 text-white font-bold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-pink-400/50"
          >
            <svg className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 100-8 4 4 0 000 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/>
            </svg>
            <span className="text-base">Visite meu Instagram</span>
            <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
