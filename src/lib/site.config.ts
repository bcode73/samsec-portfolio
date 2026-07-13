// Central source of truth for brand, entity, and navigation data.
// Schema.org structured data, metadata, and the sitemap all read from here —
// change it once and it propagates everywhere.

export const siteConfig = {
  name: "SamSec",
  title: "Samuel Omobusuyi — AI Security Engineer & Founder, SamSec",
  description:
    "Samuel Omobusuyi is an AI Security Engineer, Security Researcher and Founder building intelligent cybersecurity infrastructure through SamSec.",
  url: "https://samsec.com.ng",
  locale: "en_NG",
  themeColor: "#0a0a0b",

  person: {
    name: "Samuel Omobusuyi",
    jobTitle: "AI Security Engineer & Founder",
    alternateName: "Samuel Omobusuyi",
    email: "hello@samsec.com.ng",
    // TODO: replace with a real professional portrait once supplied.
    image: "/images/avatar-placeholder.svg",
    sameAs: [
      "https://github.com/samuelomobusuyi",
      "https://www.linkedin.com/in/samuelomobusuyi",
      "https://twitter.com/samuelomobusuyi",
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
      "SamSec is an AI-first cybersecurity company building intelligent security infrastructure — automating security operations, accelerating vulnerability discovery, and making advanced security capabilities accessible through AI.",
    sameAs: [
      "https://github.com/samsec-ng",
      "https://twitter.com/samsec_ng",
      "https://www.linkedin.com/company/samsec-ng",
    ],
  },

  product: {
    name: "SamSec Ops",
    tagline: "The intelligence layer for security operations.",
    url: "https://samsec.com.ng/samsec-ops",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Web, macOS, Linux, Windows",
  },

  social: {
    github: "https://github.com/samsec-ng",
    twitter: "https://twitter.com/samsec_ng",
    linkedin: "https://www.linkedin.com/company/samsec-ng",
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
