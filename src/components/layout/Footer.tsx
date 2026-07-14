import Link from "next/link";
import { Github, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site.config";
import { Container } from "@/components/ui/Container";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import { XIcon } from "@/components/icons/XIcon";
import { Logo } from "@/components/Logo";

const socials = [
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "X", href: siteConfig.social.x, icon: XIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon },
];

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-400 dark:text-ink-500 mb-4">{title}</p>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-ink-600 dark:text-ink-300 hover:text-ink-950 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink-100 dark:border-ink-800">
      <Container size="wide" className="py-16">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          <div className="col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg font-medium tracking-tight text-ink-950 dark:text-white"
            >
              <Logo className="size-6" />
              SamSec
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-ink-400 hover:text-ink-950 dark:hover:text-white transition-colors"
                >
                  <social.icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={siteConfig.footerNav.company} />
          <FooterColumn title="Work" links={siteConfig.footerNav.work} />
          <FooterColumn title="More" links={siteConfig.footerNav.more} />
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-ink-100 dark:border-ink-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-400 dark:text-ink-500">
            © {new Date().getFullYear()} SamSec. All rights reserved.
          </p>
          <p className="text-xs text-ink-400 dark:text-ink-500 font-mono">Built by Samuel Omobusuyi in Nigeria.</p>
        </div>
      </Container>
    </footer>
  );
}
