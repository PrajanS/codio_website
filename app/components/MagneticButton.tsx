'use client';

import Link from 'next/link';
import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
  external?: boolean;
};

export default function MagneticButton({ href, children, className = '', strength = 18, external = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inner = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const wrap = ref.current;
    const child = inner.current;
    if (!wrap || !child) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);
      const radius = Math.max(rect.width, rect.height) * 1.2;
      if (dist > radius) {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          wrap.style.transform = '';
          child.style.transform = '';
        });
        return;
      }
      const force = 1 - dist / radius;
      const tx = (dx / radius) * strength * force;
      const ty = (dy / radius) * strength * force;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        wrap.style.transform = `translate(${tx}px, ${ty}px)`;
        child.style.transform = `translate(${tx * 0.4}px, ${ty * 0.4}px)`;
      });
    };
    const reset = () => {
      if (raf) cancelAnimationFrame(raf);
      wrap.style.transform = '';
      child.style.transform = '';
    };
    window.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', reset);
    return () => {
      window.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  const content = <span ref={inner} className="inline-flex items-center gap-2">{children}</span>;

  return (
    <div ref={ref} className="magnetic">
      {external ? (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {content}
        </a>
      ) : (
        <Link href={href} className={className}>
          {content}
        </Link>
      )}
    </div>
  );
}
