import Image from 'next/image'
import { AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/20/solid'

export default function Curriculum() {
  const skills = [
    'Nutrição Clínica',
    'Nutrição Materno-Infantil',
    'Nutrição esportiva',
    'Aconselhamento nutricional',
    'Bom relacionamento interpessoal com pacientes e equipes',
    'Comunicação clara e eficaz com os pacientes',
    'Pontualidade na realização de consultas',
    'Liderança de equipe alimentícia',
    'Empatia diante das queixas de pacientes',
    'Conhecimentos em Nutrição Clínica e Hospitalar',
    'Capacidade de aprendizado'
  ]

  return (
    <div className="relative bg-white" id="curriculum">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              width={1000}
              height={1000}
              priority
              alt=""
              src="/assets/images/curriculum.jpg"
              className="absolute inset-0 size-full bg-gray-50 object-cover rounded"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-2 xl:w-1/2">
            <p className="text-base/7 font-semibold text-pink-600">FORMAÇÃO ACADÊMICA | EXPERIÊNCIA PROFISSIONAL</p>
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">FORMAÇÃO ACADÊMICA</h2>
        
            <div className="mt-10 max-w-xl text-base/7 text-gray-700 lg:max-w-none">
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <AcademicCapIcon aria-hidden="true" className="mt-1 size-5 flex-none text-pink-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">CENTRO UNIVERSITÁRIO FMU | FIAM-FAAM </strong> <br />
                    <i className='text-pink-600'><b>Nutrição</b>  | Janeiro 2020 – junho 2024</i> <br/>
                    O curso forma profissionais capacitados para promoverem a saúde através da alimentação. Durante a graduação, aprenderão a consultar, diagnosticar, tratar e acompanhar o estado nutricional dos pacientes. 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <AcademicCapIcon aria-hidden="true" className="mt-1 size-5 flex-none text-pink-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">FAMEF - FACULDADE METROPOLITANA DE FRANCA </strong> <br />
                    <i className='text-pink-600'><b>Nutrição Clínica</b> | Dezembro 2024 – atualmente.</i> <br/>
                    Este curso aborda diversas patologias nutricionais, incluindo dietoterapia para doenças digestivas e terapias nutricionais. Os estudos também cobriram nutrientes calóricos, balanço energético e nutrição em diferentes estágios da vida. O curso ofereceu uma visão abrangente sobre nutrição.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <AcademicCapIcon aria-hidden="true" className="mt-1 size-5 flex-none text-pink-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">NUTRIÇÃO APLICADA </strong> <br />
                    <i className='text-pink-600'><b>Da fertilidade a introdução alimentar</b> | Março 2025 – atualmente.</i> <br/>
                    Quando se trata da paciente gestante, é necessário acompanhar as alterações e necessidades fisiológicas e nutricionais a cada mês. Portanto, os cálculos nutricionais, a correção de sintomas como azia e má digestão, assim como a presença do diabetes gestacional devem ser tratados com cautela e precisão.
                  </span>
                </li>
              </ul>
              <h2 className="mt-10 text-2xl font-bold tracking-tight text-gray-900">EXPERIÊNCIA PROFISSIONAL</h2>
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
    </div>
  )
}
