'use client';

import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Skeleton from './Skeleton';
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  ArrowPathIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

import type { PDFDocumentProxy } from 'pdfjs-dist';;

// Configure PDF.js worker - use CDN for Next.js compatibility
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};
const maxWidth = 800;

interface NavbarZoomProps {
  handleFullscreen: () => void;
  isFullscreen: boolean;
  handleZoomIn: () => void;
  handleZoomReset: () => void;
  handleZoomOut: () => void;
}

const NavbarZoom = ({
  handleFullscreen,
  isFullscreen,
  handleZoomIn,
  handleZoomReset,
  handleZoomOut
}: NavbarZoomProps) => {
  return (
    <>
      {/* Mobile: Horizontal layout at bottom */}
      <div className="fixed bottom-4 left-1/2 z-30 flex -translate-x-1/2 flex-row gap-2 rounded-full bg-white/90 px-3 py-2 opacity-90 shadow-lg backdrop-blur-md transition-all duration-300 hover:opacity-100 dark:bg-zinc-800/90 md:hidden">
        <button
          onClick={handleFullscreen}
          className="rounded-full p-2 transition-colors hover:bg-blue-200 hover:shadow dark:hover:bg-blue-700 dark:hover:text-blue-100"
          title={isFullscreen ? 'Sair do modo tela cheia' : 'Tela cheia'}
          type="button"
        >
          {isFullscreen ? (
            <ArrowsPointingInIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          ) : (
            <ArrowsPointingOutIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          )}
        </button>
        <button
          onClick={handleZoomIn}
          className="rounded-full p-2 transition-colors hover:bg-green-200 hover:shadow dark:hover:bg-green-700 dark:hover:text-green-100"
          title="Aumentar zoom"
          type="button"
        >
          <MagnifyingGlassPlusIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
        </button>
        <button
          onClick={handleZoomReset}
          className="rounded-full p-2 transition-colors hover:bg-amber-200 hover:shadow dark:hover:bg-amber-700 dark:hover:text-amber-100"
          title="Resetar zoom"
          type="button"
        >
          <ArrowPathIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </button>
        <button
          onClick={handleZoomOut}
          className="rounded-full p-2 transition-colors hover:bg-red-200 hover:shadow dark:hover:bg-red-700 dark:hover:text-red-100"
          title="Diminuir zoom"
          type="button"
        >
          <MagnifyingGlassMinusIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
        </button>
      </div>

      {/* Desktop/Tablet: Vertical layout on right side */}
      <div className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 rounded-full bg-white/90 px-2 py-3 opacity-90 shadow backdrop-blur-md transition-all duration-300 hover:opacity-100 dark:bg-zinc-800/90 md:flex">
        {onChatClick && (
          <button
            onClick={onChatClick}
            className="rounded-full p-2 transition-colors hover:bg-indigo-200 hover:shadow dark:hover:bg-indigo-700 dark:hover:text-indigo-100"
            title="Conversar com IA sobre este PDF"
            type="button"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </button>
        )}
        <button
          onClick={handleFullscreen}
          className="rounded-full p-2 transition-colors hover:bg-blue-200 hover:shadow dark:hover:bg-blue-700 dark:hover:text-blue-100"
          title={isFullscreen ? 'Sair do modo tela cheia' : 'Tela cheia'}
          type="button"
        >
          {isFullscreen ? (
            <ArrowsPointingInIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          ) : (
            <ArrowsPointingOutIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          )}
        </button>
        <button
          onClick={handleZoomIn}
          className="rounded-full p-2 transition-colors hover:bg-green-200 hover:shadow dark:hover:bg-green-700 dark:hover:text-green-100"
          title="Aumentar zoom"
          type="button"
        >
          <MagnifyingGlassPlusIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
        </button>

        <button
          onClick={handleZoomReset}
          className="rounded-full p-2 transition-colors hover:bg-amber-200 hover:shadow dark:hover:bg-amber-700 dark:hover:text-amber-100"
          title="Resetar zoom"
          type="button"
        >
          <ArrowPathIcon className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </button>
        <button
          onClick={handleZoomOut}
          className="rounded-full p-2 transition-colors hover:bg-red-200 hover:shadow dark:hover:bg-red-700 dark:hover:text-red-100"
          title="Diminuir zoom"
          type="button"
        >
          <MagnifyingGlassMinusIcon className="h-5 w-5 text-red-600 dark:text-red-400" />
        </button>
      </div>
    </>
  );
};

