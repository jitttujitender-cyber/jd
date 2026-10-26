import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin, type LucideIcon } from "lucide-react";
import type { City } from "@/data/cities";
import type { Service } from "@/data/services";

export function ServiceCard({ service, description, cityName = "Chadron" }: { service: Service; description?: string; cityName?: string }) {
  const imageAlt = `${service.name} service information for ${cityName}, Nebraska`;
  return (
    <article className="surface-card group overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/services/${service.slug}/`} className="block" aria-label={`Explore ${service.name} in ${cityName}, Nebraska`}>
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image src={service.image} alt={imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-[1.035]" />
        </div>
      </Link>
      <div className="p-5 sm:p-6">
        <h3 className="font-heading text-lg font-bold text-navy"><Link className="hover:text-blue" href={`/services/${service.slug}/`}>{service.name}</Link></h3>
        <p className="mt-2 min-h-[3.25rem] text-sm leading-6 text-slate-600">{description ?? service.summary}</p>
        <Link className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-orange" href={`/services/${service.slug}/`}>
          Service details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function CityCard({ city, primary = false }: { city: City; primary?: boolean }) {
  return (
    <Link href={`/service-areas/${city.slug}/`} className="surface-card group flex min-h-[7.5rem] flex-col justify-between p-5 transition duration-200 hover:-translate-y-0.5 hover:border-blue/25 hover:shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          {primary ? <span className="mb-2 inline-block rounded-full bg-orange/10 px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-wide text-orange">Primary service area</span> : null}
          <h3 className="font-heading text-lg font-bold text-navy group-hover:text-blue">{city.name}, NE</h3>
          <p className="mt-1 text-xs text-slate-500">{city.county}</p>
        </div>
        <MapPin className="mt-1 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
      </div>
      <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue">View local service <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" /></span>
    </Link>
  );
}

export function ValueCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <article className="surface-card p-5 sm:p-6">
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue"><Icon className="h-5 w-5" aria-hidden="true" /></span>
      <h3 className="font-heading text-base font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export function StatCard({ value, label, detail }: { value: string; label: string; detail: string }) {
  return (
    <div className="rounded-card border border-white/10 bg-white/5 p-5">
      <p className="font-heading text-3xl font-bold text-white sm:text-4xl">{value}</p>
      <p className="mt-2 font-bold text-white">{label}</p>
      <p className="mt-1 text-xs leading-5 text-slate-300">{detail}</p>
    </div>
  );
}

export function StepCard({ number, title, description, icon: Icon }: { number: string; title: string; description: string; icon: LucideIcon }) {
  return (
    <article className="surface-card relative p-5 sm:p-6">
      <span className="absolute right-5 top-5 font-heading text-2xl font-bold text-slate-100">{number}</span>
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange"><Icon className="h-5 w-5" aria-hidden="true" /></span>
      <h3 className="font-heading text-base font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700" key={item}>
          <Check className="mt-1 h-4 w-4 shrink-0 text-orange" aria-hidden="true" /> {item}
        </li>
      ))}
    </ul>
  );
}
