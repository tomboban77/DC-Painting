import Link from "next/link";

type Tone = "dark" | "light";
type Props = { tone?: Tone; className?: string };

/** Arch emblem + spaced serif wordmark. */
export function Logo({ tone = "dark", className = "" }: Props) {
  const ink = tone === "dark" ? "text-navy" : "text-paper";
  return (
    <Link href="/" aria-label="DC Fine Painting — home" className={`group inline-flex items-center gap-3.5 ${className}`}>
      <LogoMark tone={tone} className="h-12 w-10 shrink-0 transition-transform duration-700 ease-out-soft group-hover:-translate-y-0.5" />
      <span className={`flex flex-col leading-none ${ink}`}>
        <span className="font-display text-[1.55rem] font-semibold uppercase tracking-[0.12em]">DC Fine</span>
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
 * The emblem: a classic arched window (the site's framing motif) holding a
 * serif "DC" monogram, with a gold brushstroke sweeping across its base.
 */
export function LogoMark({ tone = "dark", className = "" }: { tone?: Tone; className?: string }) {
  const body = tone === "dark" ? "var(--color-navy)" : "var(--color-paper)";
  const letters = tone === "dark" ? "var(--color-paper)" : "var(--color-navy)";
  return (
    <svg viewBox="0 0 48 58" className={className} aria-hidden="true">
      <path d="M4 54V24a20 20 0 0 1 40 0v30Z" fill={body} />
      <path d="M8.5 54V24.5a15.5 15.5 0 0 1 31 0V54" fill="none" stroke="var(--color-gold-bright)" strokeWidth="0.9" />
      <path d="M24 10.5c.3 2.4 1.6 3.7 4 4-2.4.3-3.7 1.6-4 4-.3-2.4-1.6-3.7-4-4 2.4-.3 3.7-1.6 4-4Z" fill="var(--color-gold-bright)" />
      <text
        x="24"
        y="40"
        textAnchor="middle"
        fill={letters}
        style={{ font: "600 17px var(--font-display), Georgia, serif", letterSpacing: "-0.6px" }}
      >
        DC
      </text>
      {/* Brushstroke: tapered sweep with a dry-brush tail */}
      <path d="M1 49.5C11 45.6 27 44.8 47 45.4c.6 0 .9.9.3 1.1C31 49 14 50.3 2.2 52.4c-1.4.3-2.4-2.2-1.2-2.9Z" fill="var(--color-gold-bright)" />
      <path d="M30 48.6c6-.7 11-1 16.4-1.2M24 50.2c5-.6 9-.9 13-1" stroke="var(--color-gold-bright)" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
