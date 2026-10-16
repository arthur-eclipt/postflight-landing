"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div id="waitlist" className="mt-10 max-w-xl">
        <div className="rounded-md border border-gold/60 bg-gold/5 px-5 py-4 text-bone">
          <p className="font-display text-lg font-semibold">
            You&rsquo;re on the list.
          </p>
          <p className="mt-1 text-sm text-fog">
            We&rsquo;ll be in touch before the Founding 500 doors open.
          </p>
        </div>
      </div>
    );
  }

  const submitting = state === "submitting";

  return (
    <div id="waitlist" className="mt-10 max-w-xl">
      <form onSubmit={handleSubmit} className="flex items-stretch">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
          placeholder="you@airline.com"
          className="min-w-0 flex-1 rounded-l-md border border-titanium bg-graphite px-4 py-3.5 font-mono text-bone placeholder:text-fog focus:border-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={submitting}
          className="rounded-r-md bg-gold px-6 py-3.5 font-medium text-obsidian transition-colors hover:bg-gold-dim disabled:opacity-50"
        >
          {submitting ? "Submitting…" : "Request access"}
        </button>
      </form>
      <p className="mt-3 text-xs text-fog">
        No spam. We&rsquo;ll write once before launch and once at launch.
      </p>
      {state === "error" && (
        <p className="mt-3 text-xs text-[#E36F6F]">
          Something went wrong. Try again, or email hello@postairborne.com.
        </p>
      )}
    </div>
  );
}
