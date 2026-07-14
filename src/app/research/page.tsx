import Link from "next/link";
import { buildMetadata, breadcrumbSchema, collectionPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ContentBrowser } from "@/components/content/ContentBrowser";
import { getAllContent, getAllCategories, getRelatedContent } from "@/lib/content";
import { formatDate } from "@/lib/date";

export const metadata = buildMetadata({
  title: "Research",
  description:
    "Technical research on AI security, offensive security, and security automation, from Samuel Omobusuyi.",
  path: "/research",
});

const researchCategories = [
  "AI Security",
  "Application Security",
  "Cloud Security",
  "API Security",
  "Mobile Security",
  "Software Engineering",
  "Threat Intelligence",
  "Security Automation",
  "Secure AI Systems",
  "Developer Security",
  "Product Engineering",
  "Architecture",
  "Digital Forensics",
  "OSINT",
  "Future Research",
];

const futureResearch = [
  "AI Agent Security",
  "Model Context Protocol Security",
  "LLM Security",
  "Secure AI Applications",
  "Offensive AI",
  "Defensive AI",
  "Cloud Native Security",
  "Mobile Application Security",
  "Secure Software Design",
  "Developer Tooling",
  "Automation",
  "Threat Intelligence",
  "Autonomous Security Systems",
];

export default function ResearchPage() {
  const allItems = getAllContent("research");
  const categories = getAllCategories("research");
  const featured = allItems.find((item) => item.featured);
  const rest = featured ? allItems.filter((item) => item.slug !== featured.slug) : allItems;
  const relatedToFeatured = featured ? getRelatedContent("research", featured, 3) : [];

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Research", path: "/research" }])} />
      <JsonLd
        data={collectionPageSchema({
          name: "Research",
          description:
            "Technical research on AI security, offensive security, and security automation, from Samuel Omobusuyi.",
          path: "/research",
        })}
      />

      <PageHeader
        eyebrow="Research"
        title="Research on AI and security."
        description="Original technical research: deep analysis, engineering write-ups, security investigations, and threat analysis, written for practitioners rather than headlines."
      />

      {featured ? (
        <Section border={false} className="pt-0">
          <Eyebrow>Featured Research</Eyebrow>
          <div className="mt-4 grid grid-cols-1 gap-10 rounded-2xl border border-ink-100 dark:border-ink-700 p-8 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Badge className="border-accent-300 text-accent-500 dark:border-accent-500/40 dark:text-accent-300">
                {featured.category}
              </Badge>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
                <Link href={`/research/${featured.slug}`} className="hover:underline">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-3 text-base leading-relaxed text-ink-500 dark:text-ink-400">{featured.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-ink-400 dark:text-ink-500">
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                {featured.updated && featured.updated !== featured.date ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Updated {formatDate(featured.updated)}</span>
                  </>
                ) : null}
                <span aria-hidden="true">·</span>
                <span>{featured.readingTime}</span>
              </div>
              {featured.keyConcepts && featured.keyConcepts.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.keyConcepts.map((concept) => (
                    <Badge key={concept}>{concept}</Badge>
                  ))}
                </div>
              ) : null}
              <div className="mt-7">
                <Button href={`/research/${featured.slug}`} variant="secondary">
                  Read the research
                </Button>
              </div>
            </div>

            {relatedToFeatured.length > 0 ? (
              <div className="border-t border-ink-100 dark:border-ink-700 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                <p className="font-mono text-xs uppercase tracking-wide text-ink-400 dark:text-ink-500 mb-4">
                  Related Research
                </p>
                <ul className="space-y-4">
                  {relatedToFeatured.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/research/${item.slug}`}
                        className="text-sm font-medium text-ink-700 dark:text-ink-200 hover:text-ink-950 dark:hover:text-white transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Section>
      ) : null}

      <Section border={false} className="pt-0">
        <ContentBrowser items={rest} categories={categories} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Research Categories"
          title="What Research aims to cover."
          description="The disciplines this section is meant to build depth in over time. Not every category has a published piece yet; this is the coverage the section is working toward, not a claim that it's all there already."
          align="left"
        />
        <div className="mt-10 flex flex-wrap gap-2.5">
          {researchCategories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
      </Section>

      <Section border={false}>
        <SectionHeading
          eyebrow="Future Research"
          title="Where Research is headed next."
          description="Directions being considered for future research. This is informational, not a publishing schedule: nothing here is a finished piece, and nothing here should be read as available today."
          align="left"
        />
        <div className="mt-10 flex flex-wrap gap-2.5">
          {futureResearch.map((topic) => (
            <Badge key={topic}>{topic}</Badge>
          ))}
        </div>
      </Section>
    </>
  );
}
