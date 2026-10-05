import Link from "next/link";
import { MessageSquareText, Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Thumb-reachable call / quote actions, shown on phones only. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={site.phone.href} className="btn btn-primary h-12 px-4 text-[0.72rem]">
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <Link href="/contact" className="btn btn-gold h-12 px-4 text-[0.72rem]">
          <MessageSquareText className="h-4 w-4" /> Free Quote
        </Link>
      </div>
    </div>
  );
}
