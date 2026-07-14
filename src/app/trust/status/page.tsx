import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Callout } from "@/components/mdx/Callout";
import { TrustNav } from "@/components/trust/TrustNav";

export const metadata = buildMetadata({
  title: "Status",
  description: "How SamSec communicates about service health, maintenance, and incidents.",
  path: "/trust/status",
});

const commitments = [
  {
    title: "Operational Philosophy",
    description:
      "SamSec Ops is a mobile app with cloud-connected features. Service health matters because infrastructure work often happens exactly when something else is already going wrong.",
  },
  {
    title: "Maintenance Communication",
    description:
      "Planned maintenance that could affect availability will be communicated in advance, through this page once it supports that, and through direct channels in the meantime.",
  },
  {
    title: "Future Service Health Reporting",
    description:
      "As backend infrastructure grows, this page is where real-time status and incident history will be published. It will report what's actually happening, not a marketing version of it.",
  },
  {
    title: "Transparency Commitment",
    description:
      "If something breaks, the plan is to say so plainly: what happened, what was affected, and what's being done about it, rather than a vague statement after the fact.",
  },
];

export default function StatusPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Status", path: "/trust/status" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Status"
        title="How SamSec communicates about service health."
        description="There's no live status monitoring yet. This page describes the commitment and the structure for when there is."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {commitments.map((item) => (
            <div key={item.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
            </div>
          ))}
        </div>

        <Callout type="note">
          There is no live status monitoring or uptime reporting today. Rather than publish placeholder
          numbers, this page will stay honest about that until real monitoring exists to report on.
        </Callout>
      </Section>
    </>
  );
}
