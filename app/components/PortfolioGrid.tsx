'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import StatCounter from './StatCounter';

type Category = 'web' | 'mobile' | 'cloud';

type Case = {
  n: string;
  title: string;
  client: string;
  tag: string;
  category: Category;
  blurb: string;
  metrics: { value: string; label: string }[];
  year: string;
};

const CASES: Case[] = [
  {
    n: '01',
    title: 'Checkout 2.0',
    client: 'Northwind Retail',
    tag: 'Web · E-commerce',
    category: 'web',
    blurb: 'Rebuilt a legacy checkout into a Next.js + Stripe flow that lifted conversion across mobile and desktop.',
    metrics: [
      { value: '+34%', label: 'Conversion' },
      { value: '−62%', label: 'Page weight' },
    ],
    year: '2026',
  },
  {
    n: '02',
    title: 'Cloud Re-Platform',
    client: 'Lumen Health',
    tag: 'Cloud · Healthcare',
    category: 'cloud',
    blurb: 'Migrated a HIPAA-bound workload from EC2 to ECS Fargate with full IaC and 24/7 observability.',
    metrics: [
      { value: '−41%', label: 'Monthly spend' },
      { value: '99.99%', label: 'Uptime' },
    ],
    year: '2025',
  },
  {
    n: '03',
    title: 'Companion App',
    client: 'Roam Travel',
    tag: 'Mobile · Travel',
    category: 'mobile',
    blurb: 'Cross-platform React Native app with offline-first itineraries — shipped iOS and Android in parallel.',
    metrics: [
      { value: '4.8★', label: 'App Store rating' },
      { value: '90k', label: 'Installs in Q1' },
    ],
    year: '2025',
  },
  {
    n: '04',
    title: 'Trade Desk Dashboard',
    client: 'Finch Analytics',
    tag: 'Web · Fintech',
    category: 'web',
    blurb: 'Real-time analytics dashboard with virtualised tables and WebSocket streams for twelve trade desks.',
    metrics: [
      { value: '<80ms', label: 'p95 render' },
      { value: '12', label: 'Desks live' },
    ],
    year: '2024',
  },
  {
    n: '05',
    title: 'Driver App',
    client: 'Atlas Logistics',
    tag: 'Mobile · Logistics',
    category: 'mobile',
    blurb: 'Native Android app for drivers with offline route caching and barcode-driven proof-of-delivery.',
    metrics: [
      { value: '−27%', label: 'Time per stop' },
      { value: '6 wks', label: 'To launch' },
    ],
    year: '2024',
  },
  {
    n: '06',
    title: 'ML Inference Cluster',
    client: 'Vector AI',
    tag: 'Cloud · AI / ML',
    category: 'cloud',
    blurb: 'GPU autoscaler on EKS with cold-start mitigation, cutting inference latency for a computer-vision product.',
    metrics: [
      { value: '5.2×', label: 'Throughput' },
      { value: '−54%', label: 'GPU spend' },
    ],
    year: '2024',
  },
];

