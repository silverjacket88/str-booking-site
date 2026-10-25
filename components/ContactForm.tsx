"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/config";

export default function ContactForm({
  toEmail = siteConfig.supportEmail,
  subjectPrefix = "Website inquiry",
  messageLabel = "Message",
  messagePlaceholder = "How can we help?",
  submitLabel = "Send message",
  extraFields,
}: {
  toEmail?: string;
  subjectPrefix?: string;
  messageLabel?: string;
  messagePlaceholder?: string;
  submitLabel?: string;
  extraFields?: React.ReactNode;
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  // There's no email/CRM backend wired up for this form yet, so submitting
  // opens the guest's own mail client with everything pre-filled - that
  // guarantees the message actually reaches us instead of silently
  // vanishing into an API route that doesn't send anywhere.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const bodyLines = Object.entries(data)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}: ${value}`);

    const subject = `${subjectPrefix} from ${data.name || "the website"}`;
    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-forest/30 bg-forest/10 p-6 text-forest-dark">
        <p className="font-display text-xl">Almost there.</p>
        <p className="mt-1 text-sm">
          Your email app should have opened with everything filled in - just hit send. If
          nothing opened, email us directly at{" "}
          <a href={`mailto:${toEmail}`} className="underline">
            {toEmail}
          </a>
          .
        </p>
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
        className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-cream hover:bg-forest-dark"
      >
        {submitLabel}
      </button>
    </form>
  );
}
