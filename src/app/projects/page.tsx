import { ArrowUpRight } from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/lib/projects";

export const metadata = buildMetadata({
  title: "Projects",
  description: "Software Samuel Omobusuyi has built to solve real security problems, including SamSec Ops.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])} />

      <PageHeader
        eyebrow="Projects"
        title="Software built to solve real security problems."
        description="A record of the products, tools, and research systems built along the way. Not theoretical exercises, but software that runs."
      />

      <Section border={false} className="pt-0">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project) => {
            const href = project.external ?? `/projects/${project.slug}`;
            return (
              <a
                key={project.slug}
                href={href}
                className="group flex flex-col justify-between rounded-2xl border border-ink-100 dark:border-ink-700 p-7 sm:p-8 transition-colors duration-200 hover:border-ink-300 dark:hover:border-ink-500"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <Badge>{project.status}</Badge>
                    <ArrowUpRight className="size-4 text-ink-300 dark:text-ink-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-medium text-ink-950 dark:text-white">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-accent-500 dark:text-accent-300">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{project.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  {project.stack.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-ink-50 dark:bg-ink-800 px-2.5 py-1 text-[11px] font-mono text-ink-500 dark:text-ink-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs font-mono text-ink-400 dark:text-ink-500">{project.year}</span>
                </div>
              </a>
            );
          })}
        </div>
      </Section>
    </>
  );
}
