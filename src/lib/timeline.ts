// NOTE: Years below are placeholders pending confirmation — see CONTENT_TODO.md.
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
      "Began a career building production software, developing the engineering discipline that later shaped how security tooling gets built — not as scripts, but as systems.",
  },
  {
    year: "2021",
    title: "Turning toward security",
    description:
      "Shifted focus toward offensive security and vulnerability research, drawn to the discipline of finding what others miss and the engineering rigor it demands.",
  },
  {
    year: "2023",
    title: "Founding SamSec",
    description:
      "Founded SamSec to pursue a specific thesis: that AI would fundamentally change how security operations are performed, and that the tooling for it needed to be built from first principles.",
  },
  {
    year: "2024",
    title: "SamSec Ops enters development",
    description:
      "Began building SamSec Ops — an AI-powered operating platform for security workflows, starting with reconnaissance and AI-assisted analysis.",
  },
  {
    year: "2026",
    title: "Present",
    description:
      "Continuing to build SamSec Ops toward its long-term vision, publish original security research, and grow SamSec's footprint in AI-driven security infrastructure.",
  },
];
