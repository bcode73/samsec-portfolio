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
import { Callout } from "@/components/mdx/Callout";
import { ProjectIcon } from "@/components/ProjectIcon";
import { getProject } from "@/lib/projects";

export const metadata = buildMetadata({
  title: "SamSec Ops: An AI-Assisted Security Workspace for iOS",
  description:
    "SamSec Ops is SamSec's first product: an early-stage AI-assisted cybersecurity workspace for iOS, and the starting point for a broader AI-powered security platform.",
  path: "/samsec-ops",
});

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "philosophy", label: "Philosophy" },
  { id: "capabilities", label: "Capabilities" },
  { id: "architecture", label: "Architecture" },
  { id: "platforms", label: "Platform Strategy" },
  { id: "roadmap", label: "Roadmap" },
  { id: "audience", label: "Who It's For" },
  { id: "screenshots", label: "Screenshots" },
  { id: "release", label: "Release Philosophy" },
  { id: "faq", label: "FAQ" },
];

const currentCapabilities = [
  {
    title: "AI Security Assistant",
    description: "An AI assistant for technical security discussions, security concepts, and workflow support.",
  },
  {
    title: "AI-Assisted Code Analysis",
    description:
      "Review code snippets, get an explanation of what they do, flag potential security concerns, and get secure development guidance.",
  },
  {
    title: "Cybersecurity-Focused AI Chat",
    description: "A chat environment built specifically for security work, not a general-purpose assistant.",
  },
  {
    title: "Security Workspace & Notes",
    description: "A dedicated space for documenting security research, technical notes, ideas, and investigations.",
  },
  {
    title: "Mobile-First Access",
    description: "A modern, mobile-first experience for reaching an AI security workspace from anywhere.",
  },
];

const philosophy = [
  {
    title: "Design Philosophy",
    description:
      "Fewer screens, not more. Every addition is weighed against a simple cost: does this make the workspace more useful, or does it just make it bigger? The interface stays deliberately narrow while the underlying capability grows.",
  },
  {
    title: "Engineering Philosophy",
    description:
      "Correct before convenient. SamSec Ops is built module by module, and each one is expected to work reliably on its own before it's connected to the rest of the workspace. Shipping fast matters less than shipping something that holds up under real use.",
  },
  {
    title: "AI Philosophy",
    description:
      "AI as a research assistant, not an autonomous operator. Every AI capability in SamSec Ops today supports a person doing security work; it doesn't act unsupervised. Anything with a real consequence stays behind a human decision, not a model's judgment.",
  },
  {
    title: "Security Philosophy",
    description:
      "Security is a property of the system, not a checklist run before launch. Authentication, data handling, and AI tool access are each designed with the assumption that something will eventually try to abuse them.",
  },
  {
    title: "Privacy Approach",
    description:
      "SamSec Ops is where people bring sensitive investigation notes, code, and research. Data handling defaults to collecting only what a feature actually needs, not everything that could conceivably be useful later.",
  },
];

const architecture = [
  {
    title: "Shared Case Context",
    description:
      "Every part of SamSec Ops, from AI conversations to research notes, is built around the same underlying case context instead of living in separate, disconnected features. That decision was made early, not bolted on later: it's what lets the workspace get more useful as it grows, instead of just getting bigger.",
  },
  {
    title: "AI Behind a Policy Boundary",
    description:
      "The AI assistant operates as a research and analysis layer, not a standalone decision-maker. Its outputs are treated as informed suggestions a person reviews, not actions executed automatically. As agentic capabilities expand, the boundary between what the AI can reason about and what it's allowed to do stays explicit rather than implicit.",
  },
  {
    title: "Native Mobile Client",
    description:
      "SamSec Ops is a native iOS application rather than a wrapped web view, prioritizing responsiveness and offline access to notes and past research over cross-platform code reuse.",
  },
];

const roadmapPhases = [
  {
    phase: "Current",
    title: "The AI workspace",
    description: "Live today, on iOS.",
    items: ["AI Security Assistant", "AI-Assisted Code Analysis", "Cybersecurity-Focused AI Chat", "Security Workspace & Notes"],
  },
  {
    phase: "Near-Term",
    title: "Offensive security & reconnaissance",
    description: "The next modules planned after the current workspace.",
    items: ["Offensive Security Workspace", "Reconnaissance", "OSINT", "Vulnerability Management"],
  },
  {
    phase: "Mid-Term",
    title: "Broader security coverage",
    description: "Expanding coverage once the near-term modules are solid.",
    items: [
      "Threat Intelligence",
      "Digital Forensics",
      "API Security",
      "Cloud Security",
      "Mobile Security",
      "Infrastructure Security",
      "Secure Knowledge Management",
      "Report Generation",
      "Case Management",
    ],
  },
  {
    phase: "Long-Term",
    title: "Platform & ecosystem",
    description: "The furthest-out direction, dependent on everything above.",
    items: [
      "AI Security Agents",
      "Automation Pipelines",
      "Security Dashboards",
      "Enterprise Collaboration",
      "Plugin Marketplace",
      "Cloud Synchronization",
    ],
  },
];