interface DocumentPreviewProps {
  memoSelected: Chapter;
  onDocumentLoadSuccess: (pdf: PDFDocumentProxy) => void;
  options: object;
  numPages: number | undefined;
  containerWidth?: number;
  zoom: number;
}

const DocumentPreview = ({
  memoSelected,
  onDocumentLoadSuccess,
  options,
  numPages,
  containerWidth,
  zoom,
}: DocumentPreviewProps) => {
  const { signedUrl, loading, error } = useSignedPdfUrl(memoSelected.pdfPath);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Skeleton />
      </div>
    );
  }

  if (error || !signedUrl) {
    return (
      <div className="flex items-center justify-center p-8 text-red-600 dark:text-red-400">
        <p>Erro ao carregar PDF: {error || 'URL não disponível'}</p>
      </div>
    );
  }

  return (
    <Document
      file={signedUrl}
      onLoadSuccess={onDocumentLoadSuccess}
      options={options}
      loading={
        <div className="animate pulse">
          <Skeleton />
        </div>
      }
      className="bg-gray-50 shadow-sm"
    >
      {typeof numPages === 'number' &&
        numPages > 0 &&
        Array.from({ length: numPages }, (_el, index) => (
          <Page
            key={`page_${index + 1}`}
            className="mb-4 bg-gray-50 last:mb-0 dark:bg-zinc-900"
            pageNumber={index + 1}
            width={
              containerWidth
                ? Math.min(containerWidth, maxWidth) * zoom
                : maxWidth * zoom
            }
          />
        ))}
    </Document>
  );
};

interface LayoutContainerProps {
  children: React.ReactNode;
  isFullscreen: boolean;
  setContainerRef: (ref: HTMLElement | null) => void;
}

const LayoutContainer = ({
  children,
  isFullscreen,
  setContainerRef,
}: LayoutContainerProps) => {
  return (
    <div
      className={
        `animate-fade-in relative mx-auto max-w-3xl rounded-lg border-zinc-900 bg-gray-50 shadow dark:bg-black` +
        (isFullscreen ? ' overflow-y-auto' : '')
      }
      ref={setContainerRef}
      data-testid="reader"
      style={{
        minHeight: '100vh',
        height: isFullscreen ? '100vh' : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default function Reader({ selected }: { selected: Chapter }) {
  const router = useRouter();
  const memoSelected = useMemo(() => selected, [selected]);
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1.0);

  const onResize = useCallback<ResizeObserverCallback>(entries => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess(pdf: PDFDocumentProxy): void {
    setNumPages(pdf.numPages);
  }

  const handleFullscreen = () => {
    if (containerRef && !isFullscreen) {
      containerRef.requestFullscreen?.();
    } else if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
  };

  useLayoutEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const handleZoomIn = useCallback(
    () => setZoom(z => Math.min(z + 0.1, 2)),
    []
  );
  const handleZoomOut = useCallback(
    () => setZoom(z => Math.max(z - 0.1, 0.5)),
    []
  );
  const handleZoomReset = useCallback(() => setZoom(1.0), []);

  const handleChatClick = useCallback(() => {
    if (memoSelected.slug) {
      router.push(`/chat?slug=${memoSelected.slug}`);
    }
  }, [memoSelected.slug, router]);

  return (
    <LayoutContainer
      isFullscreen={isFullscreen}
      setContainerRef={setContainerRef}
    >
      <NavbarZoom
        handleFullscreen={handleFullscreen}
        isFullscreen={isFullscreen}
        handleZoomIn={handleZoomIn}
        handleZoomReset={handleZoomReset}
        handleZoomOut={handleZoomOut}
        onChatClick={handleChatClick}
      />

      <div className="flex flex-col items-center pb-20 md:pb-0">
        <DocumentPreview
          memoSelected={memoSelected}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          options={options}
          numPages={numPages}
          containerWidth={containerWidth}
          zoom={zoom}
        />
      </div>
    </LayoutContainer>
  );
}
