import { SiteLink as Link } from "@/components/site-link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { BUSINESS } from "@/data/business";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 sm:text-sm">
        <li><Link className="hover:text-blue" href="/">Home</Link></li>
        {items.map((item, index) => (
          <li className="flex items-center gap-2" key={`${item.label}-${index}`}>
            <span aria-hidden="true" className="text-slate-300">/</span>
            {item.href && index < items.length - 1 ? <Link className="hover:text-blue" href={item.href}>{item.label}</Link> : <span aria-current="page" className="text-slate-700">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions = true,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-36 h-96 w-96 rounded-full bg-blue/5 blur-3xl" />
      <div className="container-shell relative py-12 sm:py-16 lg:py-20">
        {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-4xl font-heading text-4xl font-bold leading-[1.08] text-navy sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
        {actions ? (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
            <Link className="button-secondary" href="/contact/">Contact our team <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} ${compact ? "mb-5" : "mb-9"} max-w-3xl`}>
      {eyebrow ? <p className={`eyebrow ${centered ? "justify-center" : ""}`}>{eyebrow}</p> : null}
      <h2 className={`section-title mt-3 ${centered ? "mx-auto" : ""}`}>{title}</h2>
      {description ? <p className={`section-copy mt-4 ${centered ? "mx-auto" : ""}`}>{description}</p> : null}
    </div>
  );
}

export function CallToAction({
  title,
  description,
  dark = false,
  contact = true,
}: {
  title: string;
  description: string;
  dark?: boolean;
  contact?: boolean;
}) {
  return (
    <section className={`${dark ? "bg-navy text-white" : "bg-orange text-white"} py-12 sm:py-16`}>
      <div className="container-shell flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className={`text-xs font-extrabold uppercase tracking-[0.14em] ${dark ? "text-orange" : "text-white/75"}`}>24/7 emergency service</p>
          <h2 className="mt-2 font-heading text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          <p className={`mt-3 max-w-xl leading-7 ${dark ? "text-slate-300" : "text-white/90"}`}>{description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a className="button-white" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
          {contact ? <Link className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-5 text-sm font-bold text-white transition hover:bg-white/10" href="/contact/">Send a message <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link> : null}
        </div>
      </div>
    </section>
  );
}

export function MapEmbed({
  latitude,
  longitude,
  zoom = 12,
  title,
}: {
  latitude: number;
  longitude: number;
  zoom?: number;
  title: string;
}) {
  const src = `https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`;
  return (
    <div className="overflow-hidden rounded-card border border-slate-200 bg-white shadow-card">
      <iframe
        className="map-frame"
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="surface-card divide-y divide-slate-100 px-5 sm:px-7">
      {items.map((item) => (
        <details className="faq-item py-5" key={item.question}>
          <summary className="cursor-pointer list-none pr-6 font-heading text-base font-semibold text-navy marker:hidden focus-visible:rounded">
            <span className="flex items-center justify-between gap-4">{item.question}<span className="text-xl font-normal text-orange" aria-hidden="true">+</span></span>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const safeJson = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson }} />;
}