const audiences = [
  {
    title: "Independent Security Researcher",
    description:
      "A place to think through a finding, get a second opinion from the AI assistant on an edge case, and keep notes on an investigation without juggling a separate notes app.",
  },
  {
    title: "Penetration Tester",
    description:
      "Quick technical lookups and code review support between engagements, with notes that stay attached to the actual case instead of a generic notes app.",
  },
  {
    title: "SOC Analyst",
    description:
      "A cybersecurity-focused chat for reasoning through an alert or a log line, without switching to a general-purpose assistant that lacks the context.",
  },
  {
    title: "Security Consultant",
    description:
      "A mobile workspace for capturing findings and thinking through a client's problem on the move, before it's written up formally.",
  },
  {
    title: "Software Engineer",
    description: "AI-assisted code review that flags security concerns specifically, not just general code quality feedback.",
  },
  {
    title: "Cybersecurity Student",
    description:
      "A cybersecurity-focused AI to ask questions and work through concepts, built for security specifically rather than adapted from a general assistant.",
  },
];

const faqs = [
  {
    question: "What is SamSec Ops?",
    answer:
      "SamSec Ops is SamSec's first product: an AI-assisted cybersecurity workspace, currently available on iOS. It is built as the starting point for a broader AI-powered security platform.",
  },
  {
    question: "What can SamSec Ops do today?",
    answer:
      "Today it provides an AI security assistant for technical discussions and workflow support, AI-assisted code analysis, a cybersecurity-focused AI chat environment, and a workspace for documenting security research and notes, all in a mobile-first iOS app.",
  },
  {
    question: "Is SamSec Ops a complete cybersecurity suite?",
    answer:
      "Not yet, and it is not presented as one. The current release intentionally focuses on establishing the architecture, user experience, and AI workflow that later versions will build on, rather than trying to include every planned capability at once.",
  },
  {
    question: "Who is SamSec Ops built for right now?",
    answer:
      "Individual security practitioners: researchers, penetration testers, SOC analysts, consultants, security-minded engineers, and students. Team and enterprise features are part of the long-term roadmap, not the current release.",
  },
  {
    question: "Does the AI take actions on my behalf?",
    answer:
      "No. The AI assistant supports research, analysis, and conversation. It doesn't execute actions automatically. Any future capability that would let it act is planned to sit behind an explicit approval step, not run unsupervised.",
  },
  {
    question: "Is my data private?",
    answer:
      "SamSec Ops collects only what a feature needs to function, and investigation notes and research stay associated with your account rather than being used for anything beyond providing the service. As SamSec Ops adds team and cloud sync features, the same narrow-by-default approach applies.",
  },
  {
    question: "Is SamSec Ops available on platforms other than iOS?",
    answer:
      "Not yet. iOS is where SamSec Ops is available today. Android, desktop, and web are part of the long-term plan, not current capabilities.",
  },
  {
    question: "What is the long-term vision for SamSec Ops?",
    answer:
      "For SamSec Ops to grow into an AI-powered cybersecurity operating platform across iOS, Android, desktop, and web, eventually covering offensive security, reconnaissance, threat intelligence, vulnerability management, and more, alongside the AI workspace it already provides.",
  },
];

