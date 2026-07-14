import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { buildMetadata, breadcrumbSchema, collectionPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { openSourceProjects } from "@/lib/open-source";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Open Source",
  description: "Open source security tooling published by Samuel Omobusuyi and SamSec.",
  path: "/open-source",
});

export default function OpenSourcePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Open Source", path: "/open-source" }])} />
      <JsonLd
        data={collectionPageSchema({
          name: "Open Source",
          description: "Open source security tooling published by Samuel Omobusuyi and SamSec.",
          path: "/open-source",
        })}
      />

      <PageHeader
        eyebrow="Open Source"
        title="Tools shared with the community."
        description="Selected tooling built along the way, released publicly where it's useful beyond SamSec's own workflows."
      >
        <div className="mt-2">
          <Button href={siteConfig.social.github} variant="secondary" external>
            <Github className="size-4" />
            View on GitHub
          </Button>
        </div>
      </PageHeader>

      <Section border={false} className="pt-0">
        {openSourceProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {openSourceProjects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-ink-100 dark:border-ink-700 p-7 transition-colors duration-200 hover:border-ink-300 dark:hover:border-ink-500"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-sm font-medium text-ink-950 dark:text-white">{project.name}</p>
                    <ArrowUpRight className="size-4 text-ink-300 dark:text-ink-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{project.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Badge>{project.language}</Badge>
                  <Badge>{project.status}</Badge>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Nothing public yet"
            description="Open source tooling will be listed here as it's published."
            ctaLabel="Get in touch"
            ctaHref="/contact"
          />
        )}
        <p className="mt-10 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          Most tooling here comes out of the same work behind{" "}
          <Link href="/research" className="text-accent-500 dark:text-accent-300 hover:underline">
            Research
          </Link>{" "}
          and the{" "}
          <Link href="/projects" className="text-accent-500 dark:text-accent-300 hover:underline">
            products
          </Link>{" "}
          SamSec builds.
        </p>
      </Section>
    </>
  );
}
