import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContentBrowser } from "@/components/content/ContentBrowser";
import { getAllContent, getAllCategories } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Research",
  description:
    "Original research on AI security, offensive security, and security automation from Samuel Omobusuyi.",
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
        title="Original research on AI-driven security."
        description="Deep, technical work on the intersection of artificial intelligence and cybersecurity — published for practitioners, not headlines."
      />

      <Section border={false} className="pt-0">
        <ContentBrowser items={items} categories={categories} />
      </Section>
    </>
  );
}
