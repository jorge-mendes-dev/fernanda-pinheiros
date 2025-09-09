import { Suspense } from 'react';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import About from 'components/About';
import Tips from 'components/Tips';
import FadeIn from 'components/FadeIn';
import Loader from 'components/Loader';
import Testimonials from 'components/Testemonials';
import WhatsButton from 'components/WhatsButton';
import Schedule from 'components/Schedule';
import Consult from 'components/Consult';
import Evaluation from 'components/Evaluation';

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <FadeIn delay={0}>
        <>
          <Navigation />
          <Header />
        </>
      </FadeIn>
      <FadeIn delay={0.2}>
        <About />
      </FadeIn>
      <FadeIn delay={0.3}>
        <Consult />
        <Evaluation />
        <Schedule />
      </FadeIn>
      <FadeIn delay={0.4}>
        <Testimonials />
      </FadeIn>
      <FadeIn delay={0.3}>
        <Tips />
      </FadeIn>
      <FadeIn delay={0.5}>
        <Footer />
      </FadeIn>
      <WhatsButton />
    </Suspense>
  );
}
