import { notFound } from "next/navigation";
import { getAllSlugs, getContentBySlug, getRelatedContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ContentDetailPage } from "@/components/content/ContentDetailPage";

export function generateStaticParams() {
  return getAllSlugs("notes").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getAllSlugs("notes").includes(slug) ? getContentBySlug("notes", slug) : null;

  if (!item) return {};

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: `/notes/${item.slug}`,
    type: "article",
    publishedTime: item.date,
    modifiedTime: item.updated,
    tags: item.tags,
  });
}

export default async function NoteDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getAllSlugs("notes").includes(slug)) notFound();

  const item = getContentBySlug("notes", slug);
  const related = getRelatedContent("notes", item);

  return <ContentDetailPage item={item} related={related} sectionLabel="Engineering Notes" sectionPath="/notes" />;
}
