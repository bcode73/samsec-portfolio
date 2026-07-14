import Link from "next/link";
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
  title: "SamSec Ops: AI-Powered SSH, DevOps & Infrastructure Operations for iPhone",
  description:
    "SamSec Ops combines a professional SSH terminal, a context-aware AI assistant, and autonomous infrastructure operations through SamSec Agent, in one secure iPhone app.",
  path: "/samsec-ops",
});

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "philosophy", label: "Philosophy" },
  { id: "capabilities", label: "Capabilities" },
  { id: "agent", label: "SamSec Agent" },
  { id: "reports", label: "Engagement Reports" },
  { id: "architecture", label: "Architecture" },
  { id: "platforms", label: "Platform Strategy" },
  { id: "roadmap", label: "Roadmap" },
  { id: "audience", label: "Who It's For" },
  { id: "pricing", label: "Pricing" },
  { id: "screenshots", label: "Screenshots" },
  { id: "release", label: "Release Philosophy" },
  { id: "faq", label: "FAQ" },
];

const currentCapabilities = [
  {
    title: "Professional SSH Terminal",
    description:
      "Real, direct SSH connections with persistent sessions, Face ID protection that secures access without interrupting an active session, and a developer-focused keyboard: arrow keys, Tab, Ctrl, Escape, pipe, and terminal shortcuts. Built to be a genuine terminal, not a simplified remote shell.",
  },
  {
    title: "AI Assistant",
    description:
      "Understands the active infrastructure context. Ask about commands, errors, logs, configuration, deployment issues, Linux administration, or an operational decision, and get guidance alongside the terminal without leaving the workflow.",
  },
  {
    title: "Home Screen, Lock Screen & Dynamic Island",
    description:
      "Monitor infrastructure status without opening the app. Widgets on the Home Screen and Lock Screen, plus Dynamic Island integration, keep the current state visible at a glance.",
  },
];

const philosophy = [
  {
    title: "Design Philosophy",
    description:
      "A real terminal first, not a simplified shell. Every other capability is built around a genuine SSH experience: persistent sessions, a developer keyboard, and Face ID protection that doesn't interrupt active work.",
  },
  {
    title: "Engineering Philosophy",
    description:
      "Reliability takes precedence over automation. A capability that works dependably in a narrow scope ships before a more ambitious one that might not hold up under real infrastructure conditions.",
  },
  {
    title: "AI Philosophy",
    description:
      "AI should assist rather than replace expertise. The assistant understands the active infrastructure context and augments an operator's judgment; it doesn't substitute for it.",
  },
  {
    title: "Automation Philosophy",
    description:
      "Automation should reduce repetitive operational work, but professionals remain in control. Every autonomous action stays transparent and documented, and high-risk actions always require explicit confirmation before execution.",
  },
  {
    title: "Security Philosophy",
    description:
      "Security should never be sacrificed for convenience. Infrastructure management should remain understandable and explainable, not a black box that happens to be fast.",
  },
];

const architecture = [
  {
    title: "Direct SSH Connections",
    description:
      "SamSec Ops connects directly over SSH rather than routing sessions through an intermediary service, so the terminal behaves like a real SSH client because it is one.",
  },
  {
    title: "Native Mobile Client",
    description:
      "SamSec Ops is a native iOS application rather than a wrapped web view, prioritizing responsiveness and session reliability over cross-platform code reuse.",
  },
];

const roadmapPhases = [
  {
    phase: "Current",
    title: "Infrastructure operations on iPhone",
    description: "Live today.",
    items: ["SSH Terminal", "AI Assistant", "SamSec Agent", "Engagement Reports", "Widgets"],
  },
  {
    phase: "Roadmap",
    title: "Toward a cross-platform cybersecurity operating platform",
    description: "None of this is built yet. This is direction, not a release date.",
    items: [
      "Desktop",
      "Web",
      "Android",
      "Threat Intelligence",
      "OSINT",
      "Digital Forensics",
      "Security Automation",
      "Cloud Security",
      "Application Security",
      "Enterprise Collaboration",
      "Developer APIs",
      "Security Knowledge Platform",
    ],
  },
];

