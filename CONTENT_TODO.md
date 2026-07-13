# Pre-Launch Content & Configuration Checklist

This build is a complete, production-grade scaffold of the site described in the PRD. Every page, the
design system, the MDX content pipeline, and the SEO/schema infrastructure are real and working. A handful
of facts weren't available at build time (biography specifics, a photo, live credentials) and were filled
with clearly marked, reasonable placeholders instead of invented facts. This is the list of what to replace
before the domain goes live. Every item below also has a `TODO` comment at its source in the code.

## Identity & brand facts

- [x] **Contact email**: set to `studio@samsec.com.ng` in `src/lib/site.config.ts` (`person.email`).
- [x] **Twitter, Instagram, TikTok**: set in `src/lib/site.config.ts` (`social` and `organization.sameAs`).
      Note: Twitter/X usernames cannot contain periods. Confirm the real handle behind "samsec.io", since
      `twitter.com/samsec.io` will 404 if that isn't a literal, valid username.
- [ ] **Professional portrait**: replace `public/images/avatar-placeholder.svg` with a real photo, and
      update `person.image` in `src/lib/site.config.ts`. Used in the homepage hero, About page, and the
      `Person` JSON-LD schema, which matters for Google Knowledge Graph eligibility.
- [ ] **Samuel's personal GitHub and LinkedIn**: `person.sameAs` in `site.config.ts` still holds guessed
      handles. Confirm or replace with real profile URLs.
- [ ] **SamSec GitHub org**: `social.github` in `site.config.ts` is still a placeholder
      (`github.com/samsec-ng`), used by the footer and the Open Source page's CTA button.
- [ ] **Organization founding date**: `organization.foundingDate` in `site.config.ts` is a placeholder
      year. This appears in the `Organization` JSON-LD schema.
- [ ] **Career timeline**: `src/lib/timeline.ts` contains a plausible but placeholder set of years and
      milestones (foundations, security, founding SamSec, SamSec Ops, present). Replace with real dates
      and specifics. This feeds both the About page and the `/timeline` page.
- [ ] **NEARR project details**: `src/lib/projects.ts` currently ships an honest "documentation in
      progress" placeholder for NEARR rather than invented specifics. Fill in the real description, stack,
      role, and year.
- [ ] **Open source repository links**: `src/lib/open-source.ts` points at a placeholder GitHub org.
      Replace with real repo URLs once published, or remove entries that don't correspond to real repos.

## Speaking & Press

- [ ] `src/lib/speaking.ts` and `src/lib/press.ts` are intentionally empty (no fabricated engagements or
      coverage). Add real entries as they're confirmed. The pages already render them once present.

## Search engine & analytics verification

- [ ] **Google Search Console**: replace `GOOGLE_SITE_VERIFICATION_PLACEHOLDER` in `src/app/layout.tsx`
      (`metadata.verification.google`) with the real verification code.
- [ ] **Bing Webmaster Tools**: replace `BING_SITE_VERIFICATION_PLACEHOLDER` in the same block
      (`verification.other["msvalidate.01"]`).
- [ ] **Cloudflare Web Analytics**: set `NEXT_PUBLIC_CF_BEACON_TOKEN` (build-time env var) to enable the
      beacon script in `src/components/CloudflareAnalytics.tsx`. It renders nothing until set.

## Forms & Cloudflare Pages secrets

The contact form and newsletter signup are fully built (`src/components/ContactForm.tsx`,
`src/components/NewsletterForm.tsx`, `functions/api/contact.ts`, `functions/api/subscribe.ts`) but return
`501 Not Configured` until these Cloudflare Pages secrets are set (`wrangler pages secret put <NAME>` or
the dashboard):

- [ ] `RESEND_API_KEY`, or swap the implementation for a different email provider.
- [ ] `CONTACT_TO_EMAIL`: inbox that should receive contact form submissions.
- [ ] `RESEND_AUDIENCE_ID`: newsletter audience ID for subscribe requests.
- [ ] `TURNSTILE_SECRET_KEY` and `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Cloudflare Turnstile is wired into the
      backend (`functions/_utils/response.ts#verifyTurnstile`) but the widget isn't yet mounted in
      `ContactForm.tsx`. Once both keys exist, add the Turnstile script and widget to the form and pass its
      token through as `turnstileToken`.

## Deployment

- [x] Cloudflare Pages is connected to the `main` branch via the dashboard's Git integration, with
      automatic deployments enabled. Every push to `main` builds and deploys on its own.
- [x] Build command `npm run build`, deploy command `npx wrangler pages deploy out`, Node version 22, and
      the build/deploy API token's **Account > Cloudflare Pages > Edit** permission are all set correctly.
      See the README's deployment section if any of this needs revisiting.
- [ ] Point the `samsec.com.ng` DNS at the Cloudflare Pages project.
- [ ] Confirm `src/lib/site.config.ts#url` (`https://samsec.com.ng`) matches the final production domain.
      It's used as the canonical base for every absolute URL, the sitemap, and all JSON-LD.

## Visual assets

- [ ] **SamSec Ops screenshots**: `src/components/product/ScreenshotFrame.tsx` renders styled placeholder
      frames on the `/samsec-ops` page. Replace with real product screenshots as modules become
      presentable.
- [ ] **Logo and favicon**: `public/favicon.svg` and `public/images/samsec-logo.svg` use a generic
      monogram mark. Replace with real brand assets if a wordmark or logo already exists.

## Legal

- [ ] `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` are complete, reasonable drafts. They cover
      data collected, Cloudflare sub-processors, retention, and NDPR-aware rights language, but they are
      not a substitute for review by counsel familiar with the applicable jurisdictions before launch.
