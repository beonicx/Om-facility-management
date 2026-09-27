import type { Metadata } from "next";
import { ServiceIcon } from "@/components/ServiceIcons";
import {
  pillars,
  facilityManagementServices,
  operationsMaintenance,
  securityServices,
  officeSupportServices,
  softServices,
  targetSegments,
  securityChecklist,
  housekeepingChecklist,
  technicalChecklist,
  siteOperatingStandards,
} from "@/data/content";

export const metadata: Metadata = {
  title: "Services — Om Facility Management",
  description:
    "The full scope of OFM's integrated facility management services: security, housekeeping, engineering, soft services and the registers used to run every site.",
};

const pillarColors: Record<string, string> = {
  ifms: "text-plum",
  housekeeping: "text-sky-600",
  security: "text-amber-dim",
  "electro-mechanical": "text-leaf",
  "soft-services": "text-amber",
  "deep-cleaning": "text-plum",
};

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14.5px] leading-relaxed text-charcoal/80">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber-dim" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b rule relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-[0.03]" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 relative">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
            Scope of work
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[36px] font-extrabold leading-tight text-ink sm:text-[44px]">
            Six service pillars, run as one operation.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-charcoal/75">
            Under the facility management division, dedicated operation managers
            and qualified engineers coordinate every discipline below — so a
            client deals with a single team instead of a stack of vendors.
          </p>
        </div>
      </section>

      {/* Six pillars with icons */}
      <section className="border-b rule bg-gradient-to-b from-amber/[0.04] to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.id}
                className="group relative border rule bg-paper p-7 transition-all hover:border-amber/30 hover:shadow-sm"
              >
                <div className="absolute top-0 left-0 h-1 w-12 bg-amber-dim" />
                <div className={`h-12 w-12 mb-4 ${pillarColors[p.id] || "text-amber-dim"}`}>
                  <ServiceIcon id={p.id} />
                </div>
                <p className="font-display text-[17px] font-bold text-ink">{p.full}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/70">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility management + O&M engineering */}
      <section className="border-b rule bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-plum blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 relative">
          <div className="md:border-r rule-dark md:pr-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 text-amber">
                <ServiceIcon id="ifms" />
              </div>
              <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
                Facility management covers
              </h2>
            </div>
            <ul className="mt-5 space-y-2.5">
              {facilityManagementServices.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-paper/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pl-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-8 w-8 text-amber">
                <ServiceIcon id="electro-mechanical" />
              </div>
              <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
                Operations &amp; maintenance engineering
              </h2>
            </div>
            <ul className="mt-5 space-y-2.5">
              {operationsMaintenance.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-paper/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Security / Office support / Soft services */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 text-amber-dim">
                  <ServiceIcon id="security" />
                </div>
                <h2 className="font-display text-[18px] font-bold text-ink">Security services</h2>
              </div>
              <List items={securityServices} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 text-plum">
                  <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" aria-hidden="true">
                    <rect x="14" y="20" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2.5" />
                    <path d="M14 30h36" stroke="currentColor" strokeWidth="2" />
                    <circle cx="32" cy="38" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M24 20v-6a8 8 0 0116 0v6" stroke="currentColor" strokeWidth="2.5" />
                  </svg>
                </div>
                <h2 className="font-display text-[18px] font-bold text-ink">Office support services</h2>
              </div>
              <List items={officeSupportServices} />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 text-leaf">
                  <ServiceIcon id="soft-services" />
                </div>
                <h2 className="font-display text-[18px] font-bold text-ink">Soft services</h2>
              </div>
              <List items={softServices} />
            </div>
          </div>
        </div>
      </section>

      {/* Target segments */}
      <section className="border-b rule bg-gradient-to-r from-plum/[0.04] to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[28px] font-bold text-ink">Who we serve</h2>
          <p className="mt-3 max-w-lg text-[15px] text-charcoal/70">
            From retail and real estate to education and hospitality — OFM covers every sector.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {targetSegments.map((s) => (
              <div
                key={s}
                className="border rule bg-paper px-4 py-3 text-center text-[14px] font-medium text-charcoal/75 transition-colors hover:border-amber/30 hover:text-charcoal"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registers / checklists */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1 w-8 bg-amber-dim" />
            <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
              24×7 operations
            </p>
          </div>
          <h2 className="mt-3 max-w-2xl font-display text-[28px] font-bold text-ink">
            Every site runs on logged registers, not memory.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/70">
            The checklists and logbooks maintained at every OFM site, so a
            client can audit what happened on any given day.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="border-l-2 border-amber-dim pl-6">
              <h3 className="font-display text-[16px] font-bold text-ink">Security checklist</h3>
              <List items={securityChecklist} />
            </div>
            <div className="border-l-2 border-plum pl-6">
              <h3 className="font-display text-[16px] font-bold text-ink">Housekeeping checklist</h3>
              <List items={housekeepingChecklist} />
            </div>
            <div className="border-l-2 border-leaf pl-6">
              <h3 className="font-display text-[16px] font-bold text-ink">Technical checklist</h3>
              <List items={technicalChecklist} />
            </div>
          </div>
        </div>
      </section>

      {/* Site operating standards */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[28px] font-bold text-ink">
            Site operating standards
          </h2>
          <p className="mt-3 max-w-lg text-[15px] text-charcoal/70">
            The reporting and quality framework every OFM-managed site follows.
          </p>
          <div className="mt-8 divide-y rule border-t rule">
            {siteOperatingStandards.map((s) => (
              <div key={s.short} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-44 shrink-0 font-display text-[15px] font-bold text-amber-dim">
                  {s.short}
                </span>
                <span className="text-[15px] text-charcoal/70">{s.full}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
