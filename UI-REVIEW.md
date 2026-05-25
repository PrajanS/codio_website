# Codio — UI Review

**Audited:** 2026-05-23
**Baseline:** Abstract 6-pillar standards (no UI-SPEC.md; no GSD planning artifacts)
**Method:** Code-only — no dev server / Playwright-MCP available in this session
**Stance:** Adversarial. Assume failures until proven otherwise.

---

## Pillar Scores

| Pillar | Score | Key Finding |
|---|---|---|
| 1. Copywriting | 3 / 4 | Voice is exceptional; placeholder phone ships brand damage; WordReveal emphasis lands on wrong words on at least 2 of 4 hero headlines. |
| 2. Visuals | 3 / 4 | Strong editorial direction (asymmetric grid, indexed sections, kinetic marquees); but zero real portfolio imagery on a "124 projects shipped" site. |
| 3. Color | 2 / 4 | Single committed accent honoured — **but the brand-positive signal-green is also the form error colour**. Same hue means "good" and "your input is wrong." |
| 4. Typography | 3 / 4 | Three coherent families, real variable-axis use, but `fontVariationSettings` is inlined 39× across 10 files instead of extracted, and ~9 Tailwind sizes coexist with 20+ arbitrary `text-[clamp(...)]` scales. |
| 5. Spacing | 3 / 4 | Disciplined editorial rhythm; but global `p { max-width: 65ch }` leaks into footer/aside copy, and asymmetric staggers use arbitrary `translate-y-12/16` rather than tokens. |
| 6. Experience Design | 2 / 4 | Reduced-motion, focus-visible, honeypot, IO reveals all real; but `cursor: none` is hard-coded on interactive elements outside `body.has-custom-cursor`, no `not-found.tsx`, Web3Forms key is a placeholder, and error/success states are nearly indistinguishable. |

**Overall: 16 / 24**

---

## Top Priority Fixes

### BLOCKERS (must fix before launch)

1. **Placeholder phone number rendered publicly** —
   `app/contact/page.tsx:15` value `'+1 (000) 000 — 00 00'` and `app/components/Footer.tsx:60` (same string) ship on every page. The Web3Forms access key is acknowledged as a follow-up; the phone has the same defect class but is not flagged in the README or `<known_limitations>`. A visitor reading the Direct Lines section gets a tel: link that dials nothing. **Fix:** replace both occurrences with the real number, or remove the phone line entirely until one exists.

2. **Error state uses the brand-positive accent colour** —
   `app/globals.css:484-489` sets `.field-line.invalid` border + label to `var(--color-signal-deep)`. The same green is used for: section-index dots (`.index::before`, line 212), live status dot (`.live::before`, line 443), ticker dot (line 422), success state background in `ContactForm.tsx:164` (`bg-signal`), all WordReveal "emphasis" words across every hero, and the entire CTA button (`btn-signal`). Users learn within 30 seconds that green is the studio's "this matters / this is good" colour, then green also marks "your input is wrong." **Fix:** introduce a single error token (e.g. a deep terracotta `oklch(0.55 0.16 30)` or a pure ink underline + inline mono error label) and stop overloading signal-green. Independently, the success banner at `ContactForm.tsx:164` and the error banner share a border colour — only the background distinguishes them.

3. **Web3Forms access key is a literal placeholder string in client source** —
   `app/components/ContactForm.tsx:7` — `const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';`. Acknowledged, but until replaced, every contact form submission goes nowhere and the visible warning at line 172 is shipped to production users. **Fix:** move to `process.env.NEXT_PUBLIC_WEB3FORMS_KEY`, render the warning only when the env var is missing (not when the literal is the placeholder string), and fail loudly in CI when the key is absent in `production`.

### WARNINGS (fix recommended)

