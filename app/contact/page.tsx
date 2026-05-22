import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';
import { IconMail, IconPhone, IconPin, IconClock } from '../components/Icon';

export const metadata: Metadata = {
  title: 'Contact — Start a Project',
  description: "Tell us about your roadmap. We'll respond within one business day with a concrete next step.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-16 text-center">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Get in touch</span>
            <h1 className="text-[clamp(2.6rem,2rem+2.8vw,4.4rem)] font-display font-bold leading-[1.1] tracking-tight mt-4 mb-4">
              Let's build something <span className="text-gradient">worth building.</span>
            </h1>
            <p className="text-lg text-[var(--color-text-muted)] max-w-[680px] mx-auto">
              One business day, no sales loop. Tell us where you are — we'll come back with concrete next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="glass glass-border p-8 h-full">
              <span className="eyebrow">Direct lines</span>
              <h2 className="text-2xl font-display font-bold mt-4 mb-3">Talk to a human.</h2>
              <p className="text-[var(--color-text-muted)] mb-6">
                The form goes straight to a founder. You can also reach us the old-fashioned way.
              </p>

              <ul className="list-none p-0 space-y-5">
                <ContactItem
                  icon={<IconMail size={18} />}
                  label="Email"
                  href="mailto:hello@imax.dev"
                  value="hello@imax.dev"
                />
                <ContactItem
                  icon={<IconPhone size={18} />}
                  label="Phone"
                  href="tel:+10000000000"
                  value="+1 (000) 000-0000"
                />
                <ContactItem
                  icon={<IconPin size={18} />}
                  label="Office"
                  href="#"
                  value="Remote-first · HQ in San Francisco, CA"
                />
                <ContactItem
                  icon={<IconClock size={18} />}
                  label="Hours"
                  href="#"
                  value="Mon–Fri · 9am to 6pm PT"
                />
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon, label, href, value }: { icon: ReactNode; label: string; href: string; value: string }) {
  const isLink = href && href !== '#';
  const content = (
    <>
      <span className="grid place-items-center w-10 h-10 rounded-[10px] bg-gradient-soft border border-[var(--color-border-strong)] shrink-0 text-[#a5b4fc]">
        {icon}
      </span>
      <span>
        <span className="block text-xs tracking-[0.14em] uppercase text-[var(--color-text-dim)] mb-0.5">
          {label}
        </span>
        <span className={isLink ? 'hover:text-[var(--color-neon-cyan)] transition-colors' : ''}>
          {value}
        </span>
      </span>
    </>
  );

  return (
    <li>
      {isLink ? (
        <a href={href} className="flex gap-3 items-start text-[var(--color-text)]">
          {content}
        </a>
      ) : (
        <div className="flex gap-3 items-start text-[var(--color-text)]">{content}</div>
      )}
    </li>
  );
}
