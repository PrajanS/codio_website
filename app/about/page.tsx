import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import WordReveal from '../components/WordReveal';
import MagneticButton from '../components/MagneticButton';

export const metadata: Metadata = {
  title: 'Studio — Two founders, one inbox',
  description:
    'Codio is a brand-new senior engineering studio. Founder-only on every commit. Founding cohort open for 2026.',
};

const VALUES = [
  {
    n: '01',
    title: 'Ship over polish',
    body: 'Real users teach more than reviews. We get a credible v1 in front of them quickly, then refine on signal — not in a vacuum.',
  },
  {
    n: '02',
    title: 'Maintainability is a feature',
    body: 'Anyone can write code that works today. We write code your team can change six months from now without flinching.',
  },
  {
    n: '03',
    title: 'Founder-only, end-to-end',
    body: 'The person who scopes your project is the person who writes the code. No junior handoffs, no telephone game.',
  },
  {
    n: '04',
    title: 'Transparency by default',
    body: 'You see our Linear board, our commits, our deploys. If something is slipping you hear it from us first — not at the next review.',
  },
];

const FOUNDERS = [
  {
    initials: 'EN',
    role: 'Founder · Engineering',
    bio: 'Backend, cloud, and platform work. A decade across SaaS, fintech, and infra teams — most recently as a staff engineer shipping production systems at scale.',
    tag: 'Next.js · Node · AWS · Postgres',
  },
  {
    initials: 'DX',
    role: 'Founder · Design & Product',
    bio: 'Product design and UX engineering. Years spent turning fuzzy briefs into shipped interfaces — consumer apps, B2B dashboards, design systems that survive a rewrite.',
    tag: 'Figma · React · Design Systems',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-16 pb-24 max-md:pt-10 max-md:pb-16">
        <div className="flex items-baseline justify-between hairline-b pb-3 mb-12">
          <span className="mono ink-mute">[ 04 — studio ]</span>
          <span className="mono ink-faint">EST. 2026 · founding year</span>
        </div>

        <WordReveal
          as="h1"
          className="font-display leading-[0.94] tracking-[-0.04em] text-[clamp(3rem,1.6rem+6vw,9rem)]"
          italic={[4, 5, 6]}
          signal={[6]}
        >
          Two founders. One inbox. No middle layer.
        </WordReveal>

        <div className="grid grid-cols-12 gap-6 mt-12">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <Reveal delay={250}>
              <p className="text-lg ink-mute leading-relaxed">
                Codio is a brand-new senior engineering studio, founded in 2026 by two practitioners who spent the last decade shipping software inside other people&apos;s companies. We&apos;re starting deliberately small — founder-only on every commit — and opening a founding cohort of three engagements for our first year.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Reveal delay={400}>
              <p className="text-base ink-mute leading-relaxed">
                Every project gets founder attention because there is no one for it to roll downhill to. The people you talk to in the first call are the people writing the code on day one — and on the last day too.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ NUMBERS STRIP ============ */}
      <section className="bg-paper-2 hairline hairline-b py-16 max-md:py-10">
        <div className="frame grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <Num n="01" v="2" label="Founders on every commit" />
          <Num n="02" v="3" label="Founding-cohort slots" />
          <Num n="03" v="1" label="Reserved · 2 open" />
          <Num n="04" v="2026" label="Founding year" />
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="frame py-28 max-md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-12">
          <div className="col-span-12 md:col-span-8 flex items-baseline gap-4">
            <span className="index">What we believe</span>
            <span className="mono ink-faint">/ 02</span>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right mono ink-mute">
            Four values · every project
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {VALUES.map((v, i) => (
            <Reveal
              key={v.n}
              className={`col-span-12 md:col-span-6 ${i % 2 === 1 ? 'md:translate-y-12' : ''}`}
              delay={i * 80}
            >
              <article className="hairline-b pb-12">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-7xl tracking-tight leading-none ink-faint" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                    {v.n}
                  </span>
                  <h3 className="font-display italic text-3xl tracking-tight leading-none signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                    {v.title}
                  </h3>
                </div>
                <p className="text-base ink-mute leading-relaxed">{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FOUNDERS ============ */}
      <section className="frame py-28 max-md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-12">
          <div className="col-span-12 md:col-span-8 flex items-baseline gap-4">
            <span className="index">The founders</span>
            <span className="mono ink-faint">/ 03</span>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right mono ink-mute">
            People you actually work with
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-2">
          {FOUNDERS.map((p, i) => (
            <Reveal key={p.initials} className="col-span-12 md:col-span-6" delay={i * 80}>
              <article className="hairline-b py-8 grid grid-cols-[88px_1fr_auto] gap-6 items-baseline group">
                <div className="font-display text-[3.4rem] leading-none tracking-tight ink-faint group-hover:signal group-hover:italic transition-colors duration-300" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                  {p.initials}
                </div>
                <div>
                  <h4 className="font-display text-2xl leading-tight tracking-tight" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>Founder</h4>
                  <div className="mono ink-mute mt-1">{p.role}</div>
                  <p className="text-sm ink-mute mt-3 max-w-[42ch] leading-relaxed">{p.bio}</p>
                </div>
                <div className="mono ink-faint text-right">{p.tag}</div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mono ink-mute mt-10 max-w-[60ch]">
          We&apos;ll add named bios and photos once the founding cohort is underway. For now, you get the work; the introductions happen on the first call.
        </p>
      </section>

      {/* ============ CTA ============ */}
      <section className="frame py-28 max-md:py-16">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 items-baseline">
            <div className="col-span-12 md:col-span-8">
              <span className="index">Work with us</span>
              <h2 className="font-display mt-6 text-[clamp(2.4rem,1.4rem+3vw,5rem)] leading-[0.95] tracking-[-0.03em]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                Bring us in <em className="italic signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>early</em>. We&apos;ve seen both sides of the table.
              </h2>
              <p className="text-base ink-mute mt-6 max-w-[55ch]">
                Whether you are at the napkin-sketch stage or three sprints from launch, we can help. Every engagement starts with a 30-minute call.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <MagneticButton href="/contact" className="btn btn-primary">
                Apply to the cohort
              </MagneticButton>
              <p className="mono ink-mute mt-6">Reply within one business day</p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Num({ n, v, label }: { n: string; v: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="mono ink-faint">{n}</span>
      <span className="stat-num text-[clamp(2.8rem,1.6rem+3vw,5rem)] tabular-nums">{v}</span>
      <span className="mono ink-mute">{label}</span>
    </div>
  );
}
