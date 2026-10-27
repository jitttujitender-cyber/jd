import { SiteLink as Link } from "@/components/site-link";
import { ArrowRight, MapPinned, PhoneCall } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { CITIES, MAIN_CITIES } from "@/data/cities";
import { SERVICES } from "@/data/services";
import { businessSchema } from "@/lib/schema";
import { buildMetaDescription, pageMetadata } from "@/lib/seo";
import { CallToAction, JsonLd, MapEmbed, PageHero, SectionHeading } from "@/components/page-sections";
import { CityCard } from "@/components/cards";

const description = buildMetaDescription("Plumber service areas", "Chadron", "Local plumbing and drain service in 12 communities across northwest Nebraska");

export const metadata = pageMetadata({ title: "Plumbing Service Areas in Northwest Nebraska", description, path: "/service-areas/" });

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <PageHero eyebrow="Where we work" title="Plumbing Service Areas in NW Nebraska" description="Tom Carter Drain & Plumbing serves Chadron and 11 additional listed communities. Call with your exact address to confirm route availability and timing." breadcrumbs={[{ label: "Service Areas" }]} />

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="12 listed communities" title="Find plumbing help near your home or business" description="Choose a community for local water, housing, seasonal, and service details. Rural properties are welcome to call and confirm coverage." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CITIES.map((city) => <CityCard city={city} primary={MAIN_CITIES.some((mainCity) => mainCity.slug === city.slug)} key={city.slug} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas">
        <div className="container-shell grid items-center gap-9 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Chadron home base</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Why we serve northwest Nebraska.</h2>
            <p className="mt-4 leading-7 text-slate-600">Calls are coordinated from 1013 E Niobrara Ave in Chadron. Travel time and access vary across the service region, so share the town, street address, and issue when you call.</p>
            <p className="mt-3 leading-7 text-slate-600">Older housing, mineral-heavy water, harsh winter conditions, and rural well or septic setups can affect which plumbing components are present. Tell us what you know about the property so we can discuss the right next step.</p>
            <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3"><MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" /><div><p className="font-heading text-sm font-bold text-navy">{BUSINESS.address.street}</p><p className="mt-1 text-sm text-slate-600">{BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postalCode}</p></div></div>
              <a className="button-primary shrink-0" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> Call</a>
            </div>
          </div>
          <MapEmbed latitude={BUSINESS.coordinates.latitude} longitude={BUSINESS.coordinates.longitude} title="Map showing Tom Carter Drain & Plumbing in Chadron and the northwest Nebraska service area" zoom={10} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Services across the region" title="Plumbing and drain services in all listed communities" description="Service needs range from a single fixture repair to a larger drain or piping issue. Browse popular services, then call to confirm availability at your address." />
          <div className="flex flex-wrap gap-2">
            {SERVICES.slice(0, 10).map((service) => <Link className="area-chip" href={`/services/${service.slug}/`} key={service.slug}>{service.name}</Link>)}
          </div>
          <Link className="button-secondary mt-6" href="/services/">View all 15 services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </section>
      <CallToAction title="Check service availability for your address." description="For rural locations or communities farther from Chadron, call before scheduling so we can discuss timing and access." />
    </>
  );
}
