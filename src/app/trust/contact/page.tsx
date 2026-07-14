import { Mail } from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { TrustNav } from "@/components/trust/TrustNav";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Contact Security",
  description: "A direct channel for security reports, responsible disclosure, technical questions, and research collaboration.",
  path: "/trust/contact",
});

const reasons = [
  {
    title: "Security Reports",
    description: "Found a vulnerability in SamSec Ops or samsec.com.ng? See the Responsible Disclosure policy for scope and what to include, then send it here.",
  },
  {
    title: "Technical Questions",
    description: "Questions about how SamSec Ops handles authentication, authorization, or data, beyond what's already covered on the Product Security page.",
  },
  {
    title: "Research Collaboration",
    description: "Interested in collaborating on AI security or offensive security research with SamSec.",
  },
  {
    title: "Security Media Inquiries",
    description: "Press questions specifically about SamSec's security practices, architecture, or disclosure process.",
  },
];

export default function TrustContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Contact", path: "/trust/contact" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Contact"
        title="A direct line for security and technical questions."
        description="For security reports, responsible disclosure, technical questions, research collaboration, or media inquiries related to security, this is the channel."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>What This Is For</Eyebrow>
            <div className="mt-6 space-y-8">
              {reasons.map((reason) => (
                <div key={reason.title}>
                  <p className="font-display text-lg font-medium text-ink-950 dark:text-white">{reason.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-ink-100 dark:border-ink-700 p-8 h-fit">
            <Eyebrow>Direct</Eyebrow>
            <a
              href={`mailto:${siteConfig.person.email}?subject=Security`}
              className="mt-4 flex items-center gap-3 text-lg font-medium text-ink-950 dark:text-white hover:text-accent-500 dark:hover:text-accent-300 transition-colors"
            >
              <Mail className="size-5 text-ink-400" />
              {siteConfig.person.email}
            </a>
            <p className="mt-4 text-sm text-ink-500 dark:text-ink-400">Usually a reply within a few days.</p>
            <div className="mt-6">
              <Button href="/trust/responsible-disclosure" variant="secondary" size="sm">
                Read the disclosure policy
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
