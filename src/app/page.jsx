import { Suspense } from 'react';
import About from 'components/About';
import Tips from 'components/Tips';
import RevealSection from 'components/RevealSection';
import Testimonials from 'components/Testemonials';
import Schedule from 'components/Schedule';
import Consult from 'components/Consult';
import Evaluation from 'components/Evaluation';
import Template from 'components/Template';
import Loader from 'components/Loader';
import Price from 'components/Price';
import { AppConfig } from 'config/AppConfig';

export const metadata = {
  title: 'Home',
  description: 'Nutricionista Fernanda Souza - Especialista em Nutrição Clínica e Materno-Infantil. Atendimento personalizado para gestantes, bebês, crianças e adultos em São Paulo.',
  keywords: ['nutricionista são paulo', 'nutrição materno infantil', 'nutricionista online', 'consulta nutricional', 'nutricionista gestante', 'introdução alimentar', 'emagrecimento saudável'],
  openGraph: {
    title: 'Nutricionista Fernanda Souza - Nutrição Clínica e Materno-Infantil',
    description: 'Cuidado nutricional especializado para toda a família. Atendimento presencial e online.',
    images: [`https://${AppConfig.url}/assets/images/og-image.jpg`],
  },
};

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <Template>
        <>
          <RevealSection delay={0.1} direction="up">
            <About />
          </RevealSection>
          <RevealSection delay={0.2} direction="up">
            <Consult />
          </RevealSection>
          <RevealSection delay={0.2} direction="scale">
            <Evaluation />
          </RevealSection>
          <RevealSection delay={0.2} direction="up">
            <Price />
          </RevealSection>
          <RevealSection delay={0.2} direction="up">
            <Schedule />
          </RevealSection>
          <RevealSection delay={0.2} direction="up">
            <Testimonials />
          </RevealSection>
          <RevealSection delay={0.2} direction="left">
            <Tips />
          </RevealSection>
        </>
      </Template>
    </Suspense>
  );
}
