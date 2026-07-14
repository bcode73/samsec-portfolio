import { Section, SectionHeading } from "@/components/ui/Section";

const pillars = [
  {
    title: "Automate",
    description: "Automate the security operations work that still gets done by hand today.",
  },
  {
    title: "Accelerate",
    description: "Speed up vulnerability discovery with AI-assisted research and tooling.",
  },
  {
    title: "Strengthen",
    description: "Help organizations keep up as AI changes what attackers are capable of.",
  },
  {
    title: "Democratize",
    description: "Make advanced security capability available to teams that can't currently afford it.",
  },
];

export function Mission() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Mission"
        title="Software built for how security work actually happens."
        description="SamSec builds software that solves real security problems, not research for its own sake."
      />
      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <div key={pillar.title}>
            <p className="font-display text-xl font-medium text-ink-950 dark:text-white">{pillar.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{pillar.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
