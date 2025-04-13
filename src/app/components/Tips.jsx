'use client'

import Image from 'next/image'

export default function Tips() {
    return (
      <div className="relative bg-pink-300" id="tips">
        <div className="relative h-80 overflow-hidden bg-pink-300 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <Image
            alt=""
            src="/assets/images/square.png"
            className="h-full w-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h2 className="text-base/7 font-semibold text-pink-800">Nutrição por amor</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Dicas para tornar sua vida melhor
            </p>
            <p className="mt-6 text-base/7 text-pink-900">
                Usando minhas redes sociais para promover a conscientização e a educação sobre a importância da nutrição no manejo de dislipidemia, sarcopenia e depressão, com foco em intervenções Nutricionais e hábitos alimentares.
            </p>
            <div className="mt-8">
              <a
                href="https://www.instagram.com/nutri_fernandasouza/profilecard/"
                className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Visite meu instagram para saber mais
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  