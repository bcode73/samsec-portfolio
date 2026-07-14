import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { EmptyState } from "@/components/ui/EmptyState";
import { Callout } from "@/components/mdx/Callout";
import { TrustNav } from "@/components/trust/TrustNav";

export const metadata = buildMetadata({
  title: "Security Advisories",
  description: "A public record of confirmed security issues affecting SamSec products, and how they were resolved.",
  path: "/trust/security-advisories",
});

const fields = ["Summary", "Affected Products", "Severity", "Technical Details", "Mitigation", "Timeline", "References"];

export default function SecurityAdvisoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Security Advisories", path: "/trust/security-advisories" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Security Advisories"
        title="A public record of confirmed security issues."
        description="When a confirmed security issue affects a SamSec product, it gets published here: what it was, what it affected, and how it was resolved. This page is the record, not a summary of it elsewhere."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <SectionHeading eyebrow="Format" title="Every advisory will follow the same structure." align="left" />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {fields.map((field) => (
            <span
              key={field}
              className="rounded-full border border-ink-200 dark:border-ink-600 px-4 py-2 text-sm font-mono text-ink-700 dark:text-ink-200"
            >
              {field}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <EmptyState
          title="No security advisories"
          description="No confirmed security issues affecting SamSec products have been published. If that changes, it will be documented here, in the format above, regardless of how it reflects on the product."
          ctaLabel="Report a vulnerability"
          ctaHref="/trust/responsible-disclosure"
        />
      </Section>

      <Section border={false}>
        <Callout type="note">
          This page will only ever contain issues that were actually confirmed and resolved. It won&apos;t be
          used to pre-announce fixes, and it won&apos;t stay empty by omission if something real needs to be
          disclosed here.
        </Callout>
      </Section>
    </>
  );
}
