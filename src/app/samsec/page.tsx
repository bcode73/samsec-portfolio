import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";

export const metadata = buildMetadata({
  title: "SamSec",
  description:
    "SamSec is an AI-first cybersecurity company building intelligent security infrastructure that automates security operations and accelerates vulnerability discovery.",
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

const industries = [
  "Financial Services & Fintech",
  "Cloud & SaaS Platforms",
  "Government & Public Sector",
  "Telecommunications",
  "Healthcare Technology",
  "Enterprise Software",
];

const roadmap = [
  {
    phase: "Now",
    title: "SamSec Ops core platform",
    description: "AI-assisted security workflows and offensive security utilities, in active development.",
  },
  {
    phase: "Next",
    title: "Automation & agent layer",
    description: "Custom AI agents and automation pipelines across reconnaissance, triage, and reporting.",
  },
  {
    phase: "Later",
    title: "Ecosystem & enterprise platform",
    description: "Plugin marketplace, enterprise collaboration, and cloud synchronization at team scale.",
  },
];

export default function SamSecPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "SamSec", path: "/samsec" }])} />

      <PageHeader
        eyebrow="The Company"
        title="An AI-first cybersecurity company."
        description="SamSec is not a penetration testing agency, a web development company, or another generic cybersecurity startup. SamSec builds intelligent security infrastructure for the future."
      />

      <Section border={false} className="pt-0">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink-100 dark:border-ink-700 p-8">
            <Eyebrow>Mission</Eyebrow>
            <p className="font-display text-2xl font-medium text-ink-950 dark:text-white text-balance">
              To build intelligent cybersecurity systems that automate security operations, accelerate
              vulnerability discovery, improve cyber resilience, and make advanced security capabilities
              accessible through AI.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-100 dark:border-ink-700 p-8">
            <Eyebrow>Vision</Eyebrow>
            <p className="font-display text-2xl font-medium text-ink-950 dark:text-white text-balance">
              To become one of the world&apos;s leading companies developing AI-powered cybersecurity
              infrastructure.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="History"
          title="Founded on a specific thesis."
          description="SamSec was founded on the conviction that AI would fundamentally change how security operations are performed — and that the tooling for that shift needed to be engineered from first principles, not bolted onto legacy workflows. That thesis started with SamSec Ops, the platform built to prove it."
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
        <SectionHeading eyebrow="Industries" title="Who SamSec builds for." align="left" />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-xl border border-ink-100 dark:border-ink-700 px-5 py-4 text-sm font-medium text-ink-700 dark:text-ink-200"
            >
              {industry}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Technology Philosophy"
          title="AI as infrastructure, not a feature."
          description="SamSec treats AI as a foundational infrastructure layer for security work — not a chatbot bolted onto existing tools. Every capability is built to be automatable, auditable, and eventually operable by an AI agent under human oversight."
        />
      </Section>

      <Section border={false}>
        <SectionHeading
          eyebrow="Long-Term Strategy"
          title="A decade-long build."
          description="SamSec is being built for a ten-year horizon: from SamSec Ops as a single-workspace platform today, toward a full ecosystem of AI agents, automation pipelines, and enterprise security infrastructure — the way Notion became the workspace for knowledge work, SamSec Ops is being built to become the workspace for cybersecurity."
        />
      </Section>
    </>
  );
}
