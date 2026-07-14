import { buildMetadata, breadcrumbSchema, collectionPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContentBrowser } from "@/components/content/ContentBrowser";
import { getAllContent, getAllCategories } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Engineering Notes",
  description: "Practical writing on security engineering, tooling, and building SamSec, from Samuel Omobusuyi.",
  path: "/notes",
});

export default function NotesPage() {
  const items = getAllContent("notes");
  const categories = getAllCategories("notes");

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Engineering Notes", path: "/notes" }])} />
      <JsonLd
        data={collectionPageSchema({
          name: "Engineering Notes",
          description: "Practical writing on security engineering, tooling, and building SamSec, from Samuel Omobusuyi.",
          path: "/notes",
        })}
      />

      <PageHeader
        eyebrow="Engineering Notes"
        title="Shorter pieces on the work."
        description="Lessons documented while building: design decisions, architecture changes, technical problems worth writing down. Practical, not polished for an audience."
      />

      <Section border={false} className="pt-0">
        <ContentBrowser items={items} categories={categories} />
      </Section>
    </>
  );
}
