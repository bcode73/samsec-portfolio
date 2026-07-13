import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContentBrowser } from "@/components/content/ContentBrowser";
import { getAllContent, getAllCategories } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Articles",
  description: "Practical writing on security engineering, tooling, and building SamSec, from Samuel Omobusuyi.",
  path: "/articles",
});

export default function ArticlesPage() {
  const items = getAllContent("articles");
  const categories = getAllCategories("articles");

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Articles", path: "/articles" }])} />

      <PageHeader
        eyebrow="Articles"
        title="Notes from the field."
        description="Shorter, practical writing on security engineering, tooling, and the day-to-day of building SamSec."
      />

      <Section border={false} className="pt-0">
        <ContentBrowser items={items} categories={categories} />
      </Section>
    </>
  );
}
