import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";
import { TableOfContents } from "@/components/content/TableOfContents";
import { ContentCard } from "@/components/content/ContentCard";
import { MDXContent } from "@/components/mdx/MDXContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { getTableOfContents, type ContentItem, type ContentMeta } from "@/lib/content";
import { formatDate } from "@/lib/date";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

export function ContentDetailPage({
  item,
  related,
  sectionLabel,
  sectionPath,
}: {
  item: ContentItem;
  related: ContentMeta[];
  sectionLabel: string;
  sectionPath: "/research" | "/articles";
}) {
  const toc = getTableOfContents(item.content);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: item.title,
          description: item.description,
          slug: item.slug,
          section: item.type,
          datePublished: item.date,
          dateModified: item.updated,
          tags: item.tags,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: sectionLabel, path: sectionPath },
          { name: item.title, path: `${sectionPath}/${item.slug}` },
        ])}
      />

      <Container size="narrow" className="pt-14 pb-6 sm:pt-20">
        <Link
          href={sectionPath}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 hover:text-ink-950 dark:text-ink-400 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          {sectionLabel}
        </Link>

        <div className="mt-8 animate-fade-up">
          <Eyebrow>{item.category}</Eyebrow>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
            {item.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-500 dark:text-ink-300 text-balance">
            {item.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-ink-400 dark:text-ink-500">
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{item.readingTime}</span>
            {item.tags.length > 0 ? (
              <>
                <span aria-hidden="true">·</span>
                <span>{item.tags.join(", ")}</span>
              </>
            ) : null}
          </div>
        </div>
      </Container>

      <Container className="pb-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_220px]">
          <article className="prose-samsec max-w-none lg:max-w-[68ch] border-t border-ink-100 dark:border-ink-700 pt-10">
            <MDXContent source={item.content} />
          </article>

          <aside className="hidden lg:block">
            <TableOfContents toc={toc} />
          </aside>
        </div>
      </Container>

      {related.length > 0 ? (
        <div className="border-t border-ink-100 dark:border-ink-700">
          <Container className="py-20">
            <Eyebrow>Related</Eyebrow>
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink-950 dark:text-white">
              Continue reading.
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {related.map((entry) => (
                <ContentCard key={entry.slug} item={entry} />
              ))}
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
}
