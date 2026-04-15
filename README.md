
# Fernanda Souza Nutrition Website

🌐 **Live site:** [https://nutrifernandasouza.com.br/](https://nutrifernandasouza.com.br/)

This is a professional marketing website for nutritionist Fernanda Souza, built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS 4**, and **Framer Motion**. The site is a single-page application (SPA) in Portuguese, showcasing services, credentials, and client testimonials.

## Project Overview

- **Type:** Marketing website for health services
- **Language:** Portuguese (`pt-br`)
- **Brand:** Pink color scheme (`#ff7da4`), warm and professional tone
- **Mobile-first:** Fully responsive, tested on all breakpoints

## Architecture & Key Patterns

### Centralized Configuration
- **Single source of truth:** All content, images, navigation, and metadata are managed in [`src/config/AppConfig.js`](src/config/AppConfig.js)
- Components import content from `AppConfig` and destructure only what they need
- Easy content updates without touching component logic

### Component Structure
- **Template hierarchy:** [`src/components/Template.jsx`](src/components/Template.jsx) wraps all pages with navigation, header, footer, and WhatsApp button
- **Page composition:** [`src/app/page.jsx`](src/app/page.jsx) composes all sections, each wrapped in a `FadeIn` animation
- All UI components in [`src/components/`](src/components/) are presentational and receive data from `AppConfig`
- Use `memo()` for layout components to optimize re-renders

### Animation Pattern
- Use [`src/components/FadeIn.jsx`](src/components/FadeIn.jsx) for scroll-triggered, staggered animations (Framer Motion)
- Example: `<FadeIn delay={0.3}><Component /></FadeIn>`

### Client/Server Component Rules
- Most components are **Server Components** (Next.js App Router)
- Add `'use client'` only for:
	- React hooks (`useState`, `useRef`, etc.)
	- Browser APIs
	- Event handlers
	- Framer Motion animations
- Client components: `FadeIn.jsx`, `Instagram.jsx`, `Loader.jsx`, `Reader.tsx`

### Styling Approach
- **Tailwind CSS 4** with custom theme in [`src/app/globals.css`](src/app/globals.css)
- Primary color: `#ff7da4` (pink), available as `text-primary`, `bg-primary`
- Responsive utilities: `sm:`, `md:`, `lg:`
- Custom color palette: gray, pink, blue, green, red, yellow

### Path Aliases
- Configured in `jsconfig.json`:
	- `@/*` → `src/*`
	- `@/components/*` → `src/app/components/*`
- Import style: `import X from 'components/X'` or `import Y from 'config/Y'`

## Development Workflows

### Local Development

```bash
npm run dev              # Start dev server at localhost:3000
npm run dev:festo        # Alternative dev server on port 4000
```

### Code Quality

```bash
npm run lint             # ESLint check
npm run prettier-lint    # Check formatting
npm run format           # Auto-format with Prettier
```

### Building & Deployment

```bash
npm run build           # Production build
npm start               # Start production server
```

## Critical Files

- [`src/config/AppConfig.js`](src/config/AppConfig.js) - All content, configuration, metadata
- [`src/app/layout.jsx`](src/app/layout.jsx) - Root layout, SEO metadata, OG tags
- [`src/app/globals.css`](src/app/globals.css) - Tailwind theme, custom properties
- [`src/components/Template.jsx`](src/components/Template.jsx) - Page wrapper/shell
- [`src/components/FadeIn.jsx`](src/components/FadeIn.jsx) - Reusable scroll animation wrapper

## Common Tasks

### Adding New Content
1. Edit `src/config/AppConfig.js` with new data structure
2. Update corresponding component to destructure new fields
3. No component logic changes needed if structure matches

### Creating New Sections
1. Create component in `src/components/`
2. Import and use in `src/app/page.jsx`
3. Wrap in `<FadeIn delay={X}>` for animation
4. Pull data from `AppConfig` following existing patterns

### Adding Images
- Place in `public/assets/images/`
- Reference as `/assets/images/filename.ext` (no `public/` prefix)
- Use Next.js `<Image>` component with `width` and `height` props

## Integration Points

- **WhatsApp:** Contact via `AppConfig.whatsapp` and `AppConfig.social.whatsapp`
- **Instagram:** Embedded feed via `Instagram.jsx` (client-side)
- **PDF Documents:** Available in `public/` (pricing guides, curriculum)
- **SEO:** RSS, sitemap, schema.json in `public/`

## Project-Specific Notes

- Site is in Portuguese (`pt-br` locale)
- Professional site for health services - maintain professional, warm tone
- Pink color scheme reflects brand identity - preserve in modifications
- Mobile-responsive design is critical - test all breakpoints
