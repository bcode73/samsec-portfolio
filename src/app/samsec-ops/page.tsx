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
  { id: "capabilities", label: "Current Capabilities" },
  { id: "roadmap", label: "Roadmap" },
  { id: "platforms", label: "Platforms" },
  { id: "screenshots", label: "Screenshots" },
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

const roadmapModules = [
  "Offensive Security Workspace",
  "Reconnaissance",
  "OSINT",
  "Threat Intelligence",
  "Vulnerability Management",
  "Digital Forensics",
  "API Security",
  "Cloud Security",
  "Mobile Security",
  "Infrastructure Security",
  "Secure Knowledge Management",
  "Report Generation",
  "AI Security Agents",
  "Automation Pipelines",
  "Case Management",
  "Security Dashboards",
  "Enterprise Collaboration",
  "Plugin Marketplace",
  "Cloud Synchronization",
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
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Overview"
              title="Foundation first."
              description="SamSec Ops is currently in its early stage. Rather than attempting a complete cybersecurity suite from day one, the current iOS app is designed to establish the architecture, user experience, and AI workflow that future versions will expand on."
            />
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
      </Section>

      <Section id="roadmap">
        <SectionHeading
          eyebrow="Roadmap"
          title="Where SamSec Ops is headed."
          description="These are planned future capabilities. None of them are implemented yet, and none should be read as available today."
          align="left"
        />
        <div className="mt-10 flex flex-wrap gap-2.5">
          {roadmapModules.map((module) => (
            <Badge key={module}>{module}</Badge>
          ))}
        </div>
      </Section>

      <Section id="platforms">
        <SectionHeading eyebrow="Platforms" title="iOS today. More platforms planned." align="left" />
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
