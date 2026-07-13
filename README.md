# SamSec — Samuel Omobusuyi & the SamSec Ecosystem

The digital headquarters for Samuel Omobusuyi, SamSec, and SamSec Ops — built as a long-horizon authority
site, not a portfolio.

## Stack

- **Next.js 15** (App Router, static export via `output: "export"`)
- **TypeScript**, **Tailwind CSS v4**
- **MDX** content (research + articles) via `next-mdx-remote/rsc`
- **Cloudflare Pages** for hosting, **Cloudflare Pages Functions** for the contact/newsletter APIs
- Fonts: Geist Sans/Mono (UI) + Fraunces (editorial display serif)

The entire site is statically generated (`next build` → `out/`). There is no Node server in production —
the only server-side logic is the two Cloudflare Pages Functions under `functions/api/`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build       # static export to ./out
npm run lint
npm run typecheck
```

## Architecture

- `src/lib/site.config.ts` — single source of truth for brand, entity, and nav data. Schema.org structured
  data, page metadata, and the sitemap all read from here.
- `src/lib/content.ts` — MDX frontmatter loader for Research and Articles, plus reading time, table of
  contents extraction, and related-content scoring.
- `src/lib/seo.ts` — metadata + JSON-LD builders (Person, Organization, WebSite, SoftwareApplication,
  Article, BreadcrumbList, FAQPage).
- `src/content/research/*.mdx`, `src/content/articles/*.mdx` — content, authored as MDX with frontmatter.
- `src/lib/projects.ts`, `src/lib/open-source.ts`, `src/lib/speaking.ts`, `src/lib/press.ts`,
  `src/lib/timeline.ts` — structured data for the remaining sections of the information architecture.
- `functions/api/contact.ts`, `functions/api/subscribe.ts` — Cloudflare Pages Functions handling the
  contact form and newsletter signup. Both are provider-agnostic-ish but implemented against the
  [Resend](https://resend.com) API; swap the `fetch` calls if a different provider is preferred.

## Adding content

Add a new `.mdx` file to `src/content/research/` or `src/content/articles/` with frontmatter:

```md
---
title: "Title"
description: "One-sentence summary used in cards, RSS, and meta description."
date: "2026-03-01"
category: "AI Security"
tags: ["Tag One", "Tag Two"]
draft: false
---

Body content in Markdown/MDX. `##` and `###` headings populate the table of contents automatically.
Use `<Callout type="note" | "tip" | "warning">…</Callout>` for admonitions.
```

The listing pages, sitemap, and RSS feeds (`/research/feed.xml`, `/articles/feed.xml`) pick up new files
automatically on the next build — no registration step required.

## Deploying to Cloudflare Pages

1. Connect the repository in the Cloudflare dashboard, or use `wrangler pages deploy out`.
2. Build command: `npm run build` — Output directory: `out`.
3. The top-level `functions/` directory is auto-detected by Cloudflare Pages and deployed as Pages
   Functions alongside the static assets.
4. Set the secrets/env vars listed in `.env.example` (see `wrangler.toml` for the full list and what each
   one enables).
5. Security headers and cache rules live in `public/_headers`, copied into the static export automatically.

See `CONTENT_TODO.md` for everything that needs a real value before this goes live.
