import Link from "next/link";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How SamSec collects, uses, and protects information on samsec.com.ng.",
  path: "/privacy",
});

const LAST_UPDATED = "July 13, 2026";

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])} />

      <PageHeader eyebrow="Legal" title="Privacy Policy" description={`Last updated ${LAST_UPDATED}`} />

      <Section border={false} className="pt-0 pb-28">
        <Container size="narrow">
          <div className="prose-samsec">
            <p>
              This Privacy Policy explains how SamSec (&ldquo;SamSec,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
              collects, uses, and protects information when you visit {siteConfig.url} (the &ldquo;Site&rdquo;).
            </p>

            <h2>Information we collect</h2>
            <p>We collect a limited amount of information necessary to operate the Site and respond to inquiries:</p>
            <ul>
              <li>
                <strong>Contact form submissions:</strong> name, email address, and message content you
                voluntarily submit through the contact form.
              </li>
              <li>
                <strong>Newsletter subscriptions:</strong> the email address you provide to subscribe.
              </li>
              <li>
                <strong>Usage data:</strong> aggregated, privacy-respecting analytics (page views, referrers,
                approximate location) collected via Cloudflare Web Analytics, which does not use cookies or track
                individual users across sites.
              </li>
            </ul>

            <h2>How we use information</h2>
            <ul>
              <li>To respond to messages sent through the contact form.</li>
              <li>To send newsletter updates to subscribers, who may unsubscribe at any time.</li>
              <li>To understand aggregate Site usage and improve content and performance.</li>
            </ul>
            <p>We do not sell personal information, and we do not use it for third-party advertising.</p>

            <h2>Third-party services</h2>
            <p>The Site is hosted and delivered using Cloudflare, and may use the following Cloudflare services:</p>
            <ul>
              <li>Cloudflare Web Analytics: privacy-respecting, cookie-free usage analytics.</li>
              <li>Cloudflare Turnstile: bot protection on forms, which does not track users for advertising purposes.</li>
            </ul>

            <h2>Data retention</h2>
            <p>
              Contact form submissions are retained only as long as necessary to respond to and resolve the
              inquiry. Newsletter email addresses are retained until you unsubscribe.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on your jurisdiction, including under Nigeria&apos;s Data Protection Act, you may have
              the right to access, correct, or request deletion of your personal information. To exercise these
              rights, contact us at{" "}
              <a href={`mailto:${siteConfig.person.email}`}>{siteConfig.person.email}</a>.
            </p>

            <h2>How this relates to product security</h2>
            <p>
              This policy covers the website. How SamSec Ops itself handles data, authentication, and
              sensitive information is covered separately in the{" "}
              <Link href="/trust/product-security">Product Security</Link> section of the{" "}
              <Link href="/trust">Trust Center</Link>.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              This policy may be updated periodically. Material changes will be reflected by updating the
              &ldquo;Last updated&rdquo; date above.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy can be directed to{" "}
              <a href={`mailto:${siteConfig.person.email}`}>{siteConfig.person.email}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