4. **`cursor: none` hard-coded outside the `has-custom-cursor` scope** —
   `app/globals.css:231` (`.btn`), `:285` (`.nav-link`), `:520` (`.case-row`), `:582` (`.service-slab`). The scoped block at lines 84-93 correctly gates cursor hiding on the `body.has-custom-cursor` class that `Cursor.tsx:20` adds. These four declarations bypass that gate — any visitor whose `Cursor.tsx` script errors, is blocked by CSP, or who has JS disabled will see no cursor on the primary interactive elements. Reduced-motion media query at line 668 covers `prefers-reduced-motion`, but not JS-disabled or script-failure cases. **Fix:** scope these four declarations under `body.has-custom-cursor` or move them inline into the existing block at lines 84-93.

5. **WordReveal emphasis indices land on weak words on multiple hero headlines** —
   - `app/page.tsx:48-51` "We engineer software that earns its place." → words = `[We, engineer, software, that, earns, its, place]`. `italic=[2,3]` styles "software that"; `signal=[3]` puts the single accent on "that" — a conjunction. The substantive word ("earns") is unstyled.
   - `app/about/page.tsx:55-61` "Eight people. One inbox each. No middle layer." → `italic=[3,4,5]` styles "inbox each. No" — the italic run crosses a period and re-opens on a negation token; `signal=[5]` highlights "No" instead of "middle layer." Reads as accidental.
   - `app/contact/page.tsx:49-55` "Tell us what you're building." → `italic=[2,3]`, `signal=[3]`. WordReveal splits on `/(\s+)/` and `you're` is one token at index 3 — works here, but verify visually.
   - `app/services/page.tsx:120-127` "What we build for you." → `italic=[3,4]`, `signal=[4]`. "for you" — acceptable.

   **Fix:** audit each `WordReveal` and target the noun/verb that carries the sentence, not the connective.

6. **No real portfolio imagery on the portfolio page** —
   `app/components/PortfolioGrid.tsx:196-245` — every one of six cases renders a synthetic SVG pattern (lines/rectangles/circles) via `CaseArtwork`. For a studio claiming "124 projects shipped · 41 active partners · 99.9% uptime" (`app/page.tsx:198-201`), the proof is missing. The kinetic SVGs are well-crafted but they are also a visible admission that no client work can be shown. **Fix:** populate at least 2–3 of the six cases with real screenshots, video loops, or device mockups; keep SVG fallback for the rest.

7. **Global `p { max-width: 65ch }` leaks into non-prose contexts** —
   `app/globals.css:148-150`. Every `<p>` capped at 65ch, including: contact aside helper ("Form goes straight to a founder…", `app/contact/page.tsx:97`), CTA reply lines (`app/page.tsx:281`), portfolio CTA subhead (`app/portfolio/page.tsx:56`). In right-aligned columns this can produce visible asymmetric wrapping the editorial layout doesn't intend. **Fix:** scope the cap to a `.prose` utility or to `main p` excluding helper/CTA contexts.

8. **`fontVariationSettings` inlined 39× rather than tokenised** —
   Grep across `/app`: 39 occurrences of inline `style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}` / `'"opsz" 144, "SOFT" 100'` across 10 files. The CSS already defines the rule on `h1-h4, .italic, em` (`globals.css:121-136`) — the inline overrides exist because `<span>` and `<div>` carrying display copy bypass that selector. **Fix:** add `.display-opt` / `.display-emph` utilities in `globals.css` and replace the inline styles. Maintenance debt only, no user-visible regression — but 39 inline copies across the marketing site is fragile.

9. **No `app/not-found.tsx`** —
   Five top-level routes, default Next.js 404 page. The editorial voice that defines every other page doesn't extend to the failure case. **Fix:** add `app/not-found.tsx` with an indexed `[ 06 — not found ]` head, a WordReveal headline, and a single ink button back to `/`.

10. **`<p>` outside `<blockquote>` semantics, `role="list"` on a `<div>` masking native semantics** —
    - `app/page.tsx:250-262` uses `<blockquote><p>` but the closing `<footer>` for the citation sits inside the blockquote — semantically fine, but the leading and trailing curly-quote spans at lines 253 and 255 are decorative `<span>` elements styled as italic display. Screen readers will announce them as text. Mark them `aria-hidden="true"` or wrap as `::before/::after`.
    - `app/components/CaseStack.tsx:22` wraps `<div role="list">` around `<Row>` elements that each carry `role="listitem"` — replace with a native `<ul>` + `<li>` (the elements are not links in the home use of CaseStack, so the `<div>` was chosen to make the whole row hoverable without nesting issues — a `<ul role="list">` of `<li>` still works).

