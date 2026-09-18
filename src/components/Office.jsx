'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon, PlayIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';

function VideoCard({ video, activeVideoRef }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      if (activeVideoRef.current && activeVideoRef.current !== el) {
        activeVideoRef.current.pause();
      }
      activeVideoRef.current = el;
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  };

  return (
    <button
      type="button"
      onClick={togglePlay}
      aria-label={isPlaying ? `Pausar ${video.alt}` : `Reproduzir ${video.alt}`}
      className="group relative aspect-9/16 w-56 flex-none overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:w-64"
    >
      <video
        ref={videoRef}
        src={video.src}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/30">
          <span className="flex size-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <PlayIcon aria-hidden="true" className="size-7 text-primary" />
          </span>
        </span>
      )}
    </button>
  );
}

function VideoCarousel({ videos }) {
  const activeVideoRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container || track.children.length < 1) return;

      const first = track.children[0].getBoundingClientRect();
      let gap = 0;
      if (track.children.length > 1) {
        const second = track.children[1].getBoundingClientRect();
        gap = second.left - first.right;
      }
      const step = first.width + gap;
      const visible = Math.max(Math.floor((container.clientWidth + gap) / step), 1);

      setCardStep(step);
      setMaxIndex(Math.max(videos.length - visible, 0));
    }

    measure();
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videos.length]);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const goTo = (next) => {
    activeVideoRef.current?.pause();
    setIndex(next);
  };

  return (
    <div className="relative">
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-4 transition-transform duration-300 ease-out sm:gap-6"
          style={{ transform: `translateX(-${index * cardStep}px)` }}
        >
          {videos.map((video, key) => (
            <VideoCard key={key} video={video} activeVideoRef={activeVideoRef} />
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => goTo(Math.max(index - 1, 0))}
        disabled={index === 0}
        aria-label="Vídeo anterior"
        className="absolute top-1/2 left-2 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-opacity duration-300 disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeftIcon aria-hidden="true" className="size-7 text-primary" />
      </button>
      <button
        type="button"
        onClick={() => goTo(Math.min(index + 1, maxIndex))}
        disabled={index === maxIndex}
        aria-label="Próximo vídeo"
        className="absolute top-1/2 right-2 flex size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-opacity duration-300 disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronRightIcon aria-hidden="true" className="size-7 text-primary" />
      </button>
    </div>
  );
}

export default function Office() {
  const { office } = AppConfig;
  return (
    <div id="office" className="overflow-hidden bg-white py-20 sm:py-24 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary/10 to-pink-200/20 px-4 py-2 text-sm font-bold text-primary ring-1 ring-primary/20 mb-4">
            <MapPinIcon aria-hidden="true" className="h-4 w-4" />
            {office.highlight}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight font-display">
            {office.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            {office.description}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-3 sm:gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {office.images.map((image, key) => (
            <div key={key} className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02]">
              <Image
                alt={image.alt}
                src={image.src}
                width={384}
                height={384}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="aspect-square w-full rounded-xl object-cover ring-1 ring-gray-400/10 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <VideoCarousel videos={office.videos} />
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-3">
              <MapPinIcon aria-hidden="true" className="mt-1 size-7 flex-none text-primary" />
              <p className="text-xl text-gray-800 leading-relaxed font-medium">{office.address}</p>
            </div>
            <a
              href={office.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80"
            >
              Ver rota no Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-400/10">
            <iframe
              title={office.address}
              src={office.mapEmbedUrl}
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
