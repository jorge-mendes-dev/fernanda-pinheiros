import Image from 'next/image';

export default function About() {
  return (
    <div className="overflow-hidden bg-white py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-pink-600 sm:text-5xl">
              Sobre Mim
            </h2>
            <p className="mt-6 text-xl/8 text-gray-600">
              Olá! Sou Fernanda, nutricionista dedicada ao bem-estar e à
              qualidade de vida dos meus pacientes.
            </p>
            <p className="mt-3 text-base/7 text-gray-600">
              Durante minha formação, participei intensamente de projetos,
              feiras e pesquisas, buscando aprofundar-me em diversas áreas da
              nutrição.
            </p>
            <p className="mt-3 text-base/7 text-gray-600">
              Atualmente, atuo na área clínica, com foco em nutrição
              materno-infantil, onde me realizo ao apoiar a saúde de mães e
              crianças.
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt=""
                src="/assets/images/abt02.png"
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                width={1000}
                height={1000}
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  alt=""
                  src="/assets/images/abt04.png"
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src="/assets/images/abt01.png"
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  alt=""
                  src="/assets/images/abt03.png"
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
