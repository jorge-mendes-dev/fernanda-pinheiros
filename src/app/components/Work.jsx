import Image from 'next/image'
import { BriefcaseIcon } from '@heroicons/react/20/solid'

export default function Work() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
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
              <rect fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" width="100%" height="100%" strokeWidth={0} />
            </svg>
            <figure className="border-l border-pink-600 pl-8">
              <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900">
                <p>
                  “A saúde não está na magreza nem em dietas malucas. Está na boa nutrição e na rica alimentação… Saúde é sinônimo de felicidade, e não de sofrimento.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  src="/assets/images/header.jpg"
                  className="mt-1 size-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <div className="font-semibold text-gray-900">Fernanda Souza</div>
                  <div className="text-gray-600">Nutricionista Clínica</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base/7 text-gray-700 lg:col-span-7">
          <h2 className="mt-10 text-2xl font-bold tracking-tight text-pink-600">EXPERIÊNCIA PROFISSIONAL</h2>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <BriefcaseIcon aria-hidden="true" className="mt-1 size-5 flex-none text-pink-600" />
              <span>
                <strong className="font-semibold text-gray-900">HUMANA MAGNA - UNIDADE IBIRAPUERA – ESTÁGIO EM NUTRIÇÃO CLÍNICA</strong> <br />
                <i className='text-pink-600'>Fevereiro 2025 – atualmente | São Paulo</i> <br/>
                <ul>
                  <li>
                    •	<b>Acompanhamento da Terapia Nutricional:</b> Monitorar a evolução nutricional dos pacientes, ajustando as dietas conforme necessário.
                  </li>
                  <li>
                    •	<b>Educação Nutricional:</b> Oferecer orientações nutricionais verbais e escritas para pacientes e familiares.
                  </li>
                  <li>
                    •	<b>Acompanhamento de Pacientes:</b> Realizar visitas regulares aos pacientes internados para avaliar sua evolução clínica e nutricional.
                  </li>
                </ul>
              </span>
            </li>
            <li className="flex gap-x-3">
              <BriefcaseIcon aria-hidden="true" className="mt-1 size-5 flex-none text-pink-600" />
              <span>
                <strong className="font-semibold text-gray-900">SODEXO UNIDADE TITAN – ESTÁGIO EM UNIDADE DE ALIMENTAÇÃO E NUTRIÇÃO</strong> <br />
                <i className='text-pink-600'>Setembro 2024 – outubro 2024 | São Paulo</i> <br/>
                <ul>
                  <li>
                  •	<b>Acompanhamento Nutricional:</b> Avaliar o estado nutricional dos pacientes, coletar dados sobre hábitos alimentares e histórico médico, e fornecer orientações básicas sobre alimentação saudável.
                  </li>
                  <li>
                  •	<b>Planejamento de Cardápios:</b> Auxiliar na elaboração de cardápios gerais e especiais, considerando restrições alimentares e necessidades nutricionais dos pacientes.
                  </li>
                  <li>
                  •	<b>Supervisão da Produção Alimentar:</b> Garantir que as boas práticas de manipulação de alimentos sejam seguidas, desde o armazenamento até o preparo das refeições.
                  </li>
                  <li>
                  •	<b>Controle de Qualidade:</b> Monitorar a qualidade dos alimentos servidos, verificando a procedência dos ingredientes e a higienização correta do local.
                  </li>
                  <li>
                  •	<b>Gestão de Estoque:</b> Organizar o armazenamento adequado dos alimentos e monitorar o uso eficiente dos ingredientes.
                  </li>
                </ul>
              </span>
            </li>
            <li className="flex gap-x-3">
              <BriefcaseIcon aria-hidden="true" className="mt-1 size-5 flex-none text-pink-600" />
              <span>
                <strong className="font-semibold text-gray-900">CIECS - CLÍNICAS INTEGRADAS DA ESCOLA DE CIÊNCIAS DA SAÚDE – ESTÁGIO EM NUTRIÇÃO COLETIVA</strong> <br />
                <i className='text-pink-600'>Outubro 2024 – dezembro 2024 | São Paulo</i> <br/>
                <ul>
                  <li>
                    •	<b>Avaliação Nutricional:</b> Realizar avaliações antropométricas (peso, altura, circunferência da cintura) e classificar o estado nutricional dos usuários.
                  </li>
                  <li>
                    •	<b>Orientação Nutricional:</b> Fornecer orientações nutricionais individuais e em grupo para pacientes e cuidadores.
                  </li>
                  <li>
                    •	<b>Educação Nutricional:</b> Planejar e ministrar palestras educativas sobre alimentação saudável e prevenção de doenças para diferentes grupos.
                  </li>
                  <li>
                    •	<b>Desenvolvimento de Materiais Educativos:</b> Criar materiais de educação nutricional, como folders e banners, para salas de espera.
                  </li>
                </ul>
              </span>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
