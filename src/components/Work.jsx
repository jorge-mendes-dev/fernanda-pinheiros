import Image from 'next/image';
import { BriefcaseIcon, CheckCircleIcon } from '@heroicons/react/20/solid';
import { AppConfig } from 'config/AppConfig';

export default function Work() {
  const { work } = AppConfig;
  return (
    <div
      className="relative isolate overflow-hidden bg-white py-24 sm:py-32"
      id="work"
    >
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              aria-hidden="true"
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
            <figure className="border-l border-pink-600 pl-8">
              <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                <p>{work.quote}</p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <Image
                  width={100}
                  height={100}
                  alt={work.image.alt}
                  src={work.image.src}
                  className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <div className="font-semibold text-gray-900">
                    {work.author}
                  </div>
                  <div className="text-gray-600">{work.description}</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary lg:mt-0">
              {work.title}
            </h2>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              {work.experiences.map((exp, idx) => (
                <li className="flex gap-x-3" key={idx}>
                  <BriefcaseIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-pink-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      {exp.company}
                    </strong>
                    <br />
                    <i className="text-pink-600">{exp.period}</i>
                    <br />
                    <ul
                      role="list"
                      className="mt-2 max-w-xl space-y-8 text-gray-600"
                    >
                      {exp.requires.map((ob, i) => (
                        <li className="flex gap-x-3" key={i}>
                          <CheckCircleIcon
                            aria-hidden="true"
                            className="mt-1 size-5 flex-none text-pink-600"
                          />
                          <span>
                            <strong className="mr-1 font-semibold text-gray-900">
                              {ob.title}
                            </strong>
                            {ob.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
