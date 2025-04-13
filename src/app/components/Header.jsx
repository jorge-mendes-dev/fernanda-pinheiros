'use client'

import Image from 'next/image'

export default function Header() {
    return (
      <div className="relative isolate overflow-hidden bg-white">
        <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
      </svg>
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0">
              {/* <Image
                alt="Logo"
                src="/assets/images/logo.svg"
                className="h-11"
                width={100}
                height={100}
              /> */}
               <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm/6 font-semibold text-pink-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  NUTRICIONISTA CLÍNICO
                </div>
              </div>
              <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl">
                Fernanda Souza
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Olá! Sou Fernanda, nutricionista dedicada ao bem-estar e à qualidade de vida dos meus pacientes.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://www.linkedin.com/in/nutri-fernanda-pinheiros/"
                  target="_blank"
                  className="rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Linkedin
                </a>
                <a href="#about" className="text-sm/6 font-semibold text-gray-900">
                  Sobre mim <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
         
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              alt=""
              src="/assets/images/header.jpg"
              className="aspect-[3/2] w-full rounded bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    )
  }
  