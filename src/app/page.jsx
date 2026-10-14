import About from 'components/About';
import Tips from 'components/Tips';
import RevealSection from 'components/RevealSection';
import Testimonials from 'components/Testemonials';
import Schedule from 'components/Schedule';
import Consult from 'components/Consult';
import Office from 'components/Office';
import Evaluation from 'components/Evaluation';
import Template from 'components/Template';
import Price from 'components/Price';
import Splash from 'components/Splash';
import { AppConfig } from 'config/AppConfig';

// No title here: layout's title.template doesn't apply to a page in the same
// segment, so 'Home' showed alone. The layout's default (full site title) is used.
export const metadata = {
  description: 'Nutricionista Fernanda Souza - Especialista em Nutrição Clínica, Materno-Infantil e Esportiva. Atendimento personalizado para gestantes, bebês, crianças e adultos, online e presencial no Tatuapé, São Paulo.',
  keywords: ['nutricionista são paulo', 'nutrição materno infantil', 'nutrição esportiva', 'nutricionista online', 'consulta nutricional', 'nutricionista gestante', 'introdução alimentar', 'emagrecimento saudável', 'nutricionista tatuapé', 'consultório nutricional tatuapé'],
  openGraph: {
    title: 'Nutricionista Fernanda Souza - Nutrição Clínica, Materno-Infantil e Esportiva',
    description: 'Cuidado nutricional especializado para toda a família. Atendimento presencial no Tatuapé (São Paulo) e online.',
    images: [`https://${AppConfig.url}/assets/images/og-image.jpg`],
  },
};

export default function Home() {
  // No <Suspense> here: nothing on this page suspends, and React streamed the
  // Loader fallback first, so visitors saw a spinner before the page
  return (
    <>
      <Splash />
      <Template>
        <>
          <RevealSection delay={0.1} direction="up">
            <About />
          </RevealSection>
          <RevealSection delay={0.2} direction="up">
            <Consult />
          </RevealSection>
          <RevealSection delay={0.2} direction="up">
            <Office />
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
    </>
  );
}
