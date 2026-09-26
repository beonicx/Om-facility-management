import type { Metadata } from "next";
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
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
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

      {/* Six pillars */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-px overflow-hidden border rule sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.id} className="bg-paper p-7">
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
      <section className="border-b rule bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
          <div className="md:border-r rule-dark md:pr-10">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
              Facility management covers
            </h2>
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
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
              Operations &amp; maintenance engineering
            </h2>
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
              <h2 className="font-display text-[18px] font-bold text-ink">Security services</h2>
              <List items={securityServices} />
            </div>
            <div>
              <h2 className="font-display text-[18px] font-bold text-ink">Office support services</h2>
              <List items={officeSupportServices} />
            </div>
            <div>
              <h2 className="font-display text-[18px] font-bold text-ink">Soft services</h2>
              <List items={softServices} />
            </div>
          </div>
        </div>
      </section>

      {/* Target segments */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[28px] font-bold text-ink">Who we serve</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {targetSegments.map((s) => (
              <span
                key={s}
                className="border rule px-4 py-2 text-[14px] text-charcoal/75"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Registers / checklists — the operational paperwork */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
            24×7 operations
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-[28px] font-bold text-ink">
            Every site runs on logged registers, not memory.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal/70">
            The checklists and logbooks maintained at every OFM site, so a
            client can audit what happened on any given day.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-display text-[16px] font-bold text-ink">Security checklist</h3>
              <List items={securityChecklist} />
            </div>
            <div>
              <h3 className="font-display text-[16px] font-bold text-ink">Housekeeping checklist</h3>
              <List items={housekeepingChecklist} />
            </div>
            <div>
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
          <div className="mt-8 divide-y rule border-t rule">
            {siteOperatingStandards.map((s) => (
              <div key={s.short} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-44 shrink-0 font-display text-[15px] font-bold text-ink">
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
