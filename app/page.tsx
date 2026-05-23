import Link from 'next/link';
import Reveal from './components/Reveal';
import WordReveal from './components/WordReveal';
import MagneticButton from './components/MagneticButton';
import LogoMarquee from './components/LogoMarquee';
import StatCounter from './components/StatCounter';
import Marquee from './components/Marquee';
import CaseStack, { type Case } from './components/CaseStack';

const SELECTED: Case[] = [
  { n: '01', title: 'Checkout 2.0', client: 'Northwind Retail', discipline: 'Web · E-commerce', year: '2026' },
  { n: '02', title: 'Cloud Re-Platform', client: 'Lumen Health', discipline: 'Cloud · Healthcare', year: '2025' },
  { n: '03', title: 'Companion App', client: 'Roam Travel', discipline: 'Mobile · Travel', year: '2025' },
  { n: '04', title: 'Trade Desk Dashboard', client: 'Finch Analytics', discipline: 'Web · Fintech', year: '2024' },
  { n: '05', title: 'Driver App', client: 'Atlas Logistics', discipline: 'Mobile · Logistics', year: '2024' },
];

const SERVICES = [
  { n: '01', name: 'Web Platforms', sub: 'Next.js · React · TypeScript' },
  { n: '02', name: 'Mobile Applications', sub: 'React Native · Swift · Kotlin' },
  { n: '03', name: 'Cloud & Infra', sub: 'AWS · GCP · Terraform · K8s' },
  { n: '04', name: 'Product Design', sub: 'Discovery · UX · Design Systems' },
];

