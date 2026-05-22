'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
};

export default function TiltCard({ children, className = '', max = 7 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const ry = (px - 0.5) * max * 2;
      const rx = -(py - 0.5) * max * 2;
      const mx = px * 100;
      const my = py * 100;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.classList.add('is-tracking');
        el.style.setProperty('--rx', `${rx}deg`);
        el.style.setProperty('--ry', `${ry}deg`);
        el.style.setProperty('--mx', `${mx}%`);
        el.style.setProperty('--my', `${my}%`);
      });
    };
    const reset = () => {
      if (raf) cancelAnimationFrame(raf);
      el.classList.remove('is-tracking');
      el.style.removeProperty('--rx');
      el.style.removeProperty('--ry');
    };
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', reset);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', reset);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [max]);

  return (
    <div ref={ref} className={`tilt-card spotlight-target ${className}`}>
      {children}
    </div>
  );
}
