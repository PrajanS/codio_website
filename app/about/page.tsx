import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import WordReveal from '../components/WordReveal';
import MagneticButton from '../components/MagneticButton';
import StatCounter from '../components/StatCounter';

export const metadata: Metadata = {
  title: 'Studio — Engineers, designers, strategists',
  description:
    'Codio is an eight-person engineering studio. Senior, end-to-end, deliberately small.',
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
    title: 'Senior, end-to-end',
    body: 'The engineer who scopes your project is the one who builds it. No junior handoffs, no telephone game.',
  },
  {
    n: '04',
    title: 'Transparency by default',
    body: 'You see our Linear board, our commits, our deploys. If something is slipping you hear it from us first.',
  },
];

const TEAM = [
  { initials: 'SR', name: 'Sara Reyes', role: 'Founder · Engineering', bio: 'Backend & cloud architecture. Previously staff engineer at two Series-B SaaS companies.', tag: 'AWS · Postgres · Go' },
  { initials: 'JM', name: 'Jamal Martin', role: 'Founder · Design', bio: 'Product design & UX systems. Twelve years across consumer and B2B.', tag: 'Figma · Design Systems' },
  { initials: 'PK', name: 'Priya Kapoor', role: 'Lead · Mobile', bio: 'React Native & Swift specialist. Shipped fourteen apps to the App Store.', tag: 'RN · Swift · Kotlin' },
  { initials: 'TO', name: 'Tom Olsen', role: 'Lead · Cloud / DevOps', bio: 'AWS Solutions Architect Pro. Loves shaving milliseconds off cold starts.', tag: 'AWS · Terraform · K8s' },
  { initials: 'LF', name: 'Lena Fischer', role: 'Senior · Frontend', bio: 'React, TypeScript, accessibility. Writes interfaces people forget are made of code.', tag: 'React · A11y · Motion' },
  { initials: 'AN', name: 'Alex Nakamura', role: 'Senior · Backend', bio: 'Distributed systems, databases, performance work. Postgres optimizer whisperer.', tag: 'Distributed · Postgres' },
];

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-16 pb-24 max-md:pt-10 max-md:pb-16">
        <div className="flex items-baseline justify-between hairline-b pb-3 mb-12">
          <span className="mono ink-mute">[ 04 — studio ]</span>
          <span className="mono ink-faint">EST. 2017</span>
        </div>

        <WordReveal
          as="h1"
          className="font-display leading-[0.94] tracking-[-0.04em] text-[clamp(3rem,1.6rem+6vw,9rem)]"
          italic={[5, 6, 7]}
          signal={[7]}
        >
          Eight people. One inbox each. No middle layer.
        </WordReveal>

        <div className="grid grid-cols-12 gap-6 mt-12">
          <div className="col-span-12 md:col-span-5 md:col-start-2">
            <Reveal delay={250}>
              <p className="text-lg ink-mute leading-relaxed">
                Codio began as a two-person studio in San Francisco — a backend engineer and a designer tired of well-funded ideas dying in long discovery phases. Today we are eight, deliberately small, and still hands-on.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9">
            <Reveal delay={400}>
              <p className="text-base ink-mute leading-relaxed">
                Every project gets senior attention because there is no one for it to roll downhill to. The same people you talk to in the first call are the people writing your code on day one.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ NUMBERS STRIP ============ */}
      <section className="bg-paper-2 hairline hairline-b py-16 max-md:py-10">
        <div className="frame grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          <Num n="01" v={<StatCounter target={8} />} label="People on the team" />
          <Num n="02" v={<StatCounter target={9} suffix=" yrs" />} label="Average tenure in role" />
          <Num n="03" v={<StatCounter target={124} />} label="Projects shipped" />
          <Num n="04" v={<StatCounter target={6} />} label="Industries served" />
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

      {/* ============ TEAM ============ */}
      <section className="frame py-28 max-md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-12">
          <div className="col-span-12 md:col-span-8 flex items-baseline gap-4">
            <span className="index">The team</span>
            <span className="mono ink-faint">/ 03</span>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right mono ink-mute">
            People you actually work with
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-2">
          {TEAM.map((p, i) => (
            <Reveal key={p.name} className="col-span-12 md:col-span-6" delay={i * 60}>
              <article className="hairline-b py-8 grid grid-cols-[88px_1fr_auto] gap-6 items-baseline group">
                <div className="font-display text-[3.4rem] leading-none tracking-tight ink-faint group-hover:signal group-hover:italic transition-colors duration-300" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                  {p.initials}
                </div>
                <div>
                  <h4 className="font-display text-2xl leading-tight tracking-tight" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>{p.name}</h4>
                  <div className="mono ink-mute mt-1">{p.role}</div>
                  <p className="text-sm ink-mute mt-3 max-w-[42ch] leading-relaxed">{p.bio}</p>
                </div>
                <div className="mono ink-faint text-right">{p.tag}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="frame py-28 max-md:py-16">
        <Reveal>
          <div className="grid grid-cols-12 gap-6 items-baseline">
            <div className="col-span-12 md:col-span-8">
              <span className="index">Work with us</span>
              <h2 className="font-display mt-6 text-[clamp(2.4rem,1.4rem+3vw,5rem)] leading-[0.95] tracking-[-0.03em]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                Bring us in <em className="italic signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>early</em>. Or <em className="italic signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>late</em>. We&apos;ve seen both.
              </h2>
              <p className="text-base ink-mute mt-6 max-w-[55ch]">
                Whether you are at the napkin-sketch stage or three sprints from launch, we can help. Most engagements start with a 30-minute call.
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <MagneticButton href="/contact" className="btn btn-primary">
                Get in touch
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
