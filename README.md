# iMax — Engineering Studio

A high-craft marketing site for a software & IT engineering studio. Built on **Next.js 15 (App Router)**, **React 19**, **TypeScript** and **Tailwind CSS v4**.

The site commits to a single editorial-technical aesthetic — warm off-white paper, deep ink, one sharp signal-green accent — and avoids the dark-blue SaaS gradient reflex.

---

## Design System

| Token | Value |
|---|---|
| Theme | Warm off-white paper (`oklch(0.972 0.006 75)`) on deep ink (`oklch(0.18 0.018 260)`) |
| Accent | Signal-green (`oklch(0.82 0.205 135)`) — committed, never in gradients |
| Display | **Fraunces** variable serif (`opsz`, `SOFT` axes) — expressive italic for emphasis |
| Sans | **Geist** — modern, technical body type |
| Mono | **JetBrains Mono** — tags, indices, ticker, metadata |
| Motion | Exponential ease-out, slow editorial reveals, magnetic cursor, kinetic marquees |
| Layout | Asymmetric 12-col editorial grid, indexed sections (`01 / 02 / 03`), generous whitespace, hairline rules |

Explicit bans honoured: no gradient text, no glassmorphism, no side-stripe borders, no identical-card grids, no hero-metric template.

---

## Interactive Components

| File | Purpose |
|---|---|
| [`Cursor`](app/components/Cursor.tsx) | Custom magnetic cursor that morphs over interactive elements (hover blob, text caret, drag tag) |
| [`Ticker`](app/components/Ticker.tsx) | Top live status bar with marquee — studio state, location, SF clock |
| [`Marquee`](app/components/Marquee.tsx) | Generic horizontal marquee with pause-on-hover |
| [`WordReveal`](app/components/WordReveal.tsx) | Word-by-word entrance reveal with italic + signal-colour highlight per index |
| [`Reveal`](app/components/Reveal.tsx) | IntersectionObserver block reveal |
| [`MagneticButton`](app/components/MagneticButton.tsx) | Magnetic cursor follow on the button + child translate |
| [`CaseStack`](app/components/CaseStack.tsx) | Editorial stacked case-row index with hover takeover |
| [`StatCounter`](app/components/StatCounter.tsx) | Eased numeric counter (no gradient) |
| [`ScrollProgress`](app/components/ScrollProgress.tsx) | 2-px top progress bar |
| [`PortfolioGrid`](app/components/PortfolioGrid.tsx) | Filterable archive with kinetic SVG slot artwork |
| [`ContactForm`](app/components/ContactForm.tsx) | Editorial line-form (budget + timing pills) wired to Web3Forms |

---

## Pages

- **`/`** — Index. Hero, kinetic headline marquee, in-rotation marquee, stacked Selected Work, four-discipline Services slabs, manifesto + stats, four-step Process, testimonial card, ink CTA.
- **`/services`** — Long-form per-discipline blocks (Web, Mobile, Cloud, Design) with sticky title columns + stack and capabilities, three engagement models.
- **`/portfolio`** — Filterable grid (All / Web / Mobile / Cloud) with editorial cards + kinetic SVG slot artwork per discipline.
- **`/about`** — Studio brief, numbers strip, four values, six-person team grid, CTA.
- **`/contact`** — Direct lines, brief form (budget + timing pills), four-FAQ grid.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) · React 19
- **Language:** TypeScript 5.7
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`) + custom `@theme` tokens in `app/globals.css`
- **Fonts:** `next/font/google` — Fraunces, Geist, JetBrains Mono
- **Form delivery:** Web3Forms (replace `WEB3FORMS_ACCESS_KEY` in `app/components/ContactForm.tsx`)

---

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve built output
```

Accessibility:
- Single `:focus-visible` outline in signal-green at 2px / offset 3
- `prefers-reduced-motion: reduce` disables marquees, cursor, reveals
- Custom cursor disabled on `pointer: coarse`
- All decorative SVGs `aria-hidden`
- Form has named labels and required validation with visible error state

---

## Project Structure

```
iMax_website/
├── app/
│   ├── components/        # all interactive + layout components
│   ├── about/             # /about
│   ├── services/          # /services
│   ├── portfolio/         # /portfolio
│   ├── contact/           # /contact
│   ├── globals.css        # design tokens, base, utilities
│   ├── layout.tsx         # fonts + cursor + ticker + scroll progress
│   └── page.tsx           # /
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```
