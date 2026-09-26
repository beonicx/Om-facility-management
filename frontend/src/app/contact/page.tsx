import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { company } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact — Om Facility Management",
  description: "Get in touch with Om Facility Management's Varanasi and Delhi-NCR offices.",
};

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-16 md:grid-cols-[1fr_1.2fr] md:py-20">
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
            <div>
              <p className="text-[12px] uppercase tracking-wide text-charcoal/50">Office</p>
              <p className="mt-1 text-[15px] text-charcoal/85">{company.address}</p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-wide text-charcoal/50">Corporate office</p>
              <p className="mt-1 text-[15px] text-charcoal/85">{company.corporateOffice}</p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-wide text-charcoal/50">Email</p>
              <a href={`mailto:${company.email}`} className="mt-1 block text-[15px] text-plum">
                {company.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border rule p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
