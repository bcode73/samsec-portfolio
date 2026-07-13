export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "Flagship" | "In Development" | "Documentation in Progress" | "Research";
  year: string;
  role: string;
  stack: string[];
  links?: { label: string; href: string }[];
  external?: string;
}

export const projects: Project[] = [
  {
    slug: "samsec-ops",
    name: "SamSec Ops",
    tagline: "The intelligence layer for security operations.",
    description:
      "An AI-powered cybersecurity operating platform designed to become the daily workspace for security analysts, penetration testers, researchers, and incident responders — one workspace, one intelligence layer, one security ecosystem.",
    status: "Flagship",
    year: "2024 — Present",
    role: "Founder & Lead Engineer",
    stack: ["AI Agents", "Security Automation", "Offensive Security Tooling", "Cloud Infrastructure"],
    external: "/samsec-ops",
  },
  {
    slug: "nearr",
    name: "NEARR",
    tagline: "Documentation in progress.",
    description:
      "A dedicated write-up for NEARR is being prepared. In the meantime, reach out directly for more information about this project.",
    status: "Documentation in Progress",
    year: "—",
    role: "Founder & Engineer",
    stack: [],
  },
  {
    slug: "attack-surface-intelligence",
    name: "Attack Surface Intelligence Toolkit",
    tagline: "Continuous, automated attack surface mapping.",
    description:
      "An early-stage research tool exploring how AI agents can continuously discover, classify, and prioritize an organization's external attack surface — a building block for SamSec Ops' reconnaissance module.",
    status: "In Development",
    year: "2025 — Present",
    role: "Founder & Researcher",
    stack: ["Reconnaissance", "OSINT", "AI Agents"],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
