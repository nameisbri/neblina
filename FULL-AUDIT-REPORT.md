# SEO Audit Report — neblina.tech

**Scope:** Single-page full audit
**Date:** 2026-03-07
**URL:** https://neblina.tech
**Overall Score: 50/100 — Needs Improvement**

## Top 3 Issues

1. **Canonical URL mismatch** — Canonical is `https://neblina.tech` but site serves from `https://www.neblina.tech/` via 308 redirect. Search engines receive conflicting signals.
2. **Thin content** — Homepage has 436 words, below the 500-word minimum. No additional pages exist for services, case studies, or blog.
3. **Schema references non-existent page** — `founder.url` points to `/about` which returns 404.

## Top 3 Opportunities

1. **Add content pages** — Service pages, case studies, and blog posts would dramatically improve keyword coverage, internal linking, and E-E-A-T signals.
2. **Fix canonical/redirect alignment** — Either redirect www→non-www or update canonical to www.neblina.tech.
3. **Add security headers** — 5 missing headers affect security posture and can be added via `next.config.mjs`.

---

## Category Scores

| Category | Weight | Score | Weighted | Confidence |
|----------|--------|-------|----------|------------|
| Technical SEO | 25% | 41 | 10.3 | Confirmed |
| Content Quality | 20% | 46 | 9.2 | Confirmed |
| On-Page SEO | 15% | 53 | 8.0 | Confirmed |
| Schema / Structured Data | 15% | 53 | 8.0 | Confirmed |
| Performance (CWV) | 10% | 52 | 5.2 | Low (API rate-limited) |
| Image Optimization | 10% | 67 | 6.7 | Confirmed |
| AI Search Readiness (GEO) | 5% | 52 | 2.6 | Confirmed |
| **Overall** | **100%** | **50** | **50.0** | |

---

## Findings Table

### Technical SEO — 41/100

| Severity | Confidence | Finding | Evidence | Fix |
|----------|------------|---------|----------|-----|
| ⚠️ Warning | Confirmed | Canonical URL does not match served URL | Canonical: `https://neblina.tech`, served: `https://www.neblina.tech/` (308 redirect) | Either update canonical to `https://www.neblina.tech` or change DNS/hosting to redirect www→non-www |
| ⚠️ Warning | Confirmed | 5 security headers missing | CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy all absent | Add headers in `next.config.mjs` via `headers()` config |
| ⚠️ Warning | Confirmed | Zero internal links across the site | Internal links script found 0 internal links (single-page site) | Add dedicated pages (services, about, case studies) with cross-linking |
| ✅ Pass | Confirmed | HTTPS with HSTS enabled | `Strict-Transport-Security: max-age=63072000` | HSTS could add `includeSubDomains` directive |
| ✅ Pass | Confirmed | robots.txt properly configured | 200 status, sitemap reference, 5 user-agent rules | N/A |
| ✅ Pass | Confirmed | AI crawlers explicitly allowed | GPTBot, ClaudeBot, PerplexityBot, Google-Extended all have explicit allow rules | Consider adding ChatGPT-User, Applebot-Extended, Bytespider |
| ✅ Pass | Confirmed | No broken links | 5 links checked, 0 broken, 1 redirect | N/A |
| ✅ Pass | Confirmed | Clean redirect chain | Single 308 hop (206ms total) | N/A |

**Score justification:** Score of 41 reflects solid HTTPS/HSTS, clean robots.txt, and zero broken links (+), penalized by canonical mismatch (Warning, -5), missing security headers (Warning, -5), and zero internal links (Warning, -5). Base 55.6 - 15 = 41.

### Content Quality — 46/100

| Severity | Confidence | Finding | Evidence | Fix |
|----------|------------|---------|----------|-----|
| ⚠️ Warning | Confirmed | Homepage word count below minimum | 436 words (minimum: 500) | Expand philosophy, services, or process sections with more detail |
| ⚠️ Warning | Confirmed | No blog or thought leadership content | Site is a single page with no blog section | Create a blog with articles on product design, privacy-first development, case studies |
| ✅ Pass | Confirmed | Clear, unique value proposition | "Clarity through craft" tagline, detailed service descriptions, privacy-first positioning | N/A |
| ✅ Pass | Confirmed | E-E-A-T signals present | Founder identity (Gabriela Moreira), real project links (discloser.app), client testimonial with attribution (Abbey, Yellow Brolly) | N/A |
| ✅ Pass | Confirmed | Appropriate readability | Flesch-Kincaid grade 8.6, Flesch Reading Ease 53.5 | N/A |
| ✅ Pass | Confirmed | Unique, specific service copy | Each service description is distinct with concrete details, not generic filler | N/A |
| ℹ️ Info | Confirmed | Only 1 testimonial | Single quote from Abbey, Yellow Brolly | Collect more client testimonials |

