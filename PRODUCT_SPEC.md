# Neblina Digital Inc. — Landing Page Product Specification
**Version:** 1.0
**Date:** February 2, 2026
**Status:** Discovery → Development Ready

---

## Product Vision Summary

Create an immersive, emotionally resonant landing page for Neblina Digital Inc. that positions the company as a privacy-first software studio with a distinctly human, mystical sensibility. The experience should feel like walking through morning mist at blue hour — quiet, intimate, and subtly powerful. Visitors should leave feeling intrigued and inspired, having experienced something memorable that sets Neblina apart from typical tech consultancies.

**Design Philosophy:** "Discover the visual identity through building" — this specification provides creative guardrails while encouraging iteration and experimentation during implementation.

---

## Success Metrics

### Primary KPIs
1. **Emotional Resonance**: 80%+ of user testing participants use words like "peaceful," "mysterious," "intriguing," or "different" when describing first impression
2. **Engagement Quality**: Average time on page >45 seconds (indicating immersive experience, not quick bounce)
3. **Performance**: Lighthouse performance score >85 on desktop, >75 on mobile (despite rich visual effects)
4. **Contact Intent**: Click-through rate on CTA >15% (high intent, qualified leads)
5. **Technical Accessibility**: Zero critical WCAG 2.1 AA violations, prefers-reduced-motion fully supported

### Secondary Metrics
- Time to First Contentful Paint <1.5s
- Scroll depth: 60%+ of visitors reach project spotlight section
- Return visitor rate (curiosity to explore again)
- Mobile completion rate (experience translates to smaller screens)

---

## Target Audience

### Primary
- **Startup founders / Product leaders** seeking thoughtful, privacy-first development partners
- **Creative agencies** needing technical implementation partners who understand design
- Age: 28-45, values-driven, appreciates craft and intention

### Secondary
- **Potential collaborators** (designers, developers) attracted to the aesthetic and philosophy
- **Curious browsers** from the owner's network (Twitter, design communities)

---

## MVP Definition

The absolute minimum to launch while achieving the core emotional impact:

**Must Have (Sprint 1-2):**
- [ ] Hero section with animated mist effect (even if single-layer initially)
- [ ] Company name, tagline, and minimal value proposition
- [ ] 2-3 dewlight particles responding to cursor (can be 2D before 3D optimization)
- [ ] One parallax layer working smoothly
- [ ] Services section (simple list, can be text-only)
- [ ] Contact CTA with hover state
- [ ] Responsive layout (mobile shows simplified, performant version)
- [ ] Reduced-motion fallback (static fog gradient background)
- [ ] Blue hour color palette applied throughout

**Nice to Have (Sprint 3):**
- [ ] Full multi-layer parallax depth
- [ ] Discloser project spotlight with visual
- [ ] Scroll-triggered content reveals
- [ ] 3D particle system optimization
- [ ] Subtle moon/celestial element
- [ ] Micro-interactions (link hovers, button animations)

**Future Enhancements (Post-MVP):**
- About/philosophy section
- Case study pages
- Blog integration
- Portuguese language toggle
- Seasonal/lunar phase variants of the mist
- Sound design (optional ambient audio)

---

## Epic Breakdown

### Epic 1: Foundational Infrastructure (Priority: P0, Effort: M)
**Business Value:** Enable rapid iteration and maintainable codebase

**User Story:**
As a developer, I need a solid Next.js foundation with proper TypeScript configuration, so that I can build features confidently without fighting tooling.

**Tasks:**
- Initialize Next.js 14+ project with TypeScript and App Router
- Configure Tailwind CSS with custom blue hour color palette
- Set up GSAP, Framer Motion, Three.js (react-three-fiber) dependencies
- Create basic component structure (Header, Footer, Section wrappers)
- Implement responsive breakpoint system
- Set up performance monitoring (web-vitals)

**Acceptance Criteria:**
- Project runs locally with `npm run dev`
- TypeScript compiles without errors
- Tailwind custom colors accessible via theme
- Component hot-reload works smoothly
- Build completes successfully

---

### Epic 2: The Veil — Atmospheric Foundation (Priority: P0, Effort: L)
**Business Value:** Deliver the core "wow" moment that differentiates Neblina

**User Story:**
As a first-time visitor, I want to feel immersed in a mystical fog environment when I land on the page, so that I immediately understand this company is different and intentional.

