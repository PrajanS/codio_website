'use client';

import Link from 'next/link';
import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
};

export default function MagneticButton({ href, children, className = '', strength = 14 }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(dx, dy);
      const radius = Math.max(rect.width, rect.height) * 0.9;
      if (dist > radius) {
        if (raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          el.style.transform = '';
        });
        return;
      }
      const force = 1 - dist / radius;
      const tx = (dx / radius) * strength * force;
      const ty = (dy / radius) * strength * force;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      });
    };
    const reset = () => {
      if (raf) cancelAnimationFrame(raf);
      el.style.transform = '';
    };
    window.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', reset);
    return () => {
      window.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <Link href={href} ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </Link>
  );
}
