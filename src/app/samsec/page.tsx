import Link from "next/link";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { SectionNav } from "@/components/product/SectionNav";

export const metadata = buildMetadata({
  title: "SamSec",
  description:
    "SamSec is an AI-first infrastructure and cybersecurity company, currently building SamSec Ops, an AI-powered SSH, DevOps, and infrastructure operations platform for iPhone.",
  path: "/samsec",
});

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "history", label: "History" },
  { id: "principles", label: "Principles" },
  { id: "focus", label: "Focus" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "strategy", label: "Strategy" },
];

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

const principles = [
  {
    title: "Research-first development",
    description:
      "Every capability starts as a research question, not a feature request. Before something ships, there's a clear answer for why it needs to exist and what happens when it's wrong.",
  },
  {
    title: "Security-first engineering",
    description:
      "Security isn't a review pass at the end of a build. It's designed in from the first architecture decision, the same way correctness or performance would be.",
  },
  {
    title: "Privacy by design",
    description:
      "SamSec Ops handles SSH credentials, infrastructure access, and operational data, sensitive by nature. Data handling defaults to collecting less, not to collecting everything and restricting access afterward.",
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

const ecosystem = [
  {
    name: "SamSec Ops",
    status: "Live",
    description:
      "SamSec's flagship product: an AI-powered SSH, DevOps, and infrastructure operations platform, available today on iPhone.",
  },
  {
    name: "Research",
    status: "Live",
    description: "Original security research and technical writing, published as it's produced.",
  },
  {
    name: "Open Source",
    status: "Planned",
    description:
      "Developer tools and libraries released publicly. The category exists on this site; nothing has been published yet.",
  },
  {
    name: "Labs",
    status: "Planned",
    description: "A space for experimental projects and early AI and security prototypes. Not started yet.",
  },
  {
    name: "Academy",
    status: "Future Vision",
    description: "Educational material on AI security and offensive security, for a later stage of SamSec.",
  },
  {
    name: "Future Infrastructure",
    status: "Future Vision",
    description:
      "Developer APIs, enterprise tooling, and cloud services, once the core workspace has earned that expansion.",
  },
];

export default function SamSecPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "SamSec", path: "/samsec" }])} />

      <PageHeader
        eyebrow="The Company"
        title="An AI-first cybersecurity company."
        description="SamSec is not a penetration testing agency, a web development company, or another generic cybersecurity startup. It builds AI-powered infrastructure and security software, starting with SamSec Ops."
      />

      <SectionNav items={navItems} />

      <Section id="overview" border={false}>
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

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The Problem"
            title="Security work runs on tools that don't talk to each other."
            description="Most security practitioners, whether on a team or working independently, stitch together a scanner, a handful of browser tabs for different platforms, a notes app that's never quite in sync, and a report template assembled by hand at the end. Each tool does its own job well. The cost shows up in the seams between them: a finding that never makes it from a scan into a case file, context rebuilt every time you switch tools, a report written from memory days after the actual investigation. That fragmentation isn't a minor inconvenience. It's where security work actually loses time."
          />
          <SectionHeading
            eyebrow="Why AI, Why Now"
            title="Why AI changes how security work gets done."
            description={
              <>
                Most security teams aren&apos;t short on findings. Scanners, fuzzers, and static analysis
                tools produce more than most teams can review. What&apos;s actually scarce is the time to
                triage them: confirming what&apos;s real, assessing what it would take to exploit, and turning
                a raw finding into a report someone can act on. That triage gap, and the repetitive analysis
                behind it, is what current AI models are well suited to compress, provided the judgment calls
                that need real context stay with a person, a case made in more depth in{" "}
                <Link href="/research/autonomous-triage-ai-agents-vulnerability-discovery" className="underline">
                  Autonomous Triage
                </Link>
                . SamSec is built on that distinction: AI accelerates the work, it doesn&apos;t replace the
                judgment.
              </>
            }
          />
        </div>
      </Section>

      <Section id="history">
        <SectionHeading
          eyebrow="History"
          title="Why SamSec started."
          description="SamSec was founded on the belief that AI would change how security operations are performed, and that the tooling for that shift needed to be engineered from first principles instead of bolted onto legacy workflows. SamSec Ops is the first attempt at proving that."
        />
        <div className="mt-14">
          <SectionHeading
            eyebrow="Why Products, Not Services"
            title="Why SamSec builds products instead of offering services."
            description="A consulting or penetration testing practice is a more direct path to revenue: sell hours, deliver a report, move to the next client. It also doesn't scale the part that's actually valuable, which is the tooling itself. A services engagement solves one organization's problem once. A product, built well, solves that problem for everyone who uses it, and gets better with every iteration instead of resetting with every new client. SamSec is built to be infrastructure other security work runs on, not a practice billed by the hour."
            align="left"
          />
        </div>
      </Section>

      <Section id="principles">
        <Eyebrow>Principles</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          How SamSec approaches building.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{principle.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="focus">
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

        <div className="mt-16">
          <SectionHeading
            eyebrow="Research Philosophy"
            title="Research that ships."
            description="SamSec's research exists to be built, not published and forgotten. Every research effort is evaluated against a simple question: does this make its way into software that a security team can run tomorrow? Findings that don't clear that bar stay research; the ones that do become SamSec Ops modules."
            align="left"
          />
        </div>

        <div className="mt-16">
          <SectionHeading eyebrow="Current Focus" title="Where the work is right now." align="left" />
          <div className="mt-10 flex flex-wrap gap-2.5">
            {focusAreas.map((area) => (
              <Badge key={area}>{area}</Badge>
            ))}
          </div>
        </div>
      </Section>

      <Section id="ecosystem">
        <SectionHeading
          eyebrow="Ecosystem"
          title="How the pieces fit together."
          description="SamSec Ops is the first product. Everything below shows the direction SamSec is meant to grow in over time. Some of it is real today. Some of it is next. Some of it is a longer-term direction, not a current plan. The status next to each one reflects exactly where it stands, not where it's headed."
          align="left"
        />
        <ol className="mt-12 space-y-0">
          {ecosystem.map((item) => (
            <li
              key={item.name}
              className="grid grid-cols-1 gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6 py-7 border-t border-ink-100 dark:border-ink-700 last:border-b"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-accent-500 dark:text-accent-300 pt-0.5">
                {item.status}
              </span>
              <div>
                <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{item.name}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-500 dark:text-ink-400 max-w-xl">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="strategy">
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
          description="SamSec Ops starts as a focused SSH and infrastructure operations tool. The plan is to expand it step by step, with each new capability earning its place, rather than promising a finished platform up front."
        />
      </Section>
    </>
  );
}
