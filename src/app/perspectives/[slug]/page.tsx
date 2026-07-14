import { notFound } from "next/navigation";
import { getAllSlugs, getContentBySlug, getRelatedContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ContentDetailPage } from "@/components/content/ContentDetailPage";

export function generateStaticParams() {
  return getAllSlugs("perspectives").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getAllSlugs("perspectives").includes(slug) ? getContentBySlug("perspectives", slug) : null;

  if (!item) return {};

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: `/perspectives/${item.slug}`,
    type: "article",
    publishedTime: item.date,
    modifiedTime: item.updated,
    tags: item.tags,
  });
}

export default async function PerspectiveDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getAllSlugs("perspectives").includes(slug)) notFound();

  const item = getContentBySlug("perspectives", slug);
  const related = getRelatedContent("perspectives", item);

  return <ContentDetailPage item={item} related={related} sectionLabel="Perspectives" sectionPath="/perspectives" />;
}
