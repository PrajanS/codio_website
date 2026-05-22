import type { Metadata } from 'next';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import { IconTarget, IconWrench, IconHandshake, IconRuler } from '../components/Icon';

export const metadata: Metadata = {
  title: 'About — Engineers, Designers, Strategists',
  description: 'Meet the senior software team behind iMax. Our mission, values, and the people building your next product.',
};

const VALUES: { icon: ReactNode; title: string; body: string }[] = [
  { icon: <IconTarget size={28} />, title: 'Ship over polish', body: 'The best feedback comes from real users. We get to a credible v1 fast, then refine with data — not in a vacuum.' },
  { icon: <IconWrench size={28} />, title: 'Maintainability is a feature', body: 'Anyone can write code that works today. We write code your team can change six months from now without flinching.' },
  { icon: <IconHandshake size={28} />, title: 'Senior, end-to-end', body: 'The engineer who scopes your project is the engineer who builds it. No junior handoffs, no telephone game.' },
  { icon: <IconRuler size={28} />, title: 'Transparency by default', body: "You see our Linear board, our commits, our deploys. If something's slipping, you'll hear it from us first." },
];

const TEAM = [
  { initials: 'SR', name: 'Sara Reyes', role: 'Founder · Engineering', bio: 'Backend & cloud architecture. Previously staff engineer at two Series-B SaaS companies.' },
  { initials: 'JM', name: 'Jamal Martin', role: 'Founder · Design', bio: 'Product design & UX systems. 12 years across consumer and B2B.' },
  { initials: 'PK', name: 'Priya Kapoor', role: 'Lead · Mobile', bio: 'React Native & Swift specialist. Shipped 14 apps to the App Store.' },
  { initials: 'TO', name: 'Tom Olsen', role: 'Lead · Cloud / DevOps', bio: 'AWS Solutions Architect Pro. Loves shaving milliseconds off cold starts.' },
  { initials: 'LF', name: 'Lena Fischer', role: 'Senior · Frontend', bio: 'React, TypeScript, accessibility. Writes interfaces people forget are made of code.' },
  { initials: 'AN', name: 'Alex Nakamura', role: 'Senior · Backend', bio: 'Distributed systems, databases, performance work. Postgres optimizer whisperer.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-16 text-center">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">About iMax</span>
            <h1 className="text-[clamp(2.6rem,2rem+2.8vw,4.4rem)] font-display font-bold leading-[1.1] tracking-tight mt-4 mb-4">
              We're a small team building <span className="text-gradient">durable software.</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-[680px] mx-auto mt-4">
              No agencies of agencies, no offshore relays. Just senior engineers, designers, and strategists working directly with you — from kickoff to ship day and beyond.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-md:py-16">
        <div className="container-x grid gap-8 md:grid-cols-2 items-center">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">Started in 2017. Still hands-on today.</h2>
            <p className="text-[var(--color-text-muted)] mb-4">
              iMax began as a two-person studio — a backend engineer and a designer who got tired of seeing well-funded ideas die in long discovery phases. We started shipping projects in weeks instead of quarters, and the work compounded from there.
            </p>
            <p className="text-[var(--color-text-muted)]">
              Today we're a team of eight, deliberately small. Every project gets senior attention because there's no one else for it to roll downhill to.
            </p>
          </Reveal>

          <Reveal>
            <div className="glass glass-border p-12 text-center">
              <div className="font-display font-bold text-gradient text-[clamp(3rem,2rem+4vw,5rem)] leading-none">8</div>
              <p className="mt-3">years of building software for teams across SaaS, healthtech, retail, and fintech.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 max-md:py-16">
        <div className="container-x">
          <Reveal className="text-center max-w-[720px] mx-auto mb-14">
            <span className="eyebrow">What we believe</span>
            <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">Four values. Every project, every day.</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {VALUES.map((v) => (
              <Reveal key={v.title}>
                <TiltCard className="glass glass-border p-8 h-full rounded-2xl">
                  <div className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-gradient-soft border border-[var(--color-border-strong)] mb-4 text-[#a5b4fc] relative z-[1]">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 relative z-[1]">{v.title}</h3>
                  <p className="text-[var(--color-text-muted)] relative z-[1]">{v.body}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-md:py-16">
        <div className="container-x">
          <Reveal className="text-center max-w-[720px] mx-auto mb-14">
            <span className="eyebrow">The team</span>
            <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">People you'll actually work with.</h2>
            <p className="text-[var(--color-text-muted)]">Eight people. Eight inboxes. No middle layer.</p>
          </Reveal>

          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {TEAM.map((p) => (
              <Reveal key={p.name}>
                <TiltCard max={5} className="glass glass-border p-6 text-center h-full rounded-2xl">
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 grid place-items-center font-display font-bold text-3xl text-white bg-gradient-brand relative z-[1]">
                    {p.initials}
                  </div>
                  <h4 className="text-lg font-display font-bold mb-1 relative z-[1]">{p.name}</h4>
                  <div className="text-xs tracking-[0.14em] uppercase text-[#93c5fd] mb-3 relative z-[1]">{p.role}</div>
                  <p className="text-sm text-[var(--color-text-muted)] relative z-[1]">{p.bio}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-md:py-16">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden p-16 max-md:p-10 text-center bg-gradient-soft border border-[var(--color-border-strong)] rounded-3xl">
              <span className="eyebrow">Work with us</span>
              <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">Bring us in early. Or late. We've seen both.</h2>
              <p className="max-w-[540px] mx-auto mb-8 text-[var(--color-text-muted)]">
                Whether you're at the napkin-sketch stage or three sprints from launch, we can help.
              </p>
              <Link href="/contact" className="btn btn-primary btn-arrow">Get in touch</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
