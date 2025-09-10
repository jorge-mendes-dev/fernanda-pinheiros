import Image from 'next/image';
import { AcademicCapIcon } from '@heroicons/react/20/solid';
import { AppConfig } from 'config/AppConfig';

export default function Curriculum() {
  const { curriculum } = AppConfig;
  return (
    <>
      <div className="relative bg-white" id="curriculum">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                width={1000}
                height={1000}
                priority
                alt={curriculum.image.alt}
                src={curriculum.image.src}
                className="absolute inset-0 size-full rounded bg-gray-50 object-cover"
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-2 xl:w-1/2">
              <h2 className="mt-10 text-2xl font-bold tracking-tight text-primary">
                {curriculum.title}
              </h2>
              <p className="mt-4 text-base text-gray-700">{curriculum.description}</p>
              <div className="mt-10 max-w-xl text-base/7 text-gray-700 lg:max-w-none">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  {curriculum.education.map((edu, idx) => (
                    <li className="flex gap-x-3" key={idx}>
                      <AcademicCapIcon
                        aria-hidden="true"
                        className="mt-1 size-5 flex-none text-pink-600"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          {edu.institution}{' '}
                        </strong>
                        <br />
                        <i className="text-pink-600">
                          <b>{edu.course}</b> <br /> {edu.period}
                        </i>
                        <br />
                        {edu.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
