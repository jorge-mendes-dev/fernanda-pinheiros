# Interface System: Nutricionista Fernanda Souza

Marketing site for a nutritionist (pt-BR, mobile-first). The feel is warm, feminine and professional: white pages, one pink brand color, an elegant serif for headings. Every page exists to get a visitor to book a consultation on WhatsApp.

Source of truth for tokens: `src/app/globals.css` (`@theme`). Content and copy: `src/config/AppConfig.js`.

## Color

- **Brand:** `primary` = `#ff7da4`. Used for tags, prices, icons, links and the main button gradient (`from-primary to-pink-500`/`pink-600`).
- **Pink scale:** `pink-50` to `pink-900` in `@theme`. `pink-50`/`pink-100` for soft card backgrounds and rings, `pink-300` for lighter accents.
- **Text:** headings `gray-900`, body `gray-600`/`gray-700`, captions `gray-500`.
- **Surfaces:** white. Soft pink gradients (`from-pink-50 to-white`) only on cards and the booking band.
- WhatsApp green appears only on WhatsApp icons and the floating WhatsApp button.

## Typography

- **Headings:** Playfair Display through `font-display` (all `h1`/`h2` section titles, the splash name).
- **Body and UI:** Inter (the default `font-sans`).
- Fonts load with `next/font` in `src/app/layout.jsx` as `--font-playfair` / `--font-inter` on `<html>`, mapped to Tailwind's `--font-display` / `--font-sans` with `@theme inline`. Don't name a next/font variable `--font-sans` or `--font-display`: it collides with Tailwind's own and the site silently falls back to system fonts.

## Section pattern

Every content section uses the same header:

1. A pill tag: `rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary`, often with a ring and a small icon.
2. A title: `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 font-display` (the hero and About go larger).
3. An optional intro: `text-lg text-gray-600 leading-relaxed`, `max-w-2xl`/`max-w-3xl`.

## Layout and spacing

- Container: `mx-auto max-w-7xl px-6 lg:px-8` (narrower `max-w-5xl` for pricing).
- Vertical rhythm: content sections use `py-20 sm:py-24`. The pink booking band (Schedule) is the one exception, by design.
- Grids collapse to one column on mobile, except short item lists (O que está incluso), which stay two columns.

## Shape and depth

- Cards: `rounded-2xl`, `ring-1` in `pink-100` or `gray-900/5`, `shadow-sm` to `shadow-lg`; hover lifts slightly (`-translate-y-1`) and deepens the shadow.
- Buttons: `rounded-xl`, `px-6 py-4`, bold.
- Pills and avatars: `rounded-full`.
- Photos: `rounded-2xl`, `object-cover`, fixed aspect ratios (4:5 in the About mosaic).

## Icons

- Heroicons (`@heroicons/react`, 24 outline in feature cards, 20 solid for small inline marks) and `react-icons` for brand logos (WhatsApp, TikTok, Instagram).
- Feature icons sit in a gradient square: `rounded-xl bg-gradient-to-br from-primary to-pink-600` with a white icon.
- No emoji as icons: they render differently on every device.

## Actions

- **Primary:** "Agendar consulta" opens WhatsApp with a ready message. Pink gradient button with the WhatsApp icon.
- **Secondary:** bordered button (`border-2 border-gray-200`, pink on hover), for example "Ver planos e valores" → `#pricing`.
- Social links (TikTok, Instagram) are never the primary action.

## Motion

- Sections reveal on scroll with `RevealSection` / `FadeIn` (framer-motion).
- The home page splash (`Splash.jsx` + `.splash` in `globals.css`) is CSS only: transform, opacity and a mask, about 2.4s, once per session, skipped for reduced motion, crawlers and section links.
- Easing: `cubic-bezier(0.23, 1, 0.32, 1)` for entrances. Respect `prefers-reduced-motion`.

## Images

- Use `next/image` with `sizes`. Photos are JPG/WebP, never photos wrapped in SVG (next/image can't optimize those).
- Below-the-fold media loads lazily (gallery videos only get a `src` when the carousel is near the screen).
