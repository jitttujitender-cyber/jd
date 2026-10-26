import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarClock, ClipboardCheck, Droplets, MapPinned, PhoneCall, SearchCheck, Wrench } from "lucide-react";
import { businessSchema } from "@/lib/schema";
import { buildMetaDescription, pageMetadata } from "@/lib/seo";
import { BUSINESS } from "@/data/business";
import { CITIES, MAIN_CITIES } from "@/data/cities";
import { SERVICES } from "@/data/services";
import { CityCard, ServiceCard, StatCard, StepCard, ValueCard } from "@/components/cards";
import { CallToAction, JsonLd, MapEmbed, SectionHeading } from "@/components/page-sections";

const description = buildMetaDescription("Plumbing and drain service", "Chadron", "Emergency plumbing and drain cleaning from a local team");

export const metadata = pageMetadata({
  title: "Plumbing & Drain Service in Chadron, NE",
  description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <section className="overflow-hidden bg-white">
        <div className="container-shell grid items-center gap-10 py-10 sm:py-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 lg:py-16">
          <div className="max-w-2xl">
            <p className="eyebrow">Chadron, Nebraska · Serving the Panhandle</p>
            <h1 className="mt-4 font-heading text-[2.55rem] font-bold leading-[1.07] tracking-tight text-navy sm:text-5xl lg:text-[3.65rem]">Plumbing &amp; drain help, from a team that knows the area.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Tom Carter Drain &amp; Plumbing provides practical plumbing repairs and drain service from our Chadron home base. Emergency service is available 24/7 across northwest Nebraska.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a className="button-primary" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
              <Link className="button-secondary" href="/services/">Explore plumbing services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><CalendarClock className="h-4 w-4 text-orange" aria-hidden="true" /> Open 24/7</span>
              <span className="inline-flex items-center gap-2"><MapPinned className="h-4 w-4 text-orange" aria-hidden="true" /> Based in Chadron, NE</span>
            </div>
          </div>
          <div className="relative min-h-[20rem] overflow-hidden rounded-[1.5rem] bg-slate-200 shadow-soft sm:min-h-[27rem]">
            <Image src={BUSINESS.image} alt="Plumber working on a residential sink repair in Chadron, Nebraska" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/30 bg-navy/90 p-4 text-white shadow-soft backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange">Local service, clear next steps</p>
              <p className="mt-1 font-heading text-lg font-bold sm:text-xl">Plumbing and drain care for homes and businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-canvas py-6">
        <div className="container-shell grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          <div className="flex items-center gap-3"><span className="rounded-xl bg-white p-2.5 text-orange shadow-card"><CalendarClock className="h-5 w-5" aria-hidden="true" /></span><div><p className="font-heading text-sm font-bold text-navy">24/7 availability</p><p className="mt-0.5 text-xs text-slate-500">Emergency calls</p></div></div>
          <div className="flex items-center gap-3"><span className="rounded-xl bg-white p-2.5 text-orange shadow-card"><MapPinned className="h-5 w-5" aria-hidden="true" /></span><div><p className="font-heading text-sm font-bold text-navy">12 communities</p><p className="mt-0.5 text-xs text-slate-500">Northwest Nebraska</p></div></div>
          <div className="flex items-center gap-3"><span className="rounded-xl bg-white p-2.5 text-orange shadow-card"><Wrench className="h-5 w-5" aria-hidden="true" /></span><div><p className="font-heading text-sm font-bold text-navy">15 services</p><p className="mt-0.5 text-xs text-slate-500">Drain to repiping</p></div></div>
          <div className="flex items-center gap-3"><span className="rounded-xl bg-white p-2.5 text-orange shadow-card"><Droplets className="h-5 w-5" aria-hidden="true" /></span><div><p className="font-heading text-sm font-bold text-navy">Chadron based</p><p className="mt-0.5 text-xs text-slate-500">Dawes County</p></div></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="A practical approach" title="Start with the plumbing problem in front of you" description="From an urgent backup to a fixture upgrade, the right service begins with the symptoms, the home’s plumbing, and a clear explanation of what happens next." />
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <ValueCard icon={CalendarClock} title="Emergency availability" description="Call any time for urgent drain or plumbing concerns. We will discuss the situation and immediate next steps." />
            <ValueCard icon={SearchCheck} title="Diagnosis before repair" description="We check the affected fixture or line and explain what the findings mean before choosing the work." />
            <ValueCard icon={ClipboardCheck} title="Clear scope" description="Understand the repair options, access needs, and service details before work moves ahead." />
            <ValueCard icon={MapPinned} title="Local water context" description="Northwest Nebraska homes may face mineral buildup, older piping, rural wells, or hard freezes." />
          </div>
        </div>
      </section>

      <section className="bg-navy py-12 text-white sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow !text-orange">Local plumbing context</p>
            <h2 className="mt-3 max-w-xl font-heading text-3xl font-bold leading-tight sm:text-4xl">Good plumbing advice starts with your water and your home.</h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">Chadron water is commonly reported around 12–15 grains per gallon, and some older homes still have galvanized supply piping. A property-level inspection and water test help distinguish mineral scale from a worn component or aging line.</p>
            <Link className="mt-6 inline-flex items-center gap-2 font-bold text-orange hover:text-orange/80" href="/service-areas/chadron/">Plumbing service in Chadron <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard value="24/7" label="Emergency service" detail="Call when an urgent plumbing or drain issue cannot wait." />
            <StatCard value="12" label="Communities" detail="From Chadron through the listed northwest Nebraska service region." />
            <StatCard value="15" label="Service categories" detail="Repairs, drain care, water heaters, and more." />
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas">
        <div className="container-shell">
          <SectionHeading eyebrow="Plumbing services" title="One local number for a wide range of plumbing needs" description="Explore the service that fits your concern. If you are not sure where to start, call and describe the fixture, symptoms, and urgency." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {SERVICES.map((service) => <ServiceCard service={service} key={service.slug} />)}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-blue/10 bg-white p-5 sm:flex-row sm:items-center sm:p-6">
            <div><h3 className="font-heading text-lg font-bold text-navy">Need help deciding what to book?</h3><p className="mt-1 text-sm text-slate-600">Talk through the symptoms with a local plumbing team.</p></div>
            <a className="button-primary shrink-0" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[20rem] overflow-hidden rounded-[1.5rem] bg-slate-200 sm:min-h-[26rem]">
            <Image src="/assets/images/chadron-ne.png" alt="Chadron, Nebraska and the Pine Ridge service region" fill sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Based in Chadron</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">A local service area with real High Plains conditions.</h2>
            <p className="mt-4 leading-7 text-slate-600">Tom Carter Drain &amp; Plumbing is based at 1013 E Niobrara Ave in Chadron. Homes across the region can have different water sources, pipe materials, and winter exposure, so a clear description of the property helps us plan the right visit.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-canvas p-4"><p className="font-heading text-sm font-bold text-navy">Water hardness</p><p className="mt-1 text-sm leading-6 text-slate-600">Reported around 12–15 gpg in Chadron; test at the property to confirm.</p></div>
              <div className="rounded-xl bg-canvas p-4"><p className="font-heading text-sm font-bold text-navy">Seasonal care</p><p className="mt-1 text-sm leading-6 text-slate-600">Protect exposed lines and check unheated spaces before deep winter cold.</p></div>
            </div>
            <Link className="mt-6 inline-flex items-center gap-2 font-bold text-blue hover:text-orange" href="/about/">Learn about our approach <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas">
        <div className="container-shell">
          <SectionHeading eyebrow="How service works" title="A straightforward path from first call to finished repair" description="Every plumbing system is different. The steps below keep the conversation focused on what is happening at your property." centered />
          <div className="grid gap-4 md:grid-cols-3">
            <StepCard number="01" icon={PhoneCall} title="Tell us what you see" description="Describe the fixture, leak, backup, or hot-water concern and share the service address." />
            <StepCard number="02" icon={SearchCheck} title="Inspect and explain" description="We assess the symptoms and accessible plumbing, then review what we find and the options." />
            <StepCard number="03" icon={Wrench} title="Complete agreed work" description="After the scope is clear, the repair is completed and the affected fixture or line is checked." />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <div className="mb-9 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <SectionHeading eyebrow="Service coverage" title="Serving Chadron and 11 nearby communities" description="Call with your address to confirm availability and timing, especially for rural properties or locations farther from Chadron." />
            <Link className="button-secondary shrink-0" href="/service-areas/">View all service areas <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CITIES.map((city) => <CityCard city={city} primary={MAIN_CITIES.some((mainCity) => mainCity.slug === city.slug)} key={city.slug} />)}
          </div>
        </div>
      </section>

      <section className="section-pad-sm bg-canvas">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">Find our Chadron home base</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Tom Carter Drain &amp; Plumbing</h2>
            <p className="mt-3 leading-7 text-slate-600">{BUSINESS.address.street}<br />{BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postalCode}</p>
            <p className="mt-3 text-sm font-semibold text-slate-700">{BUSINESS.hours}</p>
            <a className="mt-5 inline-flex items-center gap-2 font-bold text-blue hover:text-orange" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}</a>
          </div>
          <MapEmbed latitude={BUSINESS.coordinates.latitude} longitude={BUSINESS.coordinates.longitude} title="Map to Tom Carter Drain & Plumbing in Chadron, Nebraska" zoom={13} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="The service standard" title="Clear communication matters as much as the repair" description="A plumbing visit should leave you with a better understanding of the issue, the work completed, and any useful next step." centered />
          <div className="grid gap-4 md:grid-cols-3">
            <ValueCard icon={SearchCheck} title="Explain what we find" description="We describe the visible issue and what may need additional inspection before moving ahead." />
            <ValueCard icon={ClipboardCheck} title="Keep the scope clear" description="You can ask questions about access, options, and service details while the work is being planned." />
            <ValueCard icon={CalendarClock} title="Be reachable when urgent" description="Emergency plumbing and drain calls are available around the clock at the Chadron service number." />
          </div>
          <p className="mt-5 text-center text-xs text-slate-500">We do not publish customer reviews on this site without verified review content.</p>
        </div>
      </section>

      <CallToAction title="A plumbing problem cannot always wait." description="Call any time to discuss an urgent drain or plumbing issue in Chadron and the surrounding service region." dark />
    </>
  );
}