---

## Detailed Findings

### Pillar 1 · Copywriting (3 / 4)

**What's good:**
- The voice is unusually disciplined. "We don't sell sprints. We sell things that survive their first quarter." (`app/page.tsx:179`). "Eight people. One inbox each. No middle layer." (`app/about/page.tsx:61`). "Outcomes, not outputs." (`app/portfolio/page.tsx:28`). No generic CTAs found by grep — no "Submit", "Click here", "Learn more". Buttons are imperatives that match the studio's claim: "Start a project", "Open the archive", "Book a scoping call", "Send brief".
- Empty state is on-brand: `PortfolioGrid.tsx:188` — "No projects in this discipline yet — yours could be the first." Not a generic "No results."
- Error state on the form is honest: `ContactForm.tsx:48` "Please fix the highlighted fields." and `:72` "Something went wrong. Please email hello@codio.studio directly." — second one gives the user an escape hatch.
- FAQ answers are specific and quantified — `app/contact/page.tsx:23-37` cites "$18k for two weeks", "median kickoff is eleven days", "one-page mutual NDA". Not corporate hedging.
- Ticker copy mixes status, geography, time — useful, not decorative (`Ticker.tsx:5-11`).

**Defects:**
- **Placeholder phone in 2 places** — see BLOCKER 1.
- **WordReveal emphasis on wrong words** — see WARNING 5.
- "PGP available on request" at `ContactForm.tsx:156` — true to voice but unverifiable; if you don't actually have a PGP key, remove.
- Footer mark "v.2026.05 — built in-house" (`Footer.tsx:76`) is great voice, but if the build date isn't auto-derived, this string will rot.

### Pillar 2 · Visuals (3 / 4)

**What's good:**
- Asymmetric 12-col grid is consistently applied — hero asymmetry (`app/page.tsx:55-69`: left content `col-start-2`, right meta `col-start-9`), Services sticky-title-vs-stack split (`services/page.tsx:206-221`), indexed sections throughout (`[ 00 — index ]`, `[ 02 — services ]`, `[ 03 — selected work ]`, etc.).
- Hairline rules used as structure, not chrome — `hairline`, `hairline-b` utilities at `globals.css:159-165`.
- Kinetic marquees as focal-rest devices, not as filler (`page.tsx:87-108`, `Footer.tsx:27-42`).
- Process and Values grids deliberately stagger every other card with `md:translate-y-12` (`page.tsx:221`, `about/page.tsx:108`) — the explicit ban on identical-card grids is honoured.
- Custom cursor has three distinct states (`is-hover`, `is-text`, `is-drag` in `globals.css:345-371`) — real interaction design, not a hover blob.

**Defects:**
- **Zero real portfolio imagery** — see WARNING 6.
- Logo marquee at `LogoMarquee.tsx:3-14` is wordmarks-as-display-type, not actual client logos. This is a stylistic choice but on a studio site the audience expects to recognise marks; the visual hierarchy currently treats "client name in serif" as a substitute for "client logo". On a real studio with permission, swap in 2–3 real SVG marks at a fixed height and keep wordmarks as the rest.
- `app/page.tsx:288-291` — 28rem watermark `↗` arrow at 10% opacity on the dark CTA slab. At extreme viewport widths this will overflow the visible viewport. `overflow-hidden` on the parent (line 269) clips it, but on narrow widths the arrow disappears entirely leaving the CTA visually quieter than at desktop. Verify visually.
- Mobile menu drawer uses `fixed inset-0 top-[64px]` (`Header.tsx:93`) — the 64px is a magic number. If the header height changes (it does at scroll with the backdrop-blur shift), the drawer position drifts. Use CSS variable or `top: 100%`.
- Icon-only mobile menu button at `Header.tsx:73-87` has `aria-label="Toggle menu"` — pass. But it has no visible focus state distinct from the global `:focus-visible` outline; on the ink-bordered square this can look like a doubled border. Confirm visually.

