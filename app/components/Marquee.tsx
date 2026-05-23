'use client';

import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
};

export default function Marquee({ children, className = '', speed = 38, reverse = false }: Props) {
  const dur = `${speed}s`;
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div
        className="marquee-track"
        style={{
          animationDuration: dur,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <span className="inline-flex items-center gap-12">{children}</span>
        <span className="inline-flex items-center gap-12">{children}</span>
      </div>
    </div>
  );
}
