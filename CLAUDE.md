# Talim Studio — CLAUDE.md

## What This Project Is

Talim Studio is a web design agency portfolio site. The main site (`/`) showcases the studio itself. Under `/work/` are six fully-built mock client sites, each demonstrating a different design direction. Every mock site is self-contained in its own directory.

**Active development branch:** `claude/nextjs-tailwind-migration-lLRNY`  
**Deploy:** Vercel (auto-deploys from the branch above)

---

## Tech Stack

| Tool | Version | Notes |
|---|---|---|
| Next.js | 14.2.5 | App Router, no Pages dir |
| React | 18 | |
| TypeScript | 5 | strict mode |
| Tailwind CSS | 3.4 | config in `tailwind.config.ts` |
| GSAP | 3.14 | used for complex animations (ConnoisseurStack, kinetic nav) |
| motion/react | 12 | all scroll/parallax animations — import from `'motion/react'`, NOT `'framer-motion'` |
| `framer-motion` | 12 | installed but same package; always use `'motion/react'` alias |
| Lucide React | latest | icons |
| Radix UI Tabs | latest | used in Feature108 tabs |

**Critical:** When porting third-party components that import from `'framer-motion'`, change all imports to `'motion/react'`. They are the same package.

---

## Project Structure

```
app/
  layout.tsx          — root layout, Syne + DM Sans fonts, noise overlay
  page.tsx            — main Talim Studio homepage
  globals.css         — CSS vars, .text-outline, .noise-overlay, .reveal
  work/
    drift-creative/   — photography/creative studio (untouched)
    form-pilates/     — pilates studio (untouched)
    marco-ink/        — tattoo artist (active, heavily worked)
    mesa-kitchen/     — smash burger restaurant (complete)
    sol-store/        — retail/shop (untouched)
    stephen-yang/     — photographer (complete)
    vela-nails/       — nail salon (complete)

components/
  *.tsx               — main site components (Nav, Hero, etc.) — do NOT modify
  ui/                 — shared UI components
  blocks/             — block-level components (interactive-bento-gallery)

lib/utils.ts          — cn() helper only
public/images/        — static images for mesa-kitchen logos, vela-nails photos
```

---

## Global CSS Tokens (`app/globals.css`)

```css
--ink:        #0e0e0e   /* primary text */
--ink-2:      #3a3a3a
--ink-3:      #7a7a7a
--paper:      #f5f3ef   /* off-white background */
--paper-2:    #eceae5
--accent:     #c8ff00   /* lime green accent */
--accent-dark:#9ec800
```

Tailwind also has these as color classes: `text-ink`, `bg-paper`, `text-accent`, etc.

Custom utility classes:
- `.text-outline` — webkit text stroke (used for large decorative letters, e.g. "STUDIO")
- `.noise-overlay` — fixed SVG texture at 0.03 opacity
- `.reveal` / `.reveal.visible` — scroll-reveal fade-up

---

## Tailwind Config Notes

- Custom fonts: `font-syne`, `font-dm-sans`
- Custom keyframes/animations: `fade-up-1/2/3`, `ticker`, `underline-reveal`
- `darkMode` is NOT set to `"class"` — avoid `dark:` prefixes for site-wide styling. The `dark` class is added programmatically only on the Marco Miller page (via `MarcoHero` useEffect).

---

## next.config.mjs — Allowed Image Hostnames

```js
remotePatterns: [
  { hostname: 'images.unsplash.com' },
  { hostname: 'shadcnblocks.com' },
]
```

**Pexels images** are used via `<img>` tags (not `next/image`), so no config needed for them. Note: some Pexels photo IDs are unreliable — `pexels-photo-7156862` is known broken; use `pexels-photo-3997379` or others from the tattoo series instead.

---

## Mock Sites — Current State

### `/work/marco-ink` — Marco Miller Tattoo Artist
**Status:** Most actively developed. Dark/black theme throughout.

Key files:
- `MarcoHero.tsx` — hero with BlurText animation, MM logo left, kinetic nav right
- `MarcoAbout.tsx` — renders `<Component />` from `parallax-scroll-feature-section`
- `MarcoGallery.tsx` — bento gallery, 7 tattoo images
- `page.tsx` — assembles everything; imports `Contact2`

Important details:
- `MarcoHero` adds `document.documentElement.classList.add('dark')` on mount and removes on unmount — this is intentional to activate dark-mode variants on this page only
- Header is `z-[250]` — must stay above the kinetic nav overlay which is `z-[200]`
- Hero font: `'Fira Code', monospace` — loaded via Google Fonts `<link>` in `page.tsx`
- Hero letter spacing: `tracking-[0.22em]` on both MARCO and MILLER
- `page.tsx` is `'use client'` (required for the Client Components it contains)

