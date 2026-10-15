// TikTok's official embed player (https://developers.tiktok.com/doc/embed-player).
// Works for videos and photo posts. The older embed.js blockquote embeds are
// rejected by TikTok with "overload-protect triggered", so don't go back to them.
export default function TikTokPlayer({ url, title = 'Vídeo do TikTok', className = '' }) {
  const id = url?.match(/\/(?:video|photo)\/(\d+)/)?.[1];

  return (
    <div className={`w-full max-w-[325px] ${className}`}>
      {/* Short links (vm.tiktok.com) have no id: show only the link */}
      {id && (
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-xl bg-black">
          <iframe
            src={`https://www.tiktok.com/player/v1/${id}?description=1&music_info=1&rel=0`}
            title={title}
            loading="lazy"
            allow="fullscreen; encrypted-media; picture-in-picture"
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver no TikTok: ${title} - Abre em nova aba`}
        className="flex min-h-11 items-center justify-center text-sm font-medium text-gray-500 hover:text-primary"
      >
        Ver no TikTok
      </a>
    </div>
  );
}
