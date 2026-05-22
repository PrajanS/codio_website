'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      el.style.transform = `scaleX(${pct / 100})`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        update();
        raf = 0;
      });
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 h-[2px] z-[100] pointer-events-none">
      <div
        ref={ref}
        className="h-full origin-left bg-gradient-brand"
        style={{ transform: 'scaleX(0)', willChange: 'transform' }}
      />
    </div>
  );
}
