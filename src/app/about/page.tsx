import Image from "next/image";
import Link from "next/link";
import { buildMetadata, breadcrumbSchema, profilePageSchema } from "@/lib/seo";
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
      <JsonLd data={profilePageSchema({ path: "/about" })} />

      <PageHeader
        eyebrow="About"
        title="Samuel Omobusuyi"
        description="AI Security Engineer, Security Researcher, and Software Engineer, currently building SamSec."
      />

      <Section border={false} className="pt-0">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute inset-x-6 top-8 bottom-8 rounded-full bg-accent-100 dark:bg-accent-500/10 blur-3xl"
            />
            <div className="relative aspect-[900/1201] w-full">
              <Image
                src={siteConfig.person.image}
                alt={`${siteConfig.person.name}, founder of SamSec`}
                fill
                sizes="400px"
                className="object-contain"
              />
            </div>
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
              his work sits across AI, cybersecurity, and software engineering, with a particular focus on AI
              security and offensive security. He&apos;d rather ship a product that solves a real security
              problem than publish research for its own sake.
            </p>
            <p>
              He is the founder of <Link href="/samsec">SamSec</Link>, and the creator of{" "}
              <Link href="/projects/still">STILL</Link> and <Link href="/projects/nearr">NEARR</Link>, both
              live on the App Store, and of <Link href="/samsec-ops">SamSec Ops</Link> and its autonomous
              execution system, <Link href="/samsec-ops#agent">SamSec Agent</Link>.
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
            He put that foundation to work building products. His first serious one was{" "}
            <Link href="/projects/still">STILL</Link>, an app built to help people control urges and addictive
            habits through thoughtful design, not punishment or guilt. STILL shipped to the App Store and found
            real users, and it was where he first had to think beyond writing code: about product design, user
            psychology, user experience, branding, and product strategy. It taught him that products succeed by
            solving a problem people actually have, not by shipping more features.
          </p>
          <p>
            Those lessons carried into <Link href="/projects/nearr">NEARR</Link>, a calmer relationship
            application built around intentional presence rather than constant messaging, also live on the App
            Store with its own users. NEARR pushed the same thinking further: not just how a system works, but
            why someone would want to use it, and what it should deliberately choose not to do.
          </p>
          <p>
            Building NEARR is also where he started to see an opportunity clearly: AI was going to change what
            was possible in security, and very little of the security tooling being built reflected that. That
            realization led to <Link href="/samsec">SamSec</Link>, and to{" "}
            <Link href="/samsec-ops">SamSec Ops</Link>, its first product: a way of bringing the engineering
            discipline from his software background, the product thinking from STILL and NEARR, and his original
            interest in security research into a single, deliberate effort. The same reasoning shaped{" "}
            <Link href="/samsec-ops#agent">SamSec Agent</Link>, the part of SamSec Ops that plans and executes
            infrastructure work under explicit human authorization, rather than around it.
          </p>
          <p>
            Every project along the way, even the ones with no obvious connection to security, ended up
            shaping how SamSec got built.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Mission &amp; Vision"
          title="Making advanced security capability more accessible."
          description="Samuel's personal mission is inseparable from SamSec's: build security capability that's automated, AI-assisted, and rigorous, and make it available to teams that can't currently afford it."
        />
      </Section>

      <Section>
        <Eyebrow>Focus Areas</Eyebrow>
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
        <p className="mt-10 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          The published output of these interests is on the{" "}
          <Link href="/research" className="text-accent-500 dark:text-accent-300 hover:underline">
            Research
          </Link>{" "}
          page.
        </p>
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
        <p className="mt-10 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          These same principles, applied specifically to SamSec Ops, are documented as{" "}
          <Link href="/adr" className="text-accent-500 dark:text-accent-300 hover:underline">
            Architecture Decisions
          </Link>{" "}
          and in the{" "}
          <Link href="/trust" className="text-accent-500 dark:text-accent-300 hover:underline">
            Trust Center
          </Link>
          .
        </p>
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
