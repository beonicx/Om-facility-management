import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact — Om Facility Management",
  description: "Get in touch with Om Facility Management's Varanasi and Delhi-NCR offices.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-pattern absolute inset-0 opacity-[0.02]" />
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-[1fr_1.2fr] md:py-20 relative">
        <div>
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
            Get in touch
          </p>
          <h1 className="mt-4 font-display text-[34px] font-extrabold leading-tight text-ink sm:text-[40px]">
            Request a proposal.
          </h1>
          <p className="mt-6 max-w-sm text-[15.5px] leading-relaxed text-charcoal/75">
            Tell us about the site and the services you need — security,
            housekeeping, engineering or all of it — and we&apos;ll come back
            with a scope and a quote.
          </p>

          <div className="mt-10 space-y-6 border-t rule pt-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-amber/10 text-amber-dim">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wide text-charcoal/50">Office</p>
                <p className="mt-1 text-[15px] text-charcoal/85">{company.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-plum/10 text-plum">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wide text-charcoal/50">Corporate office</p>
                <p className="mt-1 text-[15px] text-charcoal/85">{company.corporateOffice}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-leaf/10 text-leaf">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-wide text-charcoal/50">Email</p>
                <a href={`mailto:${company.email}`} className="mt-1 block text-[15px] text-plum">
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border rule bg-paper p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
