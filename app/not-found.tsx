import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, PhoneCall } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { buildMetaDescription } from "@/lib/seo";
import { businessSchema } from "@/lib/schema";
import { JsonLd } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "Page not found",
  description: buildMetaDescription("Page not found", "Chadron", "Return to the plumbing service homepage or call the local team for help"),
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <JsonLd data={businessSchema()} />
      <section className="grid min-h-[65vh] place-items-center bg-canvas px-4 py-16 text-center">
        <div className="max-w-2xl">
          <p className="eyebrow justify-center">404 · Page not found</p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">The address may have changed or the page may no longer be available. Use one of these links to continue.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link className="button-primary" href="/"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Home</Link>
            <Link className="button-secondary" href="/services/">Services</Link>
            <Link className="button-secondary" href="/contact/">Contact</Link>
          </div>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-card">
            <p className="font-heading font-bold text-navy">Need help right away?</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Call Tom Carter Drain &amp; Plumbing directly for 24/7 emergency service.</p>
            <a className="mt-3 inline-flex items-center gap-2 font-bold text-blue hover:text-orange" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> {BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
