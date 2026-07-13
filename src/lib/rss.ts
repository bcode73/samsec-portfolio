import { siteConfig } from "./site.config";
import type { ContentItem, ContentType } from "./content";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function buildRssFeed(type: ContentType, items: ContentItem[]): string {
  const title = type === "research" ? `${siteConfig.name} Research` : `${siteConfig.name} Articles`;
  const feedUrl = `${siteConfig.url}/${type}/feed.xml`;
  const pageUrl = `${siteConfig.url}/${type}`;

  const entries = items
    .map((item) => {
      const url = `${siteConfig.url}/${type}/${item.slug}`;
      return `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <description>${escapeXml(item.description)}</description>
      <category>${escapeXml(item.category)}</category>
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${pageUrl}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />${entries}
  </channel>
</rss>`;
}
