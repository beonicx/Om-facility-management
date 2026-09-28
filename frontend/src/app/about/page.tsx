import type { Metadata } from "next";
import Image from "next/image";
import { ServiceIcon } from "@/components/ServiceIcons";
import { about, vision, mission, goal, whyOfm, company, pillars } from "@/data/content";

export const metadata: Metadata = {
  title: "About — Om Facility Management",
  description:
    "OFM's vision, mission and operating commitments as a Pan-India integrated facility management provider.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b rule relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-[0.03]" />
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 relative">
          <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]">
            <div>
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

            {/* About hero image */}
            <div className="hidden md:flex flex-col gap-4">
              <div className="relative h-[320px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber/[0.06] to-transparent z-10" />
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80"
                  alt="Professional team collaborating on facility management"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 0vw, 35vw"
                  priority
                />
              </div>
              <div className="flex gap-3">
                {pillars.slice(0, 3).map((p) => (
                  <div key={p.id} className="flex items-center gap-2 border rule px-3 py-2 bg-paper">
                    <div className="h-5 w-5 shrink-0 text-amber-dim">
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
        </div>
      </section>

      {/* Vision / Mission / Goal */}
      <section className="border-b rule bg-ink text-paper relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber blur-3xl" />
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3 relative">
          <div className="md:border-r rule-dark md:pr-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-8 bg-amber" />
              <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
                Vision
              </h2>
            </div>
            <p className="mt-4 text-[17px] leading-relaxed">{vision}</p>
          </div>
          <div className="md:border-r rule-dark md:px-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-8 bg-amber" />
              <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
                Mission
              </h2>
            </div>
            <p className="mt-4 text-[17px] leading-relaxed">{mission}</p>
          </div>
          <div className="md:pl-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-8 bg-amber" />
              <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-amber">
                Goal
              </h2>
            </div>
            <p className="mt-4 text-[17px] leading-relaxed">{goal}</p>
          </div>
        </div>
      </section>

      {/* Why OFM */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
            <div>
              <h2 className="font-display text-[28px] font-bold text-ink">
                Why sites choose OFM
              </h2>
              <p className="mt-3 max-w-xl text-[15px] text-charcoal/70">
                The operating commitments written into every OFM contract, {company.short}
                &nbsp;wide.
              </p>

              <div className="mt-8 space-y-4 border-t rule pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-amber/10 text-amber-dim">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-[18px] font-bold text-ink">Cost-Plus Model</p>
                    <p className="text-[13px] text-charcoal/60">Transparent, comprehensive pricing</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center bg-plum/10 text-plum">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-[18px] font-bold text-ink">MSME Registered</p>
                    <p className="text-[13px] text-charcoal/60">Government statutory compliance</p>
                  </div>
                </div>
              </div>
            </div>

            <ol className="grid gap-x-10 sm:grid-cols-2">
              {whyOfm.map((item, i) => (
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
    </>
  );
}
