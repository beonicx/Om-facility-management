import Link from "next/link";
import BuildingSchematic from "@/components/BuildingSchematic";
import {
  vision,
  mission,
  whyOfm,
  pillars,
  locations,
  clients,
  company,
} from "@/data/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
              Integrated facility &amp; property management
            </p>
            <h1 className="mt-5 font-display text-[42px] font-extrabold leading-[1.05] text-ink sm:text-[54px]">
              We understand what a building needs to keep running.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-charcoal/75">
              Security, housekeeping, engineering and support staff — coordinated
              under one contract, one point of contact, and one set of daily
              reports. Pan-India, 24×7.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-ink px-6 py-3 text-[15px] font-semibold text-paper transition-colors hover:bg-ink-2"
              >
                Talk to our team
              </Link>
              <Link
                href="/services"
                className="border border-ink px-6 py-3 text-[15px] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                See what we run
              </Link>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t rule pt-6">
              <div>
                <dt className="text-[12px] uppercase tracking-wide text-charcoal/50">Locations</dt>
                <dd className="font-display text-[26px] font-bold text-ink">20+</dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-wide text-charcoal/50">Operations</dt>
                <dd className="font-display text-[26px] font-bold text-ink">24×7</dd>
              </div>
              <div>
                <dt className="text-[12px] uppercase tracking-wide text-charcoal/50">Coverage</dt>
                <dd className="font-display text-[26px] font-bold text-ink">Pan-India</dd>
              </div>
            </dl>
          </div>

          <div className="text-plum">
            <BuildingSchematic />
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="border-b rule bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
          <div className="md:border-r rule-dark md:pr-10">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
              Vision
            </h2>
            <p className="mt-4 max-w-sm text-[19px] leading-relaxed">{vision}</p>
          </div>
          <div className="md:pl-10">
            <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
              Mission
            </h2>
            <p className="mt-4 max-w-sm text-[19px] leading-relaxed">{mission}</p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-[28px] font-bold text-ink">
              Six services, one contract.
            </h2>
            <Link href="/services" className="hidden shrink-0 text-[14px] font-semibold text-plum md:block">
              Full scope of work
            </Link>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border rule sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.id} className="bg-paper p-7">
                <p className="font-display text-[17px] font-bold text-ink">{p.name}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-charcoal/70">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OFM — as an operations checklist */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[28px] font-bold text-ink">
            Why sites choose OFM
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-charcoal/70">
            Not a pitch — the operating commitments written into every OFM contract.
          </p>

          <ol className="mt-10 grid gap-x-10 sm:grid-cols-2">
            {whyOfm.slice(0, 10).map((item, i) => (
              <li key={item} className="ledger-row flex gap-4 py-3.5">
                <span className="font-display text-[13px] font-bold text-charcoal/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] text-charcoal/85">{item}</span>
              </li>
            ))}
          </ol>
          <Link
            href="/about"
            className="mt-8 inline-block text-[14px] font-semibold text-plum"
          >
            Read the full list on the About page →
          </Link>
        </div>
      </section>

      {/* PRESENCE STRIP */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[28px] font-bold text-ink">
              Where we operate
            </h2>
            <Link href="/presence" className="text-[14px] font-semibold text-plum">
              Full coverage map →
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {locations.map((loc) => (
              <span key={loc} className="text-[16px] text-charcoal/70">
                {loc}
              </span>
            ))}
            <span className="text-[16px] font-semibold text-amber-dim">+ 8 more states</span>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[28px] font-bold text-ink">
            Trusted by
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-4">
            {clients.slice(0, 8).map((c) => (
              <span key={c} className="text-[15px] font-medium text-charcoal/65">
                {c}
              </span>
            ))}
          </div>
          <Link href="/clients" className="mt-8 inline-block text-[14px] font-semibold text-plum">
            See every client →
          </Link>
        </div>
      </section>

      <section className="border-t rule bg-amber/10">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-[26px] font-bold text-ink">
              Ready to hand off the non-core work?
            </h2>
            <p className="mt-2 text-[15px] text-charcoal/70">
              Email {company.email} or send a message and our Delhi-NCR office will respond.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-ink px-7 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-ink-2"
          >
            Request a proposal
          </Link>
        </div>
      </section>
    </>
  );
}
