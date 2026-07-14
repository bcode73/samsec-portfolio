import { notFound } from "next/navigation";
import { getAllSlugs, getContentBySlug, getRelatedContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ContentDetailPage } from "@/components/content/ContentDetailPage";

export function generateStaticParams() {
  return getAllSlugs("adr").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getAllSlugs("adr").includes(slug) ? getContentBySlug("adr", slug) : null;

  if (!item) return {};

  return buildMetadata({
    title: `ADR-${item.number}: ${item.title}`,
    description: item.description,
    path: `/adr/${item.slug}`,
    type: "article",
    publishedTime: item.date,
    modifiedTime: item.updated,
    tags: item.tags,
  });
}

export default async function AdrDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getAllSlugs("adr").includes(slug)) notFound();

  const item = getContentBySlug("adr", slug);
  const related = getRelatedContent("adr", item);

  return (
    <ContentDetailPage item={item} related={related} sectionLabel="Architecture Decisions" sectionPath="/adr" />
  );
}
