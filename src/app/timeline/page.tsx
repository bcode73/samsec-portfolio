import Link from "next/link";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { TimelineList } from "@/components/TimelineList";

export const metadata = buildMetadata({
  title: "Timeline",
  description: "The professional timeline of Samuel Omobusuyi, from software engineering to founding SamSec.",
  path: "/timeline",
});

export default function TimelinePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Timeline", path: "/timeline" }])} />

      <PageHeader
        eyebrow="Timeline"
        title="A timeline, roughly in order."
        description="From early software engineering to founding SamSec and building SamSec Ops, this is the path so far."
      />

      <Section border={false} className="pt-0">
        <TimelineList />
        <p className="mt-10 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
          The full story behind this timeline is on the{" "}
          <Link href="/about" className="text-accent-500 dark:text-accent-300 hover:underline">
            About
          </Link>{" "}
          page, and where it&apos;s heading is covered on{" "}
          <Link href="/samsec" className="text-accent-500 dark:text-accent-300 hover:underline">
            SamSec
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
