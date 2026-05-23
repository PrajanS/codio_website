'use client';

import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (coarse || reduced) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    document.body.classList.add('has-custom-cursor');

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const tick = () => {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const setState = (state: string | null) => {
      el.classList.remove('is-hover', 'is-text', 'is-drag');
      if (state) el.classList.add(state);
    };

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest('[data-cursor="drag"]')) return setState('is-drag');
      if (t.closest('a, button, [role="button"], .nav-link, .case-row, .service-slab, label')) return setState('is-hover');
      if (t.closest('input, textarea, select, [contenteditable="true"]')) return setState('is-text');
      setState(null);
    };

    const onLeave = () => setState(null);

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerover', onOver, { passive: true });
    window.addEventListener('blur', onLeave);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerover', onOver);
      window.removeEventListener('blur', onLeave);
      document.removeEventListener('mouseleave', onLeave);
      document.body.classList.remove('has-custom-cursor');
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className="cursor" aria-hidden="true" />;
}
