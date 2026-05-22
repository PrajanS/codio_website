import Link from 'next/link';
import Reveal from './components/Reveal';
import StatCounter from './components/StatCounter';
import Spotlight from './components/Spotlight';
import MagneticButton from './components/MagneticButton';
import TiltCard from './components/TiltCard';
import LogoMarquee from './components/LogoMarquee';
import { IconWeb, IconMobile, IconCloud, IconSparkle } from './components/Icon';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Spotlight>
        <section className="relative min-h-[92vh] grid place-items-center pt-24 overflow-hidden">
          <div className="hero-orb w-[420px] h-[420px] top-[8%] -left-[8%] bg-[var(--color-brand-1)]" />
          <div className="hero-orb w-[460px] h-[460px] bottom-0 -right-[10%] bg-[var(--color-brand-3)]" style={{ animationDelay: '-4s' }} />
          <div className="hero-orb w-[260px] h-[260px] top-[30%] right-[30%] bg-[var(--color-brand-2)] opacity-40" style={{ animationDelay: '-7s' }} />

          <Reveal className="container-x text-center max-w-[940px] relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border-strong)] bg-white/[0.03] backdrop-blur-md mb-6">
              <span className="live-dot" />
              <span className="text-xs tracking-[0.14em] uppercase text-[var(--color-text-muted)]">
                Taking new projects · Q3
              </span>
            </div>

            <h1 className="text-[clamp(2.8rem,2rem+4vw,5.6rem)] font-display font-bold leading-[1.05] tracking-tight my-4">
              Engineering that <span className="text-gradient">moves business</span> forward.
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-[640px] mx-auto">
              iMax partners with ambitious teams to design, build, and scale high-performance digital products — from first prototype to global rollout.
            </p>

            <div className="mt-12 flex gap-3 justify-center flex-wrap">
              <MagneticButton href="/contact" className="btn btn-primary btn-arrow">
                Start a project
              </MagneticButton>
              <Link href="/services" className="btn btn-ghost">Explore services</Link>
            </div>

            <div className="mt-16 grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6 max-w-[760px] mx-auto">
              <Stat target={120} suffix="+" label="Projects shipped" />
              <Stat target={40} suffix="+" label="Industry partners" />
              <Stat target={99.9} suffix="%" label="Uptime delivered" />
              <Stat target={8} suffix="yrs" label="Building software" />
            </div>
          </Reveal>
        </section>
      </Spotlight>

      {/* Trusted by */}
      <section className="py-12">
        <div className="container-x">
          <Reveal>
            <p className="text-center text-xs tracking-[0.2em] uppercase text-[var(--color-text-dim)] mb-8">
              Trusted by teams at
            </p>
            <LogoMarquee />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 max-md:py-16">
        <div className="container-x">
          <Reveal className="text-center max-w-[720px] mx-auto mb-14">
            <span className="eyebrow">What we do</span>
            <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">
              Three disciplines. One engineering team.
            </h2>
            <p className="text-[var(--color-text-muted)]">
              We focus on the disciplines that compound — web, mobile, and cloud — so every layer of your product moves in step.
            </p>
          </Reveal>

          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <ServiceCard
              icon={<IconWeb size={28} />}
              title="Web Development"
              blurb="Modern, performant web platforms built with React, Next.js, and battle-tested architectures that scale with traffic and team size."
              bullets={['Marketing sites & SaaS dashboards', 'Headless CMS & e-commerce', 'Core Web Vitals tuned for SEO']}
            />
            <ServiceCard
              icon={<IconMobile size={28} />}
              title="Mobile Applications"
              blurb="Native-quality iOS & Android apps via React Native and Flutter — one team, one codebase, two platforms shipped in parallel."
              bullets={['Cross-platform apps', 'Real-time & offline-first', 'App Store & Play submission']}
            />
            <ServiceCard
              icon={<IconCloud size={28} />}
              title="Cloud Solutions"
              blurb="AWS, GCP, and Azure infrastructure designed for reliability — infrastructure-as-code, CI/CD pipelines, and 24/7 observability."
              bullets={['Cloud migration & architecture', 'DevOps & CI/CD', 'Cost optimization audits']}
            />
          </div>

          <Reveal className="text-center mt-12">
            <Link href="/services" className="btn btn-ghost btn-arrow">See all capabilities</Link>
          </Reveal>
        </div>
      </section>

      {/* Why iMax */}
      <section className="py-24 max-md:py-16">
        <div className="container-x grid gap-6 md:grid-cols-2 items-center">
          <Reveal>
            <span className="eyebrow">Why iMax</span>
            <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">
              A senior team that ships — not pitches.
            </h2>
            <p className="text-[var(--color-text-muted)] mb-6">
              We're a tight team of engineers, designers, and product strategists. No layers, no handoffs — the person you talk to is the person building your product. That's how we keep timelines short and quality high.
            </p>
            <Link href="/about" className="btn btn-ghost btn-arrow">Our story</Link>
          </Reveal>

          <Reveal>
            <TiltCard className="glass glass-border shimmer-border p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-6 relative z-[1]">
                <MiniStat title="Senior" body="Average 8+ years of engineering experience on every project." />
                <MiniStat title="Fixed-scope" body="Transparent pricing, milestone-based delivery — no surprises." />
                <MiniStat title="Open source" body="We contribute back to the tools we build on — and so will your team." />
                <MiniStat title="Hand-off ready" body="Documented, tested, and easy to maintain after we ship." />
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-md:py-16">
        <div className="container-x">
          <Reveal className="text-center max-w-[720px] mx-auto mb-14">
            <span className="eyebrow">Social proof</span>
            <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">Teams ship faster with iMax.</h2>
          </Reveal>

          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            <Testimonial
              quote="iMax rebuilt our checkout flow in six weeks. Conversion is up 34% and our internal team didn't lose a single sprint. They feel like part of us."
              name="Maria Chen"
              role="Head of Product, Northwind Retail"
              initial="M"
            />
            <Testimonial
              quote="Our cloud bill dropped 41% the quarter after iMax came in. The audit alone paid for itself in the first month. Best technical hire we've made."
              name="David Okafor"
              role="CTO, Lumen Health"
              initial="D"
            />
            <Testimonial
              quote="They shipped both apps to the App Store and Play Store on the same day — and the code is the cleanest we've ever inherited. Bar is high now."
              name="Aisha Patel"
              role="Founder, Roam Travel"
              initial="A"
            />
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-24 max-md:py-16">
        <div className="container-x">
          <Reveal>
            <Spotlight>
              <div className="relative overflow-hidden p-16 max-md:p-10 text-center bg-gradient-soft border border-[var(--color-border-strong)] rounded-3xl">
                <span className="eyebrow justify-center">
                  <IconSparkle size={14} /> Ready when you are
                </span>
                <h2 className="text-[clamp(2rem,1.6rem+1.8vw,3rem)] my-4">Let's build the next thing.</h2>
                <p className="max-w-[540px] mx-auto mb-8 text-[var(--color-text-muted)]">
                  Tell us about your roadmap. We'll respond within one business day with a concrete next step — no sales loop.
                </p>
                <MagneticButton href="/contact" className="btn btn-primary btn-arrow">
                  Start a project
                </MagneticButton>
              </div>
            </Spotlight>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  return (
    <div>
      <div className="font-display font-bold leading-none text-[clamp(1.8rem,1.3rem+1.6vw,2.6rem)] text-gradient">
        <StatCounter target={target} suffix={suffix} />
      </div>
      <div className="mt-2 text-xs tracking-[0.18em] uppercase text-[var(--color-text-dim)]">
        {label}
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, blurb, bullets }: { icon: React.ReactNode; title: string; blurb: string; bullets: string[] }) {
  return (
    <Reveal>
      <TiltCard className="glass glass-border p-8 h-full rounded-2xl transition-shadow duration-300 hover:shadow-[0_30px_60px_-20px_rgba(99,102,241,0.45)]">
        <div className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-gradient-soft border border-[var(--color-border-strong)] mb-6 text-[#a5b4fc] relative z-[1]">
          {icon}
        </div>
        <h3 className="text-xl font-display font-bold mb-3 relative z-[1]">{title}</h3>
        <p className="text-[var(--color-text-muted)] relative z-[1]">{blurb}</p>
        <ul className="list-none p-0 mt-5 space-y-2 relative z-[1]">
          {bullets.map((b) => (
            <li key={b} className="relative pl-6 text-sm text-[var(--color-text-muted)]">
              <span className="absolute left-0 top-[0.55em] w-2 h-2 rounded-full bg-gradient-brand" />
              {b}
            </li>
          ))}
        </ul>
      </TiltCard>
    </Reveal>
  );
}

function MiniStat({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="font-display font-bold text-3xl text-gradient">{title}</div>
      <p className="text-sm mt-2 text-[var(--color-text-muted)]">{body}</p>
    </div>
  );
}

function Testimonial({ quote, name, role, initial }: { quote: string; name: string; role: string; initial: string }) {
  return (
    <Reveal>
      <TiltCard max={4} className="glass glass-border p-8 h-full rounded-2xl">
        <div className="font-display text-5xl leading-[0.6] text-gradient mb-4 relative z-[1]">“</div>
        <blockquote className="text-[var(--color-text)] mb-6 leading-relaxed relative z-[1]">{quote}</blockquote>
        <div className="flex items-center gap-3 relative z-[1]">
          <div className="w-11 h-11 rounded-full grid place-items-center font-bold text-white bg-gradient-brand">{initial}</div>
          <div>
            <strong className="block text-sm">{name}</strong>
            <span className="text-xs text-[var(--color-text-dim)]">{role}</span>
          </div>
        </div>
      </TiltCard>
    </Reveal>
  );
}
