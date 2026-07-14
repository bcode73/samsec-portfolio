export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  status: "Flagship" | "Live" | "In Development" | "Research";
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
    category: "AI Security",
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
      "Live on the App Store, with real users: a relationship application built around intentional presence instead of constant messaging.",
    category: "Relationships App",
    status: "Live",
    year: "Before SamSec",
    role: "Founder & Product Designer",
    stack: ["Product Design", "Mobile"],
    external: "/projects/nearr",
    links: [
      { label: "View on the App Store", href: "https://apps.apple.com/ng/app/nearr-couples-relationship/id6767019031" },
    ],
  },
  {
    slug: "still",
    name: "STILL",
    tagline: "Urge control, for addiction and compulsive habits.",
    description:
      "Live on the App Store, with real users: an app built to help people control urges and addictive habits through thoughtful design, not punishment or guilt.",
    category: "Digital Wellness App",
    status: "Live",
    year: "Before NEARR",
    role: "Founder & Engineer",
    stack: ["Product Design", "Mobile"],
    external: "/projects/still",
    links: [
      { label: "View on the App Store", href: "https://apps.apple.com/ng/app/still-urge-control/id6763139081" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
