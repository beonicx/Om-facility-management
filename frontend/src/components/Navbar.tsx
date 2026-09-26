"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logomark from "./Logomark";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/presence", label: "Presence" },
  { href: "/clients", label: "Clients" },
  { href: "/careers", label: "Careers" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logomark className="h-7 w-9 text-plum" />
          <span className="font-display text-[15px] font-bold uppercase tracking-[0.14em] text-ink">
            Om Facility Management
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[15px] transition-colors hover:text-amber-dim ${
                pathname === l.href ? "text-ink font-semibold" : "text-charcoal/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-ink px-4 py-2 text-[14px] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Request a proposal
          </Link>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
            <span className="block h-[2px] w-6 bg-ink" />
            <span className="block h-[2px] w-6 bg-ink" />
            <span className="block h-[2px] w-4 bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t rule px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b rule py-3 text-[15px] text-charcoal/80"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 border border-ink px-4 py-2 text-center text-[14px] font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
            Request a proposal
          </Link>
        </nav>
      )}
    </header>
  );
}
