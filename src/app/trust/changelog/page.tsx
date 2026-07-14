import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { EmptyState } from "@/components/ui/EmptyState";
import { TrustNav } from "@/components/trust/TrustNav";

export const metadata = buildMetadata({
  title: "Changelog",
  description: "A structured record of what's changed in SamSec Ops, as updates ship.",
  path: "/trust/changelog",
});

const fields = ["Version", "Date", "Added", "Changed", "Improved", "Fixed", "Known Limitations"];

export default function ChangelogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Changelog", path: "/trust/changelog" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Changelog"
        title="What's changed, in one place."
        description="A structured record of updates to SamSec Ops: what was added, changed, improved, or fixed, and any known limitations at the time of release."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <SectionHeading eyebrow="Format" title="Every entry will follow the same structure." align="left" />
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
          title="No changelog entries yet"
          description="SamSec Ops updates will be documented here, in the format above, as they ship. This page will only ever contain releases that actually happened."
        />
      </Section>
    </>
  );
}
