import Image from 'next/image';
import { AcademicCapIcon } from '@heroicons/react/20/solid';

export default function Curriculum() {
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
                alt=""
                src="/assets/images/curriculum.jpg"
                className="absolute inset-0 size-full rounded bg-gray-50 object-cover"
              />
            </div>
          </div>
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-2 xl:w-1/2">
              <h2 className="mt-10 text-2xl font-bold tracking-tight text-pink-600">
                FORMAÇÃO ACADÊMICA
              </h2>
              <div className="mt-10 max-w-xl text-base/7 text-gray-700 lg:max-w-none">
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <AcademicCapIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-pink-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        CENTRO UNIVERSITÁRIO FMU | FIAM-FAAM{' '}
                      </strong>{' '}
                      <br />
                      <i className="text-pink-600">
                        <b>Nutrição</b> | Janeiro 2020 – junho 2024
                      </i>{' '}
                      <br />O curso forma profissionais capacitados para
                      promoverem a saúde através da alimentação. Durante a
                      graduação, aprenderão a consultar, diagnosticar, tratar e
                      acompanhar o estado nutricional dos pacientes.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <AcademicCapIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-pink-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        FAMEF - FACULDADE METROPOLITANA DE FRANCA{' '}
                      </strong>{' '}
                      <br />
                      <i className="text-pink-600">
                        <b>Nutrição Clínica</b> | Dezembro 2024 – atualmente.
                      </i>{' '}
                      <br />
                      Este curso aborda diversas patologias nutricionais,
                      incluindo dietoterapia para doenças digestivas e terapias
                      nutricionais. Os estudos também cobriram nutrientes
                      calóricos, balanço energético e nutrição em diferentes
                      estágios da vida. O curso ofereceu uma visão abrangente
                      sobre nutrição.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <AcademicCapIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-pink-600"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        NUTRIÇÃO APLICADA{' '}
                      </strong>{' '}
                      <br />
                      <i className="text-pink-600">
                        <b>Da fertilidade a introdução alimentar</b> | Março
                        2025 – atualmente.
                      </i>{' '}
                      <br />
                      Quando se trata da paciente gestante, é necessário
                      acompanhar as alterações e necessidades fisiológicas e
                      nutricionais a cada mês. Portanto, os cálculos
                      nutricionais, a correção de sintomas como azia e má
                      digestão, assim como a presença do diabetes gestacional
                      devem ser tratados com cautela e precisão.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
