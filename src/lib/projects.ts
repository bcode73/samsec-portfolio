export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "Flagship" | "In Development" | "Case Study" | "Research";
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
    tagline: "An AI-assisted security workspace for iOS.",
    description:
      "SamSec's first product: an early-stage AI-assisted cybersecurity workspace for iOS, and the foundation for a much larger AI-powered security platform.",
    status: "Flagship",
    year: "2024 to present",
    role: "Founder & Lead Engineer",
    stack: ["iOS", "AI Assistant", "Security Research"],
    external: "/samsec-ops",
  },
  {
    slug: "nearr",
    name: "NEARR",
    tagline: "A calmer relationship app.",
    description:
      "A relationship application built around intentional presence instead of constant messaging: a calmer alternative to the noise most messaging apps create.",
    status: "Case Study",
    year: "Before SamSec",
    role: "Founder & Product Designer",
    stack: ["Product Design", "Mobile"],
    external: "/projects/nearr",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
