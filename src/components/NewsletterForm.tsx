"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  // This form only ever renders on the always-dark newsletter banner, so its
  // colors are fixed for a dark background rather than adapting to the theme.
  if (status === "success") {
    return (
      <div className="flex items-center gap-3 text-sm text-ink-200">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent-500/15">
          <Check className="size-3.5 text-accent-300" />
        </span>
        You&apos;re subscribed. Thank you.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900 p-1.5 pl-5 focus-within:border-ink-400 transition-colors">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className="flex-1 bg-transparent text-sm text-white placeholder:text-ink-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-ink-950 disabled:opacity-60 transition-opacity"
        >
          {status === "loading" ? <Loader2 className="size-4 animate-spin" /> : <ArrowRight className="size-4" />}
        </button>
      </div>
      {status === "error" ? <p className="mt-2 text-xs text-red-400">Something went wrong. Please try again.</p> : null}
    </form>
  );
}
