'use client';

import type { ReactNode } from 'react';

export type Case = {
  n: string;
  title: string;
  client: string;
  discipline: string;
  year: string;
  href?: string;
  blurb?: string;
};

type Props = {
  cases: Case[];
  onHover?: (c: Case | null) => void;
};

export default function CaseStack({ cases, onHover }: Props) {
  return (
    <div role="list">
      {cases.map((c) => (
        <Row key={c.n} c={c} onHover={onHover} />
      ))}
    </div>
  );
}

function Row({ c, onHover }: { c: Case; onHover?: (c: Case | null) => void }) {
  const inner: ReactNode = (
    <>
      <span className="case-idx mono ink-faint">{c.n}</span>
      <span className="case-title">{c.title}</span>
      <span className="case-disc mono ink-mute">{c.discipline} · {c.client}</span>
      <span className="case-meta-m hidden">{c.discipline} · {c.year}</span>
      <span className="case-year mono ink-mute">{c.year}</span>
      <span className="case-arrow" aria-hidden="true">↗</span>
    </>
  );

  const onEnter = () => onHover?.(c);
  const onLeave = () => onHover?.(null);

  return c.href ? (
    <a
      role="listitem"
      href={c.href}
      target="_blank"
      rel="noreferrer"
      className="case-row"
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
    >
      {inner}
    </a>
  ) : (
    <div
      role="listitem"
      className="case-row"
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
    >
      {inner}
    </div>
  );
}
