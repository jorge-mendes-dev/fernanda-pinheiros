import { Suspense } from 'react';
import FadeIn from 'components/FadeIn';
import Template from 'components/Template';
import Loader from 'components/Loader';
import Socials from 'components/Socials';

export default function SocialMedia() {
  return (
    <Suspense fallback={<Loader />}>
      <Template>
        <>
          <FadeIn delay={0.2}>
            <Socials />
          </FadeIn>
        </>
      </Template>
    </Suspense>
  );
}
