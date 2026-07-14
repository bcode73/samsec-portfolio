import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export const metadata = buildMetadata({
  title: "SamSec",
  description:
    "SamSec is an AI-first cybersecurity company, currently building SamSec Ops, an AI-assisted security workspace for iOS.",
  path: "/samsec",
});

const pillars = [
  {
    title: "AI Security",
    description: "Understanding how AI systems are attacked, and building AI that defends infrastructure.",
  },
  {
    title: "Security Automation",
    description: "Turning repeatable security workflows into reliable, auditable automation.",
  },
  {
    title: "Offensive Security",
    description: "Attacker-first research that grounds every defensive capability in real technique.",
  },
  {
    title: "Threat Intelligence",
    description: "Structured, actionable intelligence that keeps pace with how fast threats evolve.",
  },
];

const focusAreas = [
  "AI Security",
  "Security Automation",
  "Offensive Security",
  "Threat Intelligence",
  "Attack Surface Management",
  "Cloud Security",
  "Application Security",
  "Infrastructure Security",
  "API Security",
  "Mobile Security",
  "Identity Security",
  "AI Agents for Security",
  "Continuous Security Validation",
  "Autonomous Security Operations",
  "Security Research",
  "Security Education",
  "Developer Security Tools",
  "Enterprise Security Platforms",
];

const roadmap = [
  {
    phase: "Now",
    title: "SamSec Ops on iOS",
    description: "An AI-assisted security workspace: assistant, code analysis, and research notes, live today on iOS.",
  },
  {
    phase: "Next",
    title: "Offensive security & automation",
    description: "Offensive security workspace, reconnaissance, and automation pipelines, expanding beyond the current AI workspace.",
  },
  {
    phase: "Later",
    title: "Ecosystem & enterprise platform",
    description: "Plugin marketplace, enterprise collaboration, and cloud synchronization, across iOS, Android, desktop, and web.",
  },
];

export default function SamSecPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "SamSec", path: "/samsec" }])} />

      <PageHeader
        eyebrow="The Company"
        title="An AI-first cybersecurity company."
        description="SamSec is not a penetration testing agency, a web development company, or another generic cybersecurity startup. It builds AI-powered security software, starting with SamSec Ops."
      />

      <Section border={false} className="pt-0">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink-100 dark:border-ink-700 p-8">
            <Eyebrow>Mission</Eyebrow>
            <p className="font-display text-2xl font-medium text-ink-950 dark:text-white text-balance">
              SamSec applies AI to security research and tooling, and builds practical tools that solve real
              security problems. The aim is to make advanced security capability more accessible, not just
              more automated.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-100 dark:border-ink-700 p-8">
            <Eyebrow>Vision</Eyebrow>
            <p className="font-display text-2xl font-medium text-ink-950 dark:text-white text-balance">
              To build one of Africa&apos;s leading AI-powered cybersecurity companies: not one that sells
              security services, but one that builds infrastructure other security work runs on.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="History"
          title="Why SamSec started."
          description="SamSec was founded on the belief that AI would change how security operations are performed, and that the tooling for that shift needed to be engineered from first principles instead of bolted onto legacy workflows. SamSec Ops is the first attempt at proving that."
        />
      </Section>

      <Section>
        <Eyebrow>Core Pillars</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          What SamSec is built on.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{pillar.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Research Philosophy"
          title="Research that ships."
          description="SamSec's research exists to be built, not published and forgotten. Every research effort is evaluated against a simple question: does this make its way into software that a security team can run tomorrow? Findings that don't clear that bar stay research; the ones that do become SamSec Ops modules."
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Current Focus" title="Where the work is right now." align="left" />
        <div className="mt-10 flex flex-wrap gap-2.5">
          {focusAreas.map((area) => (
            <Badge key={area}>{area}</Badge>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Future Roadmap</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          Where SamSec is headed.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {roadmap.map((item) => (
            <div key={item.phase} className="rounded-2xl border border-ink-100 dark:border-ink-700 p-7">
              <span className="font-mono text-xs uppercase tracking-wide text-accent-500 dark:text-accent-300">
                {item.phase}
              </span>
              <p className="mt-3 font-display text-lg font-medium text-ink-950 dark:text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Technology Philosophy"
          title="AI as infrastructure, not a feature."
          description="SamSec treats AI as core infrastructure for security work, not a chatbot bolted onto existing tools. Every capability is built to be automatable, auditable, and eventually operable by an AI agent under human oversight."
        />
      </Section>

      <Section border={false}>
        <SectionHeading
          eyebrow="Long-Term Strategy"
          title="Built to expand gradually."
          description="SamSec Ops starts as a single workspace. The plan is to expand it step by step, with each new capability earning its place, rather than promising a finished platform up front."
        />
      </Section>
    </>
  );
}
