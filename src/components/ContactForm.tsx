"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

const reasons = ["General Inquiry", "Research Collaboration", "Speaking Invitation", "Press", "Partnership"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots tend to fill every field.
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
      <div className="flex items-center gap-2 rounded-2xl border border-ink-100 dark:border-ink-700 px-6 py-8 text-sm text-ink-700 dark:text-ink-200">
        <Check className="size-4 text-accent-500" />
        Message sent. Thank you — you&apos;ll hear back soon.
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
          Reason for contact
        </label>
        <select
          id="reason"
          name="reason"
          className="w-full rounded-xl border border-ink-200 dark:border-ink-600 bg-white dark:bg-ink-900 px-4 py-3 text-sm text-ink-950 dark:text-white focus:outline-none focus:border-ink-950 dark:focus:border-ink-200 transition-colors"
        >
          {reasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
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

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
        <ArrowRight className="size-4" />
      </Button>

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
