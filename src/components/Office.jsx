'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon, PlayIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';

const FOCUS_RING = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

function CircleButton({ icon: Icon, size = 'size-14', iconSize = 'size-7', onClick, disabled, ariaLabel, positionClassName }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${positionClassName} flex ${size} items-center justify-center rounded-full bg-white/90 shadow-lg transition-opacity duration-300 disabled:pointer-events-none disabled:opacity-40 ${FOCUS_RING}`}
    >
      <Icon aria-hidden="true" className={`${iconSize} text-primary`} />
    </button>
  );
}

function Lightbox({ images, index, onClose, onNavigate }) {
  const image = images[index];

  return (
    <Dialog open onClose={onClose} aria-label={image.alt} className="relative z-100">
      <DialogPanel
        className="fixed inset-0 flex items-center justify-center bg-black/90 p-4"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            onNavigate(-1);
          } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            onNavigate(1);
          }
        }}
      >
        <Image
          alt={image.alt}
          src={image.src}
          width={image.width}
          height={image.height}
          sizes="90vw"
          className="max-h-[85vh] w-auto rounded-xl object-contain"
        />

        <CircleButton
          icon={XMarkIcon}
          size="size-12"
          iconSize="size-6"
          onClick={onClose}
          ariaLabel="Fechar"
          positionClassName="fixed top-4 right-4"
        />
        <CircleButton
          icon={ChevronLeftIcon}
          onClick={() => onNavigate(-1)}
          ariaLabel="Foto anterior"
          positionClassName="fixed top-1/2 left-2 -translate-y-1/2 sm:left-4"
        />
        <CircleButton
          icon={ChevronRightIcon}
          onClick={() => onNavigate(1)}
          ariaLabel="Próxima foto"
          positionClassName="fixed top-1/2 right-2 -translate-y-1/2 sm:right-4"
        />

        <span
          aria-live="polite"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-700 shadow-lg"
        >
          {index + 1} / {images.length}
        </span>
      </DialogPanel>
    </Dialog>
  );
}

function PhotoGrid({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const navigateLightbox = useCallback(
    (direction) => {
      setLightboxIndex((current) => {
        if (current === null) return current;
        const count = images.length;
        return (current + direction + count) % count;
      });
    },
    [images.length]
  );

  return (
    <>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:mt-20 sm:grid-cols-3 sm:gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setLightboxIndex(index)}
            aria-label={`Ampliar foto: ${image.alt}`}
            className={`group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 [-webkit-tap-highlight-color:transparent] hover:scale-[1.02] ${FOCUS_RING}`}
          >
            <Image
              alt={image.alt}
              src={image.src}
              width={384}
              height={384}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="aspect-square w-full rounded-xl object-cover ring-1 ring-gray-400/10 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox images={images} index={lightboxIndex} onClose={closeLightbox} onNavigate={navigateLightbox} />
      )}
    </>
  );
}

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
      if (!step) return;
      const visible = Math.max(Math.floor((container.clientWidth + gap) / step), 1);

      setCardStep(step);
      setMaxIndex(Math.max(videos.length - visible, 0));
    }

    measure();
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [videos.length]);

  const clampedIndex = Math.min(index, maxIndex);

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
          style={{ transform: `translateX(-${clampedIndex * cardStep}px)` }}
        >
          {videos.map((video, key) => (
            <VideoCard key={key} video={video} activeVideoRef={activeVideoRef} />
          ))}
        </div>
      </div>
      <CircleButton
        icon={ChevronLeftIcon}
        onClick={() => goTo(Math.max(clampedIndex - 1, 0))}
        disabled={clampedIndex === 0}
        ariaLabel="Vídeo anterior"
        positionClassName="absolute top-1/2 left-2 -translate-y-1/2"
      />
      <CircleButton
        icon={ChevronRightIcon}
        onClick={() => goTo(Math.min(clampedIndex + 1, maxIndex))}
        disabled={clampedIndex === maxIndex}
        ariaLabel="Próximo vídeo"
        positionClassName="absolute top-1/2 right-2 -translate-y-1/2"
      />
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

        <PhotoGrid images={office.images} />

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
