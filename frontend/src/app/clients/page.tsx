import type { Metadata } from "next";
import Link from "next/link";
import { clients, targetSegments } from "@/data/content";

export const metadata: Metadata = {
  title: "Clients — Om Facility Management",
  description: "Some of the prestigious clients OFM has worked with.",
};

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b rule relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-[0.03]" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 relative">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
            Clients
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[36px] font-extrabold leading-tight text-ink sm:text-[44px]">
            Some of our prestigious clients.
          </h1>
          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-charcoal/75">
            We have been working with our prestigious clients across sectors — delivering comprehensive facility management services.
          </p>
        </div>
      </section>

      {/* Client grid */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-px overflow-hidden border rule sm:grid-cols-2 md:grid-cols-3">
            {clients.map((c, i) => (
              <div
                key={c}
                className="group flex min-h-[92px] items-center gap-4 bg-paper px-6 py-5 transition-colors hover:bg-amber/[0.04]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-amber/10 font-display text-[11px] font-bold text-amber-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] font-medium text-charcoal/80 group-hover:text-charcoal">
                  {c}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[22px] font-bold text-ink">
            Sectors we serve
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {targetSegments.map((s) => (
              <span key={s} className="border rule px-4 py-2 text-[14px] text-charcoal/75">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-10 border-t rule pt-8">
            <p className="max-w-lg text-[15px] text-charcoal/70">
              Need facility management for your property?
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block bg-ink px-6 py-3 text-[15px] font-semibold text-paper transition-colors hover:bg-ink-2"
            >
              Request a proposal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
