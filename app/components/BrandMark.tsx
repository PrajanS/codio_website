import type { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement> & {
  size?: number;
  blink?: boolean;
};

/**
 * Codio brand mark — a square code block with a signal-green cursor
 * sitting at column 0. Reads as a terminal at rest, ready for input.
 * Static by default. `blink` enables the cursor blink animation (use
 * sparingly — hero only).
 */
export default function BrandMark({ size = 24, blink = false, ...rest }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      {...rest}
    >
      <rect
        x="0.7"
        y="0.7"
        width="22.6"
        height="22.6"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="5.5"
        y="7.5"
        width="3"
        height="9"
        fill="var(--color-signal-deep)"
        style={blink ? { animation: 'blink 1.05s steps(2, start) infinite' } : undefined}
      />
    </svg>
  );
}
