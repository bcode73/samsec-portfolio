import type { Metadata } from "next";
import { siteConfig } from "./site.config";

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

export function buildMetadata(options: PageMetaOptions): Metadata {
  const { title, description, path, image, type = "website", publishedTime, modifiedTime, tags } = options;
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      // Falls back to the root opengraph-image.tsx when no page-specific image is given.
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {}),
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      ...(type === "article" && tags ? { tags: [...tags] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

// --- Knowledge graph entity IDs ---------------------------------------------
//
// Stable @id anchors so every JSON-LD object across the site references the
// same underlying entity instead of restating it. This is what lets Google
// (and other consumers of structured data) merge signals from different
// pages into one coherent graph: Person, Organization, WebSite, and the
// SoftwareApplication (with its sub-entities) are declared once each and
// cross-referenced everywhere else by @id.

export const entityIds = {
  person: `${siteConfig.url}/#person`,
  organization: `${siteConfig.url}/#organization`,
  website: `${siteConfig.url}/#website`,
  software: `${siteConfig.product.url}#software`,
  samsecAgent: `${siteConfig.product.url}#agent`,
  engagementReports: `${siteConfig.product.url}#reports`,
} as const;

// --- JSON-LD builders -------------------------------------------------------

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": entityIds.person,
    name: siteConfig.person.name,
    alternateName: siteConfig.person.alternateName,
    jobTitle: siteConfig.person.jobTitle,
    email: siteConfig.person.email,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.person.image}`,
    nationality: siteConfig.person.nationality,
    worksFor: { "@id": entityIds.organization },
    sameAs: siteConfig.person.sameAs,
    knowsAbout: [
      "Artificial Intelligence Security",
      "Cybersecurity",
      "Offensive Security",
      "Security Automation",
      "Cloud Security",
      "Secure Software Engineering",
      "AI Infrastructure Operations",
      "Autonomous DevOps",
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": entityIds.organization,
    name: siteConfig.organization.name,
    legalName: siteConfig.organization.legalName,
    url: siteConfig.organization.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.organization.logo}`,
      width: 512,
      height: 512,
    },
    foundingDate: siteConfig.organization.foundingDate,
    description: siteConfig.organization.description,
    founder: { "@id": entityIds.person },
    sameAs: siteConfig.organization.sameAs,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": entityIds.website,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: { "@id": entityIds.organization },
    about: { "@id": entityIds.organization },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/research?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": entityIds.software,
    name: siteConfig.product.name,
    url: siteConfig.product.url,
    applicationCategory: siteConfig.product.applicationCategory,
    operatingSystem: siteConfig.product.operatingSystem,
    description: siteConfig.product.description,
    creator: { "@id": entityIds.organization },
    author: { "@id": entityIds.person },
    publisher: { "@id": entityIds.organization },
    featureList: [
      "Professional SSH terminal with persistent sessions and Face ID protection",
      "Context-aware AI Assistant",
      "SamSec Agent: autonomous, risk-classified task execution",
      "Engagement Reports: permanent operational documentation",
      "Home Screen, Lock Screen, and Dynamic Island widgets",
    ],
    hasPart: [
      {
        "@type": "SoftwareApplication",
        "@id": entityIds.samsecAgent,
        name: "SamSec Agent",
        applicationCategory: siteConfig.product.applicationCategory,
        operatingSystem: siteConfig.product.operatingSystem,
        description:
          "SamSec Agent is the autonomous task execution system inside SamSec Ops. It converts a stated operational goal into a planned workflow, classifies every proposed command by risk, and requires explicit authorization before executing anything. It assists infrastructure work; it does not act without human authorization.",
        isPartOf: { "@id": entityIds.software },
        creator: { "@id": entityIds.organization },
      },
      {
        "@type": "CreativeWork",
        "@id": entityIds.engagementReports,
        name: "Engagement Reports",
        description:
          "Engagement Reports are the permanent, searchable operational record SamSec Agent produces for every engagement: objectives, commands, output, timing, and reasoning, with sensitive data automatically masked.",
        isPartOf: { "@id": entityIds.software },
        creator: { "@id": entityIds.organization },
      },
    ],
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  slug: string;
  section: "research" | "notes" | "perspectives" | "adr";
  datePublished: string;
  dateModified?: string;
  tags?: string[];
}) {
  const url = `${siteConfig.url}/${options.section}/${options.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": options.section === "adr" ? "TechArticle" : "Article",
    headline: options.title,
    description: options.description,
    url,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: { "@id": entityIds.person },
    publisher: { "@id": entityIds.organization },
    isPartOf: { "@id": entityIds.website },
    keywords: options.tags?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function profilePageSchema(options: { path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteConfig.url}${options.path}#webpage`,
    url: `${siteConfig.url}${options.path}`,
    name: `About ${siteConfig.person.name}`,
    mainEntity: { "@id": entityIds.person },
    isPartOf: { "@id": entityIds.website },
  };
}

export function collectionPageSchema(options: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}${options.path}#webpage`,
    url: `${siteConfig.url}${options.path}`,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": entityIds.website },
    about: { "@id": entityIds.organization },
  };
}
