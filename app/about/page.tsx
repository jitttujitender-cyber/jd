import Image from "next/image";
import { Clock3, Droplets, MapPinned, MessageSquareText, ShieldCheck, Wrench } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { CITIES } from "@/data/cities";
import { businessSchema } from "@/lib/schema";
import { buildMetaDescription, pageMetadata } from "@/lib/seo";
import { CallToAction, JsonLd, PageHero, SectionHeading } from "@/components/page-sections";
import { CityCard, ValueCard } from "@/components/cards";

const description = buildMetaDescription("About Tom Carter Drain & Plumbing", "Chadron", "A local plumbing and drain team serving homes and businesses across northwest Nebraska");

export const metadata = pageMetadata({ title: "About Tom Carter Drain & Plumbing", description, path: "/about/" });

export default function AboutPage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <PageHero eyebrow="About the business" title="Local plumbing and drain service, based in Chadron." description="Tom Carter Drain & Plumbing serves Chadron and northwest Nebraska with residential and commercial plumbing work, drain cleaning, and 24/7 emergency availability." breadcrumbs={[{ label: "About" }]} />

      <section className="section-pad">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[22rem] overflow-hidden rounded-[1.5rem] bg-slate-200 sm:min-h-[30rem]">
            <Image src="/assets/images/about-team.png" alt="Illustrative plumbing technician preparing for a service visit" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">A Chadron home base for plumbing problems across the region.</h2>
            <p className="mt-4 leading-7 text-slate-600">Tom Carter Drain &amp; Plumbing is located at 1013 E Niobrara Ave in Chadron, Nebraska. The business focuses on plumbing repairs, drain work, water-heating systems, and related service for homes and local businesses.</p>
            <p className="mt-4 leading-7 text-slate-600">Northwest Nebraska properties can differ in water source, pipe age, and exposure to winter temperatures. We use the details of each property to guide inspection and explain practical next steps instead of assuming every plumbing issue has the same cause.</p>
            <div className="mt-6 rounded-2xl border-l-4 border-orange bg-canvas p-5">
              <p className="font-heading text-base font-bold text-navy">A straightforward service conversation</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Describe what is happening, where it is happening, and how urgent it feels. We can start with those details and help identify what should be checked first.</p>
            </div>
            <a className="button-primary mt-6" href={BUSINESS.phoneLink}>Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas">
        <div className="container-shell">
          <SectionHeading eyebrow="How we work" title="Practical service values for every visit" description="These principles guide how we communicate about plumbing issues and the work a property may need." centered />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard icon={MessageSquareText} title="Clear explanations" description="Understand what we observe, which options are available, and what each repair involves." />
            <ValueCard icon={ShieldCheck} title="Careful work" description="We treat the home or business as an occupied space and keep attention on the affected area." />
            <ValueCard icon={Clock3} title="Emergency availability" description="Urgent drain and plumbing calls can be made 24 hours a day, 7 days a week." />
            <ValueCard icon={MapPinned} title="Local coverage" description="Service is arranged from Chadron for the listed northwest Nebraska communities." />
            <ValueCard icon={Droplets} title="Water-aware advice" description="Mineral deposits, private wells, and fixture conditions are considered where relevant." />
            <ValueCard icon={Wrench} title="Scope before work" description="We discuss the issue and the next step before proceeding with the agreed repair." />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="The service region" title="Serving Chadron and communities across northwest Nebraska" description="We serve the towns listed below. Call to confirm route availability and timing for your address, especially for rural properties." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CITIES.map((city) => <CityCard city={city} key={city.slug} />)}
          </div>
        </div>
      </section>

      <CallToAction title="Tell us what is going on at your property." description="Call Tom Carter Drain & Plumbing to discuss a repair, drain issue, or service-area question." />
    </>
  );
}