const audiences = [
  {
    title: "Infrastructure Engineers",
    description:
      "Managing servers and infrastructure changes from a phone when a laptop isn't at hand, without losing the terminal fidelity real infrastructure work needs.",
  },
  {
    title: "DevOps Engineers",
    description:
      "Describing a deployment or rollback to SamSec Agent instead of typing the same multi-step sequence by hand, with the plan reviewed before anything executes.",
  },
  {
    title: "Site Reliability Engineers",
    description:
      "Investigating an incident from a phone during an on-call page, with the AI assistant helping interpret logs and errors in context.",
  },
  {
    title: "Cloud Engineers",
    description:
      "Quick diagnostic and maintenance work across cloud instances, with Engagement Reports keeping a record of what changed and why.",
  },
  {
    title: "Backend Developers",
    description: "Checking a production log or restarting a service after a deploy without switching to a laptop for a two-minute task.",
  },
  {
    title: "Platform Engineers",
    description:
      "Running routine maintenance across infrastructure through SamSec Agent, with every action classified by risk before it runs.",
  },
  {
    title: "Linux Administrators",
    description: "A real terminal with a developer keyboard, arrow keys, Tab, Ctrl, and pipe included, not a simplified shell that gets in the way.",
  },
  {
    title: "Security Researchers",
    description: "AI-assisted context on unfamiliar systems and configurations while investigating, with a documented record of the session afterward.",
  },
  {
    title: "Cybersecurity Professionals",
    description: "Operational visibility into infrastructure from anywhere, with Engagement Reports supporting accountability and post-incident review.",
  },
  {
    title: "Independent Developers Managing Servers",
    description:
      "Handling the operations side of a side project or small business without a dedicated ops team, guided by an assistant that understands the infrastructure.",
  },
  {
    title: "Technical Founders",
    description: "Staying hands-on with infrastructure while away from a desk, without needing to SSH in blind or wait until they're back at a laptop.",
  },
];

