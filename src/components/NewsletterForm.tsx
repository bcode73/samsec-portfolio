"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

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

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-200">
        <Check className="size-4 text-accent-500" />
        You&apos;re subscribed. Thank you.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex items-center gap-2 rounded-full border border-ink-200 dark:border-ink-600 bg-white dark:bg-ink-900 p-1.5 pl-5 focus-within:border-ink-950 dark:focus-within:border-ink-200 transition-colors">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className="flex-1 bg-transparent text-sm text-ink-950 dark:text-white placeholder:text-ink-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Subscribe"
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-ink-950 text-white dark:bg-white dark:text-ink-950 disabled:opacity-60 transition-opacity"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
      {status === "error" ? (
        <p className="mt-2 text-xs text-red-500">Something went wrong. Please try again.</p>
      ) : null}
    </form>
  );
}
