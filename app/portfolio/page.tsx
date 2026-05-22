import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import PortfolioGrid from '../components/PortfolioGrid';

export const metadata: Metadata = {
  title: 'Work — Case Studies',
  description: 'A selection of recent iMax engagements across web, mobile, and cloud.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-40 pb-16 text-center">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Selected work</span>
            <h1 className="text-[clamp(2.6rem,2rem+2.8vw,4.4rem)] font-display font-bold leading-[1.1] tracking-tight mt-4 mb-4">
              Outcomes, not <span className="text-gradient">just outputs.</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-[680px] mx-auto">
              A snapshot of recent engagements — what we built, who we built it with, and what it changed for the business.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <PortfolioGrid />
        </div>
      </section>

      <section className="py-24 max-md:py-16">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden p-16 max-md:p-10 text-center bg-gradient-soft border border-[var(--color-border-strong)] rounded-3xl">
              <span className="eyebrow">Your project, next</span>
              <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">Want to see your name in this grid?</h2>
              <p className="max-w-[540px] mx-auto mb-8 text-[var(--color-text-muted)]">
                Most of these started with one email. Yours can too.
              </p>
              <Link href="/contact" className="btn btn-primary btn-arrow">Start a project</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
