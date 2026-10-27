import { SiteLink as Link } from "@/components/site-link";
import { ArrowUpRight, MapPin, PhoneCall } from "lucide-react";
import { ADDRESS_LINE, BUSINESS } from "@/data/business";
import { CITIES } from "@/data/cities";
import { SERVICES } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-slate-200">
      <div className="container-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.25fr_1.1fr_1fr_1fr] lg:gap-8 lg:py-16">
        <div>
          <Link href="/" className="inline-block font-heading text-lg font-bold text-white">{BUSINESS.name}</Link>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-300">Local plumbing and drain cleaning from Chadron, serving communities across northwest Nebraska.</p>
          <div className="mt-5 space-y-3 text-sm">
            <a className="flex items-start gap-2.5 font-semibold text-white hover:text-orange" href={BUSINESS.phoneLink}>
              <PhoneCall className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" /> {BUSINESS.phone}
            </a>
            <a className="flex items-start gap-2.5 leading-5 text-slate-300 hover:text-white" href="https://maps.google.com/?q=1013+E+Niobrara+Ave,+Chadron,+NE+69337" target="_blank" rel="noreferrer">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" /> {ADDRESS_LINE}
            </a>
            <p className="text-slate-300">{BUSINESS.hours}</p>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold text-white">Plumbing Services</h2>
          <ul className="mt-4 grid gap-2.5 text-sm text-slate-300">
            {SERVICES.map((service) => (
              <li key={service.slug}><Link className="hover:text-white" href={`/services/${service.slug}/`}>{service.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold text-white">Service Areas</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm text-slate-300">
            {CITIES.map((city) => (
              <li key={city.slug}><Link className="hover:text-white" href={`/service-areas/${city.slug}/`}>{city.name}, NE</Link></li>
            ))}
          </ul>
          <Link className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange hover:text-orange/80" href="/service-areas/">
            View coverage <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div>
          <h2 className="font-heading text-sm font-bold text-white">Quick Links</h2>
          <ul className="mt-4 grid gap-2.5 text-sm text-slate-300">
            <li><Link className="hover:text-white" href="/about/">About Tom Carter</Link></li>
            <li><Link className="hover:text-white" href="/services/">All plumbing services</Link></li>
            <li><Link className="hover:text-white" href="/contact/">Contact and directions</Link></li>
            <li><Link className="hover:text-white" href="/privacy-policy/">Privacy policy</Link></li>
          </ul>
          <a className="button-primary mt-5 !min-h-10 !px-4 !py-2 text-sm" href={BUSINESS.phoneLink}>
            <PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>Serving Chadron and northwest Nebraska — emergency service available 24/7.</p>
        </div>
      </div>
    </footer>
  );
}
