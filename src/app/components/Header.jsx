'use client'

export default function Header() {
    return (
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-48 lg:pt-40 xl:col-span-6">
            <div className="mx-auto max-w-lg lg:mx-0">
              <img
                alt="Logo"
                src="/assets/images/logo.svg"
                className="h-11"
              />
               <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full px-3 py-1 text-sm/6 font-semibold text-green-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Nutricionista
                </div>
              </div>
              <h1 className="mt-24 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:mt-10 sm:text-7xl">
                Fernanda Pinheiros
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Olá! Sou Fernanda, nutricionista dedicada ao bem-estar e à qualidade de vida dos meus pacientes.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://www.linkedin.com/in/nutri-fernanda-pinheiros/"
                  target="_blank"
                  className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
            <img
              alt=""
              src="/assets/images/profile.jpeg"
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </div>
    )
  }
  