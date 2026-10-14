'use client';

import { useLayoutEffect, useRef } from 'react';
import { SEEN_KEY } from 'components/splashKeys';

// On a full page load the inline script in Splash has already decided and set
// data-skip or data-playing. If neither is there, React rendered the home page
// on a client-side navigation: the visitor is already browsing the site, so
// skip the splash before the browser paints and count it as seen.
export default function SplashGate() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const splash = ref.current?.parentElement;
    if (!splash || splash.hasAttribute('data-skip') || splash.hasAttribute('data-playing')) return;
    splash.setAttribute('data-skip', '');
    try {
      sessionStorage.setItem(SEEN_KEY, '1');
    } catch {
      // Storage blocked: nothing to remember
    }
  }, []);

  return <span ref={ref} hidden />;
}
