import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Callout } from "@/components/mdx/Callout";
import { TrustNav } from "@/components/trust/TrustNav";

export const metadata = buildMetadata({
  title: "Engineering Roadmap",
  description:
    "What's shipped, what's actively being refined, what's being researched, what's being explored, and what's a longer-term idea. Priorities, not deadlines.",
  path: "/trust/engineering-roadmap",
});

const completed = [
  "SSH Terminal with persistent sessions and Face ID protection",
  "Context-aware AI Assistant",
  "SamSec Agent: plan-first execution with risk classification",
  "Engagement Reports: permanent, searchable, auto-masked",
  "Home Screen, Lock Screen, and Dynamic Island widgets",
  "NEARR (live on the App Store)",
  "STILL (live on the App Store)",
];

const currentlyBuilding = [
  "Expanding SamSec Agent's risk classification coverage as real usage surfaces new command patterns",
  "Refining Engagement Report search and replay based on how engagements actually get reviewed",
  "General reliability and performance work across the SSH terminal and AI Assistant",
];

const research = [
  "AI Agent Security",
  "Model Context Protocol Security",
  "LLM Security",
  "Autonomous Security Systems",
  "Extending risk classification models beyond SSH to other action surfaces",
];

const exploring = [
  "Reconnaissance and OSINT tooling, in early exploration (see the engineering note on this)",
  "Cross-platform architecture patterns, ahead of any committed desktop or web build",
];

const futureIdeas = [
  "Desktop client",
  "Web client",
  "Android client",
  "Threat intelligence tooling",
  "OSINT tooling",
  "Digital forensics tooling",
  "Security automation tooling",
  "Cloud security tooling",
  "Application security tooling",
  "Enterprise collaboration features",
  "Developer APIs",
  "A security knowledge platform",
];

export default function EngineeringRoadmapPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Engineering Roadmap", path: "/trust/engineering-roadmap" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Engineering Roadmap"
        title="What's built, what's next, and how sure that is."
        description="Five honest buckets: what's shipped, what's actively being refined, what's under research, what's being explored without commitment, and what's a longer-term idea. Priorities, not deadlines."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <Callout type="note">
          This page avoids release dates on purpose. The further right an item sits, from Completed toward
          Future Ideas, the less certain its timeline and, in some cases, whether it happens at all.
        </Callout>
      </Section>

      <Section>
        <SectionHeading eyebrow="Completed" title="Shipped and in use today." align="left" />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {completed.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Currently Building"
          title="Active refinement of what already exists."
          description="Not new features so much as making the shipped ones better, based on real usage rather than a fixed spec."
          align="left"
        />
        <ul className="mt-8 space-y-3">
          {currentlyBuilding.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-ink-100 dark:border-ink-700 px-5 py-4 text-sm text-ink-700 dark:text-ink-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Research"
          title="Questions being investigated before anything gets built."
          align="left"
        />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {research.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>

      <Section>
        <div>
          <Eyebrow>Exploring</Eyebrow>
          <h2 className="font-display text-2xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            Early, uncommitted exploration.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            Work that exists in some form today but isn&apos;t a committed feature. It may become one, may
            change significantly, or may not ship at all.
          </p>
        </div>
        <ul className="mt-8 space-y-3">
          {exploring.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-ink-100 dark:border-ink-700 px-5 py-4 text-sm text-ink-700 dark:text-ink-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section border={false}>
        <SectionHeading
          eyebrow="Future Ideas"
          title="The long-term direction, without a timeline."
          description="This is the same long-term roadmap described on the SamSec Ops product page: real direction, no committed dates."
          align="left"
        />
        <div className="mt-8 flex flex-wrap gap-2.5">
          {futureIdeas.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>
    </>
  );
}
