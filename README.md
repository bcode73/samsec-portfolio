# SamSec: Samuel Omobusuyi & the SamSec Ecosystem

The digital headquarters for Samuel Omobusuyi, SamSec, and SamSec Ops. Built as a long-horizon authority
site, not a portfolio.

## Stack

- **Next.js 15** (App Router, static export via `output: "export"`)
- **TypeScript**, **Tailwind CSS v4**
- **MDX** content (research and articles) via `next-mdx-remote/rsc`
- **Cloudflare Pages** for hosting, **Cloudflare Pages Functions** for the contact and newsletter APIs
- Fonts: Geist Sans/Mono for UI, Fraunces for editorial display headings

The entire site is statically generated (`next build` outputs to `out/`). There is no Node server in
production. The only server-side logic is the two Cloudflare Pages Functions under `functions/api/`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build       # static export to ./out
npm run lint
npm run typecheck
```

## Architecture

- `src/lib/site.config.ts`: single source of truth for brand, entity, and nav data. Schema.org structured
  data, page metadata, and the sitemap all read from here.
- `src/lib/content.ts`: MDX frontmatter loader for Research and Articles, plus reading time, table of
  contents extraction, and related-content scoring.
- `src/lib/seo.ts`: metadata and JSON-LD builders (Person, Organization, WebSite, SoftwareApplication,
  Article, BreadcrumbList, FAQPage).
- `src/content/research/*.mdx`, `src/content/articles/*.mdx`: content, authored as MDX with frontmatter.
- `src/lib/projects.ts`, `src/lib/open-source.ts`, `src/lib/speaking.ts`, `src/lib/press.ts`,
  `src/lib/timeline.ts`: structured data for the remaining sections of the information architecture.
- `functions/api/contact.ts`, `functions/api/subscribe.ts`: Cloudflare Pages Functions handling the
  contact form and newsletter signup. Both call the [Resend](https://resend.com) API; swap the `fetch`
  calls if a different email provider is preferred.

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
Use `<Callout type="note" | "tip" | "warning">...</Callout>` for admonitions.
```

The listing pages, sitemap, and RSS feeds (`/research/feed.xml`, `/articles/feed.xml`) pick up new files
automatically on the next build. There is no registration step.

## Deploying to Cloudflare Pages

This project deploys through Cloudflare's dashboard Git integration, connected to the `main` branch.
Automatic deployments are enabled, so every push to `main` builds and deploys on its own. No manual step
is needed.

Project build settings (Settings → Builds in the Cloudflare dashboard):

- Build command: `npm run build`
- Deploy command: `npx wrangler pages deploy out`
- Node version: **22**. Wrangler 4.x requires Node 22 or later; a mismatched default Node version on the
  build image is the most common reason this kind of project fails to build or deploy on Cloudflare.
- The API token used by this project's build/deploy pipeline needs the **Account → Cloudflare Pages →
  Edit** permission, in addition to any Workers-related permissions it already has. Without it, the build
  succeeds but the deploy step fails with an authentication error.

`wrangler.toml` sets `pages_build_output_dir = "out"` and the project name. Cloudflare Pages auto-detects
the top-level `functions/` directory and deploys it as Pages Functions alongside the static assets.

To deploy manually from a local machine instead (for testing, or outside the Git integration), `wrangler`
is a dev dependency: run `npx wrangler login` once, then `npm run pages:deploy` (runs `next build`,
then `wrangler pages deploy out`).

Set the secrets and env vars listed in `.env.example` (see `wrangler.toml` for what each one enables).
Security headers and cache rules live in `public/_headers`, copied into the static export automatically.

See `CONTENT_TODO.md` for everything that needs a real value before this goes live.
