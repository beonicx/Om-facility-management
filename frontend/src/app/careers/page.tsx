import type { Metadata } from "next";
import Image from "next/image";
import { ServiceIcon } from "@/components/ServiceIcons";
import { recruitmentPolicy, trainingProgramme } from "@/data/content";

export const metadata: Metadata = {
  title: "Careers — Om Facility Management",
  description:
    "OFM's recruitment policy and training programme for security and facility staff.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b rule relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-[0.03]" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 relative">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
                Recruitment policy
              </p>
              <h1 className="mt-4 max-w-2xl font-display text-[36px] font-extrabold leading-tight text-ink sm:text-[44px]">
                Every recruit meets the same eligibility spec.
              </h1>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-charcoal/75">
                OFM maintains strict recruitment standards and invests in training every staff member before deployment.
              </p>
            </div>

            <div className="hidden md:block">
              <div className="relative h-[300px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber/[0.06] to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80"
                  alt="Professional team training session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 0vw, 35vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment requirements */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[22px] font-bold text-ink mb-2">
            Eligibility requirements
          </h2>
          <p className="max-w-lg text-[15px] text-charcoal/60 mb-8">
            Every recruit is verified against these criteria before joining an OFM site.
          </p>
          <div className="grid gap-px overflow-hidden border rule sm:grid-cols-2">
            {recruitmentPolicy.map((r) => (
              <div
                key={r.label}
                className="flex flex-col gap-2 bg-paper p-6"
              >
                <span className="font-display text-[14px] font-bold text-amber-dim">
                  {r.label}
                </span>
                <span className="text-[15px] text-charcoal/75">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training programme */}
      <section className="border-b rule bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-16 relative">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-1 w-8 bg-amber" />
                <p className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
                  Training centre — Delhi
                </p>
              </div>
              <h2 className="mt-3 font-display text-[28px] font-bold">
                Company training programme
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-paper/70">
                OFM runs its own training centre in Delhi. Every recruit is trained
                across the subjects below before deployment.
              </p>

              <div className="mt-8 flex gap-6">
                <div>
                  <p className="font-display text-[28px] font-bold text-amber">{trainingProgramme.length}</p>
                  <p className="text-[12px] uppercase tracking-wide text-paper/50">Training modules</p>
                </div>
                <div>
                  <p className="font-display text-[28px] font-bold text-amber">100%</p>
                  <p className="text-[12px] uppercase tracking-wide text-paper/50">Staff trained</p>
                </div>
              </div>

              <div className="mt-8 relative h-[160px] w-full overflow-hidden border border-paper/10">
                <Image
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=600&q=80"
                  alt="Security personnel on duty"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2">
              {trainingProgramme.map((item, i) => (
                <li key={item} className="flex items-center gap-4 border border-paper/10 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-amber/20 font-display text-[12px] font-bold text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] text-paper/85">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Site operating standards preview */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[22px] font-bold text-ink">
            Site operating standards
          </h2>
          <p className="mt-3 max-w-lg text-[15px] text-charcoal/70">
            Every OFM-managed site follows rigorous reporting and quality frameworks.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: "QAR", desc: "Quality assurance reports" },
              { label: "KPIs", desc: "Key performance indicators" },
              { label: "MIS", desc: "Monthly reports" },
              { label: "SOPs", desc: "Site-specific operating manuals" },
              { label: "CSRs", desc: "Customer satisfaction reports" },
              { label: "CFR", desc: "Client feedback reports" },
            ].map((s) => (
              <div key={s.label} className="border rule p-5 transition-colors hover:border-amber/30">
                <p className="font-display text-[16px] font-bold text-amber-dim">{s.label}</p>
                <p className="mt-1 text-[14px] text-charcoal/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
