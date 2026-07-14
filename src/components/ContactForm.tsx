"use client";

import { useState } from "react";
import { ArrowRight, Check, ChevronDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const reasons = ["General Inquiry", "Research Collaboration", "Speaking Invitation", "Press", "Partnership"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots tend to fill every field.
    if (data.get("company")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-ink-100 dark:border-ink-700 px-6 py-8 text-sm text-ink-700 dark:text-ink-200">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-100 dark:bg-accent-500/10">
          <Check className="size-4 text-accent-500 dark:text-accent-300" />
        </span>
        Message sent. Thank you, you&apos;ll hear back soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div>
        <label htmlFor="reason" className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-200">
          Reason for contact <span className="font-normal text-ink-400">(optional)</span>
        </label>
        <div className="relative">
          <select
            id="reason"
            name="reason"
            className="w-full appearance-none rounded-xl border border-ink-200 dark:border-ink-600 bg-white dark:bg-ink-900 px-4 py-3 pr-10 text-sm text-ink-950 dark:text-white focus:outline-none focus:border-ink-950 dark:focus:border-ink-200 transition-colors"
          >
            {reasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-400" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-ink-200 dark:border-ink-600 bg-white dark:bg-ink-900 px-4 py-3 text-sm text-ink-950 dark:text-white placeholder:text-ink-400 focus:outline-none focus:border-ink-950 dark:focus:border-ink-200 transition-colors resize-none"
          placeholder="What would you like to discuss?"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
        <p className="text-xs text-ink-400 dark:text-ink-500">Usually a reply within a few days.</p>
      </div>

      {status === "error" ? (
        <p className="text-sm text-red-500">Something went wrong. Please try again or email directly.</p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink-700 dark:text-ink-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-ink-200 dark:border-ink-600 bg-white dark:bg-ink-900 px-4 py-3 text-sm text-ink-950 dark:text-white placeholder:text-ink-400 focus:outline-none focus:border-ink-950 dark:focus:border-ink-200 transition-colors"
      />
    </div>
  );
}
