import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ClipboardCheck, PhoneCall, SearchCheck, Wrench } from "lucide-react";
import { CheckList, ServiceCard, ValueCard, StepCard } from "@/components/cards";
import { CallToAction, FaqList, JsonLd, PageHero, SectionHeading } from "@/components/page-sections";
import { BUSINESS } from "@/data/business";
import { MAIN_CITIES } from "@/data/cities";
import { getService, SERVICES, type Service } from "@/data/services";
import { faqPageSchema, serviceSchema } from "@/lib/schema";
import { buildMetaDescription, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ service: service.slug }));
}

type ServicePageProps = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) {
    return {
      title: "Service not found",
      description: buildMetaDescription("Service not found", "Chadron", "Browse plumbing and drain services or call for a local service recommendation"),
      robots: { index: false, follow: true },
    };
  }

  return pageMetadata({
    title: `${service.name} in Chadron, NE`,
    description: buildMetaDescription(service.name, "Chadron", service.metaFocus),
    path: `/services/${service.slug}/`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: serviceSlug } = await params;
  const service = getService(serviceSlug);
  if (!service) notFound();

  const relatedServices = service.related
    .map((slug) => getService(slug))
    .filter((related): related is Service => Boolean(related));

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqPageSchema(service.faqs)} />
      <PageHero
        eyebrow="Plumbing service · Chadron, Nebraska"
        title={`${service.name} in Chadron, NE`}
        description={service.summary}
        breadcrumbs={[{ label: "Services", href: "/services/" }, { label: service.name }]}
      />

      <section className="section-pad">
        <div className="container-shell grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[20rem] overflow-hidden rounded-[1.5rem] bg-slate-200 sm:min-h-[28rem]">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <p className="eyebrow">Service overview</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">A focused repair starts with the symptoms.</h2>
            <p className="mt-4 leading-7 text-slate-600">{service.paragraphs[0]}</p>
            <p className="mt-4 leading-7 text-slate-600">{service.paragraphs[1]}</p>
            <a className="button-primary mt-6" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas">
        <div className="container-shell">
          <SectionHeading eyebrow="Signs to look for" title={`When to consider ${service.name.toLowerCase()}`} description="These symptoms can help you describe the issue when you call. They do not replace an inspection of the plumbing system." />
          <CheckList items={service.signs} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Our process" title="Know what to expect from the visit" description={`The steps for ${service.name.toLowerCase()} depend on the condition and access at your property. We explain findings and options before the agreed work begins.`} centered />
          <div className="grid gap-4 md:grid-cols-3">
            {service.process.map((step, index) => {
              const icons = [ClipboardCheck, SearchCheck, Wrench];
              return <StepCard key={step.title} number={`0${index + 1}`} icon={icons[index]} title={step.title} description={step.description} />;
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-shell">
          <SectionHeading eyebrow="Why this service helps" title={`A repair plan shaped around ${service.name.toLowerCase()}`} description="The right scope depends on the actual cause, the plumbing material, and what the system needs to work safely." centered />
          <div className="grid gap-4 md:grid-cols-3">
            {service.benefits.map((benefit) => <ValueCard key={benefit.title} icon={Wrench} title={benefit.title} description={benefit.description} />)}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="eyebrow">Service questions</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Answers about {service.name.toLowerCase()}</h2>
            <p className="mt-4 leading-7 text-slate-600">If your situation is not covered here, call with the symptoms and the service address. We can help identify what information is useful before a visit.</p>
            <a className="mt-5 inline-flex items-center gap-2 font-bold text-blue hover:text-orange" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}</a>
          </div>
          <FaqList items={service.faqs} />
        </div>
      </section>

      {relatedServices.length > 0 ? (
        <section className="section-pad bg-canvas">
          <div className="container-shell">
            <SectionHeading eyebrow="Related plumbing services" title="Other services that may be useful" description="Explore a related page if your symptoms point to another fixture or part of the plumbing system." />
            <div className="grid gap-5 md:grid-cols-3">
              {relatedServices.map((related) => <ServiceCard service={related} key={related.slug} />)}
            </div>
            <Link className="mt-6 inline-flex items-center gap-2 font-bold text-blue hover:text-orange" href="/services/">See all plumbing services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </section>
      ) : null}

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Coverage" title="Plumbing service across the listed Nebraska communities" description="Service is coordinated from Chadron. Call to confirm availability and timing at your address." />
          <div className="flex flex-wrap gap-2">
            {MAIN_CITIES.map((city) => <Link className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange hover:text-orange" href={`/service-areas/${city.slug}/`} key={city.slug}>{city.name}, NE</Link>)}
            <Link className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange hover:text-orange" href="/service-areas/">All service areas <ArrowRight className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <CallToAction title={`Need help with ${service.name.toLowerCase()}?`} description="Call to explain what is happening and discuss the right next step for your home or business." dark />
    </>
  );
}