### Pillar 3 · Color (2 / 4)

**What's good:**
- One committed accent (`--color-signal: oklch(0.82 0.205 135)`, deep variant at `0.68 0.195 138`). The README claim "never in gradients" is honoured — grep found zero `linear-gradient`/`radial-gradient` involving signal in the application code. (The body grain at `globals.css:106-107` uses ink-only radial gradients for atmosphere — not the banned case.)
- Surface palette uses warm off-white papers and never pure white (`oklch(0.972 0.006 75)` etc.). Ink palette four-step from `0.18 → 0.72` lightness gives genuine hierarchy without resorting to grays.
- 60/30/10 split is broadly respected: paper dominates, ink for text + structural slabs, signal reserved for index dots, italics, in-rotation marks, hover takeovers, single CTA `btn-signal`. By grep, 69 references to `signal/color-signal` across the app — high count but every use I sampled is intentional (index dots, blink animation, hover state, single accent word in WordReveal).
- ::selection at `globals.css:115-118` uses signal — good, on-brand.

**Defects:**
- **Error state shares hue with positive accent** — see BLOCKER 2. This is the dominant reason for the 2/4 score.
- **Inline `oklch()` values bypass tokens** — at least six occurrences inline values that should be tokens:
  - `app/page.tsx:272, 281` — `oklch(0.72 0.008 260)` (same as `--color-ink-faint`)
  - `app/services/page.tsx:181, 185` — two more
  - `app/components/Footer.tsx:48, 59, 73, 86` — `oklch(0.72 0.008 260)` and `oklch(0.85 0.008 260)` (the latter not in the token set at all — a one-off shade introduced inline)
  Result: the colour system has a quietly leaking 7th shade and an inability to globally re-theme by changing one CSS variable. **Fix:** add `--color-ink-on-dark` and `--color-ink-on-dark-mute` tokens and replace all inline `oklch()` strings.
- The dark CTA slab uses `Footer.tsx:48`-style inline colours rather than dark-mode variants of the same token names. If the studio ever introduces dark mode, the entire ink-slab and footer have to be re-touched manually.
- `border-[color:var(--color-paper)]/15` at `Footer.tsx:27, 73` and `Header.tsx:39` uses opacity-suffix syntax on a CSS variable — works in Tailwind v4 but only because the variable is in OKLCH. Brittle; prefer a dedicated `--color-rule-on-ink` token.

### Pillar 4 · Typography (3 / 4)

**What's good:**
- Three families, each with a clear job: Fraunces for display + italic emphasis with real `opsz` + `SOFT` axes; Geist for body; JetBrains Mono for tags/indices/meta. No mixing of families within a single role.
- Variable-axis switching ("opsz" 144, "SOFT" 40/100) is genuinely used — italic emphasis gets a different `SOFT` axis value, not just `font-style: italic`. This is rare on the web and craft-positive.
- Mono is constrained to the "label / index / meta" role (`.mono` at `globals.css:139-145`) and never used for body copy.
- Headline scale uses fluid `clamp()` correctly — biggest at `text-[clamp(3.4rem,1rem+10vw,11.5rem)]` on home hero, smallest editorial headers at `clamp(1.6rem,1rem+1vw,2.2rem)` in the logo marquee. Reads as a real scale, not a random pile.
- Body line-height 1.55 set globally (`globals.css:79`) with `text-rendering: optimizeLegibility` and ss/cv font-feature-settings — careful work.
- Selection of `font-feature-settings: "ss01", "ss03", "cv11"` (`globals.css:80`) targets real Geist stylistic alternates.