export default function SamSecOpsPage() {
  const project = getProject("samsec-ops");

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
        icon={project ? <ProjectIcon project={project} className="size-16" /> : null}
        eyebrow="SamSec Ops · Flagship Product"
        title="An AI-assisted security workspace for iOS."
        description="SamSec Ops is SamSec's first product: an early-stage AI-assisted cybersecurity workspace, available today on iOS, and the starting point for a broader AI-powered security platform."
      >
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <Button href="#capabilities">
            See current capabilities
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/contact" variant="secondary">
            Request early access
          </Button>
        </div>
      </PageHeader>

      <SectionNav items={navItems} />

      <Section id="overview" border={false}>
        <SectionHeading
          eyebrow="Overview"
          title="Foundation first."
          description="SamSec Ops is currently in its early stage. Rather than attempting a complete cybersecurity suite from day one, the current iOS app is designed to establish the architecture, user experience, and AI workflow that future versions will expand on."
        />
        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="prose-samsec">
            <h3>Problem statement</h3>
            <p>
              Security professionals default to a scattered toolkit: a terminal, several browser tabs for
              different platforms, a notes app that&apos;s out of sync with all of them, and a report
              assembled from memory afterward. Each tool works fine alone. What&apos;s missing is a single
              place where an AI assistant, code review, and research notes about the same investigation live
              together, instead of being reconstructed from four different apps after the fact.
            </p>
          </div>
          <div className="prose-samsec">
            <h3>Why it exists</h3>
            <p>
              General-purpose AI assistants aren&apos;t built for security work. SamSec Ops starts as an
              AI-assisted workspace built specifically for it instead, small enough to get right before it
              gets bigger.
            </p>
          </div>
        </div>

        <Callout type="note">
          The current release intentionally focuses on laying a strong foundation rather than including every
          planned capability. Everything under Roadmap below is not yet available.
        </Callout>
      </Section>

      <Section id="philosophy">
        <Eyebrow>Philosophy</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          How SamSec Ops is designed.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {philosophy.map((item) => (
            <div key={item.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="capabilities">
        <Eyebrow>Current Capabilities</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          What&apos;s available today, on iOS.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {currentCapabilities.map((capability) => (
            <Card key={capability.title}>
              <Badge>Available now</Badge>
              <p className="mt-4 font-display text-xl font-medium text-ink-950 dark:text-white">{capability.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{capability.description}</p>
            </Card>
          ))}
        </div>

        <Callout type="note">
          SamSec Ops does not yet include offensive security tooling, automated scanning or reconnaissance,
          case management, team collaboration, or platforms beyond iOS. The AI assistant supports research
          and analysis; it does not take autonomous action on your behalf. These aren&apos;t oversights.
          They&apos;re the parts of the workspace covered under Roadmap below.
        </Callout>
      </Section>

      <Section id="architecture">
        <SectionHeading
          eyebrow="Architecture"
          title="How it's put together, at a high level."
          description="Without exposing implementation detail that would be more useful to an attacker than a reader, here's the reasoning behind a few structural decisions."
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {architecture.map((item) => (
            <div key={item.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="platforms">
        <SectionHeading
          eyebrow="Platform Strategy"
          title="iOS first, more platforms planned."
          description="SamSec Ops started on iOS deliberately, not by default. Mobile is where a lot of real security work already happens in the gaps: a quick lookup between meetings, a note captured right after finding something worth flagging, a question asked away from a desk. Building for that context first, rather than porting a desktop tool down to mobile as an afterthought, shapes decisions differently: what needs to be one tap away, what can wait, what has to work on a weak connection or none at all. Expansion to other platforms follows the same logic as the rest of SamSec Ops: each one earns its place once the core workspace justifies building for it again, rather than launching everywhere at once and thinning the experience across all of them."
          align="left"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card>
            <Badge>Available now</Badge>
            <p className="mt-4 font-display text-xl font-medium text-ink-950 dark:text-white">iOS</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              SamSec Ops is available today as a native iOS application.
            </p>
          </Card>
          <Card>
            <Badge>Planned</Badge>
            <p className="mt-4 font-display text-xl font-medium text-ink-950 dark:text-white">
              Android, Desktop, Web
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Long-term plan for SamSec Ops to become available across Android, desktop, and web, alongside iOS.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="roadmap">
        <SectionHeading
          eyebrow="Roadmap"
          title="Where SamSec Ops is headed."
          description="Four phases, from what's live today to the furthest-out direction. None of the phases after Current are implemented yet, and none should be read as available today."
          align="left"
        />
        <div className="mt-12 space-y-10">
          {roadmapPhases.map((phase) => (
            <div key={phase.phase} className="border-t border-ink-100 dark:border-ink-700 pt-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs uppercase tracking-wide text-accent-500 dark:text-accent-300">
                  {phase.phase}
                </span>
                <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{phase.title}</p>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{phase.description}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {phase.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="audience">
        <SectionHeading
          eyebrow="Who It's For"
          title="Built for people doing security work today."
          description="SamSec Ops is early. What it offers today is useful to specific kinds of security work right now, even though it doesn't yet cover every discipline. Here's how it fits into a few real workflows."
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <div key={item.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="screenshots">
        <SectionHeading
          eyebrow="Screenshots"
          title="Product visuals coming soon."
          description="SamSec Ops is in active development. Screenshots of the current iOS app will be published here."
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ScreenshotFrame label="AI Security Assistant Preview" />
          <ScreenshotFrame label="Security Workspace & Notes Preview" />
        </div>
      </Section>

      <Section id="release">
        <SectionHeading eyebrow="Release Philosophy" title="Ship narrow, expand deliberately." align="left" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="prose-samsec">
            <p>
              Each module in SamSec Ops is expected to work well on its own before it&apos;s connected to the
              next one. Capabilities arrive one at a time rather than in a single large release, and each one
              is expected to hold up under real use before the next is started. The roadmap describes
              direction, not a release calendar: dates aren&apos;t published, because the pace depends on
              getting each piece right, not on hitting a schedule.
            </p>
          </div>
          <div className="prose-samsec">
            <h3>Development philosophy</h3>
            <p>
              Development follows the same module-by-module discipline as the product itself: build one
              capability, use it, harden it, then decide what&apos;s next based on what was learned, rather
              than committing to a fixed multi-quarter plan upfront.
            </p>
          </div>
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
