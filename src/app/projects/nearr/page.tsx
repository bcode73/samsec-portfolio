import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionNav } from "@/components/product/SectionNav";

export const metadata = buildMetadata({
  title: "NEARR",
  description:
    "NEARR is a relationship application built around intentional presence instead of constant messaging, created before SamSec.",
  path: "/projects/nearr",
});

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "philosophy", label: "Design Philosophy" },
  { id: "lessons", label: "Lessons" },
];

const philosophy = [
  {
    title: "Minimal Interface",
    description:
      "Fewer screens, fewer controls, fewer decisions. A minimal interface removes the friction that turns a quick check-in into a distraction.",
  },
  {
    title: "Private Experience",
    description:
      "A relationship is not a broadcast. The experience was designed around two people, not an audience.",
  },
  {
    title: "Emotion-First Interaction",
    description:
      "Interactions were designed around how something feels to send and receive, not just what data it carries.",
  },
  {
    title: "Intentional Communication",
    description:
      "No read receipts, no typing indicators, no pressure to reply immediately. Communication that has to be chosen, not communication that happens by default.",
  },
];

export default function NearrPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "NEARR", path: "/projects/nearr" },
        ])}
      />

      <PageHeader
        eyebrow="NEARR · Product Case Study"
        title="A calmer relationship app."
        description="A relationship application built around intentional presence instead of constant messaging, created before SamSec, on the path that led to it."
      />

      <SectionNav items={navItems} />

      <Section id="overview" border={false}>
        <div className="prose-samsec max-w-none lg:max-w-[68ch]">
          <p>
            NEARR is a relationship application built for people who wanted less noise in how they stayed
            connected, not more. It was created before SamSec, and its lessons carried directly into how SamSec
            and SamSec Ops were later built.
          </p>
        </div>
      </Section>

      <Section id="problem">
        <SectionHeading
          eyebrow="The Problem"
          title="Constant messaging isn't the same as connection."
          description="Long-distance and modern relationships often rely heavily on continuous messaging: a steady stream of texts, updates, and check-ins meant to close the distance between two people. In practice, that stream tends to produce noise rather than meaningful connection. Volume becomes a substitute for presence, and the pressure to keep replying can crowd out the moments that actually matter."
        />
      </Section>

      <Section id="philosophy">
        <SectionHeading
          eyebrow="Design Philosophy"
          title="Presence over volume."
          description="The idea behind NEARR was a calmer relationship application focused on intentional presence instead of endless conversation. Every design decision was measured against a simple question: does this encourage presence, or does it just add more noise?"
          align="left"
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {philosophy.map((item) => (
            <Card key={item.title}>
              <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="lessons" border={false}>
        <Eyebrow>Lessons</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance max-w-2xl">
          What NEARR taught, beyond engineering.
        </h2>
        <div className="prose-samsec mt-10 max-w-none lg:max-w-[68ch]">
          <p>
            Building NEARR was a different kind of exercise than the engineering work that came before it.
            Getting the system to work correctly was the easier half of the problem. The harder half was
            product design and product strategy: deciding what the application should deliberately not do,
            and defending that restraint against every instinct to add one more feature.
          </p>
          <p>
            A design built around absence, no read receipts, no typing indicators, no pressure to respond
            immediately, has to be justified on its own terms. Removing a feature that users might expect
            requires being able to articulate exactly why its absence serves the product&apos;s actual goal, not
            just a preference for minimalism.
          </p>
          <p>
            Those lessons, thinking about why someone would use something and what it should choose not to do,
            carried directly into how SamSec and SamSec Ops are being built: with the same discipline applied to
            security tooling that NEARR applied to a relationship app.
          </p>
        </div>
        <div className="mt-10">
          <Button href="/contact" variant="secondary">
            Ask about this project
          </Button>
        </div>
      </Section>
    </>
  );
}