**Defects:**
- **`fontVariationSettings` inlined 39× across 10 files** — see WARNING 8. The CSS only applies it on `h1-h4` and `.italic/em`; every `<span>` and `<div>` carrying display copy duplicates the string inline. Brittle.
- **~9 Tailwind size classes coexist with 20+ `text-[clamp(...)]` arbitrary values.** Grep shows `text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-6xl, text-7xl` used alongside arbitrary clamp scales. The fluid scales are deliberate, but `text-3xl`, `text-7xl` mixed in feel like residue from prototyping. **Fix:** pick either fluid clamp-everywhere or a small ladder; don't mix.
- **No explicit fallback font metrics** — Fraunces, Geist, JetBrains Mono are loaded via `next/font/google` with `display: 'swap'`. Without `adjustFontFallback` configuration in `layout.tsx:10-28`, swap will cause a visible layout shift on first paint. `next/font` does provide automatic fallback metric matching by default for some fonts — but Fraunces is variable + italic, and is the largest type on every page. Confirm CLS.
- Headline body copy max-width is uncontrolled in places — `app/about/page.tsx:67` uses `text-lg ink-mute leading-relaxed` with no max-width on the `<p>` other than the global 65ch (see WARNING 7). On a 1480px frame the column is constrained by the grid, but on edge cases this can look ragged.
- Citation in testimonial — `app/page.tsx:258` uses `<cite className="not-italic font-display text-xl">`. Cite is `font-style: italic` by user-agent stylesheet; the override is correct, but for a site that worships italic emphasis it's an inconsistency worth a re-read.

### Pillar 5 · Spacing (3 / 4)

**What's good:**
- `@utility frame` at `globals.css:153-157` gives every section a consistent `min(1480px, 94vw)` container with fluid padding. Used in every page section — no naked sections.
- Vertical rhythm is large and consistent: `py-24`, `py-28`, `max-md:py-16` is the dominant pattern. Editorial breathing room is preserved across pages.
- Hairline rules + section heads (`hairline-b pb-3 mb-12`) repeat at every section transition — the rhythm reads.
- Mobile spacing is explicitly compressed via `max-md:` modifiers; no naive `px-2 md:px-6` token-explosion.
- Form uses underline-only `field-line` (`globals.css:449-466`) — spacing is structural (border-bottom + padding-block) not decorative.

**Defects:**
- **Asymmetric stagger uses arbitrary `translate-y-12 / translate-y-16`** at `app/page.tsx:221` (Process), `app/about/page.tsx:108` (Values), `app/components/PortfolioGrid.tsx:149` (cases), `app/contact/page.tsx:129` (FAQ). Four pages, four files, repeated literals. Lift into a `.editorial-stagger` utility so the offset can change in one place.
- **`p { max-width: 65ch }` leaks** — see WARNING 7.
- **Mobile drawer top offset `top-[64px]`** (`Header.tsx:93`) — magic number, see Pillar 2 defects.
- Stat numerals use `clamp(3.2rem,2rem+4vw,6rem)` on home (`page.tsx:304`) but `clamp(2.8rem,1.6rem+3vw,5rem)` on about (`about/page.tsx:188`). Same component, different scale per page. Either intentional editorial sizing or drift — document either way.
- CTA section watermark at `page.tsx:288` uses `-right-6 -bottom-12 text-[28rem]` — three arbitrary values to place a single decorative glyph. Will need re-tuning at any layout change.
- `gap-` values across the site: `gap-3, gap-4, gap-6, gap-7, gap-10, gap-12`. Reasonably restrained but no explicit token mapping.

### Pillar 6 · Experience Design (2 / 4)

**What's good:**
- `prefers-reduced-motion` is genuinely honoured at `globals.css:660-673`: all animations are reduced to 0.01ms, marquees stop, cursor element is `display: none`, system cursor restored. `Cursor.tsx:11-12` and `MagneticButton.tsx:22-23` both check the media query before mounting — this is the correct two-layer defence.
- `:focus-visible` ring at `globals.css:676-679` — single signal-green outline, 2px / offset 3. Real accessibility, not a `outline: none` site.
- `pointer: coarse` correctly disables custom cursor and the magnetic effect (`globals.css:94-96`, `MagneticButton.tsx:23`).
- Form has loading + disabled + success + error states (`ContactForm.tsx:13, 15, 153, 159-170`); honeypot field (`:150`); `role="status"` on the status banner.
- Header has a real mobile drawer with `aria-expanded`, `aria-controls`, `aria-hidden`, body scroll-lock, route-change auto-close (`Header.tsx:73-126`).
- Scroll progress is rAF-throttled (`ScrollProgress.tsx:19-23`) — not a per-event setState.
- WordReveal and Reveal both gate on IntersectionObserver and fall back to immediate reveal if IO is absent (`WordReveal.tsx:27-30`, `Reveal.tsx:20-23`).

