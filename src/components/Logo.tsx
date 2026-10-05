import Image from "next/image";
import Link from "next/link";
import badge from "../../public/logo.png";

type Tone = "dark" | "light";
type Props = { tone?: Tone; className?: string };

/** Flat monogram + spaced serif wordmark. */
export function Logo({ tone = "dark", className = "" }: Props) {
  const ink = tone === "dark" ? "text-navy" : "text-paper";
  return (
    <Link href="/" aria-label="DC Fine Painting — home" className={`group inline-flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} className="h-12 w-15.5 shrink-0 transition-transform duration-700 ease-out-soft group-hover:-translate-y-0.5" />
      <span className={`flex flex-col leading-none ${ink}`}>
        <span className="font-display text-[1.2rem] font-semibold uppercase tracking-[0.1em]">DC Fine</span>
        <span className="mt-1.5 flex items-center gap-2">
          <span className="h-px w-3 bg-gold" />
          <span className="text-[0.56rem] font-bold uppercase tracking-[0.46em] text-gold">Painting</span>
          <span className="h-px flex-1 bg-gold/60" />
        </span>
      </span>
    </Link>
  );
}

/**
 * Flat take on the company badge, for small sizes: house roofline, serif "DC"
 * monogram and paintbrush over a gold brushstroke.
 */
export function LogoMark({ tone = "dark", className = "" }: { tone?: Tone; className?: string }) {
  const ink = tone === "dark" ? "var(--color-navy)" : "var(--color-paper)";
  // Outline around the gold "C" so it separates from the "D" and the stroke.
  const halo = tone === "dark" ? "var(--color-ivory)" : "var(--color-navy-deep)";
  const gold = "var(--color-gold-bright)";
  const serif = "var(--font-display), Georgia, serif";
  return (
    <svg viewBox="0 0 72 56" className={className} aria-hidden="true">
      <path d="M2.5 51.5C20 47.4 42 45.2 68.5 44.4c.8 0 1 1.1.2 1.3C44 47.6 22 50.2 4.8 54.6c-1.6.4-3.3-2.2-2.3-3.1Z" fill={gold} />
      {/* House: chimney, roofline, four-pane window */}
      <rect x="7.4" y="15" width="3.6" height="9" fill={ink} />
      <path d="M2 30.5 17.5 16 28.5 26" fill="none" stroke={ink} strokeWidth="2.8" />
      <g fill={ink}>
        <rect x="14.3" y="24.4" width="2.3" height="2.3" />
        <rect x="17.1" y="24.4" width="2.3" height="2.3" />
        <rect x="14.3" y="27.2" width="2.3" height="2.3" />
        <rect x="17.1" y="27.2" width="2.3" height="2.3" />
      </g>
      <text x="37" y="41" textAnchor="middle" fill={ink} style={{ font: `600 38px ${serif}` }}>
        D
      </text>
      <text
        x="49.5"
        y="46.5"
        textAnchor="middle"
        fill={gold}
        stroke={halo}
        strokeWidth="2.6"
        paintOrder="stroke"
        style={{ font: `600 26px ${serif}` }}
      >
        C
      </text>
      {/* Paintbrush: handle, ferrule, bristles with a gold tip */}
      <g transform="translate(60.5 22.5) rotate(36)">
        <rect x="-1.8" y="-18" width="3.6" height="11" rx="1.8" fill={ink} />
        <rect x="-2.9" y="-7.5" width="5.8" height="5.2" rx=".6" fill={gold} />
        <path d="M-2.9 -2.3h5.8l.7 6.2c-1.6 1.5-5.6 1.5-7.2 0Z" fill={ink} />
        <path d="M-3.5 3.9c1.6 1.5 5.6 1.5 7.2 0l.2 1.7c-1.7 1.3-5.9 1.3-7.6 0Z" fill={gold} />
      </g>
    </svg>
  );
}

/** The full round company badge — only used large enough for its lettering to read. */
export function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="DC Fine Painting — home" className={`inline-block ${className}`}>
      <Image src={badge} alt="DC Fine Painting — Quality. Precision. Pride." sizes="256px" className="h-full w-full rounded-full" />
    </Link>
  );
}
