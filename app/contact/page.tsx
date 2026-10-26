import Link from "next/link";
import { Clock3, Mail, MapPin, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd, MapEmbed, PageHero } from "@/components/page-sections";
import { BUSINESS } from "@/data/business";
import { CITIES } from "@/data/cities";
import { businessSchema } from "@/lib/schema";
import { buildMetaDescription, pageMetadata } from "@/lib/seo";

const description = buildMetaDescription("Contact Tom Carter Drain & Plumbing", "Chadron", "Call 24/7 for emergency plumbing or reach the team about a service request");

export const metadata = pageMetadata({ title: "Contact Tom Carter Drain & Plumbing", description, path: "/contact/" });

export default function ContactPage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <PageHero eyebrow="Contact" title="Talk with a local plumbing team." description="Call any time for urgent plumbing or drain help. For a non-emergency request, use the form below; this preview form is client-side only and does not transmit submissions." breadcrumbs={[{ label: "Contact" }]} />

      <section className="section-pad">
        <div className="container-shell grid items-start gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <ContactForm />
          <div className="space-y-5">
            <div className="surface-card p-5 sm:p-7">
              <h2 className="font-heading text-xl font-bold text-navy">Tom Carter Drain &amp; Plumbing</h2>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" /><div><p className="font-semibold text-slate-800">Visit our Chadron location</p><p className="mt-1 text-sm leading-6 text-slate-600">{BUSINESS.address.street}<br />{BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postalCode}</p></div></div>
                <div className="flex items-start gap-3"><PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" /><div><p className="font-semibold text-slate-800">Call any time</p><a className="mt-1 inline-block text-sm font-bold text-blue hover:text-orange" href={BUSINESS.phoneLink}>{BUSINESS.phone}</a></div></div>
                <div className="flex items-start gap-3"><Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" /><div><p className="font-semibold text-slate-800">Availability</p><p className="mt-1 text-sm text-slate-600">{BUSINESS.hours}</p></div></div>
                <div className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange" aria-hidden="true" /><div><p className="font-semibold text-slate-800">Service coverage</p><p className="mt-1 text-sm leading-6 text-slate-600">Chadron and the listed northwest Nebraska communities. Call to confirm your address and timing.</p></div></div>
              </div>
              <Link className="mt-5 inline-flex font-bold text-blue hover:text-orange" href="/service-areas/">See all service areas</Link>
            </div>
            <MapEmbed latitude={BUSINESS.coordinates.latitude} longitude={BUSINESS.coordinates.longitude} title="Map to Tom Carter Drain & Plumbing at 1013 E Niobrara Ave in Chadron" zoom={13} />
            <div className="surface-card p-5">
              <p className="eyebrow">Communities served</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {CITIES.map((city) => <Link key={city.slug} href={`/service-areas/${city.slug}/`} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-orange hover:text-orange">{city.name}</Link>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
