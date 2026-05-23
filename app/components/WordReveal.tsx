'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: string;
  className?: string;
  italic?: number[];
  signal?: number[];
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
};

export default function WordReveal({
  children,
  className = '',
  italic = [],
  signal = [],
  delay = 0,
  as = 'h2',
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      el.querySelectorAll('.word').forEach((w) => w.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const words = (e.target as HTMLElement).querySelectorAll('.word');
          words.forEach((w) => w.classList.add('in'));
          io.unobserve(e.target);
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const words = children.split(/(\s+)/);

  let idx = -1;
  const nodes: ReactNode[] = words.map((tok, i) => {
    if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>;
    idx++;
    const wordIndex = idx;
    const isItalic = italic.includes(wordIndex);
    const isSignal = signal.includes(wordIndex);
    return (
      <span
        key={i}
        className="word"
        style={{
          ['--i' as keyof React.CSSProperties as string]: wordIndex,
          transitionDelay: `${delay + wordIndex * 60}ms`,
          color: isSignal ? 'var(--color-signal-deep)' : undefined,
          fontStyle: isItalic ? 'italic' : undefined,
          fontVariationSettings: isItalic ? '"opsz" 144, "SOFT" 100' : undefined,
        } as React.CSSProperties}
      >
        {tok}
      </span>
    );
  });

  const Tag = as as 'h2';
  return (
    <Tag ref={ref as never} className={className}>
      {nodes}
    </Tag>
  );
}
