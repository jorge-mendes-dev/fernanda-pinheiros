import { memo } from 'react';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import FadeIn from 'components/FadeIn';
import WhatsButton from 'components/WhatsButton';

export default memo(function Template({ children }) {
  return (
    <>
      <FadeIn delay={0}>
        <>
          <Navigation />
          <Header />
        </>
      </FadeIn>
      {children}
      <FadeIn delay={0}>
        <Footer />
      </FadeIn>
       <WhatsButton />
    </>
  );
});
