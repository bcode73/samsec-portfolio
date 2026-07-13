import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { openSourceProjects } from "@/lib/open-source";

export function OpenSourceSection() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div className="max-w-2xl">
          <Eyebrow>Open Source</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            Tools shared with the community.
          </h2>
        </div>
        <Button href="/open-source" variant="secondary" className="shrink-0">
          View all
          <ArrowRight className="size-4" />
        </Button>
      </div>

      <div className="mt-12 divide-y divide-ink-100 dark:divide-ink-700 border-t border-b border-ink-100 dark:border-ink-700">
        {openSourceProjects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6 transition-colors hover:bg-ink-50/60 dark:hover:bg-ink-900/40 -mx-4 px-4 rounded-lg"
          >
            <div>
              <p className="font-mono text-sm font-medium text-ink-950 dark:text-white">{project.name}</p>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400 max-w-xl">{project.description}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0 text-xs text-ink-400 dark:text-ink-500">
              <span>{project.language}</span>
              <span>{project.status}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