const PROCESS = [
  { n: '01', label: 'Scope', body: 'A 30-minute call. We turn a fuzzy ask into a one-page brief with budget and timeline before you sign anything.' },
  { n: '02', label: 'Shape', body: 'Two weeks. Discovery, UX, technical spike. Output is a working prototype and a concrete plan.' },
  { n: '03', label: 'Ship', body: 'Six to twelve weeks. Weekly demos, Linear access, real commits. We ship to production every Friday.' },
  { n: '04', label: 'Sustain', body: 'Optional retainer. Observability, performance work, and roadmap pairing with your in-house team.' },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame relative pt-16 pb-24 max-md:pt-10 max-md:pb-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-8 items-end">
          <div className="col-span-12 flex items-baseline justify-between hairline-b pb-3">
            <span className="mono ink-mute">[ 00 — index ]</span>
            <span className="mono ink-mute hidden md:inline">2017 / ongoing</span>
            <span className="mono ink-faint">EST. iMax Studio</span>
          </div>

          <div className="col-span-12">
            <WordReveal
              as="h1"
              className="font-display leading-[0.92] tracking-[-0.04em] text-[clamp(3.4rem,1rem+10vw,11.5rem)] mt-12"
              italic={[4, 5, 6]}
              signal={[4]}
            >
              We engineer software that earns its place.
            </WordReveal>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-2 mt-10">
            <Reveal delay={300}>
              <p className="text-lg md:text-xl ink-mute leading-relaxed mb-8">
                iMax is a senior engineering studio working with founders and product teams on web platforms, mobile apps and cloud infrastructure that have to keep working after we leave.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton href="/contact" className="btn btn-primary">
                  Start a project
                </MagneticButton>
                <Link href="/portfolio" className="btn">Selected work</Link>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-4 md:col-start-9 mt-10">
            <Reveal delay={500}>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="live">Studio status</span>
                <span className="mono ink-faint">— live</span>
              </div>
              <p className="text-base ink leading-relaxed">
                Two slots open for <em className="italic signal">August 2026</em>. Most projects start with a 30-minute call. No deck, no follow-up sequence.
              </p>
              <div className="mt-8 hairline pt-5 mono ink-mute">
                Avg. response 4h 12m · last reply 09:42 PT
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ KINETIC HEADLINE STRIP ============ */}
      <section aria-hidden="true" className="py-6 border-y border-[var(--color-rule)] bg-paper-2">
        <Marquee speed={68} className="marquee-display">
          <span className="font-display text-[clamp(3rem,8vw,8rem)] leading-none tracking-[-0.04em] mr-12" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
            Senior engineering
          </span>
          <span className="font-display italic text-[clamp(3rem,8vw,8rem)] leading-none tracking-[-0.04em] mr-12 signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
            end&nbsp;to&nbsp;end
          </span>
          <span className="font-display text-[clamp(3rem,8vw,8rem)] leading-none tracking-[-0.04em] mr-12">
            ·
          </span>
          <span className="font-display text-[clamp(3rem,8vw,8rem)] leading-none tracking-[-0.04em] mr-12" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
            web · mobile · cloud
          </span>
          <span className="font-display italic text-[clamp(3rem,8vw,8rem)] leading-none tracking-[-0.04em] mr-12 signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
            shipped&nbsp;fridays
          </span>
          <span className="font-display text-[clamp(3rem,8vw,8rem)] leading-none tracking-[-0.04em] mr-12">
            ·
          </span>
        </Marquee>
      </section>

      {/* ============ TRUSTED BY ============ */}
      <section className="py-16 max-md:py-10">
        <div className="frame">
          <div className="flex items-baseline justify-between hairline-b pb-3 mb-10">
            <span className="index">In rotation</span>
            <span className="mono ink-faint">2024 — 2026</span>
          </div>
        </div>
        <LogoMarquee />
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className="frame py-24 max-md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-2">
          <div className="col-span-12 md:col-span-8 flex items-baseline gap-4">
            <span className="index">Selected work</span>
            <span className="mono ink-faint">/ 02</span>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <Link href="/portfolio" className="u-link mono ink">All projects ↗</Link>
          </div>
        </div>

        <CaseStack cases={SELECTED} />

        <div className="mt-10 flex items-baseline justify-between">
          <span className="mono ink-mute">5 of 24 shown</span>
          <Link href="/portfolio" className="btn">Open the archive</Link>
        </div>
      </section>

      {/* ============ SERVICES SLAB ============ */}
      <section className="frame py-24 max-md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-2">
          <div className="col-span-12 md:col-span-8 flex items-baseline gap-4">
            <span className="index">What we do</span>
            <span className="mono ink-faint">/ 03</span>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right mono ink-mute">
            Four disciplines, one team
          </div>
        </div>

        <div>
          {SERVICES.map((s) => (
            <Link
              key={s.n}
              href={`/services#${s.name.split(' ')[0].toLowerCase()}`}
              className="service-slab"
            >
              <span className="slab-idx ink-mute">{s.n}</span>
              <span className="slab-title">{s.name}</span>
              <span className="mono ink-mute justify-self-end">{s.sub}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ MANIFESTO + STATS ============ */}
      <section className="frame py-28 max-md:py-16">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 md:col-span-6">
            <span className="index">Manifesto</span>
            <WordReveal
              as="h2"
              className="font-display leading-[0.96] tracking-[-0.03em] text-[clamp(2.4rem,1.6rem+2.6vw,4.6rem)] mt-6"
              italic={[6, 7, 8, 9, 10, 11]}
              signal={[8]}
            >
              We don&apos;t sell sprints. We sell things that survive their first quarter.
            </WordReveal>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <Reveal>
              <p className="text-base ink-mute mb-6 leading-relaxed">
                Most software fails not at launch but at month four — when the demo wears off and the actual scale arrives. We design for that month. Senior people on every project, no juniors learning on your timeline, no agency-of-agency relay.
              </p>
              <p className="text-base ink-mute leading-relaxed">
                Every Friday you get a deploy and a one-page note. Every Monday we&apos;re in your standup. That&apos;s the whole rhythm.
              </p>
              <Link href="/about" className="btn btn-bare mt-8">Read the studio brief</Link>
            </Reveal>
          </div>
        </div>

        {/* Stats — solid ink, no gradients */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 mt-24 hairline pt-12">
          <Stat n="01" value={<><StatCounter target={124} suffix="" /></>} label="Projects shipped" sub="2017 — 2026" />
          <Stat n="02" value={<><StatCounter target={41} suffix="" /></>} label="Active partners" sub="across 6 industries" />
          <Stat n="03" value={<><StatCounter target={99.9} suffix="%" decimals={1} /></>} label="Uptime delivered" sub="rolling 12 months" />
          <Stat n="04" value={<><StatCounter target={11} suffix="d" /></>} label="Median kickoff" sub="brief → first commit" />
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="frame py-28 max-md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-12">
          <div className="col-span-12 md:col-span-8 flex items-baseline gap-4">
            <span className="index">How we work</span>
            <span className="mono ink-faint">/ 04</span>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right mono ink-mute">
            scope → shape → ship → sustain
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {PROCESS.map((p, i) => (
            <Reveal
              key={p.n}
              className={`col-span-12 md:col-span-6 ${i === 1 ? 'md:translate-y-12' : ''} ${i === 3 ? 'md:translate-y-12' : ''}`}
              delay={i * 90}
            >
              <article className="hairline-b pb-10">
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="font-display text-7xl tracking-tight leading-none ink-faint" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                    {p.n}
                  </span>
                  <h3 className="font-display italic text-3xl tracking-tight leading-none signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
                    {p.label}
                  </h3>
                </div>
                <p className="text-base ink-mute leading-relaxed">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIAL CARD ============ */}
      <section className="frame py-28 max-md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-12">
          <div className="col-span-12 md:col-span-8 flex items-baseline gap-4">
            <span className="index">In their words</span>
            <span className="mono ink-faint">/ 05</span>
          </div>
        </div>

        <Reveal>
          <blockquote className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-10 md:col-start-2">
              <p className="font-display text-[clamp(1.8rem,1.2rem+2vw,3.4rem)] leading-[1.08] tracking-[-0.025em]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                <span className="signal font-display italic" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>&ldquo;</span>
                iMax rebuilt our checkout in six weeks and we lifted conversion thirty-four percent. They were senior, fast, and the code is the cleanest we have ever inherited. They feel like part of us — the bar is permanently higher now.
                <span className="signal font-display italic" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>&rdquo;</span>
              </p>
              <footer className="mt-8 hairline pt-5 flex flex-wrap items-baseline gap-3">
                <cite className="not-italic font-display text-xl">Maria Chen</cite>
                <span className="mono ink-mute">Head of Product · Northwind Retail</span>
              </footer>
            </div>
          </blockquote>
        </Reveal>
      </section>

      {/* ============ CTA — bold ink slab ============ */}
      <section className="frame py-28 max-md:py-16">
        <Reveal>
          <div className="bg-ink p-12 md:p-20 relative overflow-hidden">
            <div className="grid grid-cols-12 gap-6 items-end relative z-10">
              <div className="col-span-12 md:col-span-8">
                <span className="mono" style={{ color: 'var(--color-paper-faint)' }}>[ 06 — outro ]</span>
                <h2 className="font-display mt-6 text-[clamp(2.6rem,1.4rem+4vw,6rem)] leading-[0.94] tracking-[-0.03em]" style={{ color: 'var(--color-paper)', fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                  Got something <em className="italic" style={{ color: 'var(--color-signal)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>worth building?</em>
                </h2>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <MagneticButton href="/contact" className="btn btn-signal">
                  Start a project
                </MagneticButton>
                <p className="mono mt-6" style={{ color: 'var(--color-paper-faint)' }}>
                  hello@imax.studio · reply &lt; 24h
                </p>
              </div>
            </div>

            {/* big watermark numeral */}
            <span aria-hidden="true" className="font-display absolute -right-6 -bottom-12 text-[28rem] leading-none tracking-[-0.06em] opacity-10 select-none pointer-events-none"
                  style={{ color: 'var(--color-signal)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>
              ↗
            </span>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Stat({ n, value, label, sub }: { n: string; value: React.ReactNode; label: string; sub: string }) {
  return (
    <Reveal>
      <div className="flex flex-col gap-3">
        <span className="mono ink-faint">{n}</span>
        <span className="stat-num text-[clamp(3.2rem,2rem+4vw,6rem)] tabular-nums">
          {value}
        </span>
        <div className="hairline pt-3">
          <div className="font-display text-base tracking-tight">{label}</div>
          <div className="mono ink-mute mt-1">{sub}</div>
        </div>
      </div>
    </Reveal>
  );
}
