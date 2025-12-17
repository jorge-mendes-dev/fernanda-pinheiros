'use client';

import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from 'components/Loader';
import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

// Configure PDF.js worker - use CDN for Next.js compatibility
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};
const maxWidth = 800;

const NavbarZoom = ({
  handleFullscreen,
  isFullscreen,
  handleZoomIn,
  handleZoomReset,
  handleZoomOut
}) => {
  return (
    <>
      {/* Mobile: Horizontal layout at bottom */}
      <div className="fixed bottom-3 left-1/2 z-30 flex -translate-x-1/2 flex-row gap-1.5 rounded-full bg-white/95 px-3 py-2 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl dark:bg-rose-950/95 md:hidden">
        <button
          onClick={handleFullscreen}
          className="rounded-full p-1.5 transition-all active:scale-95 hover:bg-rose-100 dark:hover:bg-rose-900"
          title={isFullscreen ? 'Sair do modo tela cheia' : 'Tela cheia'}
          type="button"
        >
          {isFullscreen ? (
            <ArrowsPointingInIcon className="h-4.5 w-4.5 text-rose-600 dark:text-rose-400" />
          ) : (
            <ArrowsPointingOutIcon className="h-4.5 w-4.5 text-rose-600 dark:text-rose-400" />
          )}
        </button>
        <button
          onClick={handleZoomIn}
          className="rounded-full p-1.5 transition-all active:scale-95 hover:bg-rose-100 dark:hover:bg-rose-900"
          title="Aumentar zoom"
          type="button"
        >
          <MagnifyingGlassPlusIcon className="h-4.5 w-4.5 text-rose-600 dark:text-rose-400" />
        </button>
        <button
          onClick={handleZoomReset}
          className="rounded-full p-1.5 transition-all active:scale-95 hover:bg-rose-100 dark:hover:bg-rose-900"
          title="Resetar zoom"
          type="button"
        >
          <ArrowPathIcon className="h-4.5 w-4.5 text-rose-600 dark:text-rose-400" />
        </button>
        <button
          onClick={handleZoomOut}
          className="rounded-full p-1.5 transition-all active:scale-95 hover:bg-rose-100 dark:hover:bg-rose-900"
          title="Diminuir zoom"
          type="button"
        >
          <MagnifyingGlassMinusIcon className="h-4.5 w-4.5 text-rose-600 dark:text-rose-400" />
        </button>
      </div>

      {/* Desktop/Tablet: Vertical layout on right side */}
      <div className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-2 rounded-full bg-white/95 px-2.5 py-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl dark:bg-rose-950/95 md:flex">
        <button
          onClick={handleFullscreen}
          className="rounded-full p-2 transition-all hover:scale-110 hover:bg-rose-100 dark:hover:bg-rose-900"
          title={isFullscreen ? 'Sair do modo tela cheia' : 'Tela cheia'}
          type="button"
        >
          {isFullscreen ? (
            <ArrowsPointingInIcon className="h-5 w-5 text-rose-600 dark:text-rose-400" />
          ) : (
            <ArrowsPointingOutIcon className="h-5 w-5 text-rose-600 dark:text-rose-400" />
          )}
        </button>
        <button
          onClick={handleZoomIn}
          className="rounded-full p-2 transition-all hover:scale-110 hover:bg-rose-100 dark:hover:bg-rose-900"
          title="Aumentar zoom"
          type="button"
        >
          <MagnifyingGlassPlusIcon className="h-5 w-5 text-rose-600 dark:text-rose-400" />
        </button>
        <button
          onClick={handleZoomReset}
          className="rounded-full p-2 transition-all hover:scale-110 hover:bg-rose-100 dark:hover:bg-rose-900"
          title="Resetar zoom"
          type="button"
        >
          <ArrowPathIcon className="h-5 w-5 text-rose-600 dark:text-rose-400" />
        </button>
        <button
          onClick={handleZoomOut}
          className="rounded-full p-2 transition-all hover:scale-110 hover:bg-rose-100 dark:hover:bg-rose-900"
          title="Diminuir zoom"
          type="button"
        >
          <MagnifyingGlassMinusIcon className="h-5 w-5 text-rose-600 dark:text-rose-400" />
        </button>
      </div>
    </>
  );
};

