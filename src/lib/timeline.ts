// Phases are left generic rather than dated. Exact years are not being used for
// this timeline; see the founder story on the About page for the fuller narrative.
export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    year: "University",
    title: "Discovering cybersecurity",
    description:
      "During his first year studying Biochemistry at Olusegun Agagu University of Science and Technology, Okitipupa, Samuel developed an interest in cybersecurity and began exploring ethical hacking largely on his own.",
  },
  {
    year: "Software Engineering",
    title: "Learning how systems are actually built",
    description:
      "That interest expanded into software engineering, driven by wanting to understand how applications are designed, built, deployed, and secured from the ground up. He learned backend systems, frontend development, mobile development, cloud infrastructure, and application architecture.",
  },
  {
    year: "Early Products",
    title: "Building STILL, then NEARR",
    description:
      "Applied that engineering foundation to real products. STILL, an app for urge and addiction control, was the first; NEARR, a calmer relationship app built around intentional presence, came next. Both shipped to the App Store and found real users, and both sharpened his product design and product strategy skills.",
  },
  {
    year: "Return to Security",
    title: "Combining engineering with security",
    description:
      "With a stronger engineering and product foundation, Samuel returned fully to cybersecurity and began exploring how AI could be applied to security work.",
  },
  {
    year: "Founding SamSec",
    title: "Founding SamSec",
    description:
      "Founded SamSec to build AI-powered security systems, combining a security research background with software engineering and product experience.",
  },
  {
    year: "SamSec Ops",
    title: "Building SamSec Ops",
    description:
      "Began building SamSec Ops, an AI-powered SSH, DevOps, and infrastructure operations platform for iPhone, as the first step toward a broader AI-powered cybersecurity platform.",
  },
  {
    year: "Present",
    title: "AI security and research",
    description:
      "Continuing to work on AI security, security research, autonomous security systems, and security infrastructure, building toward one of Africa's leading AI-powered cybersecurity companies.",
  },
];
