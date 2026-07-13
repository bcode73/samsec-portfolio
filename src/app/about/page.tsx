import Image from "next/image";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { TimelineList } from "@/components/TimelineList";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "About",
  description:
    "The career, mission, and engineering philosophy behind Samuel Omobusuyi's work in AI security and cybersecurity research.",
  path: "/about",
});

const researchInterests = [
  {
    title: "AI Security",
    description: "How AI systems fail, get attacked, and get secured, and how AI itself can defend infrastructure.",
  },
  {
    title: "Offensive Security",
    description: "Attacker-first thinking as the foundation for building effective defenses.",
  },
  {
    title: "Security Automation",
    description: "Replacing repetitive manual security work with reliable, auditable automation.",
  },
  {
    title: "Attack Surface Management",
    description: "Continuous, real-time visibility into what an organization actually exposes to the internet.",
  },
];

const principles = [
  {
    title: "Build, don't theorize",
    description: "Research that doesn't ship into working software rarely changes how security gets done in practice.",
  },
  {
    title: "Precision over noise",
    description: "Fewer, sharper findings and fewer, sharper features. Depth is chosen deliberately over breadth.",
  },
  {
    title: "Security is an engineering discipline",
    description: "Rigor, testing, and craftsmanship apply to security tooling exactly as they do to any other software.",
  },
  {
    title: "AI as a force multiplier, not a shortcut",
    description: "AI accelerates security work when it's built on sound fundamentals. It is never a substitute for them.",
  },
];

const expertise = [
  "AI Security",
  "Offensive Security",
  "Security Automation",
  "Cloud Security",
  "Application Security",
  "Secure Software Engineering",
  "Threat Intelligence",
  "Attack Surface Management",
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <PageHeader
        eyebrow="About"
        title="Samuel Omobusuyi"
        description="AI Security Engineer, Security Researcher, and Software Engineer building at the intersection of artificial intelligence and cybersecurity."
      />

      <Section border={false} className="pt-0">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-ink-100 dark:border-ink-700 bg-ink-900">
            <Image
              src={siteConfig.person.image}
              alt={siteConfig.person.name}
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>

          <div className="prose-samsec">
            <p>
              Samuel Omobusuyi is an AI Security Engineer, Security Researcher, and Software Engineer whose work
              sits at the intersection of artificial intelligence, cybersecurity, offensive security, security
              automation, cloud security, and secure software engineering.
            </p>
            <p>
              He prefers building over theorizing. Rather than producing research for its own sake, he builds
              software that solves real security problems: tools that security teams can run, not papers that sit
              unread. That approach is the foundation of SamSec, the company he founded to pursue it at scale.
            </p>
            <p>
              His long-term ambition is to build one of Africa&apos;s most respected cybersecurity and AI
              companies, with technology built to compete globally. SamSec and its flagship product, SamSec Ops,
              are how he is pursuing it: an AI-first cybersecurity company that automates security operations and
              accelerates vulnerability discovery.
            </p>
            <p>
              Outside of SamSec, Samuel writes original research on AI security and security automation, and
              publishes open source security tooling. He is also building toward whitepapers and speaking
              engagements that make the case for AI-driven security infrastructure as its own discipline.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Mission &amp; Vision"
          title="Building the infrastructure security operations will run on."
          description="Samuel's personal mission is inseparable from SamSec's: to make advanced security capability (automated, AI-assisted, and rigorous) accessible far beyond the handful of organizations that can currently afford it."
        />
      </Section>

      <Section>
        <Eyebrow>Research Interests</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          What the research is about.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {researchInterests.map((interest) => (
            <div key={interest.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{interest.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{interest.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Engineering Philosophy</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          Principles that shape how things get built.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle.title} className="border-t border-ink-100 dark:border-ink-700 pt-6">
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{principle.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Core Expertise</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          Areas of focus.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {expertise.map((item) => (
            <span
              key={item}
              className="rounded-full border border-ink-200 dark:border-ink-600 px-4 py-2 text-sm text-ink-700 dark:text-ink-200"
            >
              {item}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Timeline</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          The path so far.
        </h2>
        <div className="mt-12">
          <TimelineList />
        </div>
      </Section>
    </>
  );
}
