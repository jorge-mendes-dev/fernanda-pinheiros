'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon, MapPinIcon, PlayIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';

const FOCUS_RING = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';
// Swipeable rows: native scrolling with snap points, scrollbar hidden
const NO_SCROLLBAR = '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

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
      {/* Phones: one swipeable row with the next photo peeking in. From sm: a 4-column grid. */}
      <div className={`-mx-6 mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 py-3 sm:mx-auto sm:py-0 sm:mt-20 sm:grid sm:max-w-2xl sm:grid-cols-4 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:mx-0 lg:max-w-none ${NO_SCROLLBAR}`}>
        {images.map((image, index) => (
          <button
            type="button"
            key={index}
            onClick={() => setLightboxIndex(index)}
            aria-label={`Ampliar foto: ${image.alt}`}
            className={`group relative w-[70%] flex-none snap-start overflow-hidden rounded-xl shadow-lg transition-transform duration-300 [-webkit-tap-highlight-color:transparent] hover:scale-[1.02] sm:w-auto ${FOCUS_RING}`}
          >
            <Image
              alt={image.alt}
              src={image.src}
              width={384}
              height={384}
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 33vw, 25vw"
              className="aspect-4/5 w-full rounded-xl object-cover ring-1 ring-gray-400/10 transition-transform duration-300 group-hover:scale-105 sm:aspect-square"
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

function VideoCard({ video, index, activeVideoRef, load }) {
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
      data-index={index}
      className="group relative aspect-9/16 w-[48%] flex-none snap-start overflow-hidden rounded-xl bg-gray-900 shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:w-64"
    >
      <video
        ref={videoRef}
        src={load ? video.src : undefined}
        muted
        loop
        playsInline
        preload={load ? 'metadata' : 'none'}
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
  const scrollerRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  // A video gets a src only once the carousel is near the screen and its card
  // is within one screen-width of the visible part of the row: all five used
  // to start downloading on page load (about 9.7 MB). Loaded cards stay loaded.
  const [isNear, setIsNear] = useState(false);
  const [inReach, setInReach] = useState(() => new Set());

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    if (typeof IntersectionObserver === 'undefined') {
      const frame = requestAnimationFrame(() => {
        setIsNear(true);
        setInReach(new Set(videos.map((_, i) => i)));
      });
      return () => cancelAnimationFrame(frame);
    }
    const near = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNear(true);
          near.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    near.observe(scroller);
    // Root is the row itself, so it tracks horizontal position: cards within
    // one row-width to the right of what's visible count as in reach
    const reach = new IntersectionObserver(
      (entries) => {
        const reached = entries.filter((entry) => entry.isIntersecting);
        if (!reached.length) return;
        // A loaded card never unloads, so stop watching it
        reached.forEach((entry) => reach.unobserve(entry.target));
        setInReach((current) => new Set([...current, ...reached.map((entry) => Number(entry.target.dataset.index))]));
      },
      { root: scroller, rootMargin: '0px 100% 0px 0px' }
    );
    [...scroller.children].forEach((card) => reach.observe(card));
    return () => {
      near.disconnect();
      reach.disconnect();
    };
  }, [videos]);

  const updateEnds = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    setAtStart(scroller.scrollLeft <= 4);
    setAtEnd(scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4);
  }, []);

  // Arrow states on mount and whenever the row resizes (rotation, window size)
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const frame = requestAnimationFrame(updateEnds);
    const observer = new ResizeObserver(updateEnds);
    observer.observe(scroller);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [updateEnds]);

  // A playing video that is swiped out of view pauses
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target.querySelector('video');
          if (!entry.isIntersecting && video && !video.paused) video.pause();
        }
      },
      { root: scroller, threshold: 0.4 }
    );
    [...scroller.children].forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [videos]);

  // Arrows (sm and up) scroll the same row by one card
  const scrollByCard = (direction) => {
    const scroller = scrollerRef.current;
    const card = scroller?.children[0];
    if (!scroller || !card) return;
    activeVideoRef.current?.pause();
    const gap = parseFloat(getComputedStyle(scroller).columnGap) || 0;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    scroller.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div>
      {/* Arrows live in a header row, never on top of the videos. Phones swipe. */}
      <div className="mb-3 flex items-center justify-between sm:mb-4">
        <h3 className="text-base font-semibold text-gray-900 sm:text-lg">Vídeos do consultório</h3>
        <div className="hidden gap-2 sm:flex">
          <CircleButton
            icon={ChevronLeftIcon}
            size="size-11"
            iconSize="size-6"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            ariaLabel="Vídeo anterior"
            positionClassName="ring-1 ring-gray-900/5"
          />
          <CircleButton
            icon={ChevronRightIcon}
            size="size-11"
            iconSize="size-6"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            ariaLabel="Próximo vídeo"
            positionClassName="ring-1 ring-gray-900/5"
          />
        </div>
      </div>
      <div
        ref={scrollerRef}
        onScroll={updateEnds}
        className={`-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-6 px-6 py-3 sm:-mx-3 sm:gap-6 sm:scroll-px-3 sm:px-3 ${NO_SCROLLBAR}`}
      >
        {videos.map((video, key) => (
          <VideoCard key={key} index={key} video={video} activeVideoRef={activeVideoRef} load={isNear && inReach.has(key)} />
        ))}
      </div>
    </div>
  );
}

export default function Office() {
  const { office } = AppConfig;

  return (
    <div id="office" className="overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary/10 to-pink-200/20 px-4 py-2 text-sm font-bold text-primary ring-1 ring-primary/20 mb-4">
            <MapPinIcon aria-hidden="true" className="h-4 w-4" />
            {office.highlight}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight font-display font-normal">
            {office.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            {office.description}
          </p>
        </div>

        <PhotoGrid images={office.images} />

        <div className="mt-8 sm:mt-16">
          <VideoCarousel videos={office.videos} />
        </div>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-3">
              <MapPinIcon aria-hidden="true" className="mt-1 size-7 flex-none text-primary" />
              <p className="text-lg text-gray-800 leading-relaxed font-medium sm:text-xl">{office.address}</p>
            </div>
            <a
              href={office.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-primary/30 px-5 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary/5 sm:w-fit ${FOCUS_RING}`}
            >
              <MapPinIcon aria-hidden="true" className="size-5" />
              Ver rota no Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-gray-400/10">
            <iframe
              title={office.address}
              src={office.mapEmbedUrl}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-56 w-full sm:h-72"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