**Score justification:** Score of 46 reflects strong unique content, clear E-E-A-T signals, and appropriate readability (+), penalized by below-minimum word count (Warning, -5) and no blog content (Warning, -5). Base 55.6 - 10 = 46.

### On-Page SEO — 53/100

| Severity | Confidence | Finding | Evidence | Fix |
|----------|------------|---------|----------|-----|
| ⚠️ Warning | Confirmed | Title tag exceeds 60 characters | 65 chars: "Neblina — Digital Product Studio \| Strategy, Design & Development" | Shorten to ~58 chars, e.g., "Neblina — Digital Product Studio \| Strategy & Design" |
| ⚠️ Warning | Confirmed | Canonical/redirect mismatch | Same as Technical SEO finding | Align canonical with served domain |
| ✅ Pass | Confirmed | Strong H1 with primary keywords | "Neblina— Digital Product Studio. Strategy, Design, and Privacy-First Development." | N/A |
| ✅ Pass | Confirmed | Clean heading hierarchy | H1→H2 (5 sections)→H3 (14 subsections), no skipped levels | N/A |
| ✅ Pass | Confirmed | All images have descriptive alt text | 11 images, all with context-rich alt text (e.g., "Discloser app dashboard showing health test results overview...") | N/A |
| ✅ Pass | Confirmed | Meta description within range | 137 chars, within 120-160 target | N/A |
| ✅ Pass | Confirmed | Canonical URL set | `<link rel="canonical" href="https://neblina.tech">` | N/A |

**Score justification:** Score of 53 reflects excellent heading structure, descriptive alt text, and proper meta description (+), penalized by title length (Warning, -5) and canonical mismatch (Warning, -5). Base 62.5 - 10 = 53.

### Schema / Structured Data — 53/100

| Severity | Confidence | Finding | Evidence | Fix |
|----------|------------|---------|----------|-----|
| ⚠️ Warning | Confirmed | Empty `sameAs` array | `"sameAs": []` in ProfessionalService schema | Add social profile URLs (LinkedIn, GitHub, etc.) |
| ⚠️ Warning | Confirmed | Founder URL returns 404 | `founder.url: "https://neblina.tech/about"` — page does not exist | Either create `/about` page or remove the URL property |
| ℹ️ Info | Confirmed | No `contactPoint` in schema | ProfessionalService lacks phone/email contact point | Add `contactPoint` with email/contact form URL |
| ✅ Pass | Confirmed | ProfessionalService schema well-structured | Includes @context, @type, @id, name, logo, description, foundingDate, founder, areaServed, knowsAbout, hasOfferCatalog | N/A |
| ✅ Pass | Confirmed | WebSite schema with publisher reference | Cross-referenced via `@id`, includes inLanguage | N/A |
| ✅ Pass | Confirmed | Service catalog properly defined | 3 services with Offer → Service structure | N/A |
| ✅ Pass | Confirmed | JSON-LD format used correctly | Both schemas use `<script type="application/ld+json">` | N/A |
| ✅ Pass | Confirmed | Founder Person entity included | Name, jobTitle, url (though URL 404s) | N/A |

**Score justification:** Score of 53 reflects well-structured ProfessionalService and WebSite schemas with proper cross-referencing (+), penalized by empty sameAs (Warning, -5) and 404 founder URL (Warning, -5). Base 62.5 - 10 = 53.

### Performance (CWV) — 52/100 (Score confidence: Low)

| Severity | Confidence | Finding | Evidence | Fix |
|----------|------------|---------|----------|-----|
| ⚠️ Warning | Likely | Heavy client-side visual effects may impact performance | 5 dynamic imports with `ssr: false`: StarField, FogSystem, InteractiveFog, ParticleCanvas, Moon — all render canvas/DOM elements | Consider reducing effects on mobile or providing reduced-motion alternative |
| ✅ Pass | Confirmed | Visual effects properly lazy-loaded | All 5 effects use `dynamic()` with `ssr: false` | N/A |
| ✅ Pass | Confirmed | Images use Next.js optimization with lazy loading | All images served via `/_next/image` with `loading="lazy"` | N/A |
| ✅ Pass | Confirmed | Fonts use `display: 'swap'` | Both DM Sans and Cormorant Garamond configured with `display: 'swap'` | N/A |
| ✅ Pass | Confirmed | Analytics loaded after interaction | Google Analytics uses `strategy="afterInteractive"` | N/A |
| ℹ️ Info | — | CWV values unavailable | PageSpeed API rate-limited during audit | Re-run `pagespeed.py` or check PageSpeed Insights manually |

**Score justification:** Score of 52 reflects good lazy-loading, font swap, and deferred analytics (+), penalized by heavy visual effects burden (Warning, -5). CWV data missing limits confidence. Base 57.1 - 5 = 52.

### Image Optimization — 67/100

