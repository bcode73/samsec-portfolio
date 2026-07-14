import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata, breadcrumbSchema, collectionPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { getAllContent } from "@/lib/content";
import { formatDate } from "@/lib/date";

export const metadata = buildMetadata({
  title: "Architecture Decisions",
  description:
    "Why SamSec Ops is built the way it is: the context, alternatives, and trade-offs behind decisions that shape the product.",
  path: "/adr",
});

export default function AdrPage() {
  const decisions = getAllContent("adr").sort((a, b) => Number(a.number) - Number(b.number));

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Architecture Decisions", path: "/adr" }])} />
      <JsonLd
        data={collectionPageSchema({
          name: "Architecture Decisions",
          description:
            "Why SamSec Ops is built the way it is: the context, alternatives, and trade-offs behind decisions that shape the product.",
          path: "/adr",
        })}
      />

      <PageHeader
        eyebrow="Architecture Decision Records"
        title="Why the product is built the way it is."
        description="A record of significant, durable decisions behind SamSec Ops: the context that prompted them, the alternatives considered, and the trade-offs accepted. Written to explain reasoning, not to justify it after the fact."
      />

      <Section border={false} className="pt-0">
        <div className="divide-y divide-ink-100 dark:divide-ink-700 border-t border-b border-ink-100 dark:border-ink-700">
          {decisions.map((item) => (
            <Link
              key={item.slug}
              href={`/adr/${item.slug}`}
              className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="flex items-start gap-4 sm:items-center">
                <span className="shrink-0 font-mono text-xs text-ink-400 dark:text-ink-500">
                  ADR-{item.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink-950 dark:text-white text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3 pl-9 sm:pl-0">
                {item.status ? <Badge>{item.status}</Badge> : null}
                <time dateTime={item.date} className="text-xs text-ink-400 dark:text-ink-500">
                  {formatDate(item.date)}
                </time>
                <ArrowUpRight className="size-4 text-ink-300 dark:text-ink-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
