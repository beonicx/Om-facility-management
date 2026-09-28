import Link from "next/link";
import Image from "next/image";
import { ServiceIcon } from "@/components/ServiceIcons";
import {
  vision,
  mission,
  whyOfm,
  pillars,
  locations,
  clients,
  company,
  facilityManagementServices,
} from "@/data/content";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="border-b rule relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-[0.03]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24 relative">
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

          {/* Hero visual — building image */}
          <div className="hidden md:block relative">
            <div className="relative h-[440px] w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-amber/[0.08] to-transparent z-10" />
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                alt="Modern commercial high-rise building"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0vw, 45vw"
                priority
              />
            </div>
            <div className="mt-4 flex gap-3">
              {pillars.slice(0, 3).map((p) => (
                <div key={p.id} className="flex items-center gap-2 border rule px-3 py-2 bg-paper">
                  <div className="h-5 w-5 text-amber-dim">
                    <ServiceIcon id={p.id} />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60">
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="border-b rule bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-amber blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 relative">
          <div className="md:border-r rule-dark md:pr-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-8 bg-amber" />
              <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
                Vision
              </h2>
            </div>
            <p className="mt-4 max-w-sm text-[19px] leading-relaxed">{vision}</p>
          </div>
          <div className="md:pl-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-8 bg-amber" />
              <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
                Mission
              </h2>
            </div>
            <p className="mt-4 max-w-sm text-[19px] leading-relaxed">{mission}</p>
          </div>
        </div>
      </section>

      {/* WHAT WE MANAGE — services overview */}
      <section className="border-b rule bg-gradient-to-b from-amber/[0.04] to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
                Comprehensive coverage
              </p>
              <h2 className="mt-2 font-display text-[28px] font-bold text-ink">
                Six services, one contract.
              </h2>
            </div>
            <Link href="/services" className="hidden shrink-0 text-[14px] font-semibold text-plum md:block">
              Full scope of work →
            </Link>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden border rule sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.id} className="group bg-paper p-7 transition-colors hover:bg-amber/[0.03]">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 text-amber-dim">
                    <ServiceIcon id={p.id} />
                  </div>
                  <div>
                    <p className="font-display text-[17px] font-bold text-ink">{p.name}</p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-charcoal/70">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITY MANAGEMENT SERVICES STRIP */}
      <section className="border-b rule bg-plum/[0.04]">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <p className="font-display text-[12px] font-bold uppercase tracking-[0.18em] text-plum/60 mb-6">
            Facility management covers
          </p>
          <div className="flex flex-wrap gap-3">
            {facilityManagementServices.map((s) => (
              <span
                key={s}
                className="border border-plum/20 bg-paper px-4 py-2 text-[13px] font-medium text-charcoal/75"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OFM */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
            <div>
              <h2 className="font-display text-[28px] font-bold text-ink">
                Why sites choose OFM
              </h2>
              <p className="mt-3 max-w-sm text-[15px] text-charcoal/70">
                Not a pitch — the operating commitments written into every OFM contract.
              </p>
              <div className="mt-8 relative h-[200px] w-full overflow-hidden border rule">
                <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                  alt="Modern facility lobby with clean interiors"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="font-display text-[22px] font-bold text-paper">20+</p>
                  <p className="text-[13px] text-paper/80">Locations Pan-India</p>
                </div>
              </div>
              <Link
                href="/about"
                className="mt-6 inline-block text-[14px] font-semibold text-plum"
              >
                Full list on About page →
              </Link>
            </div>

            <ol className="grid gap-x-10 sm:grid-cols-2">
              {whyOfm.slice(0, 10).map((item, i) => (
                <li key={item} className="ledger-row flex gap-4 py-3.5">
                  <span className="font-display text-[13px] font-bold text-amber-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] text-charcoal/85">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PRESENCE STRIP */}
      <section className="border-b rule bg-gradient-to-r from-amber/[0.06] to-transparent">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
                Our presence
              </p>
              <h2 className="mt-2 font-display text-[28px] font-bold text-ink">
                Where we operate
              </h2>
            </div>
            <Link href="/presence" className="text-[14px] font-semibold text-plum">
              Full coverage map →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
            {locations.map((loc) => (
              <div key={loc} className="flex items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-amber" />
                <span className="text-[15px] text-charcoal/75">{loc}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] font-semibold text-amber-dim">+ coverage across 20 states</p>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-[28px] font-bold text-ink">
            Trusted by
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border rule sm:grid-cols-3 md:grid-cols-4">
            {clients.slice(0, 8).map((c) => (
              <div
                key={c}
                className="flex min-h-[72px] items-center bg-paper px-5 py-4 text-[15px] font-medium text-charcoal/70 transition-colors hover:bg-amber/[0.04] hover:text-charcoal"
              >
                {c}
              </div>
            ))}
          </div>
          <Link href="/clients" className="mt-8 inline-block text-[14px] font-semibold text-plum">
            See every client →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber/15 via-amber/10 to-amber/5" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
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

function SecurityIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" fill="none" aria-hidden="true">
      <path d="M32 6L10 16v16c0 14 10 22 22 26 12-4 22-12 22-26V16L32 6z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M32 6L10 16v16c0 14 10 22 22 26 12-4 22-12 22-26V16L32 6z" fill="currentColor" opacity="0.08" />
      <path d="M24 32l5 5 11-11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
