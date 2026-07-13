import { Section, SectionHeading } from "@/components/ui/Section";

const pillars = [
  {
    title: "Automate",
    description: "Automate security operations that today consume thousands of analyst hours.",
  },
  {
    title: "Accelerate",
    description: "Accelerate vulnerability discovery through AI-assisted research and tooling.",
  },
  {
    title: "Strengthen",
    description: "Improve cyber resilience for organizations navigating an AI-accelerated threat landscape.",
  },
  {
    title: "Democratize",
    description: "Make advanced security capability accessible beyond well-resourced security teams.",
  },
];

export function Mission() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Mission"
        title="Intelligent cybersecurity systems, built for how security work actually happens."
        description="SamSec builds software that solves real security problems, not theoretical research. Four commitments guide every product decision."
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
