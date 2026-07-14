import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/mdx/Callout";
import { TrustNav } from "@/components/trust/TrustNav";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Responsible Disclosure",
  description:
    "SamSec's vulnerability disclosure policy: scope, how to report a security issue, what to include, how reports are evaluated, and disclosure principles.",
  path: "/trust/responsible-disclosure",
});

const inScope = ["The SamSec Ops iOS app", "samsec.com.ng and its subdomains"];

const outOfScope = [
  "Third-party services SamSec doesn't control",
  "Social engineering or phishing against Samuel or any user",
  "Physical security of any location or device",
  "Denial-of-service testing of any kind",
  "Automated scanning that degrades the service for other users",
  "Spam or social engineering delivered through the contact form",
];

const reportContents = [
  "A clear description of the issue",
  "Steps to reproduce it",
  "The affected component (app version, page, or endpoint)",
  "The potential impact, as you understand it",
  "A proof of concept, if you have one, without exploiting further than necessary to demonstrate it",
];

const safeHarbor = [
  "Test only against your own account and data",
  "Don't access, modify, or delete data that isn't yours",
  "Don't run denial-of-service testing",
  "Stop and report immediately if you encounter data that isn't yours",
  "Give a reasonable window to fix an issue before any public disclosure",
];

export default function ResponsibleDisclosurePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust Center", path: "/trust" },
          { name: "Responsible Disclosure", path: "/trust/responsible-disclosure" },
        ])}
      />

      <PageHeader
        eyebrow="Trust Center · Responsible Disclosure"
        title="Report a security issue responsibly, and here's what happens next."
        description="This is SamSec's vulnerability disclosure policy: how to report a security issue in SamSec Ops or samsec.com.ng, what's in scope, and what to expect after a report comes in."
      />

      <TrustNav />

      <Section border={false} className="pt-10">
        <SectionHeading
          eyebrow="How To Report"
          title="Send a report directly."
          description="Email the details to the address below. If you'd prefer, the Contact Security page has the same channel with more context on what it's for."
          align="left"
        />
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button href={`mailto:${siteConfig.person.email}?subject=Security Report`} variant="primary">
            {siteConfig.person.email}
          </Button>
          <Button href="/trust/contact" variant="secondary">
            Contact Security
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What To Include" title="A useful report has five things." align="left" />
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {reportContents.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-ink-100 dark:border-ink-700 px-5 py-4 text-sm text-ink-700 dark:text-ink-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>In Scope</Eyebrow>
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
              What this policy covers.
            </h2>
            <ul className="mt-6 space-y-3">
              {inScope.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Out Of Scope</Eyebrow>
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink-950 dark:text-white text-balance">
              What isn&apos;t covered.
            </h2>
            <ul className="mt-6 space-y-3">
              {outOfScope.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Safe Testing"
          title="Test in good faith, and this policy protects you."
          description="Research conducted within these guidelines, in good faith and without accessing or damaging data that isn't yours, won't be treated as unauthorized access. If you're ever unsure whether something is in bounds, ask first."
          align="left"
        />
        <ul className="mt-8 space-y-3">
          {safeHarbor.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-ink-100 dark:border-ink-700 px-5 py-4 text-sm text-ink-700 dark:text-ink-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How Reports Are Evaluated"
          title="What happens after you send a report."
          align="left"
        />
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="border-t border-ink-100 dark:border-ink-700 pt-6">
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">Acknowledgment</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Reports are acknowledged within 5 business days.
            </p>
          </div>
          <div className="border-t border-ink-100 dark:border-ink-700 pt-6">
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">Triage</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              The report is assessed for validity and severity, and you&apos;ll hear back on that assessment.
            </p>
          </div>
          <div className="border-t border-ink-100 dark:border-ink-700 pt-6">
            <p className="font-display text-lg font-medium text-ink-950 dark:text-white">Resolution</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              Critical issues are prioritized immediately. Timelines for a fix depend on severity and
              complexity, and you&apos;ll be kept updated on progress.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Disclosure Principles"
          title="Coordinated disclosure, not a race to publish."
          description="Please give a reasonable window, 90 days is a reasonable default, before disclosing an issue publicly, so there's time to investigate and fix it. In turn, once an issue is resolved, SamSec will be straightforward with you about what was found and fixed."
          align="left"
        />
      </Section>

      <Section border={false}>
        <SectionHeading
          eyebrow="Recognition"
          title="No bug bounty program yet, but real thanks."
          description="SamSec doesn't currently run a paid bug bounty program. If you report a valid issue and would like to be credited, that credit will be given publicly, with your permission, once the issue is resolved."
          align="left"
        />
        <Callout type="tip">
          Thoughtful, responsible reports from outside researchers are one of the best ways this gets safer.
          If you take the time to report something properly, it&apos;s genuinely appreciated.
        </Callout>
      </Section>
    </>
  );
}
