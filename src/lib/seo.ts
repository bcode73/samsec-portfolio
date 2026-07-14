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

// --- JSON-LD builders -------------------------------------------------------

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.person.name,
    alternateName: siteConfig.person.alternateName,
    jobTitle: siteConfig.person.jobTitle,
    email: siteConfig.person.email,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.person.image}`,
    nationality: siteConfig.person.nationality,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
    },
    sameAs: siteConfig.person.sameAs,
    knowsAbout: [
      "Artificial Intelligence Security",
      "Cybersecurity",
      "Offensive Security",
      "Security Automation",
      "Cloud Security",
      "Secure Software Engineering",
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.organization.name,
    legalName: siteConfig.organization.legalName,
    url: siteConfig.organization.url,
    logo: `${siteConfig.url}${siteConfig.organization.logo}`,
    foundingDate: siteConfig.organization.foundingDate,
    description: siteConfig.organization.description,
    founder: {
      "@type": "Person",
      name: siteConfig.person.name,
    },
    sameAs: siteConfig.organization.sameAs,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.organization.name,
    },
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
    name: siteConfig.product.name,
    url: siteConfig.product.url,
    applicationCategory: siteConfig.product.applicationCategory,
    operatingSystem: siteConfig.product.operatingSystem,
    description: siteConfig.product.description,
    author: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.organization.url,
    },
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
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url,
    datePublished: options.datePublished,
    dateModified: options.dateModified ?? options.datePublished,
    author: {
      "@type": "Person",
      name: siteConfig.person.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}${siteConfig.organization.logo}`,
      },
    },
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
