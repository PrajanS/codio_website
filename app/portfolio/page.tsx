import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import WordReveal from '../components/WordReveal';
import MagneticButton from '../components/MagneticButton';

export const metadata: Metadata = {
  title: 'Work — Founding cohort open',
  description:
    'No portfolio yet, on purpose. Codio is opening a founding cohort of three engagements for 2026 — web, mobile, and cloud.',
};

const COHORT = [
  {
    n: '01',
    state: 'Reserved',
    discipline: 'Web · Platform',
    body: 'First cohort seat is held — kickoff scheduled for July. Scope: Next.js platform rebuild with auth, payments, and an internal admin.',
  },
  {
    n: '02',
    state: 'Open',
    discipline: 'Mobile · iOS / Android',
    body: 'Looking for a mobile build with a real team behind it — React Native or fully native, offline-first preferred. Six- to twelve-week build.',
  },
  {
    n: '03',
    state: 'Open',
    discipline: 'Cloud · Infra',
    body: 'Looking for a cloud engagement we can take end to end — migration, IaC, observability, cost work. Embed shape welcome too.',
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-16 pb-16 max-md:pt-10 max-md:pb-10">
        <div className="flex items-baseline justify-between hairline-b pb-3 mb-12">
          <span className="mono ink-mute">[ 03 — work ]</span>
          <span className="mono ink-faint">founding cohort · 2026</span>
        </div>

        <WordReveal
          as="h1"
          className="font-display leading-[0.93] tracking-[-0.04em] text-[clamp(3rem,1.6rem+6vw,9rem)]"
          italic={[0, 1, 2, 3]}
          signal={[3]}
        >
          No portfolio yet, on purpose.
        </WordReveal>

        <div className="grid grid-cols-12 gap-6 mt-10">
          <div className="col-span-12 md:col-span-7 md:col-start-2">
            <Reveal delay={240}>
              <p className="text-lg ink-mute leading-relaxed">
                Codio is brand new. Rather than fill this page with stock case studies from other companies the founders happened to work at, we&apos;d rather show you the work we&apos;re about to start — and reserve a seat for the work we&apos;re about to start with you.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ COHORT GRID ============ */}
      <section className="frame pb-24">
        <div className="hairline-b pb-3 mb-12 flex items-baseline justify-between flex-wrap gap-4">
          <div className="flex items-baseline gap-6 flex-wrap">
            <span className="index">Cohort intake</span>
            <span className="mono ink-mute">three seats</span>
          </div>
          <span className="mono ink-faint">1 reserved · 2 open</span>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          {COHORT.map((c, i) => {
            const open = c.state === 'Open';
            return (
              <Reveal
                key={c.n}
                className={`col-span-12 md:col-span-6 ${i === 1 ? 'md:translate-y-16' : ''}`}
                delay={i * 80}
              >
                <article className="group">
                  <div className="slot aspect-[4/3] mb-6 grid place-items-center">
                    <span className="slot-tag">{c.discipline}</span>
                    <span
                      className="font-display text-[8rem] leading-none tracking-[-0.04em] ink-faint group-hover:signal transition-colors duration-300"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40', fontStyle: 'italic' }}
                    >
                      {c.n}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-3">
                    <span className="mono ink-faint">{c.n} · 2026</span>
                    <span className={`mono ${open ? 'signal' : 'ink-mute'}`}>{c.state}</span>
                  </div>

                  <h3 className="font-display text-[clamp(1.8rem,1.1rem+1.4vw,2.8rem)] leading-[1.02] tracking-tight mb-3"
                      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                    {c.discipline}
                  </h3>

                  <p className="text-base ink-mute leading-relaxed mb-6 max-w-[58ch]">{c.body}</p>

                  {open && (
                    <div className="hairline pt-5">
                      <Link href="/contact" className="u-link mono ink">
                        Apply for this seat ↗
                      </Link>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-16 hairline pt-8 mono ink-mute max-w-[64ch] leading-relaxed">
          Once these three are underway we&apos;ll publish full case studies — scope, code, what changed for the business, what we got wrong. Until then, this page is intentionally honest about where we are.
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="frame py-28 max-md:py-16">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 items-baseline">
            <div className="col-span-12 md:col-span-8">
              <span className="index">Your project, next</span>
              <h2 className="font-display mt-6 text-[clamp(2.4rem,1.4rem+3vw,5rem)] leading-[0.95] tracking-[-0.03em]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                Want to be <em className="italic signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>case study 01?</em>
              </h2>
              <p className="text-base ink-mute mt-6 max-w-[55ch]">
                Two cohort seats are open. We&apos;ll write a one-page plan after the first call — no deck, no follow-up sequence.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <MagneticButton href="/contact" className="btn btn-primary">
                Apply to the cohort
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

