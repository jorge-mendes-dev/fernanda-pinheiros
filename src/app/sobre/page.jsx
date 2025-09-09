import { Suspense } from 'react';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import About from 'components/About';
import Tips from 'components/Tips';
import FadeIn from 'components/FadeIn';
import Loader from 'components/Loader';
import Testimonials from 'components/Testemonials';
import Curriculum from 'components/Curriculum';
import Work from 'components/Work';
import WhatsButton from 'components/WhatsButton';

export default function AboutMe() {
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
        <Curriculum />
        <Work />
      </FadeIn>
      <FadeIn delay={0.4}>
        <Testimonials />
        <Tips />
      </FadeIn>
      <FadeIn delay={0.5}>
        <Footer />
      </FadeIn>
       <WhatsButton />
    </Suspense>
  );
}
