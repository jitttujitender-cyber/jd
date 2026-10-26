import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Droplets, Home, PhoneCall, Snowflake } from "lucide-react";
import { CityCard, ServiceCard, ValueCard } from "@/components/cards";
import { CallToAction, FaqList, JsonLd, MapEmbed, PageHero, SectionHeading } from "@/components/page-sections";
import { BUSINESS } from "@/data/business";
import { CITIES, getCity } from "@/data/cities";
import { getService } from "@/data/services";
import { citySchema, faqPageSchema } from "@/lib/schema";
import { buildMetaDescription, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = getCity(params.city);
  if (!city) {
    return {
      title: "Service area not found",
      description: buildMetaDescription("Plumbing service area", "Chadron", "Browse local service areas or call to check coverage for your address"),
      robots: { index: false, follow: true },
    };
  }

  return pageMetadata({
    title: `Plumbing Services in ${city.name}, NE`,
    description: buildMetaDescription(`Plumbing services`, city.name, city.metaFocus),
    path: `/service-areas/${city.slug}/`,
    image: city.image,
  });
}

export default function CityServiceAreaPage({ params }: { params: { city: string } }) {
  const city = getCity(params.city);
  if (!city) notFound();

  const cityServices = city.serviceCards
    .map((card) => ({ card, service: getService(card.slug) }))
    .filter((item): item is { card: (typeof city.serviceCards)[number]; service: NonNullable<ReturnType<typeof getService>> } => Boolean(item.service));
  const otherCities = CITIES.filter((item) => item.slug !== city.slug);

  return (
    <>
      <JsonLd data={citySchema(city)} />
      <JsonLd data={faqPageSchema(city.faqs)} />
      <PageHero
        eyebrow={`Local plumbing · ${city.county}`}
        title={`Plumbing Services in ${city.name}, NE`}
        description={`Plumbing repairs, drain service, and 24/7 emergency availability for ${city.name} homes and businesses. Call to confirm route timing for your address.`}
        breadcrumbs={[{ label: "Service Areas", href: "/service-areas/" }, { label: `${city.name}, NE` }]}
      />

      <section className="section-pad">
        <div className="container-shell grid items-start gap-9 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">About service in {city.name}</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-navy sm:text-4xl">Plumbing support shaped by the local property.</h2>
            <p className="mt-4 leading-7 text-slate-600">{city.overview[0]}</p>
            <p className="mt-4 leading-7 text-slate-600">{city.overview[1]}</p>
            <a className="button-primary mt-6" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem] bg-slate-200 sm:min-h-[25rem]">
            <Image src={city.image} alt={city.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover" />
            <div className="absolute bottom-4 left-4 rounded-xl bg-navy/90 px-4 py-3 text-sm font-bold text-white shadow-card">Serving {city.name} and nearby properties</div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas">
        <div className="container-shell">
          <SectionHeading eyebrow="Local plumbing context" title={`What homeowners in ${city.name} should know`} description="Water source, building age, and weather exposure can change what a plumbing symptom means. These local details are a useful starting point for a service conversation." />
          <div className="grid gap-4 md:grid-cols-3">
            <ValueCard icon={Droplets} title="Water and mineral context" description={city.hardness} />
            <ValueCard icon={Home} title="Housing and pipe conditions" description={city.housing} />
            <ValueCard icon={Snowflake} title="Seasonal plumbing note" description={city.seasonalNote} />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow={`Services in ${city.name}`} title={`Plumbing and drain services for ${city.name} properties`} description="These service options reflect common needs in the area. Select a service for a detailed explanation, warning signs, and answers to common questions." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cityServices.map(({ card, service }) => <ServiceCard cityName={city.name} description={card.description} service={service} key={service.slug} />)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow !text-orange">{city.landmark}</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight sm:text-4xl">Serving homes around {city.name}.</h2>
            <p className="mt-4 leading-7 text-slate-300">{city.coverage}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">Service is coordinated from {BUSINESS.address.street}, {BUSINESS.address.city}. Call to confirm route availability and timing for your location.</p>
          </div>
          <MapEmbed latitude={city.coordinates.latitude} longitude={city.coordinates.longitude} title={`Map centered on ${city.name}, Nebraska service area`} zoom={12} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Questions from {city.name}</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-navy">Local service FAQs</h2>
            <p className="mt-4 leading-7 text-slate-600">Call with your address, the affected fixture, and what you have already observed. For an active leak or backup, emergency service is available 24/7.</p>
            <a className="mt-5 inline-flex items-center gap-2 font-bold text-blue hover:text-orange" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}</a>
          </div>
          <FaqList items={city.faqs} />
        </div>
      </section>

      <section className="section-pad bg-canvas">
        <div className="container-shell">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="More coverage" title="Other service communities" description="Browse local plumbing details for the additional communities in the listed service area." />
            <Link className="inline-flex items-center gap-2 font-bold text-blue hover:text-orange" href="/service-areas/">View service area overview <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherCities.map((otherCity) => <CityCard city={otherCity} key={otherCity.slug} />)}
          </div>
        </div>
      </section>

      <CallToAction title={`Need plumbing service in ${city.name}?`} description={`Call to discuss your ${city.name} property, the issue you are seeing, and whether service is available at your address.`} dark />
    </>
  );
}
