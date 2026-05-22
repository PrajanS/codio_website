const LOGOS = [
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
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="marquee-mask overflow-hidden">
      <div className="marquee-track">
        {items.map((name, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-[var(--color-text-dim)] hover:text-[var(--color-text-muted)] transition-colors whitespace-nowrap"
          >
            <span className="inline-block w-2 h-2 rounded-sm bg-gradient-brand opacity-70" />
            <span className="font-display text-lg tracking-[-0.01em] font-semibold">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
