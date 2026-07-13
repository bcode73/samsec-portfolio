import { ArrowRight } from "lucide-react";
import { buildMetadata, breadcrumbSchema, faqSchema, softwareApplicationSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionNav } from "@/components/product/SectionNav";
import { ScreenshotFrame } from "@/components/product/ScreenshotFrame";

export const metadata = buildMetadata({
  title: "SamSec Ops: AI-Powered Cybersecurity Operating Platform",
  description:
    "SamSec Ops is an AI-powered cybersecurity operating platform designed to become the daily workspace for security analysts, penetration testers, researchers, and incident responders.",
  path: "/samsec-ops",
});

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "architecture", label: "Architecture" },
  { id: "modules", label: "Modules" },
  { id: "roadmap", label: "Roadmap" },
  { id: "use-cases", label: "Use Cases" },
  { id: "stack", label: "Technology" },
  { id: "screenshots", label: "Screenshots" },
  { id: "releases", label: "Releases" },
  { id: "faq", label: "FAQ" },
];

const currentModules = [
  {
    title: "AI Security Assistant",
    description: "An AI layer embedded across workflows. It summarizes findings, drafts reports, and surfaces next steps.",
  },
  {
    title: "Offensive Security Workspace",
    description: "A unified environment for reconnaissance, OSINT, and vulnerability research.",
  },
];

const roadmapModules = [
  "Digital Forensics",
  "Threat Intelligence",
  "Attack Surface Mapping",
  "Vulnerability Management",
  "Exploit Research",
  "Mobile Security",
  "Web Security",
  "Cloud Security",
  "Container Security",
  "API Security",
  "Network Security",
  "Incident Response",
  "Malware Analysis",
  "Evidence Collection",
  "Case Management",
  "Secure Notes",
  "Terminal Integration",
  "Knowledge Base",
  "Automation Pipelines",
  "Custom AI Agents",
  "Report Generation",
  "Security Dashboards",
  "Plugin Marketplace",
  "Enterprise Collaboration",
  "Cloud Synchronization",
];

const useCases = [
  {
    title: "Security Analysts",
    description: "Triage alerts faster with AI-assisted analysis and a single workspace for investigation notes.",
  },
  {
    title: "Penetration Testers",
    description: "Run reconnaissance and vulnerability research without switching between a dozen disconnected tools.",
  },
  {
    title: "Security Researchers",
    description: "Organize findings, track exploit research, and move from discovery to write-up in one place.",
  },
  {
    title: "Incident Responders",
    description: "Coordinate evidence collection and case management under a single, auditable timeline.",
  },
];

const stack = ["AI Agents & LLM Orchestration", "TypeScript / Python / Go", "Cloud-Native Infrastructure", "Zero-Trust Architecture"];

const releases = [
  {
    version: "v0.1",
    label: "Private beta, in development",
    notes: "Core AI Security Assistant and Offensive Security Workspace modules under active development.",
  },
];

const faqs = [
  {
    question: "What is SamSec Ops?",
    answer:
      "SamSec Ops is an AI-powered cybersecurity operating platform being built to become the daily workspace for security analysts, penetration testers, researchers, and incident responders: one workspace, one intelligence layer, one security ecosystem.",
  },
  {
    question: "Who is SamSec Ops built for?",
    answer:
      "Security analysts, penetration testers, security researchers, incident responders, and engineering teams who need to perform security workflows without switching between disconnected tools.",
  },
  {
    question: "Is SamSec Ops available today?",
    answer:
      "SamSec Ops is in active development. Current capabilities include AI-assisted security workflows and offensive security utilities, with new modules shipping continuously toward the platform's long-term vision.",
  },
  {
    question: "How does AI fit into SamSec Ops?",
    answer:
      "AI is a foundational layer, not a bolt-on feature. It runs from the AI Security Assistant that supports analysis and reporting, to custom AI agents that will eventually operate security workflows under human oversight.",
  },
  {
    question: "What is the long-term vision for SamSec Ops?",
    answer:
      "SamSec Ops aims to become the workspace for cybersecurity, the way Notion became the workspace for knowledge management, eventually allowing most security workflows to run from a single platform.",
  },
];

