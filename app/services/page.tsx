import type { Metadata } from 'next';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import WordReveal from '../components/WordReveal';
import MagneticButton from '../components/MagneticButton';

export const metadata: Metadata = {
  title: 'Services — Web, mobile, cloud, design',
  description:
    'Web platforms, mobile applications, cloud infrastructure and product design — delivered end to end by senior engineers.',
};

type Service = {
  id: string;
  n: string;
  eyebrow: string;
  title: string;
  italicWords?: number[];
  signalWords?: number[];
  blurb: string;
  stack: string[];
  features: string[];
};

const SERVICES: Service[] = [
  {
    id: 'web',
    n: '01',
    eyebrow: 'Web Platforms',
    title: 'Web platforms engineered for performance and growth.',
    italicWords: [3, 5],
    signalWords: [5],
    blurb:
      'From marketing sites to mission-critical SaaS dashboards. We use Next.js, React and TypeScript the way they were designed to be used — server-rendered, accessible, and fast on every device people actually own.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Postgres', 'Redis', 'Vercel · Fly · AWS'],
    features: [
      'Marketing & content sites',
      'SaaS dashboards & admin tools',
      'Headless CMS (Sanity, Contentful)',
      'E-commerce (Shopify, Stripe)',
      'Core Web Vitals & SEO tuning',
      'Accessibility (WCAG 2.2 AA)',
    ],
  },
  {
    id: 'mobile',
    n: '02',
    eyebrow: 'Mobile Applications',
    title: 'Native-quality mobile apps on iOS and Android in parallel.',
    italicWords: [0, 1],
    signalWords: [1],
    blurb:
      'One engineering team, two stores, one codebase. React Native or Flutter where they shine, native Swift / Kotlin when native is the right call. App Store and Play submission managed end to end.',
    stack: ['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase', 'Sentry'],
    features: [
      'Cross-platform applications',
      'Native iOS & Android',
      'Offline-first architectures',
      'Push, deep-linking, IAP',
      'CI for app distribution',
      'Store submission & review',
    ],
  },
  {
    id: 'cloud',
    n: '03',
    eyebrow: 'Cloud & Infrastructure',
    title: 'Infrastructure built for reliability, observable by default.',
    italicWords: [2, 5],
    signalWords: [5],
    blurb:
      'AWS, GCP and Azure environments designed around your workload — not the other way around. Everything in code (Terraform, CDK), every deploy traceable, every spike alerted before users notice.',
    stack: ['Terraform', 'CDK', 'Kubernetes', 'AWS', 'GCP', 'Datadog · Grafana'],
    features: [
      'Cloud migration & re-architecture',
      'Infrastructure as Code',
      'CI/CD pipelines',
      'Kubernetes & serverless',
      'Observability stack',
      'Cost optimisation audits',
    ],
  },
  {
    id: 'design',
    n: '04',
    eyebrow: 'Product Design',
    title: 'Product design that ships with the code, not next quarter.',
    italicWords: [0, 1],
    signalWords: [1],
    blurb:
      'Discovery, UX, design systems and component libraries — built directly in Figma and React so engineering inherits, not interprets. We work alongside your team in the same Linear cycle.',
    stack: ['Figma', 'Tokens Studio', 'Storybook', 'Radix', 'Tailwind v4', 'Motion'],
    features: [
      'Discovery & UX research',
      'Design systems',
      'UI engineering',
      'Brand-into-product',
      'Component libraries',
      'Design ops & hand-off',
    ],
  },
];

