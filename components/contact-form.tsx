"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { SERVICES } from "@/data/services";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="surface-card p-5 sm:p-8">
      <div className="mb-6">
        <p className="eyebrow">Contact form</p>
        <h2 className="mt-3 font-heading text-2xl font-bold text-navy">Tell us what you need</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Use the fields to outline your plumbing concern. For emergency service, call {BUSINESS.phone} directly.</p>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5" role="status" aria-live="polite">
          <CheckCircle2 className="h-6 w-6 text-emerald-700" aria-hidden="true" />
          <h3 className="mt-3 font-heading text-lg font-bold text-emerald-950">Thanks for preparing a request.</h3>
          <p className="mt-2 text-sm leading-6 text-emerald-900">This front-end form is not connected to a message service, so your information has not been sent. Call <a className="font-bold underline" href={BUSINESS.phoneLink}>{BUSINESS.phone}</a> to reach the team.</p>
          <button className="mt-4 text-sm font-bold text-emerald-900 underline underline-offset-4" onClick={() => setSubmitted(false)} type="button">Prepare another request</button>
        </div>
      ) : (
        <>
          <p className="mb-5 rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-950">This form is not connected to a message service and does not transmit submissions. Please call {BUSINESS.phone} for a service request.</p>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-semibold text-slate-700" htmlFor="full-name">
                Full name <span className="sr-only">required</span>
                <input autoComplete="name" className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-blue focus:ring-2 focus:ring-blue/15" id="full-name" name="name" placeholder="Your name" required />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold text-slate-700" htmlFor="phone">
                Phone <span className="sr-only">required</span>
                <input autoComplete="tel" className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-blue focus:ring-2 focus:ring-blue/15" id="phone" name="phone" placeholder="Your best callback number" required type="tel" />
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-semibold text-slate-700" htmlFor="email">
              Email <span className="font-normal text-slate-500">(optional)</span>
              <input autoComplete="email" className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-blue focus:ring-2 focus:ring-blue/15" id="email" name="email" placeholder="you@example.com" type="email" />
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-slate-700" htmlFor="service">
              Service needed
              <select className="min-h-11 rounded-lg border border-slate-300 bg-white px-3 text-sm font-normal outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/15" id="service" name="service" defaultValue="">
                <option value="">Choose a service</option>
                {SERVICES.map((service) => <option key={service.slug} value={service.slug}>{service.name}</option>)}
                <option value="other">Other / not sure</option>
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-semibold text-slate-700" htmlFor="message">
              Message <span className="sr-only">required</span>
              <textarea className="min-h-32 resize-y rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm font-normal outline-none transition placeholder:text-slate-400 focus:border-blue focus:ring-2 focus:ring-blue/15" id="message" name="message" placeholder="Tell us which fixture or area is affected and how urgent it is." required />
            </label>
            <button className="button-primary mt-1 w-full sm:w-auto" type="submit">Review request <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
          </form>
        </>
      )}
    </div>
  );
}
