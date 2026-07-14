import { Mail, Github, Instagram } from "lucide-react";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, Eyebrow } from "@/components/ui/Section";
import { ContactForm } from "@/components/ContactForm";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { XIcon } from "@/components/icons/XIcon";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with Samuel Omobusuyi for research collaboration, speaking, press, or partnerships.",
  path: "/contact",
});

const channels = [
  { label: siteConfig.person.email, href: `mailto:${siteConfig.person.email}`, icon: Mail },
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "X", href: siteConfig.social.x, icon: XIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />

      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        description="For research collaboration, speaking engagements, press inquiries, or partnership discussions."
      />

      <Section border={false} className="pt-0">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Eyebrow>Direct</Eyebrow>
            <div className="space-y-4">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm text-ink-700 dark:text-ink-200 hover:text-ink-950 dark:hover:text-white transition-colors"
                >
                  <channel.icon className="size-4 text-ink-400" />
                  {channel.label}
                </a>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}
