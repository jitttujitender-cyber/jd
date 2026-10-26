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
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-navy sm:text-5xl">That page has gone down the drain.</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">The address may have changed or the page may no longer be available. Return to the site or call Tom Carter Drain &amp; Plumbing for help.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link className="button-primary" href="/"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home</Link>
            <a className="button-secondary" href={BUSINESS.phoneLink}><PhoneCall className="h-4 w-4" aria-hidden="true" /> Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
