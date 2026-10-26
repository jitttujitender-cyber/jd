import { PhoneCall } from "lucide-react";
import { BUSINESS } from "@/data/business";

export function FloatingCallButton() {
  return (
    <a
      href={BUSINESS.phoneLink}
      aria-label={`Call Tom Carter Drain & Plumbing at ${BUSINESS.phone}`}
      className="fixed bottom-4 right-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-orange px-5 text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(13,31,60,0.28)] transition hover:-translate-y-0.5 hover:bg-orange/90 md:hidden"
    >
      <PhoneCall aria-hidden="true" className="h-4 w-4" /> Call Now
    </a>
  );
}
