"use client";

import { useState, FormEvent } from "react";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");
    const form = e.currentTarget;
    const email = new FormData(form).get("email");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-sm font-medium text-forest">
        You&apos;re on the list — watch your inbox for specials and local events.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="flex-1">
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          className="w-full rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink focus:border-forest focus:outline-none sm:min-w-64"
        />
        {status === "error" && <p className="mt-1.5 text-xs text-red-700">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-forest-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Signing up…" : "Sign up"}
      </button>
    </form>
  );
}
