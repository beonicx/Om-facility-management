"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      site: (form.elements.namedItem("site") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border rule bg-leaf/10 p-8">
        <p className="font-display text-[18px] font-bold text-ink">Message sent.</p>
        <p className="mt-2 text-[15px] text-charcoal/75">
          Our Delhi-NCR office will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <Field label="Email" name="email" type="email" required />
      <Field label="Site / property" name="site" placeholder="e.g. mall, corporate office, residential society" />
      <div>
        <label htmlFor="message" className="text-[13px] font-semibold uppercase tracking-wide text-charcoal/60">
          What do you need managed?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full border rule bg-transparent px-4 py-3 text-[15px] text-charcoal outline-none focus:border-ink"
        />
      </div>

      {status === "error" && (
        <p className="text-[14px] text-red-700">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-ink px-7 py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-ink-2 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[13px] font-semibold uppercase tracking-wide text-charcoal/60">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border rule bg-transparent px-4 py-3 text-[15px] text-charcoal outline-none focus:border-ink"
      />
    </div>
  );
}
