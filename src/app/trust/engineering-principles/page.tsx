import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TrustNav } from "@/components/trust/TrustNav";

export const metadata = buildMetadata({
  title: "Engineering Principles",
  description: "The principles meant to guide every product SamSec builds: longevity, clarity, human oversight, privacy, and security as part of engineering.",
  path: "/trust/engineering-principles",
});

const principles = [
  {
    title: "Build For Longevity",
    description: "Code and product decisions are made with a multi-year horizon in mind, not just what gets a release out the door this week.",
  },
  {
    title: "Prefer Clarity Over Complexity",
    description: "A simpler design that's easy to reason about beats a clever one that only the person who wrote it understands.",
  },
  {
    title: "AI Should Augment People",
    description: "AI is built to make a person more capable at their job, not to replace the judgment that job actually requires.",
  },
  {
    title: "Humans Remain Responsible For Critical Decisions",
    description: "Automation can execute a decision. It doesn't get to make one that has real consequences without a person signing off.",
  },
  {
    title: "Ship Thoughtfully",
    description: "A feature ships when it's ready, not when a deadline says it should. Rushed work costs more later than it saves now.",
  },
  {
    title: "Document Decisions",
    description: "Why something was built a certain way gets recorded, not just what it does, so the reasoning survives past the person who made the call.",
  },
  {
    title: "Respect User Privacy",
    description: "Collect what a feature actually needs, nothing more, and be clear about what's collected and why.",
  },
  {
    title: "Measure Before Optimizing",
    description: "Performance and automation work target what's actually slow or repetitive, based on real use, not assumptions about where the problem might be.",
  },
  {
    title: "Automate Repetitive Work, Not Judgment",
    description: "Automation exists to remove tedious, well-defined tasks from a person's plate. It doesn't exist to make the decisions that require actual judgment.",
  },
  {
    title: "Security Is Part Of Engineering, Not An Afterthought",
    description: "Security is considered at the same point as every other design decision, not added in a review pass once the design is already settled.",
  },
];

export default function EngineeringPrinciplesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Engineering Principles", path: "/trust/engineering-principles" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Engineering Principles"
        title="Principles meant to outlast any single product."
        description="SamSec Ops is the first product built under these principles. They're meant to guide every one that follows it, not just describe the current one."
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
      </Section>
    </>
  );
}
