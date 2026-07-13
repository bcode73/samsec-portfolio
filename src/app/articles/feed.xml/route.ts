import { getAllContent } from "@/lib/content";
import { buildRssFeed } from "@/lib/rss";

export const dynamic = "force-static";

export function GET() {
  const feed = buildRssFeed("articles", getAllContent("articles"));

  return new Response(feed, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
