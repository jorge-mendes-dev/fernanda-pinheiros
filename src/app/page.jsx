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
