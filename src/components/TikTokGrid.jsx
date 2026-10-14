import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';
import covers from 'config/tiktokCovers.json';

// TikTok's profile embed is broken ("overload-protect triggered"), so this
// rebuilds the profile grid from the covers saved by scripts/tiktok-covers.mjs.
// A post added to AppConfig before that script runs shows a placeholder tile.
const postId = url => url?.match(/\/(?:video|photo)\/(\d+)/)?.[1];

export default function TikTokGrid({ count = 6 }) {
  // TikTok ids grow over time, so sorting by id puts the newest post first
  const posts = AppConfig.tiktokVideos
    .map(({ url }) => ({ url, id: postId(url) }))
    .filter(({ id }) => id)
    .sort((a, b) => (BigInt(b.id) > BigInt(a.id) ? 1 : -1))
    .slice(0, count);

  if (!posts.length) {
    return null;
  }

  return (
    <ul className="grid w-full grid-cols-3 gap-1 overflow-hidden rounded-xl">
      {posts.map(({ url, id }) => (
        <li key={id}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group focus-visible:outline-primary relative block aspect-[3/4] overflow-hidden bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2"
          >
            {covers[id] ? (
              <Image
                src={covers[id].src}
                alt={covers[id].alt}
                fill
                sizes="(min-width: 1024px) 160px, 30vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            ) : (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="size-8 text-white/80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                <span className="sr-only">
                  Post no TikTok de Fernanda Souza
                </span>
              </span>
            )}
            <span
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
              aria-hidden="true"
            />
            {url.includes('/photo/') ? (
              // Photo carousel
              <svg
                className="absolute bottom-2 left-2 size-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="7" y="3" width="14" height="14" rx="2" />
                <path d="M3 7v12a2 2 0 0 0 2 2h12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg
                className="absolute bottom-2 left-2 size-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l10.76-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14z" />
              </svg>
            )}
            <span className="sr-only"> - Abre no TikTok em nova aba</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
