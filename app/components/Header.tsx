'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(6,8,20,0.7)] backdrop-blur-xl backdrop-saturate-150 border-b border-[var(--color-border)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-[1.4rem] tracking-tight" aria-label="iMax home">
          <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-gradient-brand text-white font-extrabold shadow-[0_6px_20px_-6px_rgba(168,85,247,0.6)]">
            i
          </span>
          <span>iMax</span>
        </Link>

        <ul
          id="primary-nav"
          className={`flex items-center gap-6 list-none p-0 max-md:fixed max-md:inset-x-0 max-md:top-[64px] max-md:bottom-0 max-md:flex-col max-md:justify-start max-md:items-stretch max-md:pt-12 max-md:px-6 max-md:gap-6 max-md:bg-[rgba(6,8,20,0.96)] max-md:backdrop-blur-xl max-md:transition-transform max-md:duration-300 ${
            open ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
          }`}
        >
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`nav-link text-sm font-medium transition-colors max-md:text-lg ${
                    active ? 'is-active text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link href="/contact" className="btn btn-primary btn-arrow max-md:hidden">
          Start a project
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="primary-nav"
          className="hidden max-md:block relative w-11 h-11 rounded-xl border border-[var(--color-border-strong)] bg-white/5"
        >
          <span
            className={`absolute left-3 right-3 h-0.5 bg-[var(--color-text)] rounded transition-transform duration-300 ${
              open ? 'top-[21px] translate-y-0 rotate-45' : 'top-[14px]'
            }`}
          />
          <span
            className={`absolute left-3 right-3 top-[21px] h-0.5 bg-[var(--color-text)] rounded transition-opacity ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-3 right-3 h-0.5 bg-[var(--color-text)] rounded transition-transform duration-300 ${
              open ? 'top-[21px] translate-y-0 -rotate-45' : 'top-[28px]'
            }`}
          />
        </button>
      </div>
    </header>
  );
}
