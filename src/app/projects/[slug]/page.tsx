import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.filter((project) => !project.external).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.external) return {};

  return buildMetadata({
    title: project.name,
    description: project.description,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.external) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ])}
      />

      <PageHeader eyebrow={project.tagline} title={project.name} description={project.description} />

      <Section border={false} className="pt-0">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-3xl">
          <div>
            <Eyebrow>Status</Eyebrow>
            <Badge>{project.status}</Badge>
          </div>
          <div>
            <Eyebrow>Timeline</Eyebrow>
            <p className="text-sm text-ink-700 dark:text-ink-200">{project.year}</p>
          </div>
          <div>
            <Eyebrow>Role</Eyebrow>
            <p className="text-sm text-ink-700 dark:text-ink-200">{project.role}</p>
          </div>
        </div>

        {project.stack.length > 0 ? (
          <div className="mt-10">
            <Eyebrow>Stack</Eyebrow>
            <div className="flex flex-wrap gap-2.5">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-12">
          <Button href="/contact" variant="secondary">
            Ask about this project
          </Button>
        </div>
      </Section>
    </>
  );
}
