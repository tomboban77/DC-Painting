import { Sparkle } from "./Icons";

/** Infinite horizontal ticker. Content is duplicated so the loop is seamless. */
export function Marquee({ items, className = "" }: { items: readonly string[]; className?: string }) {
  const row = (hidden?: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="display px-7 text-3xl italic md:px-10 md:text-[2.75rem]">{item}</span>
          <Sparkle className="h-3 w-3 text-gold" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
