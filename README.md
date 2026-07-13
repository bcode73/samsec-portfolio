# SamSec: Samuel Omobusuyi & the SamSec Ecosystem

The digital headquarters for Samuel Omobusuyi, SamSec, and SamSec Ops. Built as a long-horizon authority
site, not a portfolio.

## Stack

- **Next.js 15** (App Router, static export via `output: "export"`)
- **TypeScript**, **Tailwind CSS v4**
- **MDX** content (research and articles) via `next-mdx-remote/rsc`
- **Cloudflare Workers** (with static assets) for hosting, plus a small Worker script for the contact and
  newsletter APIs
- Fonts: Geist Sans/Mono for UI, Fraunces for editorial display headings

The site itself is statically generated (`next build` outputs to `out/`). The only server-side logic is
the Worker script in `worker/`, which handles two API routes and serves everything else as a static asset.

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
- `worker/index.ts`: the Worker's entry point. Routes `/api/contact` and `/api/subscribe` to their
  handlers, and serves every other request as a static asset via the `ASSETS` binding.
- `worker/contact.ts`, `worker/subscribe.ts`: handlers for the contact form and newsletter signup. Both
  call the [Resend](https://resend.com) API; swap the `fetch` calls if a different email provider is
  preferred.

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

## Deploying to Cloudflare Workers

This project deploys as a Cloudflare Worker with static assets (Cloudflare's current recommended model,
which folds in what used to be a separate "Pages" product). It's connected to the `main` branch through
Cloudflare's dashboard Git integration, with automatic deployments enabled: every push to `main` builds
and deploys on its own.

Project build settings (Settings → Builds in the Cloudflare dashboard):

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Node version: **22**. Wrangler 4.x requires Node 22 or later.
- The API token used by this project's build/deploy pipeline needs **Account → Workers Scripts → Edit**
  permission (not Cloudflare Pages, this is a genuine Worker, not a Pages project).

`wrangler.toml` sets `main = "worker/index.ts"` and an `[assets]` block pointing at `out`, so Cloudflare
bundles the Worker script and the static export together on every deploy.

To deploy manually from a local machine instead (for testing, or outside the Git integration), `wrangler`
is a dev dependency: run `npx wrangler login` once, then `npm run cf:deploy` (runs `next build`, then
`wrangler deploy`). `npm run cf:dev` runs the Worker locally against the built `out/` directory.

Set the secrets and env vars listed in `.env.example` (see `wrangler.toml` for what each one enables), via
`wrangler secret put <NAME>` or the dashboard. Security headers and cache rules live in `public/_headers`,
copied into the static export automatically and served by Cloudflare's asset handler.

See `CONTENT_TODO.md` for everything that needs a real value before this goes live.