Navigation (`sterling-gate-kinetic-navigation`):
- GSAP fullscreen slide-in menu from right
- CSS in `sterling-gate-kinetic-navigation.css` (imported directly in the component)
- Nav items: Home→`#hero`, About→`#about`, Gallery→`#work`, Contact→`#book`
- Shape hover animations are present but subtle (no colored shapes, white-only)

Gallery (`interactive-bento-gallery`):
- In `components/blocks/interactive-bento-gallery.tsx`
- Drag-to-reorder is REMOVED (user request) — do not re-add
- Modal lightbox with draggable dock strip at bottom
- Modal is `z-[60]`, dock is `z-[70]` — both above the page header but below the nav overlay
- Item order in array matters for CSS grid auto-placement symmetry: tall right-column item must come BEFORE the wide center-bottom item

Contact form (`contact-2.tsx`):
- Dark inputs: `bg-white/5 border-white/15`
- No "Web" link — only phone and email in contact details
- Uses plain `<input>` and `<textarea>` HTML (not shadcn Input component) to avoid default light bg

---

### `/work/mesa-kitchen` — Cinder & Co. Smash Burger
**Status:** Complete.

Key components: `CinderMenu` (ui/cinder-menu.tsx), `About3` (ui/about3.tsx), `ConnoisseurStack` (ui/connoisseur-stack.tsx)

- Dark theme: `bg-[#111111]` / `bg-[#0a0a0a]`
- Logo images live in `public/images/`: `eatny.jpg.webp`, `infatuation.jpeg`, `timeoutny.jpg`
- Head photo: `objectPosition: "center 60%"` (burger bodies visible)
- Upper marquee: hours. Lower marquee: address + phone. No trailing dot.
- Contact section: single centered column, NO contact form, just address/hours/phone
- ConnoisseurStack inactive letters: `[color:transparent] [-webkit-text-stroke:1.5px_#52525b]`

---

### `/work/vela-nails` — Vela Nails Brooklyn
**Status:** Complete.

Key components: `HeroSection`, `VelaCarousel` (elegant-carousel.tsx), `OwnerSection`, `VelaBookingForm`

- Light theme: `bg-white`, `text-ink`
- Classic Manicure image: `pexels-photo-1519014816548` via Unsplash (`photo-1519014816548`)
- Mia Reyes bio uses periods not em-dashes; "training days" not "training years"
- No "We will confirm within 24 hours" text in the booking section

---

### `/work/stephen-yang` — Stephen Yang Photographer
**Status:** Complete.

- `StephenYangHeader.tsx` — fixed header that shows "Stephen Yang" only during gallery scroll, disappears when the large NameBanner section enters viewport
- Uses dual IntersectionObserver: one for `#gallery-section`, one for `#name-banner`
- Visible condition: `galleryVisible && !nameBannerVisible`
- The large gallery has `h-[200vh]` — the dual observer is essential

---

### `/work/drift-creative`, `/work/form-pilates`, `/work/sol-store`
**Status:** Untouched — do not modify unless explicitly instructed.

---

## Main Talim Studio Site (`app/page.tsx`)
**Do NOT modify** unless explicitly asked. The main site is considered complete.

---

## Component Conventions

**Creating new components:**
- Site-specific components live inside their `app/work/<site>/` directory (e.g. `MarcoAbout.tsx`)
- Shared/reusable UI components go in `components/ui/`
- Block-level components (full sections) go in `components/blocks/`
- CSS for complex components: create a `.css` file alongside the `.tsx` and import it directly

**Hooks in map():** Never put React hooks (`useRef`, `useScroll`, etc.) inside `.map()` callbacks. Extract to a child component instead. This was a bug in the 21st.dev parallax component that was fixed by creating a `SectionItem` component.

**GSAP context:** Always use `gsap.context(() => { ... }, containerRef)` and return `ctx.revert()` for cleanup. Use `force3D: true` on performance-sensitive tweens.

**shadcn components:** The shadcn CLI cannot authenticate — install components manually. `button.tsx`, `input.tsx`, `label.tsx`, `textarea.tsx` are already present in `components/ui/`.

---

## Known Issues / Watch Out For

1. **`pexels-photo-7156862`** — broken/blocked. Use `pexels-photo-3997379` or `pexels-photo-5432021` instead for tattoo images.
2. **CSS grid auto-placement** — item order in arrays affects layout. In the bento gallery, the right-column tall item (Dotwork, id:6) must come before the wide center item (Custom Flash, id:7) or they end up offset by one row.
3. **`dark:` Tailwind prefix** — only works on the Marco Miller page (which sets the `dark` class). For all other sites, use explicit color values.
4. **`next/image` vs `<img>`** — Pexels URLs require `<img>` tags. Unsplash URLs can use `next/image` since the hostname is whitelisted.
5. **CSS imports in components** — Next.js App Router supports direct CSS imports in Client Components. Used for `sterling-gate-kinetic-navigation.css`.
