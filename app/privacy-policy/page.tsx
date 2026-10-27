import { SiteLink as Link } from "@/components/site-link";
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
              <h2>Introduction</h2>
              <p>This policy explains what information may be handled when you visit this website or contact Tom Carter Drain &amp; Plumbing. The online contact form is a front-end demonstration and does not transmit or store submissions.</p>
            </section>
            <section>
              <h2>Information we collect</h2>
              <p>The contact form does not send entries to the business or this website. If you call the business directly, you choose what information to share during that conversation.</p>
              <p>The hosting platform may process basic technical request information, such as browser and network details, to deliver and protect the website.</p>
            </section>
            <section>
              <h2>How we use information</h2>
              <p>Information shared directly with Tom Carter Drain &amp; Plumbing may be used to answer questions, discuss service availability, and coordinate plumbing or drain work. This website does not sell information submitted through its contact form because form entries are not transmitted.</p>
            </section>
            <section>
              <h2>Third-party services</h2>
              <p>Maps on this site are embedded from Google Maps. Loading an embedded map may send technical information to Google. Third-party services handle that information under their own policies; review Google&apos;s privacy information for details.</p>
            </section>
            <section>
              <h2>Cookies and similar technologies</h2>
              <p>This website does not add analytics or advertising cookies. Google Maps may use cookies or similar technologies when an embedded map loads.</p>
            </section>
            <section>
              <h2>Data retention</h2>
              <p>This website does not store online form entries. Records created through a direct phone conversation are handled by the business under its own recordkeeping practices and applicable requirements. Contact the business with questions about information you shared directly.</p>
            </section>
            <section>
              <h2>Your rights</h2>
              <p>Privacy rights vary by location and the circumstances of the information. If you have a question about information shared directly with the business, call <a href={BUSINESS.phoneLink}>{BUSINESS.phone}</a> so the team can discuss your request.</p>
            </section>
            <section>
              <h2>Children&apos;s privacy</h2>
              <p>This website is intended for people seeking plumbing services and is not directed to children under 13. The contact form does not transmit or retain submitted information.</p>
            </section>
            <section>
              <h2>Changes to this policy</h2>
              <p>This page may be updated if the website or its information practices change. The date above indicates the latest revision.</p>
            </section>
            <section>
              <h2>Contact</h2>
              <p>For privacy questions, call <a href={BUSINESS.phoneLink}>{BUSINESS.phone}</a> or write to Tom Carter Drain &amp; Plumbing at {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.region} {BUSINESS.address.postalCode}. You can also visit <Link href="/contact/">the contact page</Link>.</p>
            </section>
          </div>
        </article>
      </section>
    </>
  );
}
