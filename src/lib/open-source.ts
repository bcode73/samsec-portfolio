export interface OpenSourceProject {
  name: string;
  description: string;
  href: string;
  language: string;
  status: "Active" | "Maintained" | "Archived";
}

// TODO: replace with real repository links once finalized — see CONTENT_TODO.md.
export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "recon-toolkit",
    description: "A modular reconnaissance and attack-surface enumeration toolkit built as a testbed for SamSec Ops' scanning engine.",
    href: "https://github.com/samsec-ng",
    language: "Go",
    status: "Active",
  },
  {
    name: "security-agent-sdk",
    description: "Early-stage SDK for building AI agents that operate security tools safely within defined guardrails.",
    href: "https://github.com/samsec-ng",
    language: "Python",
    status: "Active",
  },
  {
    name: "threat-intel-schemas",
    description: "Open schemas and data models for normalizing threat intelligence and vulnerability data across tools.",
    href: "https://github.com/samsec-ng",
    language: "TypeScript",
    status: "Maintained",
  },
];
