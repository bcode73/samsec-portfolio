import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { EmptyState } from "@/components/ui/EmptyState";
import { pressMentions } from "@/lib/press";
import { formatDate } from "@/lib/date";

export const metadata = buildMetadata({
  title: "Press",
  description: "Press coverage and media mentions of Samuel Omobusuyi and SamSec.",
  path: "/press",
});

export default function PressPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Press", path: "/press" }])} />

      <PageHeader
        eyebrow="Press"
        title="Press &amp; media coverage."
        description="Coverage of Samuel Omobusuyi and SamSec's work in AI security and cybersecurity."
      />

      <Section border={false} className="pt-0">
        {pressMentions.length > 0 ? (
          <div className="divide-y divide-ink-100 dark:divide-ink-700 border-t border-b border-ink-100 dark:border-ink-700">
            {pressMentions.map((mention) => (
              <a
                key={mention.title}
                href={mention.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-ink-950 dark:text-white">{mention.title}</p>
                  <p className="text-sm text-ink-500 dark:text-ink-400">{mention.outlet}</p>
                </div>
                <time className="text-sm text-ink-400 dark:text-ink-500">{formatDate(mention.date)}</time>
              </a>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No press coverage yet"
            description="Media mentions and coverage will be listed here as they're published. For press inquiries, get in touch directly."
            ctaLabel="Press inquiries"
            ctaHref="/contact"
          />
        )}
      </Section>
    </>
  );
}
