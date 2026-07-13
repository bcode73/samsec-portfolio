import { notFound } from "next/navigation";
import { getAllSlugs, getContentBySlug, getRelatedContent } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { ContentDetailPage } from "@/components/content/ContentDetailPage";

export function generateStaticParams() {
  return getAllSlugs("articles").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getAllSlugs("articles").includes(slug) ? getContentBySlug("articles", slug) : null;

  if (!item) return {};

  return buildMetadata({
    title: item.title,
    description: item.description,
    path: `/articles/${item.slug}`,
    type: "article",
    publishedTime: item.date,
    modifiedTime: item.updated,
    tags: item.tags,
  });
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getAllSlugs("articles").includes(slug)) notFound();

  const item = getContentBySlug("articles", slug);
  const related = getRelatedContent("articles", item);

  return <ContentDetailPage item={item} related={related} sectionLabel="Articles" sectionPath="/articles" />;
}
