# SEO Action Plan — neblina.tech

**Generated:** 2026-03-07
**Current Score:** 50/100 (Needs Improvement)
**Target Score:** 70+ (Good)

---

## 1. Immediate Fixes (This Week)

### 1.1 Fix Canonical/Redirect Mismatch
- **Impact:** High | **Effort:** Low | **Type:** Quick win
- **Issue:** Canonical is `https://neblina.tech` but site redirects to `https://www.neblina.tech/`
- **Fix options (pick one):**
  - **Option A (recommended):** Update Vercel/DNS to redirect `www.neblina.tech` → `neblina.tech` (matching the canonical)
  - **Option B:** Update all canonical references in `layout.tsx`, `sitemap.ts`, `robots.ts`, and `JsonLd.tsx` to use `https://www.neblina.tech`
- **Files:** `src/app/layout.tsx:8`, `src/app/sitemap.ts:3`, `src/app/robots.ts:3`, `src/components/seo/JsonLd.tsx:1`

### 1.2 Shorten Title Tag
- **Impact:** Medium | **Effort:** Low | **Type:** Quick win
- **Issue:** 65 chars, Google truncates at ~60
- **Fix:** Change to `Neblina — Product Studio | Strategy, Design & Development` (56 chars) or similar
- **File:** `src/app/layout.tsx:26`

### 1.3 Fix Schema — Remove 404 Founder URL
- **Impact:** Medium | **Effort:** Low | **Type:** Quick win
- **Issue:** `founder.url` points to `/about` which returns 404
- **Fix:** Remove the `url` property from the founder object until an `/about` page exists
- **File:** `src/components/seo/JsonLd.tsx:20`

### 1.4 Add Social Profiles to Schema
- **Impact:** Medium | **Effort:** Low | **Type:** Quick win
- **Issue:** `sameAs: []` — empty array provides no entity signals
- **Fix:** Add LinkedIn, GitHub, and any other social profile URLs
- **File:** `src/components/seo/JsonLd.tsx:69`

---

## 2. Quick Wins (This Month)

### 2.1 Add Security Headers
- **Impact:** Medium | **Effort:** Low | **Type:** Quick win
- **Fix:** Add `headers()` config to `next.config.mjs`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}
export default nextConfig
```

### 2.2 Expand Homepage Content to 500+ Words
- **Impact:** Medium | **Effort:** Low | **Type:** Quick win
- **Issue:** 436 words, below 500-word minimum
- **Fix:** Add 65+ words to philosophy, process, or services sections. Focus on demonstrating expertise (E-E-A-T).

### 2.3 Add Links to llms.txt
- **Impact:** Low | **Effort:** Low | **Type:** Quick win
- **Issue:** llms.txt has 0 links, limiting AI search crawlers
- **Fix:** Add key links to services, projects, and contact sections

### 2.4 Add contactPoint to Schema
- **Impact:** Low | **Effort:** Low | **Type:** Quick win
- **Fix:** Add to ProfessionalService schema in `JsonLd.tsx`:
```json
"contactPoint": {
  "@type": "ContactPoint",
  "contactType": "customer service",
  "url": "https://neblina.tech/#contact"
}
```

---

## 3. Strategic Improvements (Next Quarter)

### 3.1 Create Dedicated Service Pages
- **Impact:** High | **Effort:** High | **Type:** Strategic
- **Why:** Single-page sites inherently limit keyword targeting, internal linking, and content depth
- **Create pages for:**
  - `/services/product-design`
  - `/services/mobile-development`
  - `/services/web-development`
  - `/services/automation`
- **Each page should:** 800+ words, unique content, internal links, service-specific schema

### 3.2 Create an About Page
- **Impact:** High | **Effort:** Medium | **Type:** Strategic
- **Why:** Strengthens E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), allows schema founder URL to work, builds entity authority
- **Include:** Founder story, team experience, values, process

### 3.3 Launch a Blog
- **Impact:** High | **Effort:** High | **Type:** Strategic
- **Why:** Thought leadership content drives organic traffic, builds E-E-A-T, and creates internal linking opportunities
- **Topic ideas:**
  - Privacy-first development practices
  - React Native development insights
  - Product design case studies
  - Brand strategy frameworks

### 3.4 Create Detailed Case Studies
- **Impact:** High | **Effort:** Medium | **Type:** Strategic
- **Why:** Demonstrates experience (the first E in E-E-A-T), provides long-form content, creates internal linking
- **For each project:** Process, challenges, solutions, outcomes, client quotes

### 3.5 Collect More Testimonials
- **Impact:** Medium | **Effort:** Low | **Type:** Maintenance
- **Why:** Multiple testimonials strengthen trust signals
- **Goal:** 3-5 testimonials with full names and companies

---

## 4. Monitoring & Maintenance

- [ ] Connect Google Search Console and monitor indexing
- [ ] Run PageSpeed Insights when API is available (check CWV)
- [ ] Verify all referenced files exist (logo.png, icon.svg, apple-touch-icon.png, site.webmanifest)
- [ ] Test OG image preview at opengraph.xyz
- [ ] Re-run this audit after implementing the fixes above

---

## Score Impact Estimates

| Action | Estimated Score Impact |
|--------|----------------------|
| Fix canonical/redirect | +3-5 |
| Shorten title tag | +2-3 |
| Fix schema issues | +3-5 |
| Add security headers | +3-5 |
| Expand homepage to 500+ words | +2-3 |
| Add service pages + internal links | +8-12 |
| Create about page | +3-5 |
| Launch blog with 5+ articles | +5-8 |
| **Total potential** | **~29-46 points → Score 75-95** |
