import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-32 pt-16 pb-5 border-t border-[var(--color-border)] bg-gradient-to-b from-transparent to-[rgba(11,15,36,0.6)]">
      <div className="container-x">
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 font-display font-bold text-[1.4rem] tracking-tight mb-4">
              <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-gradient-brand text-white font-extrabold">i</span>
              <span>iMax</span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] max-w-[320px]">
              A senior software & IT services team helping ambitious companies design, build, and scale digital products.
            </p>
          </div>

          <FooterCol
            title="Company"
            items={[
              { href: '/about', label: 'About' },
              { href: '/portfolio', label: 'Work' },
              { href: '/contact', label: 'Contact' },
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              { href: '/services#web', label: 'Web Development' },
              { href: '/services#mobile', label: 'Mobile Development' },
              { href: '/services#cloud', label: 'Cloud Solutions' },
            ]}
          />
          <FooterCol
            title="Contact"
            items={[
              { href: 'mailto:hello@imax.dev', label: 'hello@imax.dev' },
              { href: 'tel:+10000000000', label: '+1 (000) 000-0000' },
            ]}
          />
        </div>

        <div className="mt-12 pt-5 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--color-text-dim)] max-sm:flex-col max-sm:text-center">
          <span>© {new Date().getFullYear()} iMax. All rights reserved.</span>
          <span>Built by the iMax engineering team.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-sm uppercase tracking-[0.16em] font-semibold mb-4 text-[var(--color-text)]">{title}</h4>
      <ul className="list-none p-0 space-y-3">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-neon-cyan)] transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