**Tasks:**
- Research and prototype fog rendering approaches (CSS gradients vs. Three.js vs. hybrid)
- Implement multi-layer fog effect with parallax scrolling
- Create blue hour color system (deep blue-violet #1a1a2e, slate #374151, silver accents #cbd5e1)
- Add subtle depth cues (opacity variations, blur)
- Implement scroll-linked fog parallax (foreground moves faster than background)
- Optimize rendering performance (use will-change, GPU acceleration)
- Create reduced-motion fallback (static gradient)

**Acceptance Criteria:**
- [ ] Visual: Visitor feels "inside" the mist, not looking at a flat image
- [ ] Motion: Foreground fog moves noticeably faster than background when scrolling (parallax effect is clear)
- [ ] Performance: No jank on 60Hz displays, maintains 30fps minimum on mobile
- [ ] Accessibility: Respects `prefers-reduced-motion: reduce` (fog becomes static gradient)
- [ ] Cross-browser: Works on Chrome, Safari, Firefox (latest 2 versions)

---

### Epic 3: Dewlight — Points of Luminosity (Priority: P0, Effort: M)
**Business Value:** Add magic and interactivity that invites exploration

**User Story:**
As a curious visitor, I want to interact with subtle light particles that respond to my presence, so that I feel like an active participant in the experience.

**Tasks:**
- Design dewdrop particle visual (soft glow, slight bokeh effect)
- Implement particle system (start with 2D Canvas or WebGL)
- Add cursor proximity detection (particles gently drift toward cursor)
- Scatter particles throughout viewport at varied depths
- Implement subtle animation loop (gentle floating, pulsing luminosity)
- Test performance with 20-50 particles
- Add mobile touch equivalent (particles respond to scroll position)

**Acceptance Criteria:**
- [ ] Visual: Particles look like dewdrops caught in fog, not generic dots
- [ ] Interaction: Particles subtly bend toward cursor within ~150px radius
- [ ] Performance: Particle animation stays above 50fps with 30+ particles
- [ ] Mobile: Touch-friendly alternative behavior (no hover required)
- [ ] Reduced motion: Particles present but static, no cursor interaction

---

### Epic 4: Content Architecture & Narrative Flow (Priority: P0, Effort: M)
**Business Value:** Communicate what Neblina does and drive contact conversions

**User Story:**
As a potential client, I want to quickly understand what Neblina offers and how to get in touch, so that I can decide if they're the right partner for my project.

**Tasks:**
- Write microcopy for all sections (tagline, service descriptions, CTA)
- Design hero section layout (name, tagline, scroll indicator)
- Create "What We Do" section (4 service pillars with icons/text)
- Design Discloser project spotlight (image, description, link)
- Create contact CTA section (email, form, or calendar link)
- Implement scroll-triggered content reveals (fade up as sections enter viewport)
- Add smooth scroll behavior
- Design footer (copyright, social links if applicable)

**Acceptance Criteria:**
- [ ] Clarity: First-time visitors can explain what Neblina does within 10 seconds
- [ ] Hierarchy: Visual flow guides eye from hero → services → project → contact
- [ ] CTA: Contact button/link is obvious and accessible (keyboard navigation)
- [ ] Copywriting: Tone is warm, confident, slightly mystical (not corporate jargon)
- [ ] Animation: Content reveals feel organic, not distracting (200-400ms duration)

---

### Epic 5: Polish & Performance Optimization (Priority: P1, Effort: M)
**Business Value:** Ensure experience is fast, accessible, and bug-free

**User Story:**
As any visitor, I want the page to load quickly and work on my device, so that I can experience the intended vision regardless of my hardware or connection.

**Tasks:**
- Optimize asset loading (lazy load below-fold content, use WebP/AVIF images)
- Implement loading state (simple fade-in, no spinner unless necessary)
- Test across devices (iPhone, Android, tablet, desktop, large monitors)
- Audit with Lighthouse, fix performance issues
- Test with screen readers (NVDA, VoiceOver)
- Add meta tags, Open Graph, favicon
- Implement analytics (privacy-respecting, e.g., Plausible or Fathom)
- Cross-browser testing and bug fixes

**Acceptance Criteria:**
- [ ] Performance: Lighthouse score >85 desktop, >75 mobile
- [ ] Accessibility: Axe DevTools shows zero critical issues
- [ ] Compatibility: Works on iOS Safari, Chrome Android, desktop browsers (latest 2 versions)
- [ ] Load time: Time to Interactive <3s on 4G connection
- [ ] Visual: No layout shift (CLS <0.1)

---

## Sprint Plan

### Sprint 1 (Weeks 1-2): Foundation + First Mist
**Goal:** Get something atmospheric on screen that we can start refining

**Stories:**
1. **[Epic 1]** Initialize Next.js project with all dependencies (2 points)
2. **[Epic 1]** Set up Tailwind with custom blue hour palette (1 point)
3. **[Epic 2]** Prototype fog effect (research + implement simplest viable version) (5 points)
4. **[Epic 4]** Create hero section with name and placeholder tagline (2 points)
5. **[Epic 2]** Implement basic parallax scroll for one fog layer (3 points)

**Sprint Review Success Criteria:**
- Hero section visible with company name
- At least one layer of animated fog responding to scroll
- Color palette feels blue hour (deep blues, slate, hints of silver)
- Page is deployed to Vercel/Netlify for stakeholder review

**Risks & Mitigation:**
- **Risk:** Fog effect is too performance-heavy
  - **Mitigation:** Start with CSS gradients + simple transforms; escalate to Three.js only if needed
- **Risk:** Parallax feels janky
  - **Mitigation:** Use requestAnimationFrame, test throttling scroll events

---

### Sprint 2 (Weeks 3-4): Dewlight + Content Structure
**Goal:** Add interactivity and lay out all main sections

**Stories:**
1. **[Epic 3]** Design and implement dewdrop particles (start with 10 particles, 2D) (5 points)
2. **[Epic 3]** Add cursor proximity interaction (3 points)
3. **[Epic 4]** Write final copy for tagline, services, CTA (1 point)
4. **[Epic 4]** Build "What We Do" section layout (2 points)
5. **[Epic 4]** Add scroll-triggered fade-in animations for sections (2 points)
6. **[Epic 2]** Add second parallax fog layer for depth (3 points)

**Sprint Review Success Criteria:**
- Particles respond to cursor hover
- All main sections present with real copy
- Scroll reveals feel smooth and intentional
- Two fog layers create noticeable depth

**Risks & Mitigation:**
- **Risk:** Particle interaction conflicts with scroll performance
  - **Mitigation:** Debounce cursor tracking, use CSS transforms only
- **Risk:** Copy doesn't match visual tone
  - **Mitigation:** Review with owner, iterate quickly (copy is cheap to change)

---

### Sprint 3 (Weeks 5-6): Project Spotlight + Optimization
**Goal:** Feature Discloser app, polish everything, launch

**Stories:**
1. **[Epic 4]** Design Discloser project spotlight section (3 points)
2. **[Epic 4]** Implement contact CTA (button/form) (2 points)
3. **[Epic 5]** Mobile responsive optimization (all sections) (5 points)
4. **[Epic 5]** Implement reduced-motion fallbacks (2 points)
5. **[Epic 5]** Performance audit and optimization (3 points)
6. **[Epic 5]** Accessibility audit and fixes (2 points)
7. **[Epic 2]** Add subtle moon element in distance (if time permits) (3 points)

**Sprint Review Success Criteria:**
- Discloser section showcases the app compellingly
- Page works beautifully on iPhone and Android
- Lighthouse score >85 desktop, >75 mobile
- Reduced-motion users get a lovely, calm experience (no motion sickness)
- Ready to share publicly

**Risks & Mitigation:**
- **Risk:** Mobile performance tanks with all effects
  - **Mitigation:** Reduce particle count on mobile, simplify fog to 1-2 layers
- **Risk:** Project spotlight needs custom imagery not yet available
  - **Mitigation:** Use placeholder or Discloser app icon + strong copy

---

## Future Roadmap Considerations (Post-MVP)

### Phase 2: Depth & Identity (Months 2-3)
- **About/Philosophy section**: Tell the story behind "Neblina," connect to Portuguese roots
- **Case study template**: Expand on Discloser and future projects
- **Enhanced interactions**: More sophisticated particle system (Three.js optimization), moon phases that change over time
- **Portuguese language toggle**: i18n for bilingual experience

### Phase 3: Content & Community (Months 4-6)
- **Blog/writing section**: Thoughts on privacy, design, technology
- **Newsletter signup**: Build audience interested in Neblina's perspective
- **Project archive**: Portfolio of past work (if applicable)
- **Seasonal variants**: Summer morning mist vs. autumn fog vs. winter frost

### Phase 4: Advanced Features (6+ months)
- **Sound design**: Optional ambient audio (toggle on/off)
- **WebGL enhancement**: Full 3D fog volume rendering for high-end devices
- **Micro-site for Discloser**: Dedicated subpage or subdomain
- **Client portal**: If services scale, private project access

---

## Page Structure & Section Specifications

### Section 1: Hero — "Into the Mist"
**Purpose:** Immediate emotional impact, establish tone, present identity

**Content:**
- Company name: "Neblina Digital Inc." (large, elegant typography)
- Tagline: *[TBD during Sprint 1, ~5-10 words suggesting privacy, craft, clarity]*
  - Examples to explore:
    - "Clarity through the mist"
    - "Building with intention, not algorithms"
    - "Privacy-first products for a thoughtful web"
- Subtle scroll indicator (animated arrow or "explore" text)

**Visual Elements:**
- Full-viewport height
- Densest fog layer concentration (visitor is deep in the mist)
- 5-10 dewlight particles scattered
- Centered text with subtle fade-in on load
- Moon or celestial element barely visible in upper distance (optional)

**Interactions:**
- Particles respond to cursor
- Fog parallaxes slightly even on small scroll (encourages engagement)
- Scroll indicator pulses gently

**Technical Notes:**
- Use semantic HTML: `<header>` with `<h1>` for company name
- Ensure text has sufficient contrast against fog (4.5:1 minimum)
- Fog should be CSS/WebGL, not a static image (for resolution independence)

**Acceptance Criteria:**
- [ ] First impression: "Wow, this is different"
- [ ] Readability: Company name and tagline are immediately legible
- [ ] Performance: Hero renders in <1s on 4G connection

---

### Section 2: What We Do — "The Clearing"
**Purpose:** Communicate services clearly, build credibility

**Content:**
- Section heading: "What We Do" or "Services" (consider softer phrasing like "How We Can Help")
- 4 service pillars (each with icon or simple visual + 2-3 sentence description):
  1. **Privacy-First Mobile Development**
     *We build iOS and Android apps that respect user data and earn trust. Currently launching Discloser, our own privacy-focused app.*

  2. **Product Design & Development**
     *End-to-end product creation, from concept to launch. We move between strategy, design, and code fluently.*

  3. **Technology Consulting**
     *Strategic guidance for startups and agencies navigating technical decisions. We help you build the right thing, not just anything.*

  4. **Web Development**
     *Custom websites and web applications with a focus on performance, accessibility, and lasting quality.*

**Visual Elements:**
- Fog clears slightly (more transparent, suggesting emergence into clarity)
- 2-column or 4-column grid (responsive to 1-column on mobile)
- Icons or small illustrations (keep them minimal, not stock/generic)
- Subtle fade-up animation as section enters viewport

**Interactions:**
- Hover state on each service tile (slight glow or border)
- Particles continue drifting in background

**Technical Notes:**
- Use `<section>` with proper heading hierarchy (`<h2>` for section, `<h3>` for services)
- Lazy-load any images/icons below the fold

**Acceptance Criteria:**
- [ ] Clarity: Visitor can list 2-3 services Neblina offers after reading
- [ ] Tone: Copy feels confident but not salesy, warm but professional
- [ ] Visual: Transition from dense hero fog to clearer atmosphere is noticeable

---

### Section 3: Current Project Spotlight — "The Path Forward"
**Purpose:** Showcase real work, build trust, invite curiosity

**Content:**
- Section heading: "Current Project: Discloser" or "Featured Work"
- Brief description of Discloser (3-4 sentences):
  - What it is (privacy-focused iOS app)
  - Who it's for (users who value control over their data)
  - Status (launching soon / in beta / available now)
- CTA: "Learn More" or "Follow Launch" (links to Discloser site, App Store, or waitlist)
- Visual: App icon, screenshot, or mockup

**Visual Elements:**
- Medium fog (not as dense as hero, not as clear as services)
- Image positioned prominently (left or right, with text wrapping)
- Particles cluster slightly around the image (drawing eye)
- Subtle shadow or glow on the app visual

**Interactions:**
- Hover on "Learn More" button (glow effect, cursor follows)
- Image parallax (moves at different speed than text when scrolling)

**Technical Notes:**
- Optimize image (WebP/AVIF, lazy-loaded)
- Use `<figure>` and `<figcaption>` if appropriate
- Ensure link is keyboard accessible with visible focus state

**Acceptance Criteria:**
- [ ] Interest: Visitor understands what Discloser is and feels curious
- [ ] CTA clarity: "Learn More" link is obvious and inviting
- [ ] Visual hierarchy: Discloser visual stands out from fog/particles

---

### Section 4: Contact / CTA — "The Invitation"
**Purpose:** Convert interest into outreach, make contact feel approachable

**Content:**
- Section heading: "Let's Talk" or "Start a Conversation"
- Brief invitation (2-3 sentences):
  - *"Working with Neblina means partnering with a studio that cares about craft, privacy, and intention. Whether you're building something new or need a trusted technical partner, we'd love to hear from you."*
- Contact method:
  - **Option A:** Email link (hello@neblina.digital or similar)
  - **Option B:** Simple form (name, email, message)
  - **Option C:** Calendar booking link (Calendly, etc.)

**Visual Elements:**
- Fog slightly thicker again (returning to the mist, closing the loop)
- CTA button or link with strong visual weight (soft glow, larger size)
- Particles gather around the CTA (drawing attention)

**Interactions:**
- Button hover: Glow intensifies, particles pulse
- Form (if used): Smooth focus states, inline validation
- Success message after form submit (gentle fade-in)

**Technical Notes:**
- Use semantic button/link with proper ARIA labels
- Form should be accessible (labels, error messages)
- Consider spam protection (honeypot, reCAPTCHA if necessary)

**Acceptance Criteria:**
- [ ] Approachability: Visitor feels welcome to reach out (not intimidated)
- [ ] Functionality: Contact method works reliably (email opens, form submits)
- [ ] Visual: CTA stands out without being aggressive

---

### Section 5: Footer — "The Ground"
**Purpose:** Provide legal/practical info, close experience gracefully

**Content:**
- Copyright: "© 2026 Neblina Digital Inc."
- Location: "Ontario, Canada"
- Optional: Privacy policy link, Terms (if needed)
- Optional: Social links (if Neblina has public profiles)

**Visual Elements:**
- Minimal fog, mostly dark background (the ground beneath the mist)
- Small, unobtrusive text
- Single-color typography (silver/slate)

**Interactions:**
- Links have simple underline on hover

**Technical Notes:**
- Use `<footer>` semantic element
- Keep minimal, don't distract from CTA above

**Acceptance Criteria:**
- [ ] Completeness: Legal bases covered (copyright, location)
- [ ] Unobtrusiveness: Doesn't compete with main content

---

## Interactive & Animated Element Specifications

### The Veil (Fog System)
**Concept:** Multi-layer, translucent fog creating real depth

**Implementation Approach:**
1. **Layer 1 (Foreground):** Large, soft gradient blobs with high opacity, faster parallax speed (1.5x scroll)
2. **Layer 2 (Midground):** Medium-sized shapes, medium opacity, normal scroll speed (1x)
3. **Layer 3 (Background):** Subtle, slow-moving shapes, low opacity, slower parallax (0.5x scroll)
4. **Base:** Deep blue-violet gradient background (#1a1a2e → #0f0f1e)

**Technical Stack:**
- **Prototype:** CSS gradients + transforms (fastest to implement)
- **Production:** Three.js with custom shader if CSS isn't atmospheric enough
- **Fallback:** Static gradient for reduced-motion

**Animation:**
- Parallax: Use scroll position to translate layers at different speeds
- Idle animation: Layers drift slowly even without scroll (1-2% scale pulse, 20s duration)
- Smooth: Use `transform: translate3d()` for GPU acceleration

**Color Palette:**
```css
/* Blue Hour Palette */
--fog-deep: #1a1a2e;       /* Darkest background */
--fog-mid: #374151;        /* Slate midtone */
--fog-light: #cbd5e1;      /* Silver highlights */
--accent-glow: #a5b4fc;    /* Soft blue-violet for particles */
```

**Performance Target:**
- 60fps on desktop, 30fps on mobile
- Use CSS `will-change: transform` sparingly
- Throttle scroll events to 16ms (60fps)

**Acceptance Criteria:**
- [ ] Depth: Clear visual difference between foreground, mid, and background
- [ ] Immersion: Visitor feels "inside" the mist, not looking at a flat layer
- [ ] Smoothness: No jank or stuttering during scroll
- [ ] Mood: Evokes blue hour, dusk, liminal feeling

---

### Dewlight (Particle System)
**Concept:** Scattered points of light (dewdrops caught in fog), responding to cursor

**Implementation Approach:**
1. **Prototype:** 2D Canvas with 15-20 particles
2. **Production:** Scale to 30-50 particles, potentially migrate to Three.js for 3D depth
3. **Mobile:** Reduce to 10-15 particles, simpler animation

**Particle Characteristics:**
- **Appearance:** Soft circular glow, slight bokeh blur, 8-16px diameter
- **Color:** Whitish-blue (#e0f2fe) with subtle alpha
- **Placement:** Scattered randomly across viewport, varied Z-depth (simulated via scale/blur)
- **Animation Loop:** Gentle float (sine wave, 3-5s cycle), subtle pulse (opacity 0.6-1.0)

**Interaction:**
- **Cursor Proximity:** When cursor within 150px, particle drifts toward cursor (easing: 0.05-0.1)
- **Distance Falloff:** Closer particles respond more strongly
- **Max Speed:** Particles move slowly (calm, not frantic)

**Mobile Behavior:**
- No cursor tracking (hover doesn't exist)
- Particles respond to scroll position (drift upward as user scrolls down)
- Reduce total count to maintain performance

**Technical Stack:**
- Canvas API or react-three-fiber
- RAF (requestAnimationFrame) for smooth animation loop
- Efficient distance calculation (avoid `sqrt()` if possible, use squared distance)

**Performance Target:**
- Maintain 50fps+ with 30 particles
- Profile with Chrome DevTools, optimize draw calls

**Acceptance Criteria:**
- [ ] Magic: Particles feel alive and responsive, not mechanical
- [ ] Subtlety: Interaction is gentle, not aggressive or distracting
- [ ] Performance: No frame drops during scroll + cursor movement
- [ ] Appearance: Particles look like dewdrops/light points, not generic dots

---

### Scroll-Triggered Reveals
**Concept:** Content fades/slides up as sections enter viewport

**Implementation:**
- Use Intersection Observer API (performant, native)
- Trigger animation when section is 20% visible
- Animation: `opacity: 0 → 1` + `transform: translateY(20px) → translateY(0)`
- Duration: 400ms, easing: `ease-out`

**Sections to Animate:**
- Services grid items (stagger by 100ms for each item)
- Project spotlight (single animation)
- Contact CTA

**Reduced-Motion:**
- Skip animations, content appears immediately

**Acceptance Criteria:**
- [ ] Smoothness: Animations feel organic, enhance reading flow
- [ ] Timing: Not too fast (jarring) or too slow (sluggish)
- [ ] Accessibility: Doesn't interfere with screen readers

---

### Parallax Scrolling
**Concept:** Layers move at different speeds to create depth

**Layers:**
- **Fog Layer 1 (Foreground):** 1.5x scroll speed (moves faster than page)
- **Fog Layer 2 (Midground):** 1.0x scroll speed (moves with page)
- **Fog Layer 3 (Background):** 0.5x scroll speed (moves slower, feels distant)
- **Content:** 1.0x scroll speed (normal)
- **Moon/celestial element (if present):** 0.3x scroll speed (barely moves)

**Implementation:**
- Track scroll position with RAF
- Apply `transform: translateY()` to each layer based on scroll * multiplier
- Use `position: fixed` or `absolute` for fog layers

**Performance:**
- Throttle calculations to 16ms (60fps)
- Use CSS `will-change: transform` only on active layers
- Test on mobile, disable parallax if FPS drops below 30

**Acceptance Criteria:**
- [ ] Depth: Parallax creates clear sense of foreground/background
- [ ] Smoothness: No jank, feels fluid
- [ ] Not overdone: Effect is noticeable but not nauseating

---

## Edge Cases & Considerations

### Mobile Experience
**Challenge:** Effects that work on desktop may tank mobile performance

**Solutions:**
- **Fog:** Reduce to 1-2 layers max
- **Particles:** Cap at 10-15, simpler animation (no cursor tracking)
- **Parallax:** Reduce multiplier or disable entirely if FPS <30
- **Images:** Serve smaller, optimized versions (responsive images with `srcset`)
- **Touch:** Test on real devices (iOS Safari, Chrome Android), not just browser DevTools

**Acceptance Criteria:**
- [ ] Performance: Maintains 30fps minimum on mid-range phone (iPhone 12, Pixel 5)
- [ ] Usability: All content accessible, no broken interactions
- [ ] Experience: Feels special even with simplified effects (not a "broken desktop site")

---

### Reduced Motion Preferences
**Challenge:** Users with vestibular disorders need motion-free experience

**Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  /* Disable all animations */
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Adjustments:**
- **Fog:** Replace animated layers with static gradient background
- **Particles:** Display as static points of light (no floating, no cursor interaction)
- **Parallax:** Disable entirely, everything scrolls normally
- **Scroll reveals:** Content appears immediately (no fade/slide)

**Acceptance Criteria:**
- [ ] Accessibility: Zero motion for users who request it
- [ ] Aesthetics: Static version still looks beautiful (not broken)
- [ ] Testing: Manually toggle `prefers-reduced-motion` and verify

---

### Performance on Low-End Devices
**Challenge:** Not everyone has a gaming GPU

**Strategies:**
- **Progressive Enhancement:** Start with minimal effects, add complexity for capable devices
- **Feature Detection:** Use `matchMedia` to detect high-refresh-rate displays, allocate more particles
- **Throttling:** If FPS drops below 40, automatically reduce particle count
- **Lazy Loading:** Don't render fog/particles until hero section is visible

**Monitoring:**
- Use `web-vitals` library to track FPS, CLS, LCP
- Set up performance budgets (max 500KB initial JS, max 1MB total page weight)

**Acceptance Criteria:**
- [ ] Graceful degradation: Site never "breaks," just simplifies
- [ ] Measurement: Performance metrics tracked in analytics

---

### Browser Compatibility
**Support Matrix:**
- **Primary:** Chrome, Safari, Firefox (latest 2 versions)
- **Secondary:** Edge, Samsung Internet
- **No support required:** IE11 (deprecated)

**Testing:**
- Use BrowserStack or manual testing across browsers
- Check for CSS feature support (e.g., `backdrop-filter` may need fallback)
- Ensure JavaScript features are supported or polyfilled

**Acceptance Criteria:**
- [ ] Core functionality works on all primary browsers
- [ ] Visual differences are acceptable (e.g., slight fog rendering variance)

---

### Screen Reader Accessibility
**Challenge:** Visual effects don't communicate to screen readers

**Requirements:**
- **Semantic HTML:** Use proper `<header>`, `<main>`, `<section>`, `<footer>`
- **Headings:** Logical hierarchy (`<h1>` → `<h2>` → `<h3>`)
- **Alt Text:** All images have descriptive alt attributes
- **Skip Link:** "Skip to main content" link at top for keyboard users
- **Focus Indicators:** Visible focus styles on all interactive elements
- **ARIA Labels:** Use sparingly, only where semantic HTML isn't enough

**Testing:**
- Test with NVDA (Windows), VoiceOver (macOS), TalkBack (Android)
- Navigate entire page using only keyboard (Tab, Enter, arrow keys)

**Acceptance Criteria:**
- [ ] Screen reader users can understand page structure and navigate efficiently
- [ ] All interactive elements are keyboard accessible with visible focus
- [ ] Zero critical Axe DevTools violations

---

### SEO & Metadata
**Requirements:**
- **Title:** "Neblina Digital Inc. — Privacy-First Software Development in Ontario"
- **Meta Description:** ~155 characters summarizing services and ethos
- **Open Graph:** Image (screenshot of hero fog), title, description for social sharing
- **Structured Data:** Organization schema (name, location, services)
- **Favicon:** Multi-resolution icons (16x16 to 192x192)

**Acceptance Criteria:**
- [ ] Preview looks good when shared on Twitter, LinkedIn, Slack
- [ ] Google Search Console shows no critical issues

---

## Copy & Microcopy Guidelines

### Tone of Voice
- **Warm, not cold:** Use "we" and "you," avoid corporate jargon
- **Confident, not arrogant:** Share expertise without talking down
- **Mystical, not cheesy:** Embrace the aesthetic but stay grounded
- **Clear, not vague:** Explain services plainly, mystery is visual not verbal

### Examples
**Good:**
- "We build apps that respect user privacy, not exploit it."
- "Let's talk about your project."
- "Currently launching Discloser, our privacy-focused iOS app."

**Avoid:**
- "Synergizing next-gen solutions for enterprise stakeholders." (too corporate)
- "Your digital dreams await in the cosmic web." (too cheesy)
- "We do stuff." (too vague)

### Tagline Candidates (To Finalize in Sprint 1)
1. "Clarity through the mist"
2. "Building with intention, not algorithms"
3. "Privacy-first products for a thoughtful web"
4. "Software with a soul"
5. "Where craft meets code"

**Selection Criteria:**
- Feels true to owner's values
- Resonates with target audience (startup founders, creative agencies)
- Not overly abstract (grounded)

---

## Technical Constraints & Requirements

### Tech Stack (Confirmed)
- **Framework:** Next.js 14+ (App Router preferred)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Animation:** GSAP (complex timelines), Framer Motion (simpler reveals)
- **3D/Effects:** Three.js via react-three-fiber (if needed for fog/particles)
- **Hosting:** Vercel (zero-config Next.js hosting)
- **Analytics:** TBD (Plausible, Fathom, or similar privacy-respecting tool)

### Performance Budgets
- **Initial Load (JS):** <500KB gzipped
- **Total Page Weight:** <1MB (all assets)
- **Time to Interactive:** <3s on 4G
- **Lighthouse Score:** >85 desktop, >75 mobile
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1

### Accessibility Standards
- **WCAG 2.1 Level AA** compliance minimum
- **Keyboard navigation:** All interactive elements accessible via Tab
- **Color contrast:** 4.5:1 for body text, 3:1 for large text
- **Focus indicators:** Visible on all focusable elements
- **Motion:** Respect `prefers-reduced-motion`

### Browser Support
- **Chrome/Edge:** Last 2 versions
- **Safari (macOS/iOS):** Last 2 versions
- **Firefox:** Last 2 versions
- **Samsung Internet:** Current version (best-effort)

---

## Design Deliverables (Iterative)

Rather than full mockups upfront (counter to "discover through building"), expect:

### Before Sprint 1
- [X] This product specification
- [ ] Color palette swatches (HEX codes)
- [ ] 2-3 reference images (fog inspiration, blue hour examples)
- [ ] Typography direction (font families, sizing scale)

### During Sprint 1
- [ ] Hero section prototype (live in browser)
- [ ] Fog effect sketch/video recording of desired behavior
- [ ] Feedback loop: owner reviews live prototype, iterates in real-time

### During Sprint 2-3
- [ ] Continuous refinement based on deployed previews
- [ ] Particle system tuning sessions
- [ ] Copy finalization
- [ ] Mobile layout review

**Philosophy:** Design in the browser, not in Figma first. Spec provides guardrails, implementation explores within them.

---

## Risks & Dependencies

### High-Risk Items
1. **Fog Effect Performance**
   - **Risk:** Complex fog rendering tanks frame rate, especially on mobile
   - **Mitigation:** Start simple (CSS gradients), escalate to Three.js only if necessary. Set performance thresholds (min 30fps) and simplify if exceeded.
   - **Owner:** Implementation Engineer

2. **Scope Creep**
   - **Risk:** "Just one more particle effect" leads to endless tweaking, delays launch
   - **Mitigation:** Strict MVP definition (see above). Post-MVP enhancements go into backlog, not current sprint.
   - **Owner:** Product Manager (this spec)

3. **Creative Vision Alignment**
   - **Risk:** Built experience doesn't match owner's internal vision (hard to articulate upfront)
   - **Mitigation:** Frequent checkpoints (end of each sprint), owner has veto power. Embrace iteration.
   - **Owner:** Owner + UX Designer

### Medium-Risk Items
1. **Mobile Experience Trade-offs**
   - **Risk:** Mobile feels like "lesser" experience, disappoints mobile-first visitors
   - **Mitigation:** Design mobile-specific interactions (scroll-based particle movement). Test early on real devices.

2. **Copy/Tagline Development**
   - **Risk:** Perfect tagline proves elusive, delays launch
   - **Mitigation:** Set deadline for tagline (end of Sprint 1). If stuck, launch with "good enough" and iterate post-launch.

3. **Discloser Project Status**
   - **Risk:** Discloser isn't ready to showcase publicly yet
   - **Mitigation:** Keep spotlight section flexible. Can feature different project or use vague "coming soon" language.

### Dependencies
- **External:** None (no third-party APIs or services required for MVP)
- **Internal:**
  - Owner's availability for feedback (ideally 2-3 hours per sprint for review)
  - Discloser app assets (icon, screenshot) for project spotlight
  - Final business email address for contact section

---

## Definition of Done (Launch Criteria)

The landing page is ready to launch when:

**Functional Requirements:**
- [ ] All sections present with final copy (hero, services, project spotlight, contact, footer)
- [ ] Contact CTA functional (email link works or form submits successfully)
- [ ] All links tested (no 404s)
- [ ] Page deployed to production URL (e.g., neblina.digital)

**Visual/Emotional Requirements:**
- [ ] Fog effect creates sense of depth and immersion
- [ ] Particles respond to cursor (or scroll on mobile)
- [ ] Blue hour color palette consistently applied
- [ ] Typography is legible and on-brand
- [ ] Owner reviews final build and says "Yes, this feels right"

**Performance Requirements:**
- [ ] Lighthouse score >85 desktop, >75 mobile
- [ ] Loads in <3s on 4G connection
- [ ] No layout shift (CLS <0.1)
- [ ] Maintains 30fps minimum on mobile during scroll

**Accessibility Requirements:**
- [ ] Zero critical Axe DevTools violations
- [ ] Keyboard navigation works throughout
- [ ] Screen reader testing passes (can navigate and understand page)
- [ ] Reduced-motion fallback functional and aesthetically pleasing

**Cross-Platform Requirements:**
- [ ] Tested on Chrome, Safari, Firefox (latest versions)
- [ ] Tested on iPhone (Safari) and Android (Chrome)
- [ ] Works on tablet (iPad, Android tablet)
- [ ] No broken layouts on large displays (1440p, 4K)

**Polish Requirements:**
- [ ] Favicon and meta tags set up
- [ ] Open Graph preview looks good (test on Twitter/LinkedIn)
- [ ] 404 page exists (if needed)
- [ ] Analytics installed (if using)
- [ ] No console errors or warnings

---

## Measurement & Iteration Plan

### Week 1-2 Post-Launch
**Focus:** Is the experience resonating? Are people engaging?

**Metrics to Watch:**
- Time on page (target: >45s)
- Bounce rate (target: <60%)
- Scroll depth (target: 60%+ reach contact section)
- Contact CTA clicks (measure interest)

**User Testing:**
- Send to 5-10 people in target audience, ask for verbal feedback
- Specific questions:
  - "What's your first impression?" (should hear "peaceful," "intriguing," "different")
  - "What does Neblina do?" (check clarity)
  - "Would you reach out for a project?" (gauge trust/interest)

### Month 1-3 Post-Launch
**Focus:** Optimize conversions, gather insights for future content

**A/B Test Candidates:**
- Tagline variations (if multiple options exist)
- CTA button copy ("Let's Talk" vs. "Start a Project" vs. "Get in Touch")
- Project spotlight placement (earlier vs. later)

**Content Additions:**
- Blog posts (if owner has time/interest)
- Case study expansion on Discloser
- Add testimonials (if/when clients exist)

### Ongoing
**Seasonal Adjustments:**
- Consider subtle variations for different times of year (e.g., winter frost variant, summer morning dew)
- Lunar phase integration (fog density changes with moon phase?)

**Performance Monitoring:**
- Check Core Web Vitals monthly (ensure no regressions)
- Update dependencies quarterly (Next.js, libraries)

---

## Appendix A: Color Palette (Hex Codes)

### Primary Colors (Blue Hour)
```
--deep-night:      #0f0f1e   /* Base background, deepest dark */
--fog-deep:        #1a1a2e   /* Primary fog layer, rich blue-black */
--fog-mid:         #374151   /* Midground fog, slate */
--fog-light:       #cbd5e1   /* Highlights, silver accents */
```

### Accent Colors
```
--particle-glow:   #a5b4fc   /* Dewlight particles, soft blue-violet */
--text-primary:    #f1f5f9   /* Body text, off-white */
--text-secondary:  #94a3b8   /* Secondary text, muted slate */
--cta-hover:       #6366f1   /* Button hover, vibrant indigo */
```

### Utility Colors
```
--white:           #ffffff   /* Pure white for contrast */
--black:           #000000   /* Pure black for depth */
--focus-ring:      #818cf8   /* Accessibility focus indicator */
```

---

## Appendix B: Typography Scale

### Font Families (To be finalized in Sprint 1)
**Suggested Direction:**
- **Headings:** Serif with elegance (e.g., Cormorant Garamond, Lora, Playfair Display)
- **Body:** Sans-serif for readability (e.g., Inter, Work Sans, DM Sans)

### Scale (Tailwind Default + Custom)
```
text-xs:    0.75rem  (12px)
text-sm:    0.875rem (14px)
text-base:  1rem     (16px)  — Body text default
text-lg:    1.125rem (18px)
text-xl:    1.25rem  (20px)
text-2xl:   1.5rem   (24px)
text-3xl:   1.875rem (30px)
text-4xl:   2.25rem  (36px)
text-5xl:   3rem     (48px)
text-6xl:   3.75rem  (60px)  — Hero company name
text-7xl:   4.5rem   (72px)  — Optional extra-large hero
```

---

## Appendix C: Reference Links

### Inspiration (Fog & Atmosphere)
- [Blue hour photography examples](https://unsplash.com/s/photos/blue-hour-fog)
- [Liminal spaces subreddit](https://reddit.com/r/LiminalSpace)
- [Dewdrops on spider web](https://unsplash.com/s/photos/dew-drops)

### Technical Resources
- [Three.js Fog Examples](https://threejs.org/examples/?q=fog)
- [GSAP ScrollTrigger Docs](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Framer Motion Scroll Animations](https://www.framer.com/motion/scroll-animations/)
- [Web Vitals Library](https://github.com/GoogleChrome/web-vitals)
- [Reduced Motion Media Query](https://web.dev/prefers-reduced-motion/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Axe DevTools Extension](https://www.deque.com/axe/devtools/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Appendix D: Open Questions (To Resolve in Sprint 1)

1. **Tagline:** Which direction resonates most with owner?
2. **Contact Method:** Email link, form, or calendar booking?
3. **Discloser Status:** Ready to feature prominently, or keep vague?
4. **Moon Element:** Yes or no? If yes, full moon or crescent?
5. **Typography:** Serif + sans combo, or all sans-serif?
6. **Social Links:** Does Neblina have public Twitter/LinkedIn/GitHub to link in footer?
7. **Analytics:** Which tool (Plausible, Fathom, Google Analytics, none)?
8. **Domain:** Is neblina.digital the final domain?

**Resolution Process:** Schedule 30-minute kickoff call with owner before Sprint 1, walk through these questions.

---

## Document Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | Feb 2, 2026 | Initial specification created | Product Manager (Claude) |

---

**Next Steps:**
1. Review this spec with Neblina Digital owner, gather feedback
2. Resolve open questions (Appendix D)
3. Kick off Sprint 1 (Foundation + First Mist)
4. Deploy first prototype to Vercel for stakeholder review

**Contact for Questions:**
This specification was generated to guide development. For questions or clarifications, consult with the project owner and implementation team.

---

*End of Product Specification*
