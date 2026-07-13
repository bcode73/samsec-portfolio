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
  "/articles",
  "/projects",
  "/open-source",
  "/speaking",
  "/press",
  "/timeline",
  "/contact",
  "/privacy",
  "/terms",
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

  const articles: MetadataRoute.Sitemap = getAllContent("articles").map((item) => ({
    url: `${siteConfig.url}/articles/${item.slug}`,
    lastModified: new Date(item.updated ?? item.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((project) => !project.external)
    .map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  return [...staticEntries, ...research, ...articles, ...projectEntries];
}
