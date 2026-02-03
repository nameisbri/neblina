# Neblina Visual Style Guide

A reference for maintaining visual consistency across the Neblina brand.

---

## Brand Concept

**Neblina** means "mist" in Portuguese. The brand represents the journey from uncertainty to clarity—helping clients navigate complexity until the path forward becomes visible.

### Visual Metaphor: The Blue Hour

The aesthetic is inspired by the **blue hour**—that liminal moment between night and dawn when fog begins to lift and shapes emerge from shadow. This captures our positioning: we work in the spaces between, finding signal in noise.

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Deep Night | `#0f0f1e` | 15, 15, 30 | Primary background |
| Fog Deep | `#1a1a2e` | 26, 26, 46 | Card backgrounds, elevated surfaces |
| Fog Mid | `#374151` | 55, 65, 81 | Borders, dividers, muted elements |
| Fog Light | `#cbd5e1` | 203, 213, 225 | Subtle highlights |

### Text Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Text Primary | `#f1f5f9` | 241, 245, 249 | Headlines, primary copy |
| Text Secondary | `#94a3b8` | 148, 163, 184 | Body text, descriptions |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Particle Glow | `#a5b4fc` | 165, 180, 252 | Primary accent, glows, highlights |
| CTA Hover | `#6366f1` | 99, 102, 241 | Interactive hover states |
| Focus Ring | `#818cf8` | 129, 140, 248 | Accessibility focus indicators |

### Color Relationships

- Backgrounds progress from **Deep Night** (darkest) through the **Fog** scale
- Accents use soft indigo/violet tones that feel like moonlight or pre-dawn light
- All accent colors maintain sufficient contrast against dark backgrounds
- Glows and particles use low opacity (10-30%) for atmospheric effect

---

## Typography

### Font Families

**Headlines:** Cormorant Garamond
- Weights: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)
- Character: Elegant, editorial, timeless
- Use for: Section titles, hero text, pull quotes

**Body:** Inter
- Weights: Regular (400), Medium (500)
- Character: Clean, readable, modern
- Use for: Body copy, UI elements, navigation

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Font |
|---------|---------------|---------------|--------|------|
| Hero Title | 5xl-6xl | 4xl | 400-500 | Serif |
| Section Title | 4xl-6xl | 3xl-4xl | 400 | Serif |
| Card Title | 3xl-4xl | 2xl-3xl | 400 | Serif |
| Body Large | xl | lg | 300-400 | Sans |
| Body | base | base | 400 | Sans |
| Caption/Meta | sm | sm | 400 | Sans |

### Typography Guidelines

- Headlines use sentence case, not title case
- Body copy should have generous line-height (1.6-1.8)
- Avoid bold body text; use color or weight variations instead
- Maximum line length: ~65-75 characters for readability

---

## Visual Effects

### Glow Orbs

Soft, blurred gradients that create atmospheric depth:
- **Purple orbs:** Large, positioned at edges
- **Blue orbs:** Medium, create focal points
- **Silver orbs:** Small, subtle highlights
- Opacity range: 10-50%
- Always use blur (blur-2xl to blur-3xl)

### Motion Principles

- **Reveal animations:** Content fades up and in (opacity 0→1, y: 30px→0)
- **Duration:** Slow, meditative (0.6s-1s for reveals)
- **Easing:** Ease-out curves, never sharp or bouncy
- **Stagger:** Children animate in sequence with 0.1-0.2s delays
- **Respect preferences:** All motion respects `prefers-reduced-motion`

### Hover States

- Subtle lift (translateY: -4px)
- Increased glow opacity
- Border color shifts toward accent
- Duration: 0.3s

---

## Voice & Tone

### Brand Voice

- **Calm and confident**, never aggressive or salesy
- **Thoughtful**, with intention behind every word
- **Human**, acknowledging complexity rather than oversimplifying
- **Privacy-conscious**, treating user trust as foundational

### Writing Style

- Short, purposeful sentences
- Active voice
- Avoid jargon; explain when technical terms are necessary
- Questions can be used to invite reflection
- Use "we" for the studio, "you" when addressing clients

### Example Phrases

| Instead of | Use |
|------------|-----|
| "We're the best at..." | "We help you find..." |
| "Revolutionary solution" | "Thoughtful approach" |
| "Maximize your potential" | "Build with intention" |
| "Cutting-edge technology" | "Technology that respects users" |

---

## Imagery Guidelines

### Photography Style

- Moody, atmospheric lighting
- Cool color temperature (blues, silvers)
- Soft focus and depth of field
- Natural light preferred, especially golden hour or blue hour
- Avoid harsh shadows or high contrast

### Illustration Style

- Minimal, line-based when used
- Geometric forms that feel organic
- Soft gradients over flat colors
- Particle/dot patterns for texture

### Screenshots & UI

- Dark mode interfaces preferred
- Generous padding and breathing room
- Rounded corners (lg to 2xl)
- Subtle shadows using dark blues, not pure black

---

## Spacing & Layout

### Spacing Scale

Use consistent spacing based on a 4px grid:
- **xs:** 4px
- **sm:** 8px
- **md:** 16px
- **lg:** 24px
- **xl:** 32px
- **2xl:** 48px
- **3xl:** 64px

### Section Padding

- Desktop: 96-128px vertical
- Mobile: 64-96px vertical
- Horizontal: 24px minimum

### Card Design

- Background: `fog-deep/60` with backdrop blur
- Border: 1px gradient from `fog-mid/20` to transparent
- Border radius: 2xl (16px)
- Padding: 32-40px

---

## Accessibility

- All interactive elements have visible focus states
- Color contrast meets WCAG AA standards
- Motion can be disabled via system preferences
- Text remains readable at 200% zoom
- Links are distinguishable from body text

---

## Usage Notes

This guide should be used when creating:
- Marketing materials and social graphics
- Presentation decks
- Email templates
- Documentation and proposals
- Any visual assets representing the Neblina brand

Consistency builds trust. When in doubt, choose the more restrained option.
