import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (props: IconProps) => ({
  width: props.size ?? 24,
  height: props.size ?? 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
});

export const IconWeb = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 8h18" />
    <circle cx="6" cy="6" r="0.6" fill="currentColor" />
    <circle cx="8.5" cy="6" r="0.6" fill="currentColor" />
    <path d="M9 21h6" />
    <path d="M12 18v3" />
  </svg>
);

export const IconMobile = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.4" />
    <path d="M10.5 18.5h3" />
  </svg>
);

export const IconCloud = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7.5 18A4.5 4.5 0 0 1 7 9a5.5 5.5 0 0 1 10.6 1.5A3.5 3.5 0 0 1 17 18Z" />
  </svg>
);

export const IconTarget = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.6" fill="currentColor" />
  </svg>
);

export const IconWrench = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14.7 6.3a4 4 0 0 1 5 5l-2.6-2.6-2.4 2.4 2.6 2.6a4 4 0 0 1-5-5l-7 7a2.1 2.1 0 1 0 3 3l6.4-6.4Z" />
  </svg>
);

export const IconHandshake = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12l3-3 3 3 3-3 3 3 3-3 3 3" />
    <path d="M6 14l3 3 3-2 3 2 3-3" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
  </svg>
);

export const IconRuler = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="8" width="19" height="8" rx="1.5" transform="rotate(-20 12 12)" />
    <path d="M7.5 11.5l1 -2.5" />
    <path d="M10.5 13l1 -2.5" />
    <path d="M13.5 14.5l1 -2.5" />
    <path d="M16.5 16l1 -2.5" />
  </svg>
);

export const IconMail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconPhone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h3l1.5 4-2 1.4a12 12 0 0 0 7 7l1.4-2 4 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconPin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12l5 5L20 7" />
  </svg>
);

export const IconSparkle = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l8 3v5c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
