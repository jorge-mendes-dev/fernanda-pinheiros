# Interface System — Webmotors OEM Prospecting (HUB)

Decisions are already made by the corporate brand. This file is a fixed reference for `/interface-design:audit` and future component work — not a starting point for domain exploration. Source of truth for tokens: `DESIGN.md` (spec) and `src/styles/tailwind.css` (implementation) — when they disagree, treat `tailwind.css` as authoritative and flag the doc for correction.

## Direction and feel

Corporate, dense B2B sales tool embedded inside a legacy ASP.NET MVC shell (the HUB) — not a standalone branded product. Feel: efficient and trustworthy, not playful. Red (`ds-red-400` / `#E22446`) is the single brand accent, used sparingly for primary actions and brand emphasis; everything else is neutral gray. Indigo is reserved for links/complementary accents only — never as a second brand color.

Reference: `DESIGN.md` → Typography, Colors sections.

## Token architecture

All colors trace back to `ds-*` semantic tokens (`ds-surface-*`, `ds-text-*`, `ds-border-*`, `ds-icon-*`), which map to primitive `ds-{color}-{step}` scales (gray/red/indigo/green/yellow/orange/blue). **Never** use hex values or primitive tokens directly in component code — always the semantic layer.

Text hierarchy (4 levels — use all of them, not just `base`+`subtle`):
- `ds-text-neutral-base` — primary text
- `ds-text-neutral-subtle` — secondary/supporting text
- `ds-text-neutral-muted` — metadata, captions
- `ds-text-neutral-disabled` — disabled/placeholder

Font: Figtree. Display/Title always Bold 700, Subtitle always Semibold 600, Body/Uppercase/Link support 400/600/700 per `DESIGN.md`.

## Depth strategy

**Borders + light shadow, not heavy elevation.** Cards use `border` (`ds-border-neutral-base`/`subtle`) plus `shadow-ds-xsmall`/`small` — never both a strong border and a strong shadow on the same surface. Shadow color is always `#6A6977`-based (`DESIGN.md` → Shadows), never black. Modals/drawers step up to `shadow-ds-large`/`xlarge` since they're the only genuinely elevated surfaces in this app (no popovers/dropdown-menus with independent elevation yet).

Border progression: `subtle` (dividers, quiet separation) → `base` (default card/input border) → `strong` (emphasis, rarely used) → `accessibility-focus` (focus ring only, indigo-400).

## Spacing

Base unit: **4px**, following `ds-spacing-*` (`2xsmall`=4px through `4xlarge`=48px). Component-internal padding defaults to `ds-spacing-medium` (16px, cards/containers) or `ds-spacing-xsmall`/`small` (8–12px, buttons/inputs). Section-to-section gaps use `2xlarge`/`3xlarge` (32–40px).

Known deviation to fix: `Layout.tsx`'s `AppLayout` main container currently uses `px-4 md:px-6` — `DESIGN.md` specifies `px-4` (mobile) → `px-8` (tablet) → `px-18`/72px (desktop, ≥1360px). Not yet reconciled — see open items below.

## Border radius

`xsmall` (8px) is the default for interactive controls (buttons, inputs, tooltips). `medium`/`large` (16/24px) for cards and modals. Never use Tailwind's un-prefixed `rounded-sm`/`rounded-md` (6px/2px aren't DS values) — always the `ds-border-radius-*` scale via `rounded-[Npx]` or the mapped utility.

## Breakpoints

`md: 768px`, `lg: 1360px` only, per `DESIGN.md`. Known deviation: `tailwind.css` currently keeps Tailwind's default `sm: 640px` "for backward-compat" — this contradicts the DS spec and should be migrated off, not treated as permanent.

## States

Every interactive element needs default/hover/active/focus/disabled — `DESIGN.md`'s pre-delivery checklist only explicitly calls out loading/error/empty at the page level. When building/reviewing form controls, check all 5 interaction states are styled, not just the page-level 3.

## Key component patterns (Eleanor UI + custom)

- Buttons/inputs/selects: 48px height, 8px radius (`DESIGN.md` → Component Sizing Conventions is the full table — check it before inventing a new component's dimensions).
- `Page` (`src/components/Page.tsx`) wraps page-level title + testId consistently — new pages should use it rather than reimplementing headers.
- `StepBadge`, `CommercialJourneyStepper` — numbered step indicators for the wizard; reuse rather than creating new step UI.
- Eleanor UI component overrides (pagination color overrides in `tailwind.css`) are the only place `!important` + attribute selectors on Eleanor's internal classnames are acceptable — Eleanor's own theming API doesn't expose these yet.

## Open items (known drift, not yet fixed)

- Container padding (`Layout.tsx`) doesn't implement the desktop 72px margin `DESIGN.md` specifies.
- `sm: 640px` breakpoint override should be removed once no component depends on it.
- `DESIGN.md`'s "Tailwind Theme Mapping" section is a stale hand-written snippet — should point to `tailwind.css` directly instead of duplicating (and drifting from) it.
- `Footer.tsx` uses the primitive `bg-ds-gray-dark-900` directly (near-black, `#171719`) instead of a semantic surface token — no `ds-surface-*` token maps to this exact value; `ds-surface-neutral-inverse` is a visibly lighter `#2e2e3a`. Needs either a new semantic token or a design-reviewed decision to accept the lighter shade before changing it.
- `Footer.tsx`'s copyright text uses `opacity-60` instead of a semantic token — no `ds-text-neutral-inverse-subtle`/`-muted` token exists yet for de-emphasized text on a dark surface.
