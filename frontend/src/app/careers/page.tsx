import type { Metadata } from "next";
import { recruitmentPolicy, trainingProgramme } from "@/data/content";

export const metadata: Metadata = {
  title: "Careers — Om Facility Management",
  description:
    "OFM's recruitment policy and training programme for security and facility staff.",
};

export default function CareersPage() {
  return (
    <>
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
            Recruitment policy
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[36px] font-extrabold leading-tight text-ink sm:text-[44px]">
            Every recruit meets the same eligibility spec.
          </h1>
        </div>
      </section>

      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="divide-y rule border-t rule">
            {recruitmentPolicy.map((r) => (
              <div
                key={r.label}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
              >
                <span className="w-56 shrink-0 font-display text-[15px] font-bold text-ink">
                  {r.label}
                </span>
                <span className="text-[15px] text-charcoal/75">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[28px] font-bold text-ink">
            Company training programme
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/70">
            OFM runs its own training centre in Delhi. Every recruit is trained
            across the subjects below before deployment.
          </p>
          <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {trainingProgramme.map((item, i) => (
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
