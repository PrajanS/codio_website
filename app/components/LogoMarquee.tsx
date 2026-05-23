import Marquee from './Marquee';

const CLIENTS = [
  'Northwind',
  'Lumen Health',
  'Roam Travel',
  'Finch Analytics',
  'Atlas Logistics',
  'Vector AI',
  'Pivot Labs',
  'Halcyon',
  'Meridian',
  'Sable & Co.',
];

export default function LogoMarquee() {
  return (
    <Marquee speed={56}>
      {CLIENTS.map((c, i) => (
        <span key={i} className="inline-flex items-center gap-12 font-display text-[clamp(1.6rem,1rem+1vw,2.2rem)] tracking-tight ink"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}>
          {c}
          <span className="mono ink-faint">/{String(i + 1).padStart(2, '0')}</span>
        </span>
      ))}
    </Marquee>
  );
}