| Severity | Confidence | Finding | Evidence | Fix |
|----------|------------|---------|----------|-----|
| ✅ Pass | Confirmed | All images have descriptive alt text | 11/11 images with context-rich descriptions | N/A |
| ✅ Pass | Confirmed | Next.js image optimization active | Images served via `/_next/image` with automatic format negotiation (WebP/AVIF) | N/A |
| ✅ Pass | Confirmed | Lazy loading on all images | All images have `loading="lazy"` | N/A |
| ✅ Pass | Confirmed | Width/height set preventing CLS | All images have explicit `width` and `height` attributes | N/A |
| ℹ️ Info | Confirmed | Image quality set to 75 | `q=75` in image URLs — reasonable default | Could test `q=65` for smaller file sizes without visible quality loss |
| ℹ️ Info | Confirmed | OG image uses dynamic generation | `/opengraph-image` route generates OG image dynamically via `opengraph-image.tsx` | N/A |

**Score justification:** Score of 67 reflects complete alt text coverage, proper lazy loading, CLS prevention, and Next.js optimization (+). No critical or warning-level deficits. Base 66.7 with no penalties = 67.

### AI Search Readiness (GEO) — 52/100

| Severity | Confidence | Finding | Evidence | Fix |
|----------|------------|---------|----------|-----|
| ⚠️ Warning | Confirmed | llms.txt contains zero links | Quality score 70/100, 5 sections but 0 links | Add key page links to llms.txt |
| ✅ Pass | Confirmed | llms.txt and llms-full.txt present | Both files return 200, structured content about the studio | N/A |
| ✅ Pass | Confirmed | AI crawlers allowed in robots.txt | GPTBot, ClaudeBot, PerplexityBot, Google-Extended explicitly allowed | N/A |
| ✅ Pass | Confirmed | Clear, structured content for LLM parsing | Well-organized headings, concise service descriptions, entity-rich schema | N/A |
| ✅ Pass | Confirmed | Schema provides entity context | ProfessionalService with knowsAbout, services, founder — helps AI systems understand the business | N/A |
| ℹ️ Info | Confirmed | 7 AI crawlers not explicitly managed | ChatGPT-User, Applebot-Extended, Bytespider, CCBot, anthropic-ai, FacebookBot, Amazonbot | Add explicit rules if you want to control access |

**Score justification:** Score of 52 reflects strong AI readiness foundation with llms.txt, allowed crawlers, and entity-rich schema (+), penalized by no links in llms.txt (Warning, -5). Base 57.1 - 5 = 52.

---

## Social Meta

| Element | Status | Value |
|---------|--------|-------|
| og:title | ⚠️ 65 chars (max 60) | Neblina — Digital Product Studio \| Strategy, Design & Development |
| og:description | ✅ | Product studio. We design and build privacy-first digital products. |
| og:image | ✅ 1200x630 | Dynamic OG image via opengraph-image route |
| og:url | ✅ | https://neblina.tech |
| og:type | ✅ | website |
| og:site_name | ✅ | Neblina |
| og:locale | ✅ | en |
| twitter:card | ✅ | summary_large_image |
| twitter:title | ✅ | Neblina — Digital Product Studio |
| twitter:description | ✅ | Product studio. Strategy, design, and privacy-first development. |
| twitter:image | ✅ | /og-image.png |
| twitter:site | ℹ️ Missing | Optional — add if you have a Twitter/X account |
| twitter:creator | ℹ️ Missing | Optional — add if you have a Twitter/X account |

**Social meta score: 85/100**

---

## Redirect Analysis

| Hop | Status | URL | Type |
|-----|--------|-----|------|
| 1 | 308 | https://neblina.tech → https://www.neblina.tech/ | Permanent |
| Final | 200 | https://www.neblina.tech/ | OK |

Single-hop redirect, 206ms total. The redirect itself is clean, but the direction conflicts with the canonical URL.

---

## Environment Limitations

- **Core Web Vitals:** PageSpeed Insights API was rate-limited during this audit. CWV scores (LCP, INP, CLS) could not be measured. Performance score confidence is Low.
- **Visual analysis:** Screenshot capture was not performed (Playwright not available in this environment).

---

## Unknowns and Follow-ups

| Item | What's Missing | How to Collect |
|------|---------------|----------------|
| Core Web Vitals | LCP, INP, CLS measurements | Run `pagespeed.py` when API is available, or check [PageSpeed Insights](https://pagespeed.web.dev/) directly |
| Google Search Console | Indexing status, crawl errors, search performance | Connect GSC and review coverage report |
| OG image rendering | Visual check of OG image preview | Test at [opengraph.xyz](https://www.opengraph.xyz/) |
| Logo.png existence | Schema references `/logo.png` | Verify the file exists at `https://neblina.tech/logo.png` |
| Favicon files | Manifest references icon.svg, apple-touch-icon.png | Verify all referenced icon files exist |
