import Image from 'next/image';
import { AppConfig } from 'config/AppConfig';
import SplashGate from 'components/SplashGate';
import { SEEN_KEY } from 'components/splashKeys';

// Runs right after the splash is parsed, before the first paint, on full page
// loads. It always marks the splash: data-skip after the first visit in a
// session, for links to a section (/#pricing), and for crawlers and speed tests
// (so they see the page, not the splash); data-playing otherwise. If
// sessionStorage is blocked, it plays on every full load. Client-side
// navigations are handled by SplashGate.
const script = `(function(){var s=document.currentScript.previousElementSibling,skip=!!location.hash||/bot|crawl|spider|lighthouse|headless|preview/i.test(navigator.userAgent);try{if(!skip&&sessionStorage.getItem('${SEEN_KEY}'))skip=true;else if(!skip)sessionStorage.setItem('${SEEN_KEY}','1')}catch(e){}s.setAttribute(skip?'data-skip':'data-playing','')})()`;

// Rings around the logo, inside out: size as a multiple of the logo, and how
// far each arc reaches from the sides (outer rings are shorter side arcs).
// arc stays at 55deg or less so the conic mask stops in globals.css stay in order.
const RINGS = [
  { size: 1.3, arc: 55 },
  { size: 1.65, arc: 46 },
  { size: 2.05, arc: 38 },
  { size: 2.5, arc: 30 },
  { size: 3, arc: 22 },
];

// Home page only, so visitors landing on another page from a search or a bio
// link go straight to the content. All CSS (globals.css, .splash): the logo
// and name come in while a wave lights the rings around the logo, then the
// splash opens as a circle from the logo to reveal the page. No JavaScript
// needed to dismiss it.
export default function Splash() {
  const name = AppConfig.company.title;

  return (
    <>
      {/* The script adds data-skip or data-playing before React hydrates */}
      <div className="splash" aria-hidden="true" suppressHydrationWarning>
        <SplashGate />
        <div className="splash-rings">
          {RINGS.map(({ size, arc }, i) => (
            <span key={size} style={{ '--i': i, '--size': size, '--arc': `${arc}deg` }} />
          ))}
        </div>
        <div className="splash-content">
          <div className="splash-mark">
            <div className="splash-logo">
              <Image src={AppConfig.company.logo.src} alt="" width={160} height={160} preload />
            </div>
          </div>
          <div className="splash-text">
            <p className="splash-name font-display font-normal">{name}</p>
            <p className="splash-role">Nutricionista · {AppConfig.crn}</p>
          </div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </>
  );
}
