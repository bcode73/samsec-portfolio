// Central source of truth for brand, entity, and navigation data.
// Schema.org structured data, metadata, and the sitemap all read from here.
// Change it once and it propagates everywhere.

export const siteConfig = {
  name: "SamSec",
  title: "Samuel Omobusuyi, AI Security Engineer & Founder, SamSec",
  description:
    "Samuel Omobusuyi is an AI Security Engineer, Security Researcher and Founder building intelligent cybersecurity infrastructure through SamSec.",
  url: "https://samsec.com.ng",
  locale: "en_NG",
  themeColor: "#0a0a0b",

  person: {
    name: "Samuel Omobusuyi",
    jobTitle: "AI Security Engineer & Founder",
    alternateName: "Samuel Omobusuyi",
    email: "studio@samsec.com.ng",
    // TODO: replace with a real professional portrait once supplied.
    image: "/images/avatar-placeholder.svg",
    // TODO: confirm Samuel's personal GitHub/LinkedIn. Currently unconfirmed placeholders.
    sameAs: [
      "https://github.com/samuelomobusuyi",
      "https://www.linkedin.com/in/samuelomobusuyi",
    ],
    nationality: "Nigeria",
    worksFor: "SamSec",
  },

  organization: {
    name: "SamSec",
    legalName: "SamSec",
    url: "https://samsec.com.ng",
    logo: "/images/samsec-logo.svg",
    foundingDate: "2023",
    founder: "Samuel Omobusuyi",
    description:
      "SamSec is an AI-first cybersecurity company that builds intelligent security infrastructure. It automates security operations, accelerates vulnerability discovery, and makes advanced security capabilities accessible through AI.",
    sameAs: [
      "https://twitter.com/samsec.io",
      "https://www.instagram.com/samsec.io",
      "https://www.tiktok.com/@samsec.io",
    ],
  },

  product: {
    name: "SamSec Ops",
    tagline: "The intelligence layer for security operations.",
    url: "https://samsec.com.ng/samsec-ops",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Web, macOS, Linux, Windows",
  },

  // Brand-level social channels, shown in the footer and contact page.
  // TODO: Twitter/X usernames cannot contain periods. Confirm the real handle
  // behind "samsec.io". This link will 404 if that is not a literal, valid handle.
  // TODO: github is an unconfirmed placeholder pending the real SamSec GitHub org URL.
  social: {
    github: "https://github.com/samsec-ng",
    twitter: "https://twitter.com/samsec.io",
    instagram: "https://www.instagram.com/samsec.io",
    tiktok: "https://www.tiktok.com/@samsec.io",
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "SamSec", href: "/samsec" },
    { label: "SamSec Ops", href: "/samsec-ops" },
    { label: "Research", href: "/research" },
    { label: "Articles", href: "/articles" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] as const,

  footerNav: {
    company: [
      { label: "About", href: "/about" },
      { label: "SamSec", href: "/samsec" },
      { label: "SamSec Ops", href: "/samsec-ops" },
      { label: "Timeline", href: "/timeline" },
      { label: "Contact", href: "/contact" },
    ],
    work: [
      { label: "Research", href: "/research" },
      { label: "Articles", href: "/articles" },
      { label: "Projects", href: "/projects" },
      { label: "Open Source", href: "/open-source" },
    ],
    more: [
      { label: "Speaking", href: "/speaking" },
      { label: "Press", href: "/press" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
