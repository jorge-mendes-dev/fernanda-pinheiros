import { Suspense } from 'react';
import About from 'components/About';
import Tips from 'components/Tips';
import FadeIn from 'components/FadeIn';
import Testimonials from 'components/Testemonials';
import Curriculum from 'components/Curriculum';
import Work from 'components/Work';
import Template from 'components/Template';
import Loader from 'components/Loader';
import { AppConfig } from 'config/AppConfig';

export const metadata = {
  title: 'Sobre Mim',
  description: 'Conheça a nutricionista Fernanda Souza (CRN-3 91282/P). Pós-graduada em Nutrição Clínica e Nutrição Materno-Infantil, especialista em cuidado nutricional para gestantes, bebês, crianças e adultos.',
  keywords: ['nutricionista fernanda souza', 'crn 91282', 'nutricionista formação', 'especialista nutrição materno infantil', 'pós graduação nutrição'],
  openGraph: {
    title: 'Sobre Fernanda Souza - Nutricionista CRN-3 91282/P',
    description: 'Formação acadêmica, especialização e experiência profissional da nutricionista Fernanda Souza.',
    images: [`https://${AppConfig.url}/assets/images/og-image.jpg`],
  },
};

export default function AboutMe() {
  return (
    <Suspense fallback={<Loader />}>
      <Template>
        <>
          <FadeIn delay={0.2}>
            <About />
          </FadeIn>
          <FadeIn delay={0.3}>
            <Curriculum />
            <Work />
          </FadeIn>
          <FadeIn delay={0.3}>
            <Testimonials />
          </FadeIn>
          <FadeIn delay={0.4}>
            <Tips />
          </FadeIn>
        </>
      </Template>
    </Suspense>
  );
}
