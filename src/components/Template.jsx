import { memo } from 'react';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import WhatsButton from 'components/WhatsButton';
import BackToTop from 'components/BackToTop';

export default memo(function Template({ children }) {
  return (
    <>
      <Navigation />
      <Header />
      {children}
      <Footer />
      <WhatsButton />
      <BackToTop />
    </>
  );
});
