import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type ContentType = "research" | "articles";

export interface ContentMeta {
  slug: string;
  type: ContentType;
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  category: string;
  draft?: boolean;
  readingTime: string;
  readingMinutes: number;
}

export interface ContentItem extends ContentMeta {
  content: string;
}

export interface TocEntry {
  depth: number;
  text: string;
  slug: string;
}

const CONTENT_ROOT = path.join(process.cwd(), "src/content");

function dirFor(type: ContentType) {
  return path.join(CONTENT_ROOT, type);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function getAllSlugs(type: ContentType): string[] {
  const dir = dirFor(type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getContentBySlug(type: ContentType, slug: string): ContentItem {
  const filePath = path.join(dirFor(type), `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    type,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated,
    tags: data.tags ?? [],
    category: data.category ?? "General",
    draft: data.draft ?? false,
    readingTime: `${Math.max(1, Math.ceil(stats.minutes))} min read`,
    readingMinutes: Math.max(1, Math.ceil(stats.minutes)),
    content,
  };
}

export function getAllContent(type: ContentType): ContentItem[] {
  const isProd = process.env.NODE_ENV === "production";
  return getAllSlugs(type)
    .map((slug) => getContentBySlug(type, slug))
    .filter((item) => !(isProd && item.draft))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRelatedContent(
  type: ContentType,
  current: ContentItem,
  limit = 3
): ContentMeta[] {
  const all = getAllContent(type).filter((item) => item.slug !== current.slug);

  const scored = all.map((item) => {
    let score = 0;
    if (item.category === current.category) score += 2;
    score += item.tags.filter((tag) => current.tags.includes(tag)).length;
    return { item, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}

export function getTableOfContents(content: string): TocEntry[] {
  const headingPattern = /^(#{2,3})\s+(.+)$/gm;
  const entries: TocEntry[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingPattern.exec(content)) !== null) {
    const depth = match[1]?.length ?? 2;
    const text = (match[2] ?? "").trim();
    entries.push({ depth, text, slug: slugify(text) });
  }

  return entries;
}

export function getAllCategories(type: ContentType): string[] {
  const items = getAllContent(type);
  return Array.from(new Set(items.map((item) => item.category))).sort();
}

export function getAllTags(type: ContentType): string[] {
  const items = getAllContent(type);
  return Array.from(new Set(items.flatMap((item) => item.tags))).sort();
}
