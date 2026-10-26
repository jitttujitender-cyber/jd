import Link from "next/link";
import { businessSchema } from "@/lib/schema";
import { buildMetaDescription, pageMetadata } from "@/lib/seo";
import { BUSINESS } from "@/data/business";
import { JsonLd, PageHero } from "@/components/page-sections";

const description = buildMetaDescription("Privacy policy", "Chadron", "Learn how this website handles contact form entries, embedded maps, and information you choose to share");

export const metadata = pageMetadata({ title: "Privacy Policy", description, path: "/privacy-policy/" });

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <PageHero eyebrow="Privacy" title="Privacy policy" description="This page explains what information this website handles and what to expect when you contact Tom Carter Drain & Plumbing." breadcrumbs={[{ label: "Privacy Policy" }]} />
      <section className="section-pad">
        <article className="container-shell max-w-4xl">
          <p className="text-sm text-slate-500">Last updated: October 26, 2026</p>
          <div className="prose-copy mt-6 space-y-8">
            <section>
              <h2>Information you choose to share</h2>
              <p>The contact form on this preview is a front-end demonstration only. It does not send, store, or transmit form entries. For a real plumbing request, call <a href={BUSINESS.phoneLink}>{BUSINESS.phone}</a>.</p>
              <p>If you contact the business by phone or another method, information you provide may be used to respond to your request, coordinate service, and communicate about the work.</p>
            </section>
            <section>
              <h2>Cookies and embedded maps</h2>
              <p>This website does not add analytics or advertising cookies. The map on the contact and service-area pages is embedded from Google Maps. Google may collect technical information or use cookies when the map loads; its own privacy terms govern that service.</p>
            </section>
            <section>
              <h2>How information is used</h2>
              <p>Information shared directly with Tom Carter Drain &amp; Plumbing is used to answer questions and coordinate plumbing or drain service. This site does not sell personal information.</p>
            </section>
            <section>
              <h2>External links</h2>
              <p>Pages may link to third-party services such as mapping providers. We do not control the privacy practices of external sites, so please review their policies before sharing information there.</p>
            </section>
            <section>
              <h2>Questions</h2>
              <p>For privacy questions, call <a href={BUSINESS.phoneLink}>{BUSINESS.phone}</a> or visit <Link href="/contact/">the contact page</Link>.</p>
            </section>
          </div>
        </article>
      </section>
    </>
  );
}
