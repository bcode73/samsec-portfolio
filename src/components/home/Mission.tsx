import { Section, SectionHeading } from "@/components/ui/Section";

export function Mission() {
  return (
    <Section>
      <SectionHeading
        title="Software built for how security work actually happens."
        description="SamSec builds software that solves real security problems, not research for its own sake: automating the security operations work that still gets done by hand, speeding up vulnerability discovery with AI-assisted tooling, and helping teams keep up as AI changes what attackers are capable of, including the ones who can't currently afford advanced security capability."
      />
    </Section>
  );
}
