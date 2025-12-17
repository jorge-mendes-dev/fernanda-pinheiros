import { memo } from 'react';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import FadeIn from 'components/FadeIn';
import WhatsButton from 'components/WhatsButton';
import BackToTop from 'components/BackToTop';

export default memo(function Template({ children }) {
  return (
    <>
      <Navigation />
      <FadeIn delay={0}>
        <Header />
      </FadeIn>
      {children}
      <FadeIn delay={0}>
        <Footer />
      </FadeIn>
      <WhatsButton />
      <BackToTop />
    </>
  );
});
