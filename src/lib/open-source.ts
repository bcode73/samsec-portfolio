export interface OpenSourceProject {
  name: string;
  description: string;
  href: string;
  language: string;
  status: "Active" | "Maintained" | "Archived";
}

// No public repositories confirmed yet. Add real entries here once they exist.
export const openSourceProjects: OpenSourceProject[] = [];