const DocumentPreview = ({
  memoSelected,
  onDocumentLoadSuccess,
  options,
  currentPage,
  numPages,
  containerWidth,
  zoom,
}) => {
  if (!memoSelected?.pdfPath) {
    return (
      <div className="flex items-center justify-center p-8 text-red-600 dark:text-red-400">
        <p>Erro ao carregar PDF: URL não disponível</p>
      </div>
    );
  }

  return (
    <Document
      file={memoSelected.pdfPath}
      onLoadSuccess={onDocumentLoadSuccess}
      options={options}
      loading={
        <div className="flex min-h-[400px] items-center justify-center">
          <Loader />
        </div>
      }
      className="w-full"
    >
      <AnimatePresence mode="wait">
        {numPages && (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Page
              className="rounded-lg shadow-lg"
              pageNumber={currentPage}
              width={
                containerWidth
                  ? Math.min(containerWidth, maxWidth) * zoom
                  : maxWidth * zoom
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Document>
  );
};

const PageNavigation = ({ currentPage, numPages, onPrevious, onNext }) => {
  if (!numPages) return null;

  return (
    <div className="mb-4 flex w-full items-center justify-center sm:mb-6">
      {/* Professional Navigation Bar */}
      <div className="flex w-full max-w-md items-center justify-between gap-2 rounded-xl bg-white p-2.5 shadow-lg dark:bg-rose-950/90 sm:max-w-none sm:justify-center sm:gap-3 md:gap-4 md:px-6 md:py-4">
        {/* Previous Button */}
        <button
          onClick={onPrevious}
          disabled={currentPage <= 1}
          className={`flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 font-medium transition-all sm:gap-2 sm:px-4 md:px-5 md:py-2.5 ${
            currentPage <= 1
              ? 'cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-rose-900/30 dark:text-rose-700'
              : 'bg-rose-100 text-rose-700 hover:bg-rose-200 hover:shadow-md active:scale-95 dark:bg-rose-900 dark:text-rose-200 dark:hover:bg-rose-800'
          }`}
          title="Página anterior"
          type="button"
        >
          <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden text-sm sm:inline md:inline">Anterior</span>
        </button>

        {/* Page Counter with Input Style */}
        <div className="flex items-center gap-1.5 rounded-lg bg-linear-to-r from-rose-50 to-pink-50 px-2.5 py-1.5 dark:from-rose-700/50 dark:to-pink-800/50 sm:gap-2 sm:px-4 sm:py-2 md:px-6 md:py-2.5">
          <span className="text-xs font-bold text-rose-600 dark:text-rose-300 sm:text-sm sm:font-semibold sm:text-gray-700 sm:dark:text-rose-200">
            {currentPage}
          </span>
          <span className="text-xs font-medium text-gray-500 dark:text-rose-400 sm:text-sm sm:dark:text-rose-300">
            / {numPages}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentPage >= numPages}
          className={`flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 font-medium transition-all sm:gap-2 sm:px-4 md:px-5 md:py-2.5 ${
            currentPage >= numPages
              ? 'cursor-not-allowed bg-gray-100 text-gray-400 dark:bg-rose-900/30 dark:text-rose-700'
              : 'bg-rose-100 text-rose-700 hover:bg-rose-200 hover:shadow-md active:scale-95 dark:bg-rose-900 dark:text-rose-200 dark:hover:bg-rose-800'
          }`}
          title="Próxima página"
          type="button"
        >
          <span className="hidden text-sm sm:inline md:inline">Próxima</span>
          <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

const LayoutContainer = ({
  children,
  isFullscreen,
  setContainerRef,
}) => {
  return (
    <div
      className={`animate-fade-in relative mx-auto max-w-4xl rounded-2xl bg-rose-100 ${
        isFullscreen ? 'fixed inset-0 z-50 max-w-full overflow-y-auto rounded-none' : ''
      }`}
      ref={setContainerRef}
      data-testid="reader"
    >
      {children}
    </div>
  );
};

export default function Reader({ selected }) {
  const memoSelected = useMemo(() => selected, [selected]);
  const [numPages, setNumPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1.0);

  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess(pdf) {
    setNumPages(pdf.numPages);
    setCurrentPage(1);
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
    () => setZoom((z) => Math.min(z + 0.1, 2)),
    []
  );
  const handleZoomOut = useCallback(
    () => setZoom((z) => Math.max(z - 0.1, 0.5)),
    []
  );
  const handleZoomReset = useCallback(() => setZoom(1.0), []);

  const handlePreviousPage = useCallback(() => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setCurrentPage((page) => Math.min(page + 1, numPages || 1));
  }, [numPages]);

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
      />

      <div className="flex min-h-screen flex-col items-center px-3 py-6 pb-28 sm:px-4 sm:py-8 md:px-8 md:pb-12">
        <PageNavigation
          currentPage={currentPage}
          numPages={numPages}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />

        <DocumentPreview
          memoSelected={memoSelected}
          onDocumentLoadSuccess={onDocumentLoadSuccess}
          options={options}
          currentPage={currentPage}
          numPages={numPages}
          containerWidth={containerWidth}
          zoom={zoom}
        />
      </div>
    </LayoutContainer>
  );
}
