import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';

export default function About() {
  const { about } = AppConfig;

  return (
    <div className="overflow-hidden bg-white py-20 sm:py-24" id="about">
      {/* Text beside a staggered 2x2 photo mosaic: the old template collage used
          fixed widths that overflowed and cut a photo at the screen edge */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary mb-6">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Conheça minha história
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-tight font-display font-normal">
            {about.title}
          </h2>
          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
            {about.description}
          </p>
          <div className="mt-6 space-y-4">
            {about.paragraph.map((text, index) => (
              <p key={index} className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[[0, 3], [1, 2]].map((column, c) => (
            <div key={c} className={`grid content-start gap-3 sm:gap-4 ${c === 1 ? 'mt-10 sm:mt-16' : ''}`}>
              {column.map((i) => (
                <div key={about.images[i].src} className="group relative overflow-hidden rounded-2xl bg-gray-50 shadow-md">
                  <Image
                    alt={about.images[i].alt}
                    src={about.images[i].src}
                    width={1000}
                    height={1000}
                    sizes="(min-width: 1024px) 300px, 50vw"
                    className="aspect-4/5 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
