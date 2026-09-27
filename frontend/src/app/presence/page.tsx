import type { Metadata } from "next";
import { locations, statesCovered, company } from "@/data/content";
import IndiaMap from "@/components/IndiaMap";

export const metadata: Metadata = {
  title: "Presence — Om Facility Management",
  description:
    "Om Facility Management operates across 20+ locations Pan-India, from a corporate office in Delhi-NCR.",
};

export default function PresencePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b rule relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-[0.03]" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 relative">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
            Our presence
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[36px] font-extrabold leading-tight text-ink sm:text-[44px]">
            Pan-India, from a corporate office in {company.corporateOffice}.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-charcoal/75">
            OFM runs sites in more than 20 locations across 20 states and union
            territories — with concentrated coverage across Uttar Pradesh and
            Bihar.
          </p>
        </div>
      </section>

      {/* Map + Locations */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
            {/* India map */}
            <IndiaMap className="h-[400px] md:h-[480px] text-charcoal" />

            {/* Locations list */}
            <div>
              <h2 className="font-display text-[22px] font-bold text-ink">
                Active locations
              </h2>
              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-1">
                {locations.map((loc, i) => (
                  <div key={loc} className="flex items-center gap-3 border-b rule py-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-amber/15 font-display text-[11px] font-bold text-amber-dim">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] text-charcoal/85">{loc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border rule bg-ink p-6">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-plum" />
                  <p className="font-display text-[14px] font-bold text-paper">Corporate Office</p>
                </div>
                <p className="mt-2 text-[15px] text-paper/75">{company.corporateOffice}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-amber" />
                  <p className="font-display text-[14px] font-bold text-paper">Registered Office</p>
                </div>
                <p className="mt-2 text-[15px] text-paper/75">{company.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* States covered */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[22px] font-bold text-ink">
            States &amp; union territories covered
          </h2>
          <p className="mt-3 max-w-lg text-[15px] text-charcoal/70">
            Coverage across {statesCovered.length} states and union territories, with dedicated teams in each region.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {statesCovered.map((s) => (
              <div key={s} className="flex items-center gap-2 border rule px-4 py-3 text-[14px] text-charcoal/75 transition-colors hover:border-amber/30">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
