import Link from "next/link";
import { ArrowRight, PhoneCall, Wrench } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";
import { businessSchema } from "@/lib/schema";
import { buildMetaDescription, pageMetadata } from "@/lib/seo";
import { CallToAction, JsonLd, PageHero, SectionHeading } from "@/components/page-sections";
import { ServiceCard } from "@/components/cards";

const description = buildMetaDescription("Plumbing services", "Chadron", "Drain cleaning, leak detection, water heaters, repiping, and residential plumbing repairs");

export const metadata = pageMetadata({ title: "Plumbing Services in Chadron, NE", description, path: "/services/" });

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <PageHero eyebrow="Plumbing and drain services" title="Plumbing Services in Chadron, NE" description="Explore drain cleaning, water-heater work, leak detection, fixture repair, repiping, and more. Emergency service is available 24/7 across the northwest Nebraska service region." breadcrumbs={[{ label: "Services" }]} />

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Service directory" title="Find the plumbing service that fits the problem" description="Every service starts with the symptoms and the condition of the plumbing at your property. Select a service to see signs, process details, and answers to common questions." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((service) => <ServiceCard expanded service={service} key={service.slug} />)}
          </div>
        </div>
      </section>

      <section className="bg-canvas py-12 sm:py-16">
        <div className="container-shell grid items-center gap-6 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card sm:p-9 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange/10 text-orange"><Wrench className="h-5 w-5" aria-hidden="true" /></span>
            <h2 className="mt-4 font-heading text-2xl font-bold text-navy">Not sure which service you need?</h2>
            <p className="mt-2 max-w-2xl leading-7 text-slate-600">You do not need to diagnose the plumbing yourself. Share what you see, which fixtures are affected, and whether water is actively leaking or backing up.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a className="button-primary" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
            <Link className="button-secondary" href="/contact/">Send a message <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <CallToAction title="Need emergency plumbing or drain help?" description="Call any time to talk through an urgent plumbing issue and the next available service step." dark />
    </>
  );
}
