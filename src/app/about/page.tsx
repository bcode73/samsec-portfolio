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
    "The background, career, and engineering philosophy behind Samuel Omobusuyi's work in AI security and cybersecurity research.",
  path: "/about",
});

const combines = ["AI", "Cybersecurity", "Software Engineering", "Security Automation", "Application Security", "Cloud Security"];

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
    title: "Security Research",
    description: "Original investigation into how systems actually fail, not just how they're supposed to work.",
  },
  {
    title: "Secure Software Engineering",
    description: "Treating security as a property of how software is built, not a layer added afterward.",
  },
  {
    title: "Security Automation",
    description: "Replacing repetitive manual security work with reliable, auditable automation.",
  },
  {
    title: "Developer Security Tools",
    description: "Tools built for the people who write and ship code, not just the people who audit it.",
  },
  {
    title: "Cloud Security",
    description: "Securing infrastructure that changes constantly, rather than auditing a fixed perimeter.",
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
              Samuel Omobusuyi studied Biochemistry at Olusegun Agagu University of Science and Technology in
              Okitipupa, Ondo State, Nigeria. Despite that background, he developed a strong interest in
              cybersecurity during his first year of university, and spent much of his own time exploring
              ethical hacking without any formal instruction.
            </p>
            <p>
              That curiosity expanded into software engineering. Understanding how systems are attacked meant
              first understanding how they are designed, built, and deployed, so he learned backend systems,
              frontend development, mobile development, cloud infrastructure, and application architecture. That
              gave him a much deeper, practical understanding of how modern systems actually work.
            </p>
            <p>
              Over time, he returned fully to cybersecurity with that engineering foundation behind him. Today
              his work combines AI, cybersecurity, software engineering, security automation, application
              security, and cloud security, with a particular focus on AI security, offensive security, and
              building products that solve real security problems rather than producing research for its own
              sake.
            </p>
            <p>
              He is the founder of SamSec, and the creator of NEARR and SamSec Ops.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Founder Story</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          How the path to SamSec came together.
        </h2>
        <div className="prose-samsec mt-10 max-w-none lg:max-w-[68ch]">
          <p>
            Samuel&apos;s path to SamSec did not start with a plan to build a cybersecurity company. It started
            with curiosity. In his first year at university, studying Biochemistry, he became interested in
            cybersecurity and began exploring ethical hacking on his own. That interest raised a more basic
            question: to understand how systems are attacked, he needed to understand how they are built. That
            question led him into software engineering.
          </p>
          <p>
            He learned software engineering properly, not as a shortcut back to security, but as its own
            discipline: backend systems, frontend development, mobile development, cloud infrastructure, and
            how all of it fits together into real application architecture. That foundation is still how he
            approaches security today.
          </p>
          <p>
            He put that foundation to work building products. His first serious one was Still, a digital
            wellness application designed to help people reduce compulsive habits and build a more intentional
            relationship with technology, through thoughtful design rather than punishment or guilt. Still never
            matured into a commercial product, but it was where he first had to think beyond writing code: about
            product design, user psychology, user experience, branding, and product strategy. It taught him that
            successful products are built around solving meaningful human problems, not simply shipping
            features.
          </p>
          <p>
            Those lessons carried into NEARR, a calmer relationship application built around intentional
            presence rather than constant messaging. NEARR pushed the same thinking further: not just how a
            system works, but why someone would want to use it, and what it should deliberately choose not to
            do.
          </p>
          <p>
            Building NEARR is also where he started to see an opportunity clearly: AI was going to change what
            was possible in security, and very little of the security tooling being built reflected that. That
            realization led to SamSec, and to SamSec Ops, its first product: a way of bringing the engineering
            discipline from his software background, the product thinking from Still and NEARR, and his original
            interest in security research into a single, deliberate effort.
          </p>
          <p>
            Every project along the way, including the ones with no obvious connection to security, contributed
            something that ultimately shaped the vision behind SamSec.
          </p>
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
        <Eyebrow>What His Work Combines</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          Areas of focus.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {combines.map((item) => (
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
