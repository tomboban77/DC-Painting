import { Plus } from "lucide-react";

/** Accessible accordion built on native <details>. */
export function FAQ({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="display text-2xl text-navy md:text-[1.75rem]">{item.q}</span>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-gold transition-all duration-500 group-open:rotate-45 group-open:bg-navy group-open:text-paper">
              <Plus className="h-4 w-4" />
            </span>
          </summary>
          <p className="max-w-3xl pb-7 pr-14 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
