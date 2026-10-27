import { SiteLink as Link } from "@/components/site-link";
import { ArrowUpRight, Droplet, Menu, PhoneCall, Wrench } from "lucide-react";
import { BUSINESS } from "@/data/business";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/service-areas/", label: "Service Areas" },
  { href: "/contact/", label: "Contact" },
];

function BrandMark() {
  return (
    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-white" aria-hidden="true">
      <Droplet className="h-8 w-8" strokeWidth={1.8} />
      <Wrench className="absolute right-1.5 top-2.5 h-4 w-4 text-orange" strokeWidth={2.6} />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="topbar hidden sm:block">
        <div className="container-shell flex min-h-9 items-center justify-between gap-4">
          <span>24/7 emergency plumbing across northwest Nebraska</span>
          <a className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-orange" href={BUSINESS.phoneLink}>
            <PhoneCall aria-hidden="true" className="h-3.5 w-3.5" /> {BUSINESS.phone}
          </a>
        </div>
      </div>
      <div className="container-shell flex min-h-[4.6rem] items-center justify-between gap-3 py-2">
        <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${BUSINESS.name} home`}>
          <BrandMark />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-[0.93rem] font-bold text-navy sm:text-base">Tom Carter</span>
            <span className="block text-[0.68rem] font-semibold tracking-wide text-slate-600 sm:text-xs">Drain &amp; Plumbing</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <a className="button-primary !min-h-10 !px-3 !py-2 text-xs sm:!px-4 sm:text-sm" href={BUSINESS.phoneLink}>
            <PhoneCall aria-hidden="true" className="h-4 w-4" />
            <span className="hidden xs:inline">Call Now</span>
            <span className="xs:hidden">Call</span>
          </a>
          <details className="mobile-menu relative lg:hidden">
            <summary className="flex min-h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 text-sm font-bold text-navy" aria-label="Open navigation menu">
              <Menu aria-hidden="true" className="h-4 w-4" /> <span className="hidden sm:inline">Menu</span>
            </summary>
            <nav aria-label="Mobile navigation" className="mobile-menu-panel absolute right-0 top-[calc(100%+0.7rem)] z-50 hidden w-64 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-soft">
              {navItems.map((item) => (
                <Link className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-orange" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <a className="mt-1 flex items-center justify-between rounded-lg bg-orange px-3 py-2.5 text-sm font-bold text-white" href={BUSINESS.phoneLink}>
                <span className="inline-flex items-center gap-2"><PhoneCall className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
