import Link from "next/link";
import Logomark from "./Logomark";
import { company } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t rule-dark bg-ink text-paper/90">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logomark className="h-7 w-9 text-amber" />
              <span className="font-display text-[14px] font-bold uppercase tracking-[0.14em]">
                Om Facility Management
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-paper/60">
              {company.tagline}. Comprehensive property management services,
              Pan-India, from a corporate office in {company.corporateOffice}.
            </p>
          </div>

          <div>
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-amber">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-paper/70">
              <li><Link href="/about" className="hover:text-paper">About</Link></li>
              <li><Link href="/services" className="hover:text-paper">Services</Link></li>
              <li><Link href="/presence" className="hover:text-paper">Presence</Link></li>
              <li><Link href="/clients" className="hover:text-paper">Clients</Link></li>
              <li><Link href="/careers" className="hover:text-paper">Careers</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-amber">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-paper/70">
              <li>Security services</li>
              <li>Housekeeping</li>
              <li>Electro-mechanical</li>
              <li>Soft services</li>
            </ul>
          </div>

          <div>
            <p className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-amber">
              Reach us
            </p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-paper/70">
              <li>{company.address}</li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-paper">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t rule-dark pt-6 text-[13px] text-paper/50 md:flex-row md:items-center md:justify-between">
          <span>&copy; {new Date().getFullYear()} Om Facility Management. MSME registered.</span>
          <span>Swachh Bharat — एक कदम स्वच्छता की ओर</span>
        </div>
      </div>
    </footer>
  );
}