const FILTERS: { key: 'all' | Category; label: string; n: string }[] = [
  { key: 'all', label: 'All work', n: '00' },
  { key: 'web', label: 'Web', n: '01' },
  { key: 'mobile', label: 'Mobile', n: '02' },
  { key: 'cloud', label: 'Cloud', n: '03' },
];

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const visible = filter === 'all' ? CASES : CASES.filter((c) => c.category === filter);

  return (
    <>
      {/* Filter bar */}
      <div className="frame">
        <div className="hairline-b pb-3 mb-8 flex items-baseline justify-between flex-wrap gap-4">
          <div className="flex items-baseline gap-6 flex-wrap">
            <span className="index">Filter</span>
            {FILTERS.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`relative flex items-baseline gap-2 text-base transition-colors ${active ? 'ink' : 'ink-mute hover:ink'}`}
                >
                  <span className="mono ink-faint">{f.n}</span>
                  <span className={`font-display tracking-tight ${active ? 'italic signal' : ''}`}
                        style={{ fontVariationSettings: active ? '"opsz" 144, "SOFT" 100' : '"opsz" 144, "SOFT" 40' }}>
                    {f.label}
                  </span>
                </button>
              );
            })}
          </div>
          <span className="mono ink-faint">
            <StatCounter target={visible.length} /> / {CASES.length} shown
          </span>
        </div>
      </div>

      {/* Cases — large editorial cards */}
      <div className="frame">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16">
          {visible.map((c, i) => (
            <Reveal
              key={c.n}
              className={`col-span-12 md:col-span-6 ${i % 4 === 1 ? 'md:translate-y-16' : ''} ${i % 4 === 3 ? 'md:translate-y-16' : ''}`}
              delay={i * 60}
            >
              <article className="group">
                {/* Visual slot */}
                <div className="slot aspect-[4/3] mb-6">
                  <span className="slot-tag">{c.tag}</span>
                  <CaseArtwork category={c.category} n={c.n} />
                </div>

                <div className="flex items-baseline justify-between mb-3">
                  <span className="mono ink-faint">{c.n} · {c.year}</span>
                  <span className="mono ink-mute">{c.client}</span>
                </div>

                <h3 className="font-display text-[clamp(1.8rem,1.1rem+1.4vw,2.8rem)] leading-[1.02] tracking-tight mb-3"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                  {c.title}
                </h3>

                <p className="text-base ink-mute leading-relaxed mb-6 max-w-[58ch]">{c.blurb}</p>

                <div className="flex gap-10 hairline pt-5">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-3xl tracking-tight signal" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
                        {m.value}
                      </div>
                      <div className="mono ink-mute mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {visible.length === 0 && (
          <div className="hairline pt-12 mono ink-mute text-center">
            No projects in this discipline yet — yours could be the first.
          </div>
        )}
      </div>
    </>
  );
}

function CaseArtwork({ category, n }: { category: Category; n: string }) {
  // SVG kinetic patterns — no stock imagery, no gradient slop
  const common = 'absolute inset-0 w-full h-full';
  if (category === 'web') {
    return (
      <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="400" height="300" fill="var(--color-paper-2)" />
        {Array.from({ length: 26 }).map((_, i) => (
          <line key={i} x1={i * 16} y1="0" x2={i * 16 - 80} y2="300" stroke="var(--color-ink)" strokeWidth="0.5" opacity="0.18" />
        ))}
        <text x="20" y="270" fontFamily="var(--font-display)" fontSize="120" fill="var(--color-ink)" opacity="0.85" style={{ fontStyle: 'italic' }}>
          {n}
        </text>
        <text x="350" y="40" fontFamily="var(--font-mono)" fontSize="9" textAnchor="end" fill="var(--color-ink)" opacity="0.5">
          WEB / 200 OK
        </text>
      </svg>
    );
  }
  if (category === 'mobile') {
    return (
      <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="400" height="300" fill="var(--color-paper-2)" />
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={20 + i * 30} y={40 + (i % 2) * 30} width="22" height={180 - (i % 3) * 30} fill="none" stroke="var(--color-ink)" strokeWidth="0.6" opacity="0.32" rx="3" />
        ))}
        <text x="20" y="270" fontFamily="var(--font-display)" fontSize="120" fill="var(--color-signal)" opacity="0.85">
          {n}
        </text>
        <text x="380" y="40" fontFamily="var(--font-mono)" fontSize="9" textAnchor="end" fill="var(--color-ink)" opacity="0.5">
          iOS · ANDROID
        </text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 300" className={common} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="300" fill="var(--color-paper-2)" />
      {Array.from({ length: 18 }).map((_, i) => (
        <circle key={i} cx={(i * 47) % 400} cy={(i * 67) % 300} r={4 + (i % 4) * 6} fill="none" stroke="var(--color-ink)" strokeWidth="0.6" opacity="0.25" />
      ))}
      <text x="20" y="270" fontFamily="var(--font-display)" fontSize="120" fill="var(--color-ink)" opacity="0.85" style={{ fontStyle: 'italic' }}>
        {n}
      </text>
      <text x="380" y="40" fontFamily="var(--font-mono)" fontSize="9" textAnchor="end" fill="var(--color-ink)" opacity="0.5">
        99.99% UP
      </text>
    </svg>
  );
}
