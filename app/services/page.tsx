import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import { IconWeb, IconMobile, IconCloud, IconCheck } from '../components/Icon';

export const metadata: Metadata = {
  title: 'Services — Web, Mobile, Cloud',
  description: 'Full-stack engineering services: web applications, native-quality mobile apps, and cloud infrastructure that scales.',
};

type Service = {
  id: string;
  eyebrow: string;
  title: string;
  icon: ReactNode;
  blurb: string;
  features: string[];
  reverse?: boolean;
};

const SERVICES: Service[] = [
  {
    id: 'web',
    eyebrow: 'Web Development',
    title: 'Web platforms engineered for performance and growth.',
    icon: <IconWeb size={88} strokeWidth={1.2} />,
    blurb: 'From marketing sites to mission-critical SaaS dashboards, we build web platforms that load fast, rank well, and scale as your team grows. Next.js, React, TypeScript — used the way they were designed to be.',
    features: [
      'Next.js & React applications',
      'Headless CMS (Sanity, Contentful)',
      'E-commerce (Shopify, Stripe)',
      'SaaS dashboards & internal tools',
      'Core Web Vitals & SEO tuning',
      'Accessibility (WCAG 2.2 AA)',
    ],
  },
  {
    id: 'mobile',
    eyebrow: 'Mobile App Development',
    title: 'Native-quality mobile apps on iOS and Android in parallel.',
    icon: <IconMobile size={88} strokeWidth={1.2} />,
    blurb: 'One engineering team, two stores, one codebase. We use React Native and Flutter where they shine — and drop into Swift or Kotlin when native is the right call. Submission and review managed end-to-end.',
    features: [
      'React Native & Flutter',
      'Native iOS (Swift) & Android (Kotlin)',
      'Offline-first architectures',
      'Push notifications & deep linking',
      'In-app purchases',
      'App Store & Play submission',
    ],
    reverse: true,
  },
  {
    id: 'cloud',
    eyebrow: 'Cloud Solutions',
    title: 'Cloud infrastructure built for reliability, observable by default.',
    icon: <IconCloud size={88} strokeWidth={1.2} />,
    blurb: "We design AWS, GCP, and Azure environments around your workload — not the other way around. Everything in code (Terraform, CDK), every deploy traceable, every spike alerted before users notice.",
    features: [
      'Cloud migration & architecture',
      'Infrastructure as Code (Terraform, CDK)',
      'CI/CD pipelines (GitHub Actions)',
      'Kubernetes & serverless',
      'Observability (Datadog, Grafana)',
      'Cost optimization audits',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16 text-center">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Capabilities</span>
            <h1 className="text-[clamp(2.6rem,2rem+2.8vw,4.4rem)] font-display font-bold leading-[1.1] tracking-tight mt-4 mb-4">
              What we <span className="text-gradient">build for you.</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-[680px] mx-auto">
              Three disciplines, deeply practiced. Each one runs end-to-end — discovery, design, build, deploy, and post-launch support.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container-x">
        {SERVICES.map((s) => (
          <ServiceDetail key={s.id} service={s} />
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 max-md:py-16">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden p-16 max-md:p-10 text-center bg-gradient-soft border border-[var(--color-border-strong)] rounded-3xl">
              <span className="eyebrow">No lock-in</span>
              <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">Pick a discipline. Or all three.</h2>
              <p className="max-w-[540px] mx-auto mb-8 text-[var(--color-text-muted)]">
                Most of our engagements span multiple services — and most start with a 30-minute scoping call. No commitment, no slide deck.
              </p>
              <Link href="/contact" className="btn btn-primary btn-arrow">Book a scoping call</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ServiceDetail({ service: s }: { service: Service }) {
  return (
    <section id={s.id} className="py-16 scroll-mt-24">
      <div className={`grid gap-12 items-center md:grid-cols-2 ${s.reverse ? '' : ''}`}>
        <Reveal className={s.reverse ? 'md:order-2' : ''}>
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="text-[clamp(1.8rem,1.4rem+1.6vw,2.6rem)] my-4">{s.title}</h2>
          <p className="text-[var(--color-text-muted)] mb-6">{s.blurb}</p>
          <ul className="grid grid-cols-2 gap-3 list-none p-0 mb-8 max-sm:grid-cols-1">
            {s.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]">
                <IconCheck size={18} className="text-[#a5b4fc] shrink-0 mt-0.5" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-ghost btn-arrow">Discuss a project</Link>
        </Reveal>

        <Reveal>
          <TiltCard className={`glass glass-border aspect-[4/3] grid place-items-center bg-gradient-soft rounded-2xl ${s.reverse ? 'md:order-1' : ''}`}>
            <div className="text-[#a5b4fc] relative z-[1]">{s.icon}</div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
