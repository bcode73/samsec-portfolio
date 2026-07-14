import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContentBrowser } from "@/components/content/ContentBrowser";
import { getAllContent, getAllCategories } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Perspectives",
  description: "Reasoned opinion on AI in security, product strategy, and how security tooling gets built, from Samuel Omobusuyi.",
  path: "/perspectives",
});

export default function PerspectivesPage() {
  const items = getAllContent("perspectives");
  const categories = getAllCategories("perspectives");

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Perspectives", path: "/perspectives" }])} />

      <PageHeader
        eyebrow="Perspectives"
        title="Positions, argued in the open."
        description="Where AI in security is heading, why certain products get built the way they do, and what experience has changed his mind about. Every position here comes with the reasoning behind it, not just the conclusion."
      />

      <Section border={false} className="pt-0">
        <ContentBrowser items={items} categories={categories} />
      </Section>
    </>
  );
}
