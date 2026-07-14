import Link from "next/link";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms of use for samsec.com.ng.",
  path: "/terms",
});

const LAST_UPDATED = "July 13, 2026";

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }])} />

      <PageHeader eyebrow="Legal" title="Terms of Use" description={`Last updated ${LAST_UPDATED}`} />

      <Section border={false} className="pt-0 pb-28">
        <Container size="narrow">
          <div className="prose-samsec">
            <p>
              These Terms of Use govern your access to and use of {siteConfig.url} (the &ldquo;Site&rdquo;),
              operated by SamSec. By using the Site, you agree to these terms.
            </p>

            <h2>Use of content</h2>
            <p>
              Research, articles, and other written content published on this Site are the intellectual property
              of Samuel Omobusuyi and SamSec unless otherwise noted. You may share links and quote brief excerpts
              with attribution. Reproduction of full articles or research without permission is not permitted.
            </p>

            <h2>SamSec Ops &amp; product information</h2>
            <p>
              Information about SamSec Ops and other SamSec products on this Site describes current and planned
              capabilities. Features described as in development or on the roadmap are not yet available and are
              subject to change without notice. The current-versus-planned distinction is maintained
              consistently on the <Link href="/samsec-ops">SamSec Ops</Link> page and the{" "}
              <Link href="/trust/engineering-roadmap">Engineering Roadmap</Link>.
            </p>

            <h2>No professional advice</h2>
            <p>
              Content on this Site, including research and articles, is provided for informational purposes and
              does not constitute security, legal, or professional advice for any specific system or organization.
            </p>

            <h2>Third-party links</h2>
            <p>
              The Site may link to third-party websites and repositories. SamSec is not responsible for the
              content or practices of third-party sites.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              The Site and its content are provided &ldquo;as is&rdquo; without warranties of any kind. SamSec is
              not liable for any damages arising from use of the Site or reliance on its content.
            </p>

            <h2>Changes to these terms</h2>
            <p>
              These terms may be updated periodically. Continued use of the Site after changes constitutes
              acceptance of the updated terms.
            </p>

            <h2>Governing law</h2>
            <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${siteConfig.person.email}`}>{siteConfig.person.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
