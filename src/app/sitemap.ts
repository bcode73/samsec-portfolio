import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";
import { getAllContent } from "@/lib/content";
import { projects } from "@/lib/projects";

export const dynamic = "force-static";

const staticPaths = [
  "",
  "/about",
  "/samsec",
  "/samsec-ops",
  "/research",
  "/notes",
  "/perspectives",
  "/adr",
  "/projects",
  "/open-source",
  "/speaking",
  "/press",
  "/timeline",
  "/contact",
  "/privacy",
  "/terms",
  "/trust",
  "/trust/security",
  "/trust/responsible-disclosure",
  "/trust/product-security",
  "/trust/release-philosophy",
  "/trust/changelog",
  "/trust/engineering-roadmap",
  "/trust/security-advisories",
  "/trust/status",
  "/trust/engineering-principles",
  "/trust/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const research: MetadataRoute.Sitemap = getAllContent("research").map((item) => ({
    url: `${siteConfig.url}/research/${item.slug}`,
    lastModified: new Date(item.updated ?? item.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const notes: MetadataRoute.Sitemap = getAllContent("notes").map((item) => ({
    url: `${siteConfig.url}/notes/${item.slug}`,
    lastModified: new Date(item.updated ?? item.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const perspectives: MetadataRoute.Sitemap = getAllContent("perspectives").map((item) => ({
    url: `${siteConfig.url}/perspectives/${item.slug}`,
    lastModified: new Date(item.updated ?? item.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const adr: MetadataRoute.Sitemap = getAllContent("adr").map((item) => ({
    url: `${siteConfig.url}/adr/${item.slug}`,
    lastModified: new Date(item.updated ?? item.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((project) => !project.external)
    .map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  return [...staticEntries, ...research, ...notes, ...perspectives, ...adr, ...projectEntries];
}
