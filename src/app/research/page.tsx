import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContentBrowser } from "@/components/content/ContentBrowser";
import { getAllContent, getAllCategories } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Research",
  description:
    "Technical research on AI security, offensive security, and security automation, from Samuel Omobusuyi.",
  path: "/research",
});

export default function ResearchPage() {
  const items = getAllContent("research");
  const categories = getAllCategories("research");

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Research", path: "/research" }])} />

      <PageHeader
        eyebrow="Research"
        title="Research on AI and security."
        description="Technical research on AI and security, written for practitioners."
      />

      <Section border={false} className="pt-0">
        <ContentBrowser items={items} categories={categories} />
      </Section>
    </>
  );
}
