import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { EmptyState } from "@/components/ui/EmptyState";
import { speakingEngagements } from "@/lib/speaking";
import { formatDate } from "@/lib/date";

export const metadata = buildMetadata({
  title: "Speaking",
  description: "Talks, panels, and speaking engagements by Samuel Omobusuyi on AI security and cybersecurity.",
  path: "/speaking",
});

export default function SpeakingPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Speaking", path: "/speaking" }])} />

      <PageHeader
        eyebrow="Speaking"
        title="Talks and speaking engagements."
        description="Conference talks, panels, and workshops on AI security, offensive security, and building security products."
      />

      <Section border={false} className="pt-0">
        {speakingEngagements.length > 0 ? (
          <div className="divide-y divide-ink-100 dark:divide-ink-700 border-t border-b border-ink-100 dark:border-ink-700">
            {speakingEngagements.map((talk) => (
              <a
                key={talk.title}
                href={talk.href}
                className="flex flex-col gap-1 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-ink-950 dark:text-white">{talk.title}</p>
                  <p className="text-sm text-ink-500 dark:text-ink-400">
                    {talk.event} · {talk.location}
                  </p>
                </div>
                <time className="text-sm text-ink-400 dark:text-ink-500">{formatDate(talk.date)}</time>
              </a>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No public engagements yet"
            description="Speaking engagements will be listed here as they're confirmed. For invitations, get in touch directly."
            ctaLabel="Invite Samuel to speak"
            ctaHref="/contact"
          />
        )}
      </Section>
    </>
  );
}
