import type { Metadata } from "next";
import { locations, statesCovered, company } from "@/data/content";

export const metadata: Metadata = {
  title: "Presence — Om Facility Management",
  description:
    "Om Facility Management operates across 20+ locations Pan-India, from a corporate office in Delhi-NCR.",
};

export default function PresencePage() {
  return (
    <>
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
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

      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[22px] font-bold text-ink">
            Active locations
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-4">
            {locations.map((loc, i) => (
              <div key={loc} className="flex items-baseline gap-3 border-t rule pt-3">
                <span className="font-display text-[12px] font-bold text-charcoal/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[16px] text-charcoal/85">{loc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[22px] font-bold text-ink">
            States &amp; union territories covered
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {statesCovered.map((s) => (
              <span key={s} className="border rule px-4 py-2 text-[14px] text-charcoal/75">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
