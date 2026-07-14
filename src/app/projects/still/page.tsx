import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { SectionNav } from "@/components/product/SectionNav";

export const metadata = buildMetadata({
  title: "Still",
  description:
    "Still is an app built to help people control urges and addictive habits through thoughtful design, not punishment or guilt.",
  path: "/projects/still",
});

const navItems = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "philosophy", label: "Design Philosophy" },
  { id: "lessons", label: "Lessons" },
];

const philosophy = [
  {
    title: "Thoughtful, Not Punitive",
    description:
      "Still avoids guilt, shame, and punishment as tools for behavior change. Helping someone control an urge works better as support, not as a scolding.",
  },
  {
    title: "Built For The Moment",
    description:
      "Urges and compulsive habits show up in specific moments. The experience was designed around that moment, not just a summary after it's already passed.",
  },
  {
    title: "Progress Over Perfection",
    description:
      "A slip is information, not failure. The design treats setbacks as something to learn from, not something to punish.",
  },
  {
    title: "Private By Default",
    description:
      "Urges and addictive habits are personal. The experience was built to feel private, never like something being watched or judged.",
  },
];

export default function StillPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "Still", path: "/projects/still" },
        ])}
      />

      <PageHeader
        eyebrow="Still · Product Case Study"
        title="Urge control, without guilt."
        description="An app built to help people control urges and addictive habits through thoughtful design, not punishment or guilt. Samuel's first shipped product, and the one that first pushed him beyond writing code."
      />

      <SectionNav items={navItems} />

      <Section id="overview" border={false}>
        <div className="prose-samsec max-w-none lg:max-w-[68ch]">
          <p>
            Still is an app built to help people control urges and break addictive, compulsive habits. It shipped
            to the App Store and has real users. It was Samuel&apos;s first serious product, built before NEARR
            and years before SamSec, and it&apos;s where he first had to think about more than code: product
            design, user psychology, and what actually helps someone change a habit.
          </p>
        </div>
      </Section>

      <Section id="problem">
        <SectionHeading
          eyebrow="The Problem"
          title="Willpower alone doesn't fix compulsive habits."
          description="Most tools built to help people control urges and addictive habits lean on guilt: streak-shaming, blunt restriction, or a lecture after every slip. That approach tends to backfire. People hide their slips instead of addressing them, and they abandon the tool exactly when they need it most. Still was built on a different premise: someone trying to control an urge needs support in that moment, not punishment after the fact."
        />
      </Section>

      <Section id="philosophy">
        <SectionHeading
          eyebrow="Design Philosophy"
          title="Support over shame."
          description="Still was built around a simple standard: help someone control an urge or an addictive habit without making them feel worse about themselves for having it. Every design decision was measured against that standard."
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
          What Still taught, beyond engineering.
        </h2>
        <div className="prose-samsec mt-10 max-w-none lg:max-w-[68ch]">
          <p>
            Still was the first product where writing correct code wasn&apos;t the hard part. Getting the system
            to work was straightforward next to the harder problem underneath it: understanding why someone
            struggles to control an urge in the first place, and designing something that actually helps rather
            than something that just tracks and scolds.
          </p>
          <p>
            That meant learning product design, user psychology, user experience, branding, and product strategy,
            none of which came from a software engineering background. It taught a lesson that shaped everything
            after it: successful products are built around solving a real human problem, not simply shipping
            features.
          </p>
          <p>
            Those lessons, thinking about the person on the other side of the screen and designing around their
            actual struggle, carried directly into NEARR, and from there into how SamSec and SamSec Ops are
            being built.
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
