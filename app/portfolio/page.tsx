import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import WordReveal from '../components/WordReveal';
import MagneticButton from '../components/MagneticButton';
import PortfolioGrid from '../components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Selected work — Archive 2024 — 2026',
  description: 'A selection of recent Codio engagements across web, mobile and cloud.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-16 pb-16 max-md:pt-10 max-md:pb-10">
        <div className="flex items-baseline justify-between hairline-b pb-3 mb-12">
          <span className="mono ink-mute">[ 03 — selected work ]</span>
          <span className="mono ink-faint">24 projects · 2017 — 2026</span>
        </div>

        <WordReveal
          as="h1"
          className="font-display leading-[0.93] tracking-[-0.04em] text-[clamp(3rem,1.6rem+6vw,9rem)]"
          italic={[0, 1, 2]}
          signal={[2]}
        >
          Outcomes, not outputs.
        </WordReveal>

        <div className="grid grid-cols-12 gap-6 mt-10">
          <div className="col-span-12 md:col-span-6 md:col-start-2">
            <Reveal delay={240}>
              <p className="text-lg ink-mute leading-relaxed">
                A snapshot of recent engagements — what we built, who we built it with, and what it changed for the business. Filter by discipline.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ GRID ============ */}
      <section className="pb-24">
        <PortfolioGrid />
      </section>

      {/* ============ CTA ============ */}
      <section className="frame py-28 max-md:py-16">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 items-baseline">
            <div className="col-span-12 md:col-span-8">
              <span className="index">Your project, next</span>
              <h2 className="font-display mt-6 text-[clamp(2.4rem,1.4rem+3vw,5rem)] leading-[0.95] tracking-[-0.03em]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                Want to see your name <em className="italic signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>in the archive?</em>
              </h2>
              <p className="text-base ink-mute mt-6 max-w-[55ch]">
                Most of these started with one email. Yours can too.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <MagneticButton href="/contact" className="btn btn-primary">
                Start a project
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
