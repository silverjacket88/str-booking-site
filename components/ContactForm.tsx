"use client";

import { useState, FormEvent } from "react";

export default function ContactForm({
  endpoint = "/api/contact",
  messageLabel = "Message",
  messagePlaceholder = "How can we help?",
  submitLabel = "Send message",
  extraFields,
}: {
  endpoint?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  extraFields?: React.ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-forest/30 bg-forest/10 p-6 text-forest-dark">
        <p className="font-display text-xl">Thanks — message received.</p>
        <p className="mt-1 text-sm">We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Full name"
          className="rounded-lg border border-line bg-paper px-3 py-2.5 text-sm focus:border-forest focus:outline-none"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="rounded-lg border border-line bg-paper px-3 py-2.5 text-sm focus:border-forest focus:outline-none"
        />
      </div>
      <input
        name="phone"
        placeholder="Phone (optional)"
        className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm focus:border-forest focus:outline-none"
      />
      {extraFields}
      <textarea
        name="message"
        required
        rows={5}
        placeholder={messagePlaceholder}
        aria-label={messageLabel}
        className="w-full rounded-lg border border-line bg-paper px-3 py-2.5 text-sm focus:border-forest focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-cream hover:bg-forest-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
