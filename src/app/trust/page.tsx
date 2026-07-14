import { ArrowUpRight } from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TrustNav } from "@/components/trust/TrustNav";

export const metadata = buildMetadata({
  title: "Trust Center",
  description:
    "How SamSec builds, secures, maintains, and improves its products: security philosophy, responsible disclosure, product security, release philosophy, and engineering principles.",
  path: "/trust",
});

const sections = [
  {
    title: "Security",
    href: "/trust/security",
    description: "The engineering philosophy behind how SamSec approaches security, from least privilege to human oversight.",
  },
  {
    title: "Product Security",
    href: "/trust/product-security",
    description: "How authentication, authorization, and AI safety are handled inside SamSec Ops specifically.",
  },
  {
    title: "Responsible Disclosure",
    href: "/trust/responsible-disclosure",
    description: "How to report a security issue, what's in scope, and what happens after a report comes in.",
  },
  {
    title: "Release Philosophy",
    href: "/trust/release-philosophy",
    description: "Why SamSec ships incrementally and tests before shipping, rather than working toward a release date.",
  },
  {
    title: "Changelog",
    href: "/trust/changelog",
    description: "A structured record of what's changed, as SamSec Ops updates ship.",
  },
  {
    title: "Status",
    href: "/trust/status",
    description: "How SamSec communicates about service health and maintenance.",
  },
  {
    title: "Engineering Principles",
    href: "/trust/engineering-principles",
    description: "The principles meant to guide every product SamSec builds, not just the current one.",
  },
  {
    title: "Contact Security",
    href: "/trust/contact",
    description: "A direct channel for security reports, technical questions, and research collaboration.",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
    description: "The legal detail of what information is collected on this site and how it's used.",
  },
];

export default function TrustPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Trust Center", path: "/trust" }])} />

      <PageHeader
        eyebrow="Trust Center"
        title="How SamSec builds, secures, and maintains its products."
        description="This is where developers, security researchers, enterprise evaluators, journalists, investors, recruiters, and future partners can find how SamSec actually operates: the engineering philosophy, the disclosure process, and what's true today versus what's still ahead. It's meant to earn trust through specifics, not claims."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="group flex flex-col justify-between rounded-2xl border border-ink-100 dark:border-ink-700 p-7 transition-colors duration-200 hover:border-ink-300 dark:hover:border-ink-500"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{section.title}</p>
                  <ArrowUpRight className="size-4 shrink-0 text-ink-300 dark:text-ink-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{section.description}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
