import Link from "next/link";
import { MessageSquareText, Phone } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { site } from "@/lib/site";

/** Thumb-reachable call / WhatsApp / quote actions, shown on phones only. */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-2">
        <a href={site.phone.href} className="btn btn-primary h-12 px-3 text-[0.7rem]">
          <Phone className="h-4 w-4" /> Call
        </a>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white transition-transform active:scale-95"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
        <Link href="/contact" className="btn btn-gold h-12 px-3 text-[0.7rem]">
          <MessageSquareText className="h-4 w-4" /> Free Quote
        </Link>
      </div>
    </div>
  );
}