const faqs = [
  {
    question: "What is SamSec Ops?",
    answer:
      "SamSec Ops is an AI-powered SSH, DevOps, and infrastructure operations platform for iPhone. It combines a professional SSH terminal, an AI assistant, autonomous task execution through SamSec Agent, and operational documentation through Engagement Reports in one secure mobile workspace.",
  },
  {
    question: "What can SamSec Ops do today?",
    answer:
      "Today it provides a real SSH terminal with persistent sessions and Face ID protection, a context-aware AI assistant, SamSec Agent for autonomous infrastructure operations, Engagement Reports for every autonomous engagement, and Home Screen, Lock Screen, and Dynamic Island widgets.",
  },
  {
    question: "Does SamSec Agent act without my permission?",
    answer:
      "No. SamSec Agent plans a workflow and classifies every command by risk before anything runs. Potentially destructive actions require explicit confirmation, and every engagement requires an authorization attestation before execution begins. The operator always remains in control.",
  },
  {
    question: "What is an Engagement Report?",
    answer:
      "A durable record automatically produced by every autonomous engagement: the objective, the commands executed, terminal output, timing, the agent's reasoning, and the decisions made. Reports support replay and search, and are automatically masked for sensitive information before being shared.",
  },
  {
    question: "Is SamSec Ops a complete cybersecurity suite?",
    answer:
      "No, and it isn't presented as one. Today it's an SSH, DevOps, and infrastructure operations tool. Threat intelligence, OSINT, digital forensics, and broader security automation are part of the long-term roadmap, not current capabilities.",
  },
  {
    question: "Who is SamSec Ops built for?",
    answer:
      "Infrastructure, DevOps, and platform engineers, SREs, cloud engineers, backend developers, Linux administrators, security researchers and professionals, independent developers managing their own servers, and technical founders.",
  },
  {
    question: "What does SamSec Ops cost?",
    answer:
      "SamSec Ops has a free tier. A Pro subscription, billed monthly or yearly, unlocks advanced AI capabilities, SamSec Agent, and premium operational features.",
  },
  {
    question: "Is SamSec Ops available on platforms other than iPhone?",
    answer: "Not yet. iPhone is where SamSec Ops is available today. Android, desktop, and web are part of the long-term roadmap, not current capabilities.",
  },
  {
    question: "What is the long-term vision for SamSec Ops?",
    answer:
      "To grow from an SSH and infrastructure operations tool into a cross-platform AI-powered cybersecurity operating platform, across iPhone, Android, desktop, and web, eventually covering threat intelligence, OSINT, digital forensics, and broader security automation alongside the infrastructure operations it already provides.",
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
        title="An AI-powered SSH, DevOps, and infrastructure operations platform for iPhone."
        description="SamSec Ops combines a professional SSH terminal, a context-aware AI assistant, and autonomous task execution through SamSec Agent, in one secure mobile workspace, available today on iPhone."
      >
        <div className="mt-2 flex flex-wrap items-center gap-4">
          <Button href="#capabilities">
            See current capabilities
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </PageHeader>

      <SectionNav items={navItems} />

      <Section id="overview" border={false}>
        <SectionHeading
          eyebrow="Overview"
          title="Real infrastructure operations, today."
          description="SamSec Ops's long-term vision is a cross-platform AI-powered cybersecurity operating platform. Today's product already delivers practical tools for engineers, developers, DevOps professionals, and security practitioners managing infrastructure from anywhere."
        />
        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="prose-samsec">
            <h3>Problem statement</h3>
            <p>
              Engineers managing servers from a phone today typically juggle a generic SSH client, a separate
              AI assistant with no idea what server they&apos;re connected to, and no durable record of what
              actually happened during a session beyond scrollback that vanishes when it ends. SamSec Ops
              closes that gap: a real terminal, an assistant that understands the active infrastructure
              context, and an agent that can execute multi-step operational work under explicit authorization,
              with an automatic record of what was done. This is argued in more depth in{" "}
              <Link href="/perspectives/why-single-workspace-samsec-ops">
                why SamSec Ops is built as a single workspace
              </Link>
              .
            </p>
          </div>
          <div className="prose-samsec">
            <h3>Why it exists</h3>
            <p>
              SSH clients on mobile have mostly stayed simple remote shells. SamSec Ops starts from a
              different premise: that a phone can be a legitimate place to do real infrastructure work, with a
              terminal, an assistant, and an agent built for that context specifically, not adapted from a
              general-purpose tool.
            </p>
          </div>
        </div>

        <Callout type="note">
          Cross-platform apps, expanded cybersecurity tooling, and enterprise features are on the roadmap
          below and are not available today. Everything on this page is labeled current or roadmap; nothing
          on the roadmap should be read as available now.
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
          What&apos;s available today, on iPhone.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentCapabilities.map((capability) => (
            <Card key={capability.title}>
              <Badge>Available now</Badge>
              <p className="mt-4 font-display text-xl font-medium text-ink-950 dark:text-white">{capability.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{capability.description}</p>
            </Card>
          ))}
        </div>

        <Callout type="note">
          SamSec Ops does not yet include dedicated offensive security tooling, threat intelligence, OSINT,
          digital forensics, or platforms beyond iPhone. These aren&apos;t oversights. They&apos;re covered
          under Roadmap below.
        </Callout>
      </Section>

      <Section id="agent">
        <SectionHeading
          eyebrow="SamSec Agent"
          title="An autonomous infrastructure operations agent, with the operator always in control."
          description="Instead of manually entering every command, describe the objective: updating packages, deploying software, restarting services, investigating an issue, collecting diagnostic information, or performing routine maintenance. SamSec Agent plans the workflow before anything executes."
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card>
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">Plan First</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              SamSec Agent converts an operational goal into a concrete workflow before any command runs, so
              the plan can be reviewed rather than discovered step by step.
            </p>
          </Card>
          <Card>
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">Risk Classified</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Every proposed command undergoes risk analysis and is classified according to its operational
              risk before execution.
            </p>
          </Card>
          <Card>
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">Explicit Confirmation</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Potentially destructive actions always require explicit user confirmation. Nothing consequential
              runs silently.
            </p>
          </Card>
          <Card>
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">Authorization Attestation</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Before any engagement begins, the user must explicitly authorize it through an authorization
              attestation. Execution doesn&apos;t start without that step.
            </p>
          </Card>
        </div>
        <Callout type="warning">
          SamSec Agent assists execution. It is not fully autonomous, and it never removes operator oversight:
          it doesn&apos;t act without authorization, and the operator always remains in control.
        </Callout>
        <p className="mt-8 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          Why this authorization model works the way it does, and what it explicitly rules out, is documented
          in{" "}
          <Link href="/adr/adr-002-human-authorization" className="text-accent-500 dark:text-accent-300 hover:underline">
            ADR-002: Human Authorization Before Autonomous Execution
          </Link>{" "}
          and{" "}
          <Link
            href="/adr/adr-004-ai-assistance-not-full-automation"
            className="text-accent-500 dark:text-accent-300 hover:underline"
          >
            ADR-004: AI Assistance Instead of Full Automation
          </Link>
          , with a deeper treatment in{" "}
          <Link
            href="/research/human-oversight-in-autonomous-infrastructure"
            className="text-accent-500 dark:text-accent-300 hover:underline"
          >
            Human Oversight in Autonomous Infrastructure
          </Link>
          .
        </p>
      </Section>

      <Section id="reports">
        <SectionHeading
          eyebrow="Engagement Reports"
          title="Every engagement produces a durable operational record."
          description="This is operational documentation, not activity logging. Each report captures the objective, the commands executed, terminal output, execution timing, the agent's reasoning, and the operational decisions made along the way."
          align="left"
        />
        <div className="mt-10 flex flex-wrap gap-2.5">
          <Badge>Replay History</Badge>
          <Badge>Search</Badge>
          <Badge>Automatic Sensitive Data Masking</Badge>
        </div>
        <p className="mt-8 text-sm leading-relaxed text-ink-500 dark:text-ink-400 max-w-2xl">
          Sensitive information is automatically masked before a report is shared. Reports exist to make
          autonomous work reviewable after the fact: useful for accountability, for documenting what actually
          happened during an engagement, and for sharing context with someone else without re-explaining it.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-400 max-w-2xl">
          Why these reports are kept permanently rather than treated as disposable session output is covered
          in{" "}
          <Link
            href="/adr/adr-003-permanent-engagement-reports"
            className="text-accent-500 dark:text-accent-300 hover:underline"
          >
            ADR-003: Why Engagement Reports Are Permanent
          </Link>
          .
        </p>
      </Section>

      <Section id="architecture">
        <SectionHeading
          eyebrow="Architecture"
          title="How it's put together, at a high level."
          description="Without exposing implementation detail that would be more useful to an attacker than a reader, here's the reasoning behind a few structural decisions."
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {architecture.map((item) => (
            <div key={item.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          The reasoning behind SamSec Agent&apos;s policy boundary, the separation between what the agent can
          plan and what it&apos;s allowed to execute without confirmation, is laid out in more detail in{" "}
          <Link
            href="/notes/five-principles-secure-ai-agent-design"
            className="text-accent-500 dark:text-accent-300 hover:underline"
          >
            Five Principles for Secure AI Agent Design
          </Link>
          , and the same trust-boundary problem is the subject of{" "}
          <Link
            href="/research/prompt-injection-as-attack-surface"
            className="text-accent-500 dark:text-accent-300 hover:underline"
          >
            Prompt Injection as a New Class of Attack Surface
          </Link>
          .
        </p>
      </Section>

      <Section id="platforms">
        <SectionHeading
          eyebrow="Platform Strategy"
          title="iPhone first, more platforms planned."
          description="SamSec Ops started on iPhone deliberately, not by default. Infrastructure work already happens in the gaps: a quick restart between meetings, a deployment check from across the room, an incident investigated away from a desk. Building for that context first, rather than porting a desktop tool down to mobile as an afterthought, shapes decisions differently: what needs to be one tap away, what can wait, what has to work on a weak connection or none at all. Expansion to other platforms follows the same logic: each one earns its place once the core product justifies building for it again, rather than launching everywhere at once and thinning the experience across all of them."
          align="left"
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card>
            <Badge>Available now</Badge>
            <p className="mt-4 font-display text-xl font-medium text-ink-950 dark:text-white">iPhone</p>
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
              Long-term plan for SamSec Ops to become available across Android, desktop, and web, alongside
              iPhone.
            </p>
          </Card>
        </div>
        <p className="mt-8 text-sm leading-relaxed text-ink-500 dark:text-ink-400 max-w-2xl">
          The full reasoning behind starting on iPhone, including the alternatives that were set aside, is in{" "}
          <Link href="/adr/adr-001-iphone-first" className="text-accent-500 dark:text-accent-300 hover:underline">
            ADR-001: Why SamSec Ops Launched on iPhone First
          </Link>{" "}
          and, in a shorter and more practical form, in{" "}
          <Link
            href="/notes/why-samsec-ops-started-on-iphone"
            className="text-accent-500 dark:text-accent-300 hover:underline"
          >
            Why SamSec Ops Started on iPhone
          </Link>
          .
        </p>
      </Section>

      <Section id="roadmap">
        <SectionHeading
          eyebrow="Roadmap"
          title="Current product vs. long-term vision."
          description="What's live today, and the direction beyond it. Nothing under Roadmap is implemented yet, and none of it should be read as available now."
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
          title="Built for people running infrastructure today."
          description="Realistic use cases for the people managing servers, deployments, and infrastructure, whether that's their full-time job or the part of their job nobody else is doing."
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

      <Section id="pricing">
        <SectionHeading eyebrow="Pricing" title="Free tier, with a Pro subscription for advanced capability." align="left" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card>
            <Badge>Available now</Badge>
            <p className="mt-4 font-display text-xl font-medium text-ink-950 dark:text-white">Free</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Core SSH terminal and AI assistant access to get started.
            </p>
          </Card>
          <Card>
            <Badge>Subscription</Badge>
            <p className="mt-4 font-display text-xl font-medium text-ink-950 dark:text-white">Pro, monthly or yearly</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Advanced AI capabilities, SamSec Agent, and premium operational features.
            </p>
          </Card>
        </div>
      </Section>

      <Section id="screenshots">
        <SectionHeading
          eyebrow="Screenshots"
          title="Product visuals coming soon."
          description="SamSec Ops is in active development. Screenshots of the current iPhone app will be published here."
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ScreenshotFrame label="SSH Terminal Preview" />
          <ScreenshotFrame label="SamSec Agent Preview" />
        </div>
      </Section>

      <Section id="release">
        <SectionHeading eyebrow="Release Philosophy" title="Ship narrow, expand deliberately." align="left" />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="prose-samsec">
            <p>
              Each capability in SamSec Ops is expected to work well on its own before the next one is built
              on top of it. Capabilities arrive one at a time rather than in a single large release, and each
              one is expected to hold up under real infrastructure conditions before the next is started. The
              roadmap describes direction, not a release calendar: dates aren&apos;t published, because the
              pace depends on getting each piece right, not on hitting a schedule.
            </p>
          </div>
          <div className="prose-samsec">
            <h3>Development philosophy</h3>
            <p>
              Development follows the same discipline as the product itself: build one capability, use it,
              harden it, then decide what&apos;s next based on what was learned, rather than committing to a
              fixed multi-quarter plan upfront.
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
