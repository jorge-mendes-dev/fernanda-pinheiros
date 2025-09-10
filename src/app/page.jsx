import { Suspense } from 'react';
import About from 'components/About';
import Tips from 'components/Tips';
import FadeIn from 'components/FadeIn';
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
          <FadeIn delay={0.2}>
            <About />
          </FadeIn>
          <FadeIn delay={0.3}>
            <Consult />
            <Evaluation />
            <Schedule />
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
