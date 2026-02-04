'use client';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center" role="status" aria-label="Carregando conteúdo">
    <div className="h-20 w-20 animate-spin rounded-full border-b-2 border-t-2 border-pink-600"></div>
    <span className="sr-only">Carregando...</span>
  </div>
);

export default Loader;
