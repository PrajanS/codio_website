'use client';

import { useState, type ReactNode } from 'react';
import TiltCard from './TiltCard';
import { IconWeb, IconMobile, IconCloud } from './Icon';

type Category = 'web' | 'mobile' | 'cloud';

type Case = {
  title: string;
  tag: string;
  category: Category;
  blurb: string;
  metrics: { value: string; label: string }[];
};

const CASES: Case[] = [
  {
    title: 'Northwind Retail — Checkout 2.0',
    tag: 'Web · E-commerce',
    category: 'web',
    blurb: 'Rebuilt a legacy checkout into a Next.js + Stripe flow that lifted conversion across mobile and desktop.',
    metrics: [
      { value: '+34%', label: 'Conversion' },
      { value: '−62%', label: 'Page weight' },
    ],
  },
  {
    title: 'Lumen Health — Cloud Re-Platform',
    tag: 'Cloud · Healthcare',
    category: 'cloud',
    blurb: 'Migrated a HIPAA-bound workload from EC2 to ECS Fargate with full IaC and 24/7 observability.',
    metrics: [
      { value: '−41%', label: 'Monthly spend' },
      { value: '99.99%', label: 'Uptime' },
    ],
  },
  {
    title: 'Roam Travel — Companion App',
    tag: 'Mobile · Travel',
    category: 'mobile',
    blurb: 'Cross-platform React Native app with offline-first itineraries — shipped iOS & Android in parallel.',
    metrics: [
      { value: '4.8★', label: 'App Store rating' },
      { value: '90k', label: 'Installs in Q1' },
    ],
  },
  {
    title: 'Finch Analytics — Dashboard',
    tag: 'Web · Fintech',
    category: 'web',
    blurb: 'Real-time analytics dashboard with virtualized tables and WebSocket streams for trade desks.',
    metrics: [
      { value: '<80ms', label: 'p95 render' },
      { value: '12 desks', label: 'Live now' },
    ],
  },
  {
    title: 'Atlas Logistics — Driver App',
    tag: 'Mobile · Logistics',
    category: 'mobile',
    blurb: 'Native Android app for drivers with offline route caching and barcode-driven proof-of-delivery.',
    metrics: [
      { value: '−27%', label: 'Time per stop' },
      { value: '6 weeks', label: 'To launch' },
    ],
  },
  {
    title: 'Vector AI — ML Inference Cluster',
    tag: 'Cloud · AI/ML',
    category: 'cloud',
    blurb: 'GPU autoscaler on EKS with cold-start mitigation, cutting inference latency for a CV product.',
    metrics: [
      { value: '5.2×', label: 'Throughput' },
      { value: '−54%', label: 'GPU spend' },
    ],
  },
];

const FILTERS: { key: 'all' | Category; label: string }[] = [
  { key: 'all', label: 'All work' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'cloud', label: 'Cloud' },
];

const ICON_BY_CATEGORY: Record<Category, ReactNode> = {
  web: <IconWeb size={64} strokeWidth={1.2} />,
  mobile: <IconMobile size={64} strokeWidth={1.2} />,
  cloud: <IconCloud size={64} strokeWidth={1.2} />,
};

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const visible = filter === 'all' ? CASES : CASES.filter((c) => c.category === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {FILTERS.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all border ${
                active
                  ? 'bg-gradient-brand border-transparent text-white shadow-[0_8px_24px_-10px_rgba(99,102,241,0.6)]'
                  : 'bg-white/[0.03] border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-border-strong)]'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
        {visible.map((c) => (
          <TiltCard key={c.title} max={5} className="glass glass-border overflow-hidden rounded-2xl">
            <div className="aspect-[16/10] grid place-items-center bg-gradient-soft border-b border-[var(--color-border)] text-[#a5b4fc] relative z-[1]">
              {ICON_BY_CATEGORY[c.category]}
            </div>
            <div className="p-6 relative z-[1]">
              <span className="inline-block text-xs tracking-[0.16em] uppercase text-[#93c5fd] mb-3">{c.tag}</span>
              <h3 className="text-xl font-display font-bold mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)]">{c.blurb}</p>
              <div className="flex gap-6 mt-4 pt-4 border-t border-[var(--color-border)]">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <strong className="font-display block text-lg text-gradient">{m.value}</strong>
                    <span className="text-xs text-[var(--color-text-dim)]">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </>
  );
}