const ENGAGEMENTS = [
  { n: '01', name: 'Sprint', sub: 'Two weeks', body: 'Discovery, spike, working prototype. We hand over a written plan and a budget you can take to your board.' },
  { n: '02', name: 'Build', sub: 'Six — twelve weeks', body: 'A bounded production build with weekly demos and Friday deploys. Fixed scope, fixed price.' },
  { n: '03', name: 'Embed', sub: 'Three — twelve months', body: 'We embed senior engineers into your team for ongoing roadmap work. Day-rate, monthly cap.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-16 pb-20 max-md:pt-10 max-md:pb-12">
        <div className="flex items-baseline justify-between hairline-b pb-3 mb-12">
          <span className="mono ink-mute">[ 02 — services ]</span>
          <span className="mono ink-faint">4 disciplines</span>
        </div>

        <WordReveal
          as="h1"
          className="font-display leading-[0.93] tracking-[-0.04em] text-[clamp(3rem,1.6rem+6vw,9rem)]"
          italic={[3, 4]}
          signal={[4]}
        >
          What we build for you.
        </WordReveal>

        <div className="grid grid-cols-12 gap-6 mt-10">
          <div className="col-span-12 md:col-span-6 md:col-start-2">
            <Reveal delay={240}>
              <p className="text-lg ink-mute leading-relaxed">
                Four disciplines, deeply practiced. Each one runs end-to-end — scope, shape, ship, sustain. Most engagements span two or three of them, and most start with a 30-minute call.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICES — long-form ============ */}
      <section className="frame">
        {SERVICES.map((s, i) => (
          <ServiceBlock key={s.id} service={s} reverse={i % 2 === 1} />
        ))}
      </section>

      {/* ============ ENGAGEMENT MODELS ============ */}
      <section className="frame py-28 max-md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-12">
          <div className="col-span-12 md:col-span-8 flex items-baseline gap-4">
            <span className="index">How to hire us</span>
            <span className="mono ink-faint">/ 02</span>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right mono ink-mute">
            Three engagement shapes
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.n} className="col-span-12 md:col-span-4" delay={i * 80}>
              <article className="hairline-b pb-10 h-full">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-6xl leading-none ink-faint" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>{e.n}</span>
                  <h3 className="font-display italic text-2xl leading-none signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>{e.name}</h3>
                </div>
                <div className="mono ink-mute mt-3 mb-5">{e.sub}</div>
                <p className="text-base ink-mute leading-relaxed">{e.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="frame py-28 max-md:py-16">
        <Reveal>
          <div className="bg-ink p-12 md:p-20">
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-8">
                <span className="mono" style={{ color: 'var(--color-paper-faint)' }}>[ 03 — start ]</span>
                <h2 className="font-display mt-6 text-[clamp(2.4rem,1.4rem+3vw,5rem)] leading-[0.94] tracking-[-0.03em]" style={{ color: 'var(--color-paper)', fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                  Pick a discipline. <em className="italic" style={{ color: 'var(--color-signal)', fontVariationSettings: '"opsz" 144, "SOFT" 100' }}>Or all four.</em>
                </h2>
                <p className="mt-6 max-w-[55ch]" style={{ color: 'var(--color-paper-mute)' }}>
                  Most of our engagements span multiple disciplines. Almost all start with a 30-minute scoping call. No slide deck, no follow-up sequence.
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <MagneticButton href="/contact" className="btn btn-signal">
                  Book a scoping call
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ServiceBlock({ service: s, reverse }: { service: Service; reverse: boolean }) {
  return (
    <article id={s.id} className="py-24 max-md:py-16 hairline-b scroll-mt-24">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className={`col-span-12 md:col-span-5 ${reverse ? 'md:col-start-8 md:order-2' : ''}`}>
          <div className="sticky top-28">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display text-[5rem] leading-none ink-faint" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>{s.n}</span>
              <span className="mono ink-mute">{s.eyebrow}</span>
            </div>
            <WordReveal
              as="h2"
              className="font-display leading-[0.96] tracking-[-0.03em] text-[clamp(2rem,1.2rem+2.5vw,4rem)]"
              italic={s.italicWords}
              signal={s.signalWords}
            >
              {s.title}
            </WordReveal>
          </div>
        </div>

        <div className={`col-span-12 md:col-span-6 ${reverse ? 'md:col-start-1 md:order-1' : 'md:col-start-7'}`}>
          <Reveal>
            <p className="text-base ink-mute leading-relaxed mb-10">{s.blurb}</p>

            <div className="hairline-b pb-5 mb-5 flex items-baseline justify-between">
              <span className="mono ink-mute">Stack</span>
              <span className="mono ink-faint">/ {s.stack.length.toString().padStart(2, '0')}</span>
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 mb-12 list-none p-0">
              {s.stack.map((t) => (
                <li key={t} className="font-display text-xl tracking-tight" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                  {t}
                </li>
              ))}
            </ul>

            <div className="hairline-b pb-5 mb-5 flex items-baseline justify-between">
              <span className="mono ink-mute">Capabilities</span>
              <span className="mono ink-faint">/ {s.features.length.toString().padStart(2, '0')}</span>
            </div>
            <ul className="grid gap-3 list-none p-0 mb-10">
              {s.features.map((f) => (
                <li key={f} className="flex items-baseline gap-3 text-base ink">
                  <span className="mono ink-faint mt-1">+</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn">Discuss a project</Link>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