export default function SamSecOpsPage() {
  return (
    <>
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "SamSec Ops", path: "/samsec-ops" },
        ])}
      />

      <PageHeader
        eyebrow="SamSec Ops · Flagship Product"
        title="The intelligence layer for security operations."
        description="An AI-powered cybersecurity operating platform designed to become the daily operating system for security professionals: one workspace, one intelligence layer, one security ecosystem."
      >
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <Button href="#overview">
            Read the overview
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/contact" variant="secondary">
            Request early access
          </Button>
        </div>
      </PageHeader>

      <SectionNav items={navItems} />

      <Section id="overview" border={false}>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Overview"
              title="One workspace for every security workflow."
              description="Security work today is fragmented across a dozen disconnected tools. SamSec Ops is built to collapse that fragmentation into a single, AI-assisted workspace, where reconnaissance, analysis, reporting, and collaboration all happen in one place."
            />
          </div>
          <div className="prose-samsec">
            <h3>Problem Statement</h3>
            <p>
              Security teams lose disproportionate time to tool-switching, manual triage, and repetitive
              investigative work: time that should go toward judgment and decision making, not data wrangling.
              Existing tooling is built around individual tasks, not the full arc of a security workflow.
            </p>
            <h3>Vision</h3>
            <p>
              SamSec Ops is being built to become the daily operating system for security professionals,
              eventually allowing security analysts, penetration testers, researchers, incident responders, and
              engineering teams to perform most security workflows from one platform, powered by an ecosystem of
              AI agents.
            </p>
          </div>
        </div>
      </Section>

      <Section id="architecture">
        <SectionHeading
          eyebrow="Architecture"
          title="Built as infrastructure, not a feature set."
          description="SamSec Ops is architected around three layers: a workspace layer for security workflows, an intelligence layer of AI agents and models, and an automation layer that connects the two into repeatable pipelines."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: "Workspace Layer", description: "The surfaces analysts and researchers work in daily: case files, notes, dashboards, terminal." },
            { title: "Intelligence Layer", description: "AI models and agents that assist, summarize, and eventually operate workflows autonomously." },
            { title: "Automation Layer", description: "Pipelines that connect tools, data, and agents into repeatable, auditable workflows." },
          ].map((layer) => (
            <Card key={layer.title}>
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{layer.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{layer.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="modules">
        <Eyebrow>Current Features</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          What&apos;s live today.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {currentModules.map((module) => (
            <Card key={module.title}>
              <Badge>Available</Badge>
              <p className="mt-4 font-display text-xl font-medium text-ink-950 dark:text-white">{module.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{module.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Eyebrow>Platform Expansion</Eyebrow>
          <h3 className="font-display text-2xl font-medium tracking-tight text-ink-950 dark:text-white">
            Core modules on the roadmap.
          </h3>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {roadmapModules.map((module) => (
              <Badge key={module}>{module}</Badge>
            ))}
          </div>
        </div>
      </Section>

      <Section id="roadmap">
        <SectionHeading
          eyebrow="Automation Engine &amp; AI Integration"
          title="AI as the operating layer, not an add-on."
          description="Every workflow in SamSec Ops is designed to be automatable end to end, from a human-driven task today, to an AI-assisted task next, to an autonomous agent-run pipeline eventually, always under clear human oversight."
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            { phase: "Assisted", description: "AI supports human analysts by summarizing, drafting, and surfacing insights." },
            { phase: "Automated", description: "Repeatable workflows run as pipelines, with humans reviewing at checkpoints." },
            { phase: "Autonomous", description: "Custom AI agents operate defined workflows independently, within guardrails." },
          ].map((item) => (
            <div key={item.phase} className="rounded-2xl border border-ink-100 dark:border-ink-700 p-7">
              <span className="font-mono text-xs uppercase tracking-wide text-accent-500 dark:text-accent-300">
                {item.phase}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="use-cases">
        <SectionHeading eyebrow="Use Cases" title="Built around real security workflows." align="left" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{useCase.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{useCase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="stack">
        <SectionHeading eyebrow="Technology Stack" title="Built on production-grade infrastructure." align="left" />
        <div className="mt-10 flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink-200 dark:border-ink-600 px-4 py-2 text-sm text-ink-700 dark:text-ink-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      <Section id="screenshots">
        <SectionHeading
          eyebrow="Screenshots"
          title="Product visuals coming soon."
          description="SamSec Ops is in active development. Interface previews will be published here as modules reach a shareable stage."
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ScreenshotFrame label="AI Security Assistant Preview" />
          <ScreenshotFrame label="Offensive Security Workspace Preview" />
        </div>
      </Section>

      <Section id="releases">
        <SectionHeading eyebrow="Development Updates &amp; Release Notes" title="Shipped so far." align="left" />
        <div className="mt-10 space-y-6">
          {releases.map((release) => (
            <div key={release.version} className="flex flex-col gap-2 border-t border-ink-100 dark:border-ink-700 pt-6 sm:flex-row sm:gap-8">
              <span className="font-mono text-sm text-ink-400 dark:text-ink-500 sm:w-24 shrink-0">{release.version}</span>
              <div>
                <p className="font-medium text-ink-950 dark:text-white">{release.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{release.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="faq" border={false}>
        <SectionHeading eyebrow="Frequently Asked Questions" title="Common questions about SamSec Ops." align="left" />
        <div className="mt-10 max-w-3xl divide-y divide-ink-100 dark:divide-ink-700 border-t border-b border-ink-100 dark:border-ink-700">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-950 dark:text-white">
                {faq.question}
                <span className="shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
