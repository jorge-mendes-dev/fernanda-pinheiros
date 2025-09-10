import { Suspense } from 'react';
import About from 'components/About';
import Tips from 'components/Tips';
import FadeIn from 'components/FadeIn';
import Testimonials from 'components/Testemonials';
import Curriculum from 'components/Curriculum';
import Work from 'components/Work';
import Template from 'components/Template';
import Loader from 'components/Loader';

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
