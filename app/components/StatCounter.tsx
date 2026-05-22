'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  target: number;
  suffix?: string;
  duration?: number;
};

export default function StatCounter({ target, suffix = '', duration = 1400 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setValue(target);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(target * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  const display = target % 1 === 0 ? Math.round(value).toString() : value.toFixed(1);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
