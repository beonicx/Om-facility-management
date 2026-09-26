import type { Metadata } from "next";
import { clients } from "@/data/content";

export const metadata: Metadata = {
  title: "Clients — Om Facility Management",
  description: "Some of the prestigious clients OFM has worked with.",
};

export default function ClientsPage() {
  return (
    <>
      <section className="border-b rule">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-dim">
            Clients
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[36px] font-extrabold leading-tight text-ink sm:text-[44px]">
            Some of our prestigious clients.
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-px overflow-hidden border rule sm:grid-cols-2 md:grid-cols-3">
            {clients.map((c) => (
              <div
                key={c}
                className="flex min-h-[92px] items-center bg-paper px-6 py-5 text-[16px] font-medium text-charcoal/85"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