**Defects:**
- **`cursor: none` hard-coded on `.btn`, `.nav-link`, `.case-row`, `.service-slab`** — see WARNING 4. Visitors without the custom cursor JS get no cursor on interactive elements.
- **Error and success states are nearly indistinguishable** — see BLOCKER 2. Both use `border-[var(--color-ink)]`; only the bg differs (`bg-signal` for success, `bg-paper-2` for error per `ContactForm.tsx:163-166`). With message text the user can tell, but without it (e.g. announcement-suppressed) the colour code lies.
- **No `app/not-found.tsx`** — see WARNING 9.
- **No loading states for navigation** — every Link is full-route. Next 15 streams on App Router but there's no `loading.tsx` skeleton at app/, services/, portfolio/, or contact/. First navigation under cold cache will flash blank.
- **Custom cursor obscures the system cursor on `<summary>` elements**: `app/contact/page.tsx:133` uses `cursor-none list-none` to suppress the default disclosure marker. The disclosure marker is also a discoverability cue — its absence means users learn FAQ-as-expandable only by the `+` glyph rendered at `:137`. With the custom cursor disabled (no JS / reduced motion), `summary` becomes a `display:list-item` with no marker — verify the `+` still serves.
- **`ContactForm.tsx:172-177` ships the "replace WEB3FORMS_ACCESS_KEY" warning to production** because the check is a literal string compare. If the placeholder string survives to production (it currently does), every visitor sees a developer note. Gate it on `process.env.NODE_ENV === 'development'`.
- **Magnetic button at strength 18** with no test for trackpad inertia — on coarse pointers it short-circuits, good; on a wired mouse with high DPI / browser zoom 200% the math at `MagneticButton.tsx:30-31` (`Math.hypot` against `rect.width * 1.2`) may feel jittery. Worth verifying in a real browser.
- **Page route IDs in `index` numerals are not derived** — `[ 00 — index ]`, `[ 02 — services ]`, `[ 03 — selected work ]`, `[ 04 — studio ]`, `[ 05 — contact ]`. The portfolio page numbers itself `03 — selected work` but the home references `02 — selected work` for the same section (`page.tsx:127`). Numbering is inconsistent across pages and across sections within pages. The home page lists sections `00, 02, 03, 04, 05, 06` — there is no `01`. Either real editorial intent (the "01" is the hero itself) or off-by-one — document it.
- **`Ticker` component re-renders the marquee text twice in JSX (`Ticker.tsx:38-46`)** for the loop seam. Fine for CSS animation, but the `dot` separator between each item duplicates inside both copies — visually fine, but a screen reader reading the live region will hear the ticker doubled. Add `aria-hidden="true"` to `.ticker` (currently not present at `Ticker.tsx:36` — only `<div className="ticker">`).

---

## Files Audited

- `app/layout.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/portfolio/page.tsx`
- `app/contact/page.tsx`
- `app/globals.css`
- `app/components/Header.tsx`
- `app/components/Footer.tsx`
- `app/components/Cursor.tsx`
- `app/components/Ticker.tsx`
- `app/components/Marquee.tsx`
- `app/components/ScrollProgress.tsx`
- `app/components/MagneticButton.tsx`
- `app/components/WordReveal.tsx`
- `app/components/Reveal.tsx`
- `app/components/CaseStack.tsx`
- `app/components/StatCounter.tsx`
- `app/components/PortfolioGrid.tsx`
- `app/components/ContactForm.tsx`
- `app/components/LogoMarquee.tsx`
- `app/components/Icon.tsx`
- `README.md`

**Not visually verified** (no dev server / Playwright-MCP available): all layout, hover transitions, marquee playback, magnetic-cursor behaviour, font load shift, mobile drawer, focus rings. The findings above are derived from code reading, grep counts, and direct file-line citations only.

---

## Recommendation Count

- Blockers: 3
- Warnings: 7
- Overall: 16 / 24
