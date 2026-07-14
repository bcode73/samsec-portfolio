import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProjectIcon } from "@/components/ProjectIcon";
import type { Project } from "@/lib/projects";

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>Featured Projects</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            Software built to solve real problems.
          </h2>
        </div>
        <Button href="/projects" variant="secondary" className="shrink-0">
          All projects
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project) => {
          const href = project.external ?? `/projects/${project.slug}`;
          return (
            <a
              key={project.slug}
              href={href}
              className="group flex flex-col justify-between rounded-2xl border border-ink-100 dark:border-ink-700 p-7 sm:p-8 transition-colors duration-200 hover:border-ink-300 dark:hover:border-ink-500"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <ProjectIcon project={project} className="size-12" />
                  <ArrowUpRight className="size-4 shrink-0 text-ink-300 dark:text-ink-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <Badge className="border-accent-300 text-accent-500 dark:border-accent-500/40 dark:text-accent-300">
                    {project.category}
                  </Badge>
                  <Badge>{project.status}</Badge>
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium text-ink-950 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-accent-500 dark:text-accent-300">{project.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{project.description}</p>
              </div>
              {project.stack.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-ink-50 dark:bg-ink-800 px-2.5 py-1 text-[11px] font-mono text-ink-500 dark:text-ink-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </a>
          );
        })}
      </div>
    </Section>
  );
}
