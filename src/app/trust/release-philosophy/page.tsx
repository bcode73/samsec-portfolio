import { ArrowRight } from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TrustNav } from "@/components/trust/TrustNav";

export const metadata = buildMetadata({
  title: "Release Philosophy",
  description: "Why SamSec prefers incremental improvements over rushed releases: testing, iteration, engineering quality, and long-term maintainability.",
  path: "/trust/release-philosophy",
});

const principles = [
  {
    title: "Test Before Ship",
    description:
      "A capability is tested against real use before it ships, not just before it's demoed. If it doesn't hold up, it waits.",
  },
  {
    title: "Iterate In The Open",
    description:
      "Products are built module by module, in view of the people using them, rather than developed in isolation toward a single large launch.",
  },
  {
    title: "Engineering Quality Over Speed",
    description:
      "Shipping fast matters less than shipping something that works reliably. A smaller set of dependable capabilities beats a longer list of fragile ones.",
  },
  {
    title: "User Feedback Shapes The Roadmap",
    description:
      "What ships next is informed by how the current release is actually used, not just by what was originally planned.",
  },
  {
    title: "Long-Term Maintainability",
    description:
      "Every capability added is something that has to be maintained indefinitely. That cost is weighed before a feature is built, not discovered after.",
  },
];

export default function ReleasePhilosophyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Release Philosophy", path: "/trust/release-philosophy" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Release Philosophy"
        title="Incremental improvements over rushed releases."
        description="How SamSec decides what ships, and when, across every product it builds. This describes the philosophy generally; the Roadmap section on the SamSec Ops page shows what it looks like applied to a specific product."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{principle.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/samsec-ops#release" variant="secondary">
            See this applied to SamSec Ops
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Section>
    </>
  );
}
