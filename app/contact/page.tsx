import type { Metadata } from 'next';
import Reveal from '../components/Reveal';
import WordReveal from '../components/WordReveal';
import ContactForm from '../components/ContactForm';
import { IconMail, IconPin, IconClock } from '../components/Icon';

export const metadata: Metadata = {
  title: 'Contact — Start a project',
  description:
    "Tell us about your project. One business day, no sales loop. We'll come back with concrete next steps.",
};

const LINES = [
  { icon: <IconMail size={16} />, label: 'Mail', value: 'hello@codio.studio', href: 'mailto:hello@codio.studio' },
  { icon: <IconPin size={16} />, label: 'Studio', value: 'San Francisco · Remote-first' },
  { icon: <IconClock size={16} />, label: 'Hours', value: 'Mon — Fri · 09 — 18 PT' },
];

const FAQS = [
  {
    q: 'How fast can you start?',
    a: 'First call to first commit in under fourteen days, typically. We are opening a founding cohort of three engagements for 2026 — one is reserved, two are open right now.',
  },
  {
    q: 'You have no portfolio yet — why should I take the risk?',
    a: "Because the price reflects it. Founding-cohort engagements come with founder attention, fixed scope, and a discount that doesn't exist again. You get senior engineers who have shipped at scale elsewhere — just under a brand-new name.",
  },
  {
    q: 'What does an engagement cost?',
    a: 'A Sprint is fixed-price for two weeks. A Build runs as a fixed-scope, fixed-price six- to twelve-week engagement. An Embed is a day-rate with a monthly cap. Founding-cohort pricing is held below market — ask on the first call.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes — happy to sign yours, or we have a one-page mutual NDA we can send in two minutes.',
  },
  {
    q: 'Will my code be readable after you leave?',
    a: 'That is the point. Every project ends with an architecture brief, a README that actually documents the system, and a one-hour walk-through with your team.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="frame pt-16 pb-16 max-md:pt-10 max-md:pb-10">
        <div className="flex items-baseline justify-between hairline-b pb-3 mb-12">
          <span className="mono ink-mute">[ 05 — contact ]</span>
          <span className="live">Open · reply &lt; 24h</span>
        </div>

        <WordReveal
          as="h1"
          className="font-display leading-[0.93] tracking-[-0.04em] text-[clamp(3rem,1.6rem+6vw,9rem)]"
          italic={[3, 4]}
          signal={[4]}
        >
          Tell us what you&apos;re building.
        </WordReveal>

        <div className="grid grid-cols-12 gap-6 mt-10">
          <div className="col-span-12 md:col-span-6 md:col-start-2">
            <Reveal delay={250}>
              <p className="text-lg ink-mute leading-relaxed">
                One business day, no sales loop. Tell us where you are — first call, mid-build, or trying to rescue something. We&apos;ll come back with concrete next steps, and if you&apos;re a fit for the founding cohort we&apos;ll say so.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FORM + LINES ============ */}
      <section className="frame pb-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 items-start">
          {/* Left column — lines */}
          <aside className="col-span-12 md:col-span-4">
            <Reveal>
              <div className="flex items-baseline gap-4 hairline-b pb-3 mb-8">
                <span className="index">Direct lines</span>
              </div>

              <ul className="list-none p-0 space-y-6">
                {LINES.map((l) => (
                  <li key={l.label}>
                    <div className="flex items-baseline gap-3 mono ink-mute mb-1">
                      <span aria-hidden="true">{l.icon}</span>
                      <span>{l.label}</span>
                    </div>
                    {l.href ? (
                      <a href={l.href} className="font-display text-xl u-link ink" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                        {l.value}
                      </a>
                    ) : (
                      <div className="font-display text-xl ink" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>{l.value}</div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-12 hairline pt-6 mono ink-mute leading-relaxed">
                Form goes straight to a founder. Reply within one business day, every time.
              </div>
            </Reveal>
          </aside>

          {/* Right column — form */}
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <Reveal>
              <div className="flex items-baseline gap-4 hairline-b pb-3 mb-8">
                <span className="index">Project brief</span>
                <span className="mono ink-faint">— 4 fields</span>
              </div>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="frame py-28 max-md:py-16">
        <div className="grid grid-cols-12 gap-6 items-end hairline-b pb-4 mb-12">
          <div className="col-span-12 md:col-span-8 flex items-baseline gap-4">
            <span className="index">Frequently asked</span>
            <span className="mono ink-faint">/ 02</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {FAQS.map((f, i) => (
            <Reveal
              key={f.q}
              className={`col-span-12 md:col-span-6 ${i % 2 === 1 ? 'md:translate-y-10' : ''}`}
              delay={i * 80}
            >
              <details className="hairline-b py-6 group">
                <summary className="flex items-baseline justify-between cursor-none list-none">
                  <h3 className="font-display text-2xl leading-tight tracking-tight" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                    {f.q}
                  </h3>
                  <span className="mono ink-mute group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="text-base ink-mute leading-relaxed mt-4 max-w-[62ch]">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
