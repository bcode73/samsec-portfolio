import Link from "next/link";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Callout } from "@/components/mdx/Callout";
import { TrustNav } from "@/components/trust/TrustNav";

export const metadata = buildMetadata({
  title: "Product Security",
  description:
    "How authentication, secret handling, authorization, human confirmation, and AI safety are implemented inside SamSec Ops.",
  path: "/trust/product-security",
});

const mechanisms = [
  {
    title: "Authentication",
    description:
      "Access to sensitive functionality, including an active SSH session, is protected with Face ID. Re-authentication secures access without interrupting a session already in progress.",
  },
  {
    title: "Secret Handling",
    description:
      "SSH credentials and connection details are treated as sensitive by default. SamSec Ops relies on standard platform security primitives for storing and transmitting them rather than custom cryptography.",
  },
  {
    title: "Session Protection",
    description:
      "Persistent SSH sessions stay protected by device-level authentication rather than requiring credentials to be re-entered every time the app is reopened.",
  },
  {
    title: "Authorization",
    description:
      "SamSec Agent doesn't get standing permission to execute. Every proposed command is classified by operational risk before it's presented for approval.",
  },
  {
    title: "Human Confirmation Before High-Risk Actions",
    description:
      "Potentially destructive actions require explicit confirmation, and every autonomous engagement requires an authorization attestation before execution begins.",
  },
  {
    title: "Operational Transparency",
    description:
      "Every autonomous engagement produces an Engagement Report: the objective, the commands, the output, and the reasoning behind them, with sensitive information automatically masked.",
  },
  {
    title: "AI Safety",
    description:
      "The AI assistant and SamSec Agent are built to support a person's judgment, not substitute for it. Neither takes consequential action without a human decision in the loop.",
  },
  {
    title: "Risk Classification",
    description:
      "Commands proposed by SamSec Agent are evaluated for operational risk before execution, so the level of scrutiny a command receives matches what it could actually do.",
  },
];

export default function TrustProductSecurityPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Product Security", path: "/trust/product-security" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Product Security"
        title="How security shows up inside SamSec Ops specifically."
        description="The Security page covers engineering philosophy in general. This page is about the specific mechanisms built into the current product."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {mechanisms.map((item) => (
            <div key={item.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-ink-500 dark:text-ink-400 max-w-2xl">
          The Authorization and Human Confirmation mechanisms above are recorded as formal decisions in{" "}
          <Link href="/adr/adr-002-human-authorization" className="text-accent-500 dark:text-accent-300 hover:underline">
            ADR-002
          </Link>
          , and Operational Transparency is the direct implementation of{" "}
          <Link
            href="/adr/adr-003-permanent-engagement-reports"
            className="text-accent-500 dark:text-accent-300 hover:underline"
          >
            ADR-003
          </Link>
          .
        </p>

        <Callout type="note">
          This page describes the reasoning and mechanisms behind SamSec Ops&apos;s security model without
          exposing implementation detail that would be more useful to an attacker than to a reader.
        </Callout>
      </Section>
    </>
  );
}
