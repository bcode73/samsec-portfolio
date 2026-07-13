// NOTE: Years below are placeholders pending confirmation. See CONTENT_TODO.md.
export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "2019",
    title: "Foundations in software engineering",
    description:
      "Began a career building production software. That work built the engineering discipline that later shaped how security tooling gets built, as systems rather than scripts.",
  },
  {
    year: "2021",
    title: "Turning toward security",
    description:
      "Shifted focus to offensive security and vulnerability research, drawn to the discipline of finding what others miss and the rigor it demands.",
  },
  {
    year: "2023",
    title: "Founding SamSec",
    description:
      "Founded SamSec on a specific thesis: AI would change how security operations are performed, and the tooling for that shift needed to be built from first principles.",
  },
  {
    year: "2024",
    title: "SamSec Ops enters development",
    description:
      "Began building SamSec Ops, an AI-powered operating platform for security workflows, starting with reconnaissance and AI-assisted analysis.",
  },
  {
    year: "2026",
    title: "Present",
    description:
      "Building SamSec Ops toward its long-term vision, publishing original security research, and growing SamSec's footprint in AI-driven security infrastructure.",
  },
];
