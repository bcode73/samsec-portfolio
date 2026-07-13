import { notFound } from "next/navigation";
import { getAllSlugs, getContentBySlug, getRelatedContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ContentDetailPage } from "@/components/content/ContentDetailPage";

export function generateStaticParams() {
  return getAllSlugs("research").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getAllSlugs("research").includes(slug) ? getContentBySlug("research", slug) : null;

  if (!item) return {};

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: `/research/${item.slug}`,
    type: "article",
    publishedTime: item.date,
    modifiedTime: item.updated,
    tags: item.tags,
  });
}

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getAllSlugs("research").includes(slug)) notFound();

  const item = getContentBySlug("research", slug);
  const related = getRelatedContent("research", item);

  return <ContentDetailPage item={item} related={related} sectionLabel="Research" sectionPath="/research" />;
}
