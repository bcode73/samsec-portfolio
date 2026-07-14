// Central source of truth for brand, entity, and navigation data.
// Schema.org structured data, metadata, and the sitemap all read from here.
// Change it once and it propagates everywhere.

export const siteConfig = {
  name: "SamSec",
  title: "Samuel Omobusuyi, AI Security Engineer & Founder, SamSec",
  description:
    "Samuel Omobusuyi is an AI Security Engineer, Security Researcher, and Founder. He builds AI-powered security products through SamSec.",
  url: "https://samsec.com.ng",
  locale: "en_NG",
  themeColor: "#0a0a0b",

  person: {
    name: "Samuel Omobusuyi",
    jobTitle: "AI Security Engineer & Founder",
    alternateName: "Samuel Omobusuyi",
    email: "studio@samsec.com.ng",
    image: "/images/samuel-omobusuyi.webp",
    sameAs: ["https://github.com/bcode73", "https://www.linkedin.com/in/samsecai"],
    nationality: "Nigeria",
    worksFor: "SamSec",
  },

  organization: {
    name: "SamSec",
    legalName: "SamSec",
    url: "https://samsec.com.ng",
    logo: "/images/samsec-logo.svg",
    foundingDate: "2025",
    founder: "Samuel Omobusuyi",
    description:
      "SamSec is an AI-first infrastructure and cybersecurity company, currently building SamSec Ops, an AI-powered SSH, DevOps, and infrastructure operations platform for iPhone.",
    sameAs: [
      "https://x.com/samsecai",
      "https://www.instagram.com/samsec.io",
      "https://www.tiktok.com/@samsec.io",
    ],
  },

  product: {
    name: "SamSec Ops",
    tagline: "An AI-powered SSH, DevOps, and infrastructure operations platform for iPhone.",
    description:
      "SamSec Ops combines a professional SSH terminal, a context-aware AI assistant, autonomous task execution through SamSec Agent, and operational documentation through Engagement Reports, in one secure mobile workspace. Its long-term vision is a cross-platform AI-powered cybersecurity operating platform.",
    url: "https://samsec.com.ng/samsec-ops",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "iOS",
  },

  // Brand-level social channels, shown in the footer and contact page.
  social: {
    github: "https://github.com/bcode73",
    x: "https://x.com/samsecai",
    instagram: "https://www.instagram.com/samsec.io",
    tiktok: "https://www.tiktok.com/@samsec.io",
  },

  nav: [
    { label: "About", href: "/about" },
    { label: "SamSec", href: "/samsec" },
    { label: "SamSec Ops", href: "/samsec-ops" },
    { label: "Research", href: "/research" },
    { label: "Engineering Notes", href: "/notes" },
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
      { label: "Engineering Notes", href: "/notes" },
      { label: "Perspectives", href: "/perspectives" },
      { label: "Architecture Decisions", href: "/adr" },
      { label: "Projects", href: "/projects" },
      { label: "Open Source", href: "/open-source" },
    ],
    more: [
      { label: "Trust Center", href: "/trust" },
      { label: "Speaking", href: "/speaking" },
      { label: "Press", href: "/press" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
