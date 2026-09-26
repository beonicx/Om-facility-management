import type { Metadata } from "next";
import { about, vision, mission, goal, whyOfm, company } from "@/data/content";

export const metadata: Metadata = {
  title: "About — Om Facility Management",
  description:
    "OFM's vision, mission and operating commitments as a Pan-India integrated facility management provider.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
            About OFM
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[36px] font-extrabold leading-tight text-ink sm:text-[44px]">
            One provider, every discipline a building depends on.
          </h1>
          <div className="mt-8 max-w-2xl space-y-5">
            {about.map((p) => (
              <p key={p} className="text-[16.5px] leading-relaxed text-charcoal/80">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b rule bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          <div className="md:border-r rule-dark md:pr-8">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
              Vision
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed">{vision}</p>
          </div>
          <div className="md:border-r rule-dark md:px-8">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
              Mission
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed">{mission}</p>
          </div>
          <div className="md:pl-8">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
              Goal
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed">{goal}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[28px] font-bold text-ink">
            Why sites choose OFM
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-charcoal/70">
            The operating commitments written into every OFM contract, {company.short}
            &nbsp;wide.
          </p>

          <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {whyOfm.map((item, i) => (
              <li key={item} className="ledger-row flex gap-4 py-3.5">
                <span className="font-display text-[13px] font-bold text-charcoal/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] text-charcoal/85">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
