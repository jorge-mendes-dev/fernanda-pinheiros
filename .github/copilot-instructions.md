# Copilot Instructions - Fernanda Pinheiros Nutrition Website

## Project Overview
This is a Next.js 16 (App Router) marketing website for nutritionist Fernanda Souza, built with React 19, Tailwind CSS 4, and Framer Motion. The site is a single-page application with Portuguese content showcasing services, credentials, and client testimonials.

## Architecture & Key Patterns

### Centralized Configuration
- **Single source of truth**: All content lives in `src/config/AppConfig.js` - text, images, navigation, social links, metadata, etc.
- When adding/editing content, modify `AppConfig.js` rather than hardcoding in components
- Components import via `import { AppConfig } from 'config/AppConfig'` and destructure specific sections
- Supports easy content updates without touching component logic

### Component Structure
- **Template hierarchy**: `Template.jsx` → wraps pages with `Navigation`, `Header`, `Footer`, and `WhatsButton`
- **Page composition**: `src/app/page.jsx` composes components wrapped in `FadeIn` for staggered animations
- All UI components in `src/components/` are presentation-focused, data comes from `AppConfig`
- Use `memo()` for layout components to prevent unnecessary re-renders (see `Template.jsx`)

### Animation Pattern
- Use `FadeIn` wrapper component for scroll-triggered animations
- Props: `delay` (number) - stagger animations in sequence
- Example: `<FadeIn delay={0.3}><Component /></FadeIn>`
- Built with Framer Motion's `useInView` hook, triggers once with `-50px` margin

### Client/Server Component Rules
- Most components are Server Components by default (Next.js App Router)
- Add `'use client'` directive ONLY when using:
  - React hooks (`useState`, `useRef`, etc.)
  - Browser APIs
  - Event handlers
  - Framer Motion animations
- Client components: `FadeIn.jsx`, `Instagram.jsx`, `Loader.jsx`, `Reader.tsx`

### Styling Approach
- **Tailwind CSS 4** with custom theme in `src/app/globals.css` using `@theme` directive
- Primary brand color: `#ff7da4` (pink) - defined in both `AppConfig.js` and CSS variables
- Use semantic class: `text-primary`, `bg-primary` (not hardcoded hex values)
- Responsive utilities: mobile-first, use `sm:`, `md:`, `lg:` breakpoints consistently
- Custom colors available: gray scale, pink variants, blue, green, red, yellow

### Path Aliases
Configured in `jsconfig.json`:
- `@/*` → `src/*`
- `@/components/*` → `src/app/components/*`
- Direct imports: `import X from 'components/X'` or `import Y from 'config/Y'`

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

- `src/config/AppConfig.js` - All content, configuration, metadata (310 lines)
- `src/app/layout.jsx` - Root layout, SEO metadata, OG tags
- `src/app/globals.css` - Tailwind theme, custom properties
- `src/components/Template.jsx` - Page wrapper/shell
- `src/components/FadeIn.jsx` - Reusable scroll animation wrapper

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

- **WhatsApp**: Contact flow via `AppConfig.whatsapp` and `AppConfig.social.whatsapp`
- **Instagram**: Embedded feed via `Instagram.jsx` component (client-side)
- **PDF Documents**: Available in `public/` (pricing guides, curriculum)
- **SEO**: RSS, sitemap, schema.json in `public/`

## Project-Specific Notes

- Site is in Portuguese (`pt-br` locale)
- Professional site for health services - maintain professional, warm tone
- Pink color scheme reflects brand identity - preserve in modifications
- Mobile-responsive design is critical - test all breakpoints
