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
- [x] **Biography, founder story, and career timeline**: `src/app/about/page.tsx` and
      `src/lib/timeline.ts` now reflect the real background (Biochemistry at Olusegun Agagu University of
      Science and Technology, self-taught cybersecurity, software engineering, Still, NEARR, SamSec,
      SamSec Ops). Timeline phases are intentionally generic rather than dated, per direction given.
- [x] **NEARR project details**: `src/lib/projects.ts` and `src/app/projects/nearr/page.tsx` now carry the
      real product case study (the problem, the design philosophy, and the lessons carried into SamSec).
- [x] **SamSec Ops current capabilities**: `src/app/samsec-ops/page.tsx` now separates what's actually
      live today (five capabilities, iOS only) from the long-term roadmap, per direction given.
- [x] **Professional portrait**: `public/images/samuel-omobusuyi.webp` is the real headshot, background
      removed and composited so it sits directly on the page background instead of a placeholder box.
      Used in the homepage hero, About page, and the `Person` JSON-LD schema.
- [x] **GitHub**: `person.sameAs` and `social.github` in `site.config.ts` now point to
      `github.com/bcode73`.
- [x] **LinkedIn**: `person.sameAs` in `site.config.ts` now points to `linkedin.com/in/samsecai`.
- [x] **Organization founding date**: `organization.foundingDate` in `site.config.ts` is set to 2025.

## Speaking & Press

- [ ] `src/lib/speaking.ts` and `src/lib/press.ts` are intentionally empty (no fabricated engagements or
      coverage). Add real entries as they're confirmed. The pages already render them once present.

## Open Source

- [ ] `src/lib/open-source.ts` is intentionally empty. It previously listed invented repository names;
      those were removed since they weren't real. Add real entries once repositories are published; the
      page and homepage section render an honest empty state until then.

## Search engine & analytics verification

- [ ] **Google Search Console**: replace `GOOGLE_SITE_VERIFICATION_PLACEHOLDER` in `src/app/layout.tsx`
      (`metadata.verification.google`) with the real verification code.
- [ ] **Bing Webmaster Tools**: replace `BING_SITE_VERIFICATION_PLACEHOLDER` in the same block
      (`verification.other["msvalidate.01"]`).
- [ ] **Cloudflare Web Analytics**: set `NEXT_PUBLIC_CF_BEACON_TOKEN` (build-time env var) to enable the
      beacon script in `src/components/CloudflareAnalytics.tsx`. It renders nothing until set.

## Forms & Cloudflare Worker secrets

The contact form and newsletter signup are fully built (`src/components/ContactForm.tsx`,
`src/components/NewsletterForm.tsx`, `worker/contact.ts`, `worker/subscribe.ts`) but return
`501 Not Configured` until these Worker secrets are set (`wrangler secret put <NAME>` or the dashboard):

- [ ] `RESEND_API_KEY`, or swap the implementation for a different email provider.
- [ ] `CONTACT_TO_EMAIL`: inbox that should receive contact form submissions.
- [ ] `RESEND_AUDIENCE_ID`: newsletter audience ID for subscribe requests.
- [ ] `TURNSTILE_SECRET_KEY` and `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Cloudflare Turnstile is wired into the
      backend (`worker/utils.ts#verifyTurnstile`) but the widget isn't yet mounted in `ContactForm.tsx`.
      Once both keys exist, add the Turnstile script and widget to the form and pass its token through as
      `turnstileToken`.

## Deployment

- [x] The site deploys as a Cloudflare Worker with static assets (not a classic Pages project) connected
      to the `main` branch via the dashboard's Git integration, with automatic deployments enabled. Every
      push to `main` builds and deploys on its own.
- [x] Build command `npm run build`, deploy command `npx wrangler deploy`, Node version 22, and the
      build/deploy API token's **Account > Workers Scripts > Edit** permission are all set correctly. See
      the README's deployment section if any of this needs revisiting.
- [ ] Move the `samsec.com.ng` custom domain from wherever it's currently attached onto this Worker
      project, if it isn't already.
- [ ] Confirm `src/lib/site.config.ts#url` (`https://samsec.com.ng`) matches the final production domain.
      It's used as the canonical base for every absolute URL, the sitemap, and all JSON-LD.

## Visual assets

- [ ] **SamSec Ops screenshots**: `src/components/product/ScreenshotFrame.tsx` renders styled placeholder
      frames on the `/samsec-ops` page. Screenshots of the current iOS app were mentioned as forthcoming
      but haven't been supplied yet. Once they are, replace the placeholder frames with real screenshots,
      framed in a device mockup, with captions.
- [ ] **Logo and favicon**: `public/favicon.svg` and `public/images/samsec-logo.svg` use a generic
      monogram mark. Replace with real brand assets if a wordmark or logo already exists.

## Legal

- [ ] `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` are complete, reasonable drafts. They cover
      data collected, Cloudflare sub-processors, retention, and NDPR-aware rights language, but they are
      not a substitute for review by counsel familiar with the applicable jurisdictions before launch.
