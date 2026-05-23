'use client';

import { useEffect, useState } from 'react';

const ITEMS = [
  'Open · Q3 intake',
  'Web · Mobile · Cloud · Design',
  'SF · Berlin · Bengaluru — remote-first',
  'Avg. project kickoff: 11 days',
  '2026 — eight years building software',
];

export default function Ticker() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const sf = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(d);
      setTime(`SF ${sf}`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  const dot = <span className="ticker-dot" aria-hidden="true" />;
  const full = [...ITEMS, time || 'SF —— ——'];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {Array.from({ length: 2 }).map((_, copy) => (
          <span key={copy} className="inline-flex items-center gap-[2.4rem]">
            {full.map((it, i) => (
              <span key={`${copy}-${i}`} className="inline-flex items-center gap-[2.4rem]">
                <span>{it}</span>
                {dot}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
