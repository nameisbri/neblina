# Neblina Digital Inc. Landing Page - Technical Design Document

**Version:** 1.0  
**Date:** February 2, 2026  
**Status:** Ready for Implementation

---

## Table of Contents

1. [Architecture Overview](#1-architecture-overview)
2. [Project Structure](#2-project-structure)
3. [Component Architecture](#3-component-architecture)
4. [Technical Approach by Feature](#4-technical-approach-by-feature)
5. [State Management](#5-state-management)
6. [Performance Strategy](#6-performance-strategy)
7. [Accessibility Implementation](#7-accessibility-implementation)
8. [Key Design Decisions](#8-key-design-decisions)
9. [Task Breakdown](#9-task-breakdown)

---

## 1. Architecture Overview

### High-Level System Design

```
┌─────────────────────────────────────────────────────────────────────┐
│                         Presentation Layer                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐ │
│  │   Layout    │  │   Sections  │  │     UI      │  │  Effects   │ │
│  │  Components │  │  Components │  │  Components │  │ Components │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Application Layer                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐ │
│  │   Hooks     │  │  Contexts   │  │   Utils     │  │  Services  │ │
│  │ (Custom)    │  │ (Providers) │  │ (Helpers)   │  │  (Form)    │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        Infrastructure Layer                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐ │
│  │   Next.js   │  │  Tailwind   │  │   Three.js  │  │   GSAP/    │ │
│  │  App Router │  │     CSS     │  │    R3F      │  │   Framer   │ │
│  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

### Core Architectural Principles

1. **Progressive Enhancement**: Base experience works without JavaScript; effects enhance progressively
2. **Mobile-First**: Design and implement mobile experience first, then enhance for desktop
3. **Performance Budget**: Every component must justify its bundle size impact
4. **Accessibility by Default**: ARIA, semantic HTML, and keyboard navigation are requirements, not afterthoughts

---

## 2. Project Structure

```
neblina/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with providers
│   │   ├── page.tsx                  # Landing page (home)
│   │   ├── globals.css               # Global styles, Tailwind imports
│   │   └── not-found.tsx             # 404 page
│   │
│   ├── components/
│   │   ├── layout/                   # Structural components
│   │   │   ├── Header.tsx            # Skip link, minimal header if needed
│   │   │   ├── Footer.tsx            # Copyright, links
│   │   │   ├── Section.tsx           # Reusable section wrapper
│   │   │   └── index.ts              # Barrel export
│   │   │
│   │   ├── sections/                 # Page sections (Smart components)
│   │   │   ├── Hero.tsx              # "Into the Mist"
│   │   │   ├── Services.tsx          # "The Clearing"
│   │   │   ├── ProjectSpotlight.tsx  # "The Path Forward"
│   │   │   ├── Contact.tsx           # "The Invitation"
│   │   │   └── index.ts
│   │   │
│   │   ├── ui/                       # Presentational UI components
│   │   │   ├── Button.tsx            # CTA button with glow effect
│   │   │   ├── ServiceCard.tsx       # Service pillar card
│   │   │   ├── ScrollIndicator.tsx   # Animated scroll arrow
│   │   │   ├── ContactForm.tsx       # Form with validation
│   │   │   ├── Input.tsx             # Form input component
│   │   │   ├── Textarea.tsx          # Form textarea component
│   │   │   └── index.ts
│   │   │
│   │   └── effects/                  # Visual effect components
│   │       ├── FogLayer.tsx          # Single fog layer (CSS)
│   │       ├── FogSystem.tsx         # Orchestrates all fog layers
│   │       ├── ParticleCanvas.tsx    # 2D Canvas particle system
│   │       ├── Particle.tsx          # Individual particle (if needed)
│   │       ├── Moon.tsx              # Crescent moon element
│   │       ├── ScrollReveal.tsx      # Intersection Observer wrapper
│   │       └── index.ts
│   │
│   ├── hooks/                        # Custom React hooks
│   │   ├── useScrollPosition.ts      # Track scroll for parallax
│   │   ├── useMousePosition.ts       # Track cursor for particles
│   │   ├── useReducedMotion.ts       # Detect prefers-reduced-motion
│   │   ├── useIntersectionObserver.ts # For scroll reveals
│   │   ├── useDeviceCapabilities.ts  # Detect mobile, GPU tier
│   │   └── index.ts
│   │
│   ├── contexts/                     # React contexts
│   │   ├── MotionContext.tsx         # Global reduced-motion state
│   │   └── index.ts
│   │
│   ├── lib/                          # Utilities and helpers
│   │   ├── utils.ts                  # General utility functions
│   │   ├── cn.ts                     # Classname merger (clsx + twMerge)
│   │   ├── constants.ts              # App-wide constants
│   │   └── animations.ts             # GSAP/Framer animation configs
│   │
│   ├── services/                     # External service integrations
│   │   └── formService.ts            # Contact form submission (Web3Forms)
│   │
│   └── types/                        # TypeScript type definitions
│       ├── index.ts                  # Common types
│       └── components.ts             # Component prop types
│
├── public/
│   ├── fonts/                        # Self-hosted fonts (if not using Google)
│   ├── images/
│   │   ├── discloser-icon.png        # Discloser app icon
│   │   ├── discloser-screenshot.webp # Discloser app screenshot
│   │   └── og-image.png              # Open Graph preview image
│   ├── favicon.ico
│   └── site.webmanifest
│
├── tailwind.config.ts                # Tailwind with blue hour palette
├── next.config.js                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── package.json
├── .env.local                        # Environment variables (form API key)
├── .env.example                      # Environment template
└── README.md
```

### Directory Rationale

| Directory | Purpose | Guideline |
|-----------|---------|-----------|
| `components/layout/` | Structural components used once per page | Keep minimal, focus on semantic structure |
| `components/sections/` | Full page sections, compose smaller components | Each section ~100-150 lines max |
| `components/ui/` | Reusable, stateless UI primitives | No business logic, purely presentational |
| `components/effects/` | Visual effects (fog, particles) | Performance-critical, lazy-loadable |
| `hooks/` | Custom hooks for reusable logic | Single responsibility per hook |
| `contexts/` | Global state via React Context | Minimal contexts, avoid prop drilling |
| `lib/` | Pure utility functions | No React dependencies, easily testable |
| `services/` | External API integrations | Abstract third-party services |

---

## 3. Component Architecture

### Component Hierarchy

```
RootLayout
└── MotionProvider (Context)
    └── Page
        ├── FogSystem (Fixed background)
        │   ├── FogLayer (Background, 0.5x parallax)
        │   ├── FogLayer (Midground, 1x parallax)
        │   └── FogLayer (Foreground, 1.5x parallax)
        │
        ├── ParticleCanvas (Fixed overlay)
        │
        ├── Moon (Fixed, very slow parallax)
        │
        └── main (Scrollable content)
            ├── Header (Skip link)
            │
            ├── Hero
            │   ├── h1 (Company name)
            │   ├── p (Tagline)
            │   └── ScrollIndicator
            │
            ├── Services
            │   └── ScrollReveal
            │       └── ServiceCard (x4)
            │
            ├── ProjectSpotlight
            │   └── ScrollReveal
            │       ├── Image (Discloser)
            │       ├── Description
            │       └── Button (CTA)
            │
            ├── Contact
            │   └── ScrollReveal
            │       └── ContactForm
            │           ├── Input (Name)
            │           ├── Input (Email)
            │           ├── Textarea (Message)
            │           └── Button (Submit)
            │
            └── Footer
```

### Component Specifications

#### Layout Components

**Header.tsx**
- Purpose: Provides skip-to-content link for accessibility
- Props: None
- State: None
- Size: ~30 lines

**Footer.tsx**
- Purpose: Copyright, location, optional links
- Props: None
- State: None
- Size: ~40 lines

**Section.tsx**
- Purpose: Wrapper for semantic sections with common styling
- Props: `id`, `className`, `children`, `ariaLabel`
- State: None
- Size: ~25 lines

#### Section Components

**Hero.tsx**
- Purpose: First impression, company identity
- Props: None (content hardcoded or from constants)
- State: None
- Dependencies: ScrollIndicator
- Size: ~60 lines

**Services.tsx**
- Purpose: Display 4 service pillars
- Props: None
- State: None
- Dependencies: ServiceCard, ScrollReveal
- Size: ~80 lines

**ProjectSpotlight.tsx**
- Purpose: Feature Discloser app
- Props: None
- State: None
- Dependencies: Button, ScrollReveal
- Size: ~70 lines

**Contact.tsx**
- Purpose: Contact form section
- Props: None
- State: Form state managed by ContactForm
- Dependencies: ContactForm, ScrollReveal
- Size: ~50 lines

#### UI Components

**Button.tsx**
- Purpose: CTA button with glow hover effect
- Props: `variant`, `size`, `children`, `onClick`, `disabled`, `type`, `className`
- State: None (hover via CSS)
- Size: ~45 lines

**ServiceCard.tsx**
- Purpose: Individual service pillar display
- Props: `title`, `description`, `icon`
- State: None
- Size: ~35 lines

**ScrollIndicator.tsx**
- Purpose: Animated arrow encouraging scroll
- Props: None
- State: Uses MotionContext
- Size: ~40 lines

**ContactForm.tsx**
- Purpose: Handles contact form logic and submission
- Props: None
- State: `formData`, `status`, `errors`
- Dependencies: Input, Textarea, Button, formService
- Size: ~120 lines

**Input.tsx / Textarea.tsx**
- Purpose: Styled form inputs with validation display
- Props: `label`, `name`, `error`, `required`, standard input props
- State: None
- Size: ~40 lines each

#### Effect Components

**FogSystem.tsx**
- Purpose: Orchestrates fog layers with parallax
- Props: None
- State: Uses useScrollPosition, useReducedMotion
- Dependencies: FogLayer
- Size: ~60 lines

**FogLayer.tsx**
- Purpose: Single fog layer with parallax transform
- Props: `depth` (background/midground/foreground), `scrollMultiplier`, `opacity`
- State: Receives scroll position from parent
- Size: ~50 lines

**ParticleCanvas.tsx**
- Purpose: 2D Canvas-based particle system
- Props: `particleCount`, `interactionRadius`
- State: Uses useMousePosition, useReducedMotion, RAF loop
- Size: ~150 lines (most complex component)

**Moon.tsx**
- Purpose: Subtle crescent moon with very slow parallax
- Props: None
- State: Uses useScrollPosition, useReducedMotion
- Size: ~40 lines

**ScrollReveal.tsx**
- Purpose: Wraps children, triggers fade-in on viewport entry
- Props: `children`, `delay`, `direction`
- State: Uses useIntersectionObserver, useReducedMotion
- Size: ~50 lines

---

## 4. Technical Approach by Feature

### 4.1 The Veil (Fog System)

**Recommendation: CSS Gradients + Transforms (Hybrid Approach)**

**Why CSS over Three.js:**
1. Significantly smaller bundle size (~0KB vs ~150KB+ for Three.js)
2. GPU-accelerated transforms are highly performant
3. Easier to implement and maintain
4. Three.js fog is overkill for 2D layered effect
5. Falls back gracefully on low-end devices

**Implementation Strategy:**

```typescript
// FogLayer.tsx - Simplified concept
const FogLayer = ({ depth, scrollY, reducedMotion }) => {
  const multipliers = { background: 0.5, midground: 1.0, foreground: 1.5 };
  const translateY = reducedMotion ? 0 : scrollY * multipliers[depth];
  
  return (
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        transform: `translate3d(0, ${translateY}px, 0)`,
        willChange: reducedMotion ? 'auto' : 'transform'
      }}
    >
      {/* Multiple radial gradients positioned randomly */}
      <div className="absolute fog-blob-1" />
      <div className="absolute fog-blob-2" />
      <div className="absolute fog-blob-3" />
    </div>
  );
};
```

**Fog Blob CSS Approach:**
- Use multiple `radial-gradient` backgrounds
- Position with `background-position`
- Animate subtle `scale` transform for idle movement (CSS animation)
- Use `filter: blur()` for softness
- Layer with different `z-index` values

**Performance Optimizations:**
- Use `transform: translate3d()` for GPU acceleration
- Apply `will-change: transform` only during scroll (remove on idle)
- Use `pointer-events: none` to prevent interaction blocking
- Throttle scroll handler to requestAnimationFrame

**Reduced Motion Fallback:**
- Replace animated fog with static gradient background
- Single `linear-gradient` from `#0f0f1e` to `#1a1a2e`

---

### 4.2 Dewlight (Particle System)

**Recommendation: 2D Canvas API**

**Why Canvas over WebGL/Three.js:**
1. Simpler implementation for 2D particles
2. Sufficient for 30-50 particles
3. ~0KB additional bundle
4. More predictable performance
5. Easier debugging

**Implementation Strategy:**

```typescript
// ParticleCanvas.tsx - Core concept
interface Particle {
  x: number;
  y: number;
  baseX: number;  // Original position
  baseY: number;
  size: number;
  opacity: number;
  phase: number;  // For floating animation
}

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useMousePosition();
  const reducedMotion = useReducedMotion();
  const particles = useRef<Particle[]>([]);
  
  // Initialize particles on mount
  useEffect(() => {
    particles.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      // ... other properties
    }));
  }, []);
  
  // Animation loop
  useEffect(() => {
    if (reducedMotion) return; // Static render only
    
    let frameId: number;
    const animate = () => {
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;
      
      ctx.clearRect(0, 0, width, height);
      
      particles.current.forEach(particle => {
        // Calculate cursor attraction
        const dx = mousePos.x - particle.x;
        const dy = mousePos.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          // Drift toward cursor
          particle.x += dx * 0.02;
          particle.y += dy * 0.02;
        } else {
          // Return to base position with floating
          particle.x += (particle.baseX - particle.x) * 0.01;
          particle.y += (particle.baseY - particle.y) * 0.01;
        }
        
        // Draw particle with glow
        drawParticle(ctx, particle);
      });
      
      frameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(frameId);
  }, [mousePos, reducedMotion]);
  
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />;
};
```

**Particle Rendering (Bokeh/Dewdrop Effect):**
```typescript
const drawParticle = (ctx: CanvasRenderingContext2D, p: Particle) => {
  // Create radial gradient for soft glow
  const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
  gradient.addColorStop(0, `rgba(165, 180, 252, ${p.opacity})`);     // Center: bright
  gradient.addColorStop(0.4, `rgba(165, 180, 252, ${p.opacity * 0.5})`); // Mid: softer
  gradient.addColorStop(1, 'rgba(165, 180, 252, 0)');                 // Edge: transparent
  
  ctx.beginPath();
  ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();
};
```

**Mobile Behavior:**
- Reduce particle count to 15
- Replace cursor tracking with scroll-based vertical drift
- Particles drift upward as user scrolls down

**Reduced Motion Fallback:**
- Render particles once as static points
- No animation loop
- No cursor interaction

---

### 4.3 Parallax Scrolling

**Implementation: Custom Hook + RAF**

```typescript
// useScrollPosition.ts
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};
```

**Parallax Application:**
- Fog Background: `translateY(scrollY * 0.5)`
- Fog Midground: `translateY(scrollY * 1.0)` (moves with content)
- Fog Foreground: `translateY(scrollY * 1.5)`
- Moon: `translateY(scrollY * 0.3)`

---

### 4.4 Scroll-Triggered Reveals

**Implementation: Intersection Observer + Framer Motion**

```typescript
// ScrollReveal.tsx
const ScrollReveal = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.2 });
  const reducedMotion = useReducedMotion();
  
  if (reducedMotion) {
    return <div ref={ref}>{children}</div>;
  }
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
```

**Animation Specifications:**
- Duration: 400ms
- Easing: ease-out
- Transform: `translateY(20px)` to `translateY(0)`
- Opacity: 0 to 1
- Stagger for service cards: 100ms between each

---

### 4.5 Contact Form

**Implementation: React Hook Form + Web3Forms**

**Why Web3Forms:**
1. No backend required
2. Free tier supports 250 submissions/month
3. Email notifications
4. Spam protection (honeypot)
5. Simple API integration

**Form Service:**
```typescript
// services/formService.ts
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface SubmitResult {
  success: boolean;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<SubmitResult> => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        ...data,
        subject: `Neblina Contact: ${data.name}`,
      }),
    });
    
    const result = await response.json();
    
    if (result.success) {
      return { success: true, message: 'Thank you! We\'ll be in touch soon.' };
    }
    return { success: false, message: 'Something went wrong. Please try again.' };
  } catch (error) {
    return { success: false, message: 'Network error. Please try again.' };
  }
};
```

**Form Validation:**
- Name: Required, min 2 characters
- Email: Required, valid email format
- Message: Required, min 10 characters

**Spam Protection:**
- Honeypot field (hidden input that bots fill)
- Web3Forms built-in spam filtering

---

## 5. State Management

### Global State (React Context)

**MotionContext** - Single global context for reduced motion preference

```typescript
// contexts/MotionContext.tsx
interface MotionContextValue {
  reducedMotion: boolean;
}

export const MotionContext = createContext<MotionContextValue>({ reducedMotion: false });

export const MotionProvider = ({ children }) => {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  
  return (
    <MotionContext.Provider value={{ reducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
};
```

### Local State (Component-Level)

| Component | State | Purpose |
|-----------|-------|---------|
| ContactForm | `formData`, `errors`, `status` | Form input values, validation, submission state |
| ParticleCanvas | `particles` (ref) | Particle positions (ref to avoid re-renders) |
| Page-level hooks | `scrollY`, `mousePosition` | Passed down via props to effect components |

### Why Minimal Global State?

1. Landing page has no complex data dependencies
2. Props drilling is minimal (2-3 levels max)
3. Context only for truly global concerns (motion preference)
4. Avoids unnecessary re-renders
5. Easier to understand and debug

---

## 6. Performance Strategy

### Bundle Size Budget

| Category | Budget | Strategy |
|----------|--------|----------|
| Framework (Next.js) | ~85KB | Built-in, cannot reduce |
| React | ~40KB | Built-in |
| Framer Motion | ~30KB | Use only needed features, tree-shake |
| GSAP | 0KB | **Decision: Skip GSAP, use Framer Motion + CSS only** |
| Three.js | 0KB | **Decision: Use CSS for fog, Canvas for particles** |
| Custom Code | ~20KB | Keep components small |
| **Total JS** | **~175KB gzipped** | Well under 500KB budget |

### Critical Rendering Path

1. **Initial HTML**: Semantic structure renders immediately
2. **CSS**: Tailwind CSS (inlined critical, rest async)
3. **Hero Content**: Text visible before JS loads
4. **Effects Load**: Fog and particles hydrate after initial paint
5. **Below-fold**: Lazy load sections as needed

### Performance Optimizations

**Images:**
- Use Next.js `<Image>` component for automatic optimization
- Serve WebP/AVIF with fallbacks
- Lazy load below-fold images
- Specify `width` and `height` to prevent CLS

**Fonts:**
- Use `next/font` for automatic optimization
- `font-display: swap` to prevent FOIT
- Subset fonts if using custom (Latin only)

**Animation Performance:**
- Use `transform` and `opacity` only (compositor-friendly)
- Apply `will-change` sparingly and conditionally
- Remove `will-change` when animations complete
- Use `requestAnimationFrame` for JS animations
- Debounce/throttle scroll and mouse events

**Canvas Performance:**
- Use `getContext('2d', { alpha: true })` for transparency
- Batch draw calls where possible
- Use integer coordinates for crisp rendering
- Clear only dirty regions if possible

### Performance Monitoring

```typescript
// In layout.tsx or a dedicated component
import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
  });
  return null;
}
```

### Mobile Performance Degradation Strategy

```typescript
// hooks/useDeviceCapabilities.ts
export const useDeviceCapabilities = () => {
  const [tier, setTier] = useState<'high' | 'medium' | 'low'>('high');
  
  useEffect(() => {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (hasReducedMotion) {
      setTier('low');
    } else if (isMobile) {
      setTier('medium');
    } else {
      setTier('high');
    }
  }, []);
  
  return {
    tier,
    particleCount: tier === 'high' ? 40 : tier === 'medium' ? 15 : 0,
    fogLayers: tier === 'high' ? 3 : tier === 'medium' ? 2 : 1,
    enableParallax: tier !== 'low',
  };
};
```

---

## 7. Accessibility Implementation

### Semantic HTML Structure

```html
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  
  <header>
    <!-- Minimal, skip link only for MVP -->
  </header>
  
  <main id="main">
    <section aria-labelledby="hero-title">
      <h1 id="hero-title">Neblina Digital Inc.</h1>
      <!-- Hero content -->
    </section>
    
    <section aria-labelledby="services-title">
      <h2 id="services-title">What We Do</h2>
      <!-- Services -->
    </section>
    
    <section aria-labelledby="project-title">
      <h2 id="project-title">Current Project: Discloser</h2>
      <!-- Project spotlight -->
    </section>
    
    <section aria-labelledby="contact-title">
      <h2 id="contact-title">Let's Talk</h2>
      <!-- Contact form -->
    </section>
  </main>
  
  <footer>
    <!-- Copyright, links -->
  </footer>
</body>
```

### Focus Management

```css
/* Visible focus indicators */
:focus-visible {
  outline: 2px solid var(--focus-ring);
  outline-offset: 2px;
}

/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px 16px;
  background: var(--fog-deep);
  color: var(--text-primary);
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Form Accessibility

```tsx
// Accessible form input pattern
<div className="form-field">
  <label htmlFor="email" className="form-label">
    Email Address
    <span className="required" aria-hidden="true">*</span>
  </label>
  <input
    id="email"
    name="email"
    type="email"
    required
    aria-required="true"
    aria-invalid={errors.email ? 'true' : 'false'}
    aria-describedby={errors.email ? 'email-error' : undefined}
    className="form-input"
  />
  {errors.email && (
    <span id="email-error" role="alert" className="form-error">
      {errors.email}
    </span>
  )}
</div>
```

### Reduced Motion CSS

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Color Contrast Compliance

| Element | Foreground | Background | Contrast Ratio | WCAG Level |
|---------|------------|------------|----------------|------------|
| Body text | #f1f5f9 | #1a1a2e | 12.5:1 | AAA |
| Secondary text | #94a3b8 | #1a1a2e | 5.2:1 | AA |
| CTA button | #f1f5f9 | #6366f1 | 6.1:1 | AA |

### ARIA Live Regions

```tsx
// Form submission feedback
<div aria-live="polite" aria-atomic="true" className="sr-only">
  {status === 'success' && 'Form submitted successfully. We will be in touch soon.'}
  {status === 'error' && 'Form submission failed. Please try again.'}
</div>
```

---

## 8. Key Design Decisions

### Decision 1: CSS Fog vs Three.js Fog

**Chosen: CSS Gradients + Transforms**

| Factor | CSS | Three.js |
|--------|-----|----------|
| Bundle Size | 0KB | 150KB+ |
| Implementation Time | 4-6 hours | 12-16 hours |
| Performance | Excellent | Good (but heavier) |
| Visual Quality | Good for 2D layers | Better for volumetric |
| Maintainability | Easy | Requires 3D expertise |
| Fallback | Graceful | Requires separate path |

**Rationale:** The fog effect is essentially layered 2D shapes with parallax. CSS can achieve this with radial gradients and transforms. Three.js is overkill and adds significant complexity. If the CSS approach proves visually insufficient after prototyping, we can revisit.

---

### Decision 2: Canvas 2D vs WebGL for Particles

**Chosen: Canvas 2D API**

| Factor | Canvas 2D | WebGL/Three.js |
|--------|-----------|----------------|
| Bundle Size | 0KB | 150KB+ |
| Particle Limit | ~100 comfortable | 1000+ |
| Visual Effects | Basic (gradients, blur) | Advanced (shaders) |
| Implementation | Straightforward | Complex |
| Debugging | Easy | Difficult |

**Rationale:** We need 30-50 particles with soft glow and cursor interaction. Canvas 2D handles this easily. WebGL would enable more particles and effects but is unnecessary for our requirements.

---

### Decision 3: Skip GSAP, Use Framer Motion Only

**Chosen: Framer Motion + CSS Animations**

**Rationale:**
- Framer Motion handles scroll-triggered reveals elegantly
- CSS handles hover states and simple animations
- GSAP would add ~30KB for features we don't need
- Framer Motion integrates better with React

**GSAP Use Cases (Not Needed):**
- Complex sequenced timelines
- SVG morphing
- Physics-based animations

---

### Decision 4: Form Service - Web3Forms

**Chosen: Web3Forms**

**Alternatives Considered:**
| Service | Price | Features | Complexity |
|---------|-------|----------|------------|
| Web3Forms | Free (250/mo) | Email, spam filter | Very Simple |
| Formspree | Free (50/mo) | Email, validation | Simple |
| Custom API Route | Free | Full control | Medium |
| Resend | Free (100/mo) | Advanced templates | Medium |

**Rationale:** Web3Forms offers the simplest integration with adequate free tier. No backend code required. Can migrate to custom solution later if needed.

---

### Decision 5: No Global State Library

**Chosen: React Context + Local State**

**Rationale:**
- Landing page has minimal state requirements
- Only global state is reduced motion preference
- No data fetching (beyond form submission)
- Redux/Zustand would be overkill
- Easier for junior developers to understand

---

## 9. Task Breakdown

### Phase 0: Project Setup (4 tasks, ~4 hours total)

---

#### Task 0.1: Initialize Next.js Project

**Description:** Create a new Next.js 14+ project with TypeScript, Tailwind CSS, and App Router.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/package.json`
- `/Users/gabriela-personal/DEV/neblina/tsconfig.json`
- `/Users/gabriela-personal/DEV/neblina/next.config.js`
- `/Users/gabriela-personal/DEV/neblina/tailwind.config.ts`
- `/Users/gabriela-personal/DEV/neblina/postcss.config.js`
- `/Users/gabriela-personal/DEV/neblina/src/app/layout.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/app/page.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/app/globals.css`

**Dependencies:** None

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] `npm run dev` starts development server
- [ ] TypeScript compiles without errors
- [ ] Tailwind CSS classes work in components
- [ ] App Router structure is correct
- [ ] Project runs at `http://localhost:3000`

**Implementation Hints:**
- Use `npx create-next-app@latest` with TypeScript and Tailwind options
- Select "App Router" when prompted
- Select "No" for src/ directory initially, then move files manually for our structure

---

#### Task 0.2: Configure Blue Hour Color Palette

**Description:** Extend Tailwind configuration with the custom blue hour color palette and typography settings.

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/tailwind.config.ts`

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/app/globals.css` (update)

**Dependencies:** Task 0.1

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Colors available as Tailwind classes (e.g., `bg-deep-night`, `text-fog-light`)
- [ ] CSS variables defined for use in custom styles
- [ ] Font families configured (Inter for body, serif for headings)
- [ ] Typography scale matches spec

**Implementation Hints:**
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        'deep-night': '#0f0f1e',
        'fog-deep': '#1a1a2e',
        'fog-mid': '#374151',
        'fog-light': '#cbd5e1',
        'particle-glow': '#a5b4fc',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        'cta-hover': '#6366f1',
        'focus-ring': '#818cf8',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
```

---

#### Task 0.3: Set Up Project Directory Structure

**Description:** Create the folder structure for components, hooks, contexts, lib, services, and types.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/layout/.gitkeep`
- `/Users/gabriela-personal/DEV/neblina/src/components/sections/.gitkeep`
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/.gitkeep`
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/.gitkeep`
- `/Users/gabriela-personal/DEV/neblina/src/hooks/index.ts`
- `/Users/gabriela-personal/DEV/neblina/src/contexts/index.ts`
- `/Users/gabriela-personal/DEV/neblina/src/lib/utils.ts`
- `/Users/gabriela-personal/DEV/neblina/src/lib/cn.ts`
- `/Users/gabriela-personal/DEV/neblina/src/lib/constants.ts`
- `/Users/gabriela-personal/DEV/neblina/src/services/.gitkeep`
- `/Users/gabriela-personal/DEV/neblina/src/types/index.ts`

**Dependencies:** Task 0.1

**Complexity:** Simple

**Estimated Time:** 20 minutes

**Acceptance Criteria:**
- [ ] All directories exist as specified in project structure
- [ ] Index files export empty or placeholder content
- [ ] `cn.ts` exports working classname utility

**Implementation Hints:**
```typescript
// src/lib/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Install dependencies: `npm install clsx tailwind-merge`

---

#### Task 0.4: Install Animation Dependencies

**Description:** Install Framer Motion for animations. Set up environment file template.

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/package.json`

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/.env.example`
- `/Users/gabriela-personal/DEV/neblina/.env.local`
- `/Users/gabriela-personal/DEV/neblina/.gitignore` (update)

**Dependencies:** Task 0.1

**Complexity:** Simple

**Estimated Time:** 15 minutes

**Acceptance Criteria:**
- [ ] Framer Motion installed and importable
- [ ] `.env.example` documents required variables
- [ ] `.env.local` is gitignored
- [ ] Basic Framer Motion component renders

**Implementation Hints:**
```bash
npm install framer-motion
```

```env
# .env.example
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key_here
```

---

### Phase 1: Core Layout & Structure (5 tasks, ~5 hours total)

---

#### Task 1.1: Create Root Layout with Fonts

**Description:** Set up the root layout with proper HTML structure, meta tags, and font loading using next/font.

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/app/layout.tsx`

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/app/metadata.ts`

**Dependencies:** Task 0.2

**Complexity:** Simple

**Estimated Time:** 45 minutes

**Acceptance Criteria:**
- [ ] HTML has proper `lang="en"` attribute
- [ ] Fonts load without FOUT (flash of unstyled text)
- [ ] Meta title and description are set
- [ ] Body has base dark background color
- [ ] Open Graph meta tags configured

**Implementation Hints:**
```typescript
// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '600'],
  variable: '--font-cormorant' 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-deep-night text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
```

---

#### Task 1.2: Create Header with Skip Link

**Description:** Build a minimal header component with an accessible skip-to-content link.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/layout/Header.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/components/layout/index.ts`

**Dependencies:** Task 0.3

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Skip link is visually hidden by default
- [ ] Skip link appears on focus (keyboard navigation)
- [ ] Clicking skip link focuses on main content
- [ ] Proper ARIA attributes

**Implementation Hints:**
```typescript
// Header.tsx
export const Header = () => {
  return (
    <header>
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   bg-fog-deep text-text-primary px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>
    </header>
  );
};
```

---

#### Task 1.3: Create Footer Component

**Description:** Build the footer with copyright, location, and consistent styling.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/layout/Footer.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/layout/index.ts`

**Dependencies:** Task 0.3

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Displays copyright with current year
- [ ] Displays "Ontario, Canada" location
- [ ] Uses semantic `<footer>` element
- [ ] Subtle, minimal styling (doesn't compete with content)
- [ ] Links have proper focus states

**Implementation Hints:**
```typescript
// Footer.tsx
export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 text-center text-text-secondary text-sm">
      <p>© {year} Neblina Digital Inc.</p>
      <p className="mt-1">Ontario, Canada</p>
    </footer>
  );
};
```

---

#### Task 1.4: Create Section Wrapper Component

**Description:** Build a reusable section wrapper that provides consistent padding, max-width, and semantic structure.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/layout/Section.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/layout/index.ts`

**Dependencies:** Task 0.3

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Uses semantic `<section>` element
- [ ] Accepts `id` for anchor navigation
- [ ] Accepts `ariaLabelledby` for accessibility
- [ ] Consistent horizontal padding and vertical spacing
- [ ] Max-width container for content

**Implementation Hints:**
```typescript
// Section.tsx
interface SectionProps {
  id?: string;
  ariaLabelledby?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean; // For hero section
}

export const Section = ({ id, ariaLabelledby, className, children, fullWidth = false }: SectionProps) => {
  return (
    <section 
      id={id} 
      aria-labelledby={ariaLabelledby}
      className={cn(
        'py-16 md:py-24',
        !fullWidth && 'px-4 md:px-8 max-w-5xl mx-auto',
        className
      )}
    >
      {children}
    </section>
  );
};
```

---

#### Task 1.5: Assemble Basic Page Structure

**Description:** Combine layout components into the main page with placeholder sections.

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/app/page.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/app/layout.tsx`

**Dependencies:** Tasks 1.1, 1.2, 1.3, 1.4

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Page renders with Header, main, and Footer
- [ ] Main content has `id="main"` for skip link
- [ ] Placeholder sections visible (Hero, Services, Project, Contact)
- [ ] Page is scrollable and layout doesn't break
- [ ] Dark background visible throughout

**Implementation Hints:**
```typescript
// src/app/page.tsx
import { Header, Footer, Section } from '@/components/layout';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Section id="hero" fullWidth className="min-h-screen flex items-center justify-center">
          <h1 className="text-5xl font-serif">Neblina Digital Inc.</h1>
        </Section>
        
        <Section id="services" ariaLabelledby="services-title">
          <h2 id="services-title" className="text-3xl font-serif">What We Do</h2>
          <p>Services content coming soon...</p>
        </Section>
        
        <Section id="project" ariaLabelledby="project-title">
          <h2 id="project-title" className="text-3xl font-serif">Current Project</h2>
          <p>Discloser content coming soon...</p>
        </Section>
        
        <Section id="contact" ariaLabelledby="contact-title">
          <h2 id="contact-title" className="text-3xl font-serif">Let's Talk</h2>
          <p>Contact form coming soon...</p>
        </Section>
      </main>
      <Footer />
    </>
  );
}
```

---

### Phase 2: Custom Hooks (4 tasks, ~3 hours total)

---

#### Task 2.1: Create useReducedMotion Hook

**Description:** Create a hook that detects the user's `prefers-reduced-motion` preference.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/hooks/useReducedMotion.ts`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/hooks/index.ts`

**Dependencies:** Task 0.3

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Returns boolean indicating reduced motion preference
- [ ] Updates if user changes system preference
- [ ] Handles SSR (returns false on server)
- [ ] Cleans up event listener on unmount

**Implementation Hints:**
```typescript
// useReducedMotion.ts
import { useState, useEffect } from 'react';

export const useReducedMotion = (): boolean => {
  const [reducedMotion, setReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handler = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);
  
  return reducedMotion;
};
```

---

#### Task 2.2: Create useScrollPosition Hook

**Description:** Create a hook that tracks scroll position efficiently using requestAnimationFrame.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/hooks/useScrollPosition.ts`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/hooks/index.ts`

**Dependencies:** Task 0.3

**Complexity:** Medium

**Estimated Time:** 45 minutes

**Acceptance Criteria:**
- [ ] Returns current scroll Y position
- [ ] Updates are throttled via RAF (not every scroll event)
- [ ] Uses passive event listener for performance
- [ ] Handles SSR (returns 0 on server)
- [ ] Cleans up on unmount

**Implementation Hints:**
```typescript
// useScrollPosition.ts
import { useState, useEffect, useRef } from 'react';

export const useScrollPosition = (): number => {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    setScrollY(window.scrollY); // Initial value
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};
```

---

#### Task 2.3: Create useMousePosition Hook

**Description:** Create a hook that tracks mouse position for particle interaction.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/hooks/useMousePosition.ts`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/hooks/index.ts`

**Dependencies:** Task 0.3

**Complexity:** Medium

**Estimated Time:** 45 minutes

**Acceptance Criteria:**
- [ ] Returns object with `x` and `y` coordinates
- [ ] Updates are throttled via RAF
- [ ] Handles SSR (returns { x: 0, y: 0 } on server)
- [ ] On mobile, returns null or center of viewport
- [ ] Cleans up on unmount

**Implementation Hints:**
```typescript
// useMousePosition.ts
import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (): MousePosition => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const ticking = useRef(false);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setPosition({ x: event.clientX, y: event.clientY });
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return position;
};
```

---

#### Task 2.4: Create useIntersectionObserver Hook

**Description:** Create a hook for detecting when elements enter the viewport (for scroll reveals).

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/hooks/useIntersectionObserver.ts`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/hooks/index.ts`

**Dependencies:** Task 0.3

**Complexity:** Medium

**Estimated Time:** 45 minutes

**Acceptance Criteria:**
- [ ] Accepts a ref to observe
- [ ] Returns boolean indicating if element is in view
- [ ] Configurable threshold (default 0.2 = 20% visible)
- [ ] Option for `triggerOnce` (stops observing after first intersection)
- [ ] Handles SSR

**Implementation Hints:**
```typescript
// useIntersectionObserver.ts
import { useState, useEffect, RefObject } from 'react';

interface Options {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: Options = {}
): boolean => {
  const { threshold = 0.2, triggerOnce = true, rootMargin = '0px' } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold, triggerOnce, rootMargin]);
  
  return isIntersecting;
};
```

---

### Phase 3: Motion Context (2 tasks, ~1.5 hours total)

---

#### Task 3.1: Create Motion Context Provider

**Description:** Create a React context that provides reduced motion state globally.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/contexts/MotionContext.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/contexts/index.ts`

**Dependencies:** Task 2.1

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Context provides `reducedMotion` boolean
- [ ] `useMotion` hook for consuming the context
- [ ] Provider wraps the application
- [ ] TypeScript types are correct

**Implementation Hints:**
```typescript
// MotionContext.tsx
'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useReducedMotion } from '@/hooks';

interface MotionContextValue {
  reducedMotion: boolean;
}

const MotionContext = createContext<MotionContextValue>({ reducedMotion: false });

export const MotionProvider = ({ children }: { children: ReactNode }) => {
  const reducedMotion = useReducedMotion();
  
  return (
    <MotionContext.Provider value={{ reducedMotion }}>
      {children}
    </MotionContext.Provider>
  );
};

export const useMotion = () => {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error('useMotion must be used within a MotionProvider');
  }
  return context;
};
```

---

#### Task 3.2: Integrate Motion Provider into Layout

**Description:** Wrap the application with the MotionProvider.

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/app/layout.tsx`

**Dependencies:** Task 3.1

**Complexity:** Simple

**Estimated Time:** 15 minutes

**Acceptance Criteria:**
- [ ] MotionProvider wraps all children
- [ ] Page still renders correctly
- [ ] No hydration errors

**Implementation Hints:**
```typescript
// layout.tsx
import { MotionProvider } from '@/contexts';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
```

---

### Phase 4: Visual Effects (6 tasks, ~8 hours total)

---

#### Task 4.1: Create Single Fog Layer Component

**Description:** Build a single fog layer with CSS gradients that can be positioned and parallaxed.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/FogLayer.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/index.ts`

**Dependencies:** Tasks 0.2, 2.2

**Complexity:** Medium

**Estimated Time:** 1.5 hours

**Acceptance Criteria:**
- [ ] Renders multiple soft gradient blobs
- [ ] Accepts `depth` prop (background/midground/foreground)
- [ ] Accepts `scrollY` prop and applies parallax transform
- [ ] Uses `translate3d` for GPU acceleration
- [ ] Covers full viewport with `position: fixed`
- [ ] Has `pointer-events: none`

**Implementation Hints:**
```typescript
// FogLayer.tsx
interface FogLayerProps {
  depth: 'background' | 'midground' | 'foreground';
  scrollY: number;
  reducedMotion: boolean;
}

const parallaxMultipliers = {
  background: 0.5,
  midground: 1.0,
  foreground: 1.5,
};

const opacities = {
  background: 0.3,
  midground: 0.5,
  foreground: 0.7,
};

export const FogLayer = ({ depth, scrollY, reducedMotion }: FogLayerProps) => {
  const translateY = reducedMotion ? 0 : scrollY * parallaxMultipliers[depth];
  
  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ 
        transform: `translate3d(0, ${-translateY * 0.1}px, 0)`,
        willChange: reducedMotion ? 'auto' : 'transform',
      }}
    >
      {/* Gradient blobs - positioned absolutely within */}
      <div 
        className="absolute rounded-full blur-3xl"
        style={{
          width: '60vw',
          height: '60vw',
          top: '10%',
          left: '-20%',
          background: `radial-gradient(circle, rgba(55, 65, 81, ${opacities[depth]}) 0%, transparent 70%)`,
        }}
      />
      {/* Add 2-3 more blobs with different positions */}
    </div>
  );
};
```

---

#### Task 4.2: Create Fog System Orchestrator

**Description:** Build the component that manages all fog layers and passes scroll position.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/FogSystem.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/index.ts`

**Dependencies:** Tasks 4.1, 2.2, 3.1

**Complexity:** Medium

**Estimated Time:** 1 hour

**Acceptance Criteria:**
- [ ] Renders 3 fog layers (background, midground, foreground)
- [ ] Uses useScrollPosition hook
- [ ] Respects reduced motion preference
- [ ] In reduced motion: shows single static gradient
- [ ] Layers have correct z-index ordering

**Implementation Hints:**
```typescript
// FogSystem.tsx
'use client';

import { FogLayer } from './FogLayer';
import { useScrollPosition } from '@/hooks';
import { useMotion } from '@/contexts';

export const FogSystem = () => {
  const scrollY = useScrollPosition();
  const { reducedMotion } = useMotion();
  
  // Static fallback for reduced motion
  if (reducedMotion) {
    return (
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #1a1a2e 0%, #0f0f1e 100%)',
        }}
      />
    );
  }
  
  return (
    <div className="fixed inset-0 pointer-events-none">
      <FogLayer depth="background" scrollY={scrollY} reducedMotion={reducedMotion} />
      <FogLayer depth="midground" scrollY={scrollY} reducedMotion={reducedMotion} />
      <FogLayer depth="foreground" scrollY={scrollY} reducedMotion={reducedMotion} />
    </div>
  );
};
```

---

#### Task 4.3: Create Particle Canvas Component (Setup)

**Description:** Create the canvas element and basic setup for the particle system.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/ParticleCanvas.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/index.ts`

**Dependencies:** Tasks 2.3, 3.1

**Complexity:** Medium

**Estimated Time:** 1.5 hours

**Acceptance Criteria:**
- [ ] Canvas fills viewport
- [ ] Handles resize events
- [ ] Has proper z-index (above fog, below content)
- [ ] Creates initial particles with random positions
- [ ] Particles have size, opacity, and base position

**Implementation Hints:**
```typescript
// ParticleCanvas.tsx - Setup portion
'use client';

import { useRef, useEffect, useState } from 'react';
import { useMotion } from '@/contexts';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  opacity: number;
  phase: number;
}

export const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { reducedMotion } = useMotion();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particlesRef = useRef<Particle[]>([]);
  
  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Initialize particles
  useEffect(() => {
    const count = reducedMotion ? 0 : 30;
    particlesRef.current = Array.from({ length: count }, () => {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      return {
        x,
        y,
        baseX: x,
        baseY: y,
        size: 8 + Math.random() * 8, // 8-16px
        opacity: 0.4 + Math.random() * 0.4, // 0.4-0.8
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, [dimensions, reducedMotion]);
  
  // ... render canvas
  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};
```

---

#### Task 4.4: Implement Particle Animation Loop

**Description:** Add the animation loop that moves particles and responds to cursor.

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/ParticleCanvas.tsx`

**Dependencies:** Tasks 4.3, 2.3

**Complexity:** Complex

**Estimated Time:** 2 hours

**Acceptance Criteria:**
- [ ] Particles float with subtle sine wave motion
- [ ] Particles drift toward cursor within 150px radius
- [ ] Particles return to base position when cursor is far
- [ ] Animation runs at 60fps
- [ ] Animation stops when reduced motion is preferred
- [ ] Renders particles with soft radial gradient glow

**Implementation Hints:**
```typescript
// Add to ParticleCanvas.tsx
const mousePos = useMousePosition();

// Animation loop
useEffect(() => {
  if (reducedMotion) return;
  
  const canvas = canvasRef.current;
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return;
  
  let animationId: number;
  let time = 0;
  
  const animate = () => {
    time += 0.016; // ~60fps
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesRef.current.forEach(particle => {
      // Floating motion
      const floatY = Math.sin(time + particle.phase) * 10;
      
      // Cursor attraction
      const dx = mousePos.x - particle.x;
      const dy = mousePos.y - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 150 && dist > 0) {
        // Drift toward cursor
        particle.x += dx * 0.02;
        particle.y += dy * 0.02;
      } else {
        // Return to base with float
        particle.x += (particle.baseX - particle.x) * 0.02;
        particle.y += (particle.baseY + floatY - particle.y) * 0.02;
      }
      
      // Draw particle with glow
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size
      );
      gradient.addColorStop(0, `rgba(165, 180, 252, ${particle.opacity})`);
      gradient.addColorStop(0.5, `rgba(165, 180, 252, ${particle.opacity * 0.3})`);
      gradient.addColorStop(1, 'rgba(165, 180, 252, 0)');
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });
    
    animationId = requestAnimationFrame(animate);
  };
  
  animate();
  return () => cancelAnimationFrame(animationId);
}, [mousePos, reducedMotion, dimensions]);
```

---

#### Task 4.5: Create Moon Component

**Description:** Build a subtle crescent moon element with very slow parallax.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/Moon.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/index.ts`

**Dependencies:** Tasks 2.2, 3.1

**Complexity:** Simple

**Estimated Time:** 45 minutes

**Acceptance Criteria:**
- [ ] Renders a crescent moon shape (CSS or SVG)
- [ ] Positioned in upper right area of viewport
- [ ] Very slow parallax (0.3x scroll speed)
- [ ] Subtle glow effect
- [ ] Very low opacity (barely visible through fog)
- [ ] Hidden in reduced motion mode (or static)

**Implementation Hints:**
```typescript
// Moon.tsx
'use client';

import { useScrollPosition } from '@/hooks';
import { useMotion } from '@/contexts';

export const Moon = () => {
  const scrollY = useScrollPosition();
  const { reducedMotion } = useMotion();
  
  const translateY = reducedMotion ? 0 : scrollY * 0.3;
  
  return (
    <div
      className="fixed top-20 right-[15%] pointer-events-none z-0"
      style={{
        transform: `translate3d(0, ${-translateY * 0.1}px, 0)`,
        willChange: reducedMotion ? 'auto' : 'transform',
      }}
    >
      {/* Crescent moon using CSS */}
      <div 
        className="relative w-16 h-16 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #cbd5e1 0%, transparent 50%)',
          boxShadow: '0 0 40px 10px rgba(203, 213, 225, 0.1)',
        }}
      >
        {/* Shadow to create crescent */}
        <div 
          className="absolute w-14 h-14 rounded-full bg-deep-night"
          style={{ top: '-4px', left: '8px' }}
        />
      </div>
    </div>
  );
};
```

---

#### Task 4.6: Create ScrollReveal Component

**Description:** Build a wrapper component that fades in children when they enter viewport.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/ScrollReveal.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/index.ts`

**Dependencies:** Tasks 2.4, 3.1, 0.4

**Complexity:** Medium

**Estimated Time:** 1 hour

**Acceptance Criteria:**
- [ ] Fades in children when 20% visible
- [ ] Slides up from 20px offset
- [ ] 400ms duration, ease-out easing
- [ ] Accepts `delay` prop for staggered reveals
- [ ] Skips animation if reduced motion preferred
- [ ] Uses Framer Motion for smooth animation

**Implementation Hints:**
```typescript
// ScrollReveal.tsx
'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';
import { useMotion } from '@/contexts';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollReveal = ({ children, delay = 0, className }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.2, triggerOnce: true });
  const { reducedMotion } = useMotion();
  
  if (reducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
```

---

### Phase 5: UI Components (5 tasks, ~4 hours total)

---

#### Task 5.1: Create Button Component

**Description:** Build a reusable button with glow hover effect for CTAs.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/Button.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/index.ts`

**Dependencies:** Task 0.2

**Complexity:** Simple

**Estimated Time:** 45 minutes

**Acceptance Criteria:**
- [ ] Supports `primary` and `secondary` variants
- [ ] Has visible focus state (focus ring)
- [ ] Hover state adds subtle glow
- [ ] Disabled state is visually distinct
- [ ] Supports `type="submit"` for forms
- [ ] Accepts custom className

**Implementation Hints:**
```typescript
// Button.tsx
import { cn } from '@/lib/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md',
  className,
  children,
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'font-medium rounded-lg transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2 focus:ring-offset-deep-night',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          'bg-cta-hover text-white hover:shadow-lg hover:shadow-cta-hover/30': variant === 'primary',
          'bg-transparent border border-fog-light text-fog-light hover:bg-fog-light/10': variant === 'secondary',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
```

---

#### Task 5.2: Create ScrollIndicator Component

**Description:** Build an animated scroll indicator for the hero section.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/ScrollIndicator.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/index.ts`

**Dependencies:** Task 3.1

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Displays downward arrow or "scroll" text
- [ ] Has gentle bouncing animation
- [ ] Animation respects reduced motion
- [ ] Positioned at bottom of hero
- [ ] Accessible (not just decorative)

**Implementation Hints:**
```typescript
// ScrollIndicator.tsx
'use client';

import { motion } from 'framer-motion';
import { useMotion } from '@/contexts';

export const ScrollIndicator = () => {
  const { reducedMotion } = useMotion();
  
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary"
      animate={reducedMotion ? {} : { y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="sr-only">Scroll down to explore</span>
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
        />
      </svg>
    </motion.div>
  );
};
```

---

#### Task 5.3: Create ServiceCard Component

**Description:** Build a card component for displaying individual service pillars.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/ServiceCard.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/index.ts`

**Dependencies:** Task 0.2

**Complexity:** Simple

**Estimated Time:** 45 minutes

**Acceptance Criteria:**
- [ ] Displays title, description, and optional icon
- [ ] Subtle hover state (border glow or background change)
- [ ] Proper heading hierarchy (h3)
- [ ] Responsive sizing

**Implementation Hints:**
```typescript
// ServiceCard.tsx
import { cn } from '@/lib/cn';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        'p-6 rounded-lg border border-fog-mid/30',
        'bg-fog-deep/20 backdrop-blur-sm',
        'transition-all duration-300',
        'hover:border-fog-mid/50 hover:bg-fog-deep/30',
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-particle-glow">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-serif text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
};
```

---

#### Task 5.4: Create Input Component

**Description:** Build a styled form input with label and error display.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/Input.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/index.ts`

**Dependencies:** Task 0.2

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Displays label above input
- [ ] Shows required indicator
- [ ] Displays error message when present
- [ ] Proper ARIA attributes for accessibility
- [ ] Focus state visible
- [ ] Dark theme styling

**Implementation Hints:**
```typescript
// Input.tsx
import { cn } from '@/lib/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = ({ label, error, id, required, className, ...props }: InputProps) => {
  const inputId = id || label.toLowerCase().replace(/\s/g, '-');
  
  return (
    <div className="mb-4">
      <label htmlFor={inputId} className="block text-text-primary mb-2">
        {label}
        {required && <span className="text-red-400 ml-1" aria-hidden="true">*</span>}
      </label>
      <input
        id={inputId}
        required={required}
        aria-required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn(
          'w-full px-4 py-3 rounded-lg',
          'bg-fog-deep/50 border border-fog-mid/50',
          'text-text-primary placeholder:text-text-secondary/50',
          'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-transparent',
          'transition-colors duration-200',
          error && 'border-red-400',
          className
        )}
        {...props}
      />
      {error && (
        <span id={`${inputId}-error`} role="alert" className="text-red-400 text-sm mt-1 block">
          {error}
        </span>
      )}
    </div>
  );
};
```

---

#### Task 5.5: Create Textarea Component

**Description:** Build a styled textarea with label and error display (similar to Input).

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/Textarea.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/index.ts`

**Dependencies:** Task 5.4

**Complexity:** Simple

**Estimated Time:** 20 minutes

**Acceptance Criteria:**
- [ ] Same styling as Input component
- [ ] Configurable rows (default 4)
- [ ] Resize handle visible
- [ ] All accessibility features from Input

**Implementation Hints:**
```typescript
// Textarea.tsx - Same pattern as Input, with textarea element
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

// ... implementation similar to Input
```

---

### Phase 6: Page Sections (5 tasks, ~5 hours total)

---

#### Task 6.1: Build Hero Section

**Description:** Create the hero section with company name, tagline, and scroll indicator.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/sections/Hero.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/components/sections/index.ts`

**Dependencies:** Tasks 5.2, 1.4

**Complexity:** Simple

**Estimated Time:** 45 minutes

**Acceptance Criteria:**
- [ ] Full viewport height
- [ ] Company name in large serif font
- [ ] Tagline below company name
- [ ] Scroll indicator at bottom
- [ ] Centered content
- [ ] Proper heading hierarchy (h1)

**Implementation Hints:**
```typescript
// Hero.tsx
import { Section } from '@/components/layout';
import { ScrollIndicator } from '@/components/ui';

export const Hero = () => {
  return (
    <Section 
      id="hero" 
      fullWidth 
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif text-text-primary mb-4">
          Neblina Digital Inc.
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
          Clarity through the mist
        </p>
      </div>
      <ScrollIndicator />
    </Section>
  );
};
```

---

#### Task 6.2: Build Services Section

**Description:** Create the services section with 4 service pillars in a grid.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/sections/Services.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/lib/constants.ts` (add services data)

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/sections/index.ts`

**Dependencies:** Tasks 5.3, 4.6, 1.4

**Complexity:** Medium

**Estimated Time:** 1 hour

**Acceptance Criteria:**
- [ ] Section heading "What We Do"
- [ ] 4 service cards in 2x2 grid (desktop), 1 column (mobile)
- [ ] Each card has scroll reveal with staggered delay
- [ ] Services content matches product spec
- [ ] Proper heading hierarchy (h2 for section, h3 for cards)

**Implementation Hints:**
```typescript
// lib/constants.ts
export const SERVICES = [
  {
    title: 'Privacy-First Mobile Development',
    description: 'We build iOS and Android apps that respect user data and earn trust. Currently launching Discloser, our own privacy-focused app.',
  },
  {
    title: 'Product Design & Development',
    description: 'End-to-end product creation, from concept to launch. We move between strategy, design, and code fluently.',
  },
  // ... etc
];

// Services.tsx
import { Section } from '@/components/layout';
import { ServiceCard } from '@/components/ui';
import { ScrollReveal } from '@/components/effects';
import { SERVICES } from '@/lib/constants';

export const Services = () => {
  return (
    <Section id="services" ariaLabelledby="services-title">
      <h2 id="services-title" className="text-3xl md:text-4xl font-serif text-center mb-12">
        What We Do
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 0.1}>
            <ServiceCard {...service} />
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
};
```

---

#### Task 6.3: Build Project Spotlight Section

**Description:** Create the Discloser feature section with image, description, and CTA.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/sections/ProjectSpotlight.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/sections/index.ts`

**Dependencies:** Tasks 5.1, 4.6, 1.4

**Complexity:** Medium

**Estimated Time:** 1 hour

**Acceptance Criteria:**
- [ ] Section heading "Current Project: Discloser"
- [ ] App icon/image displayed prominently
- [ ] Description paragraph (3-4 sentences)
- [ ] "Learn More" CTA button
- [ ] Scroll reveal animation
- [ ] Responsive layout (stacked on mobile)

**Implementation Hints:**
```typescript
// ProjectSpotlight.tsx
import Image from 'next/image';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { ScrollReveal } from '@/components/effects';

export const ProjectSpotlight = () => {
  return (
    <Section id="project" ariaLabelledby="project-title">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/discloser-icon.png"
              alt="Discloser app icon"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h2 id="project-title" className="text-3xl font-serif mb-4">
              Current Project: Discloser
            </h2>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Discloser is a privacy-focused iOS app designed for users who value 
              control over their personal data. We're building it with the same 
              principles we bring to every project: intentional design, transparent 
              practices, and respect for the people who use our software.
            </p>
            <Button 
              variant="secondary"
              onClick={() => window.open('https://discloser.app', '_blank')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
};
```

---

#### Task 6.4: Build Contact Form Component

**Description:** Create the contact form with validation and submission logic.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/ContactForm.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/services/formService.ts`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/ui/index.ts`

**Dependencies:** Tasks 5.4, 5.5, 5.1

**Complexity:** Complex

**Estimated Time:** 1.5 hours

**Acceptance Criteria:**
- [ ] Name, email, message fields
- [ ] Client-side validation (required, email format, min length)
- [ ] Submit button with loading state
- [ ] Success/error feedback
- [ ] Honeypot field for spam protection
- [ ] Accessible form with proper ARIA
- [ ] Form resets on successful submission

**Implementation Hints:**
```typescript
// services/formService.ts
export const submitContactForm = async (data: ContactFormData): Promise<SubmitResult> => {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      ...data,
      subject: `Neblina Contact: ${data.name}`,
    }),
  });
  // ... handle response
};

// ContactForm.tsx
'use client';

import { useState } from 'react';
import { Input, Textarea, Button } from '@/components/ui';
import { submitContactForm } from '@/services/formService';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus('loading');
    const result = await submitContactForm(formData);
    setStatus(result.success ? 'success' : 'error');
    
    if (result.success) {
      setFormData({ name: '', email: '', message: '' });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <input type="text" name="botcheck" className="hidden" />
      
      <Input 
        label="Name" 
        name="name"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
        error={errors.name}
        required 
      />
      <Input 
        label="Email" 
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        error={errors.email}
        required 
      />
      <Textarea 
        label="Message" 
        name="message"
        value={formData.message}
        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        error={errors.message}
        required 
        rows={4}
      />
      
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>
      
      {/* Status messages */}
      <div aria-live="polite" className="mt-4">
        {status === 'success' && (
          <p className="text-green-400">Thank you! We'll be in touch soon.</p>
        )}
        {status === 'error' && (
          <p className="text-red-400">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
};
```

---

#### Task 6.5: Build Contact Section

**Description:** Create the contact section wrapper with heading and form.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/components/sections/Contact.tsx`

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/sections/index.ts`

**Dependencies:** Tasks 6.4, 4.6, 1.4

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Section heading "Let's Talk"
- [ ] Invitation paragraph before form
- [ ] ContactForm component integrated
- [ ] Scroll reveal animation
- [ ] Centered, max-width container for form

**Implementation Hints:**
```typescript
// Contact.tsx
import { Section } from '@/components/layout';
import { ContactForm } from '@/components/ui';
import { ScrollReveal } from '@/components/effects';

export const Contact = () => {
  return (
    <Section id="contact" ariaLabelledby="contact-title">
      <ScrollReveal>
        <div className="max-w-xl mx-auto">
          <h2 id="contact-title" className="text-3xl md:text-4xl font-serif text-center mb-4">
            Let's Talk
          </h2>
          <p className="text-text-secondary text-center mb-8">
            Working with Neblina means partnering with a studio that cares about 
            craft, privacy, and intention. Whether you're building something new 
            or need a trusted technical partner, we'd love to hear from you.
          </p>
          <ContactForm />
        </div>
      </ScrollReveal>
    </Section>
  );
};
```

---

### Phase 7: Final Assembly & Polish (5 tasks, ~4 hours total)

---

#### Task 7.1: Assemble Complete Landing Page

**Description:** Integrate all sections and effects into the main page.

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/app/page.tsx`

**Dependencies:** All Phase 4 and Phase 6 tasks

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] FogSystem renders behind content
- [ ] ParticleCanvas renders above fog
- [ ] Moon renders in upper area
- [ ] All sections render in order
- [ ] Smooth scrolling works
- [ ] No z-index conflicts

**Implementation Hints:**
```typescript
// page.tsx
import { Header, Footer } from '@/components/layout';
import { Hero, Services, ProjectSpotlight, Contact } from '@/components/sections';
import { FogSystem, ParticleCanvas, Moon } from '@/components/effects';

export default function Home() {
  return (
    <>
      {/* Background effects */}
      <FogSystem />
      <Moon />
      <ParticleCanvas />
      
      {/* Content */}
      <Header />
      <main id="main" className="relative z-10">
        <Hero />
        <Services />
        <ProjectSpotlight />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

---

#### Task 7.2: Add Meta Tags and Open Graph

**Description:** Configure complete SEO metadata and Open Graph tags.

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/app/layout.tsx`

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/public/images/og-image.png` (placeholder)

**Dependencies:** Task 7.1

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Title and description meta tags
- [ ] Open Graph title, description, image
- [ ] Twitter card meta tags
- [ ] Favicon configured
- [ ] Viewport and theme-color meta

**Implementation Hints:**
```typescript
// layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neblina Digital Inc. — Privacy-First Software Development',
  description: 'A privacy-first software studio building thoughtful products for a more intentional web. Based in Ontario, Canada.',
  keywords: ['software development', 'privacy', 'mobile apps', 'web development', 'Ontario'],
  openGraph: {
    title: 'Neblina Digital Inc.',
    description: 'Privacy-first software development. Clarity through the mist.',
    url: 'https://neblina.digital',
    siteName: 'Neblina Digital Inc.',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neblina Digital Inc.',
    description: 'Privacy-first software development. Clarity through the mist.',
    images: ['/images/og-image.png'],
  },
  robots: { index: true, follow: true },
};
```

---

#### Task 7.3: Create 404 Page

**Description:** Build a custom 404 page that maintains the site's aesthetic.

**Files to Create:**
- `/Users/gabriela-personal/DEV/neblina/src/app/not-found.tsx`

**Dependencies:** Task 0.2

**Complexity:** Simple

**Estimated Time:** 30 minutes

**Acceptance Criteria:**
- [ ] Uses same dark theme
- [ ] Clear "Page not found" message
- [ ] Link to return home
- [ ] Subtle styling (no heavy effects)

**Implementation Hints:**
```typescript
// not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-deep-night text-text-primary">
      <h1 className="text-4xl font-serif mb-4">Lost in the Mist</h1>
      <p className="text-text-secondary mb-8">The page you're looking for doesn't exist.</p>
      <Link 
        href="/" 
        className="text-particle-glow hover:underline focus:outline-none focus:ring-2 focus:ring-focus-ring"
      >
        Return Home
      </Link>
    </div>
  );
}
```

---

#### Task 7.4: Mobile Optimization Pass

**Description:** Test and optimize all effects and layout for mobile devices.

**Files to Modify:**
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/ParticleCanvas.tsx`
- `/Users/gabriela-personal/DEV/neblina/src/components/effects/FogSystem.tsx`
- Various component files as needed

**Dependencies:** Task 7.1

**Complexity:** Medium

**Estimated Time:** 1.5 hours

**Acceptance Criteria:**
- [ ] Particle count reduced on mobile (15 max)
- [ ] Fog layers reduced on mobile (2 max)
- [ ] Particles respond to scroll instead of cursor on mobile
- [ ] Touch interactions work properly
- [ ] Form is usable on mobile keyboard
- [ ] No horizontal scroll
- [ ] Typography scales properly

**Implementation Hints:**
```typescript
// hooks/useDeviceCapabilities.ts
export const useDeviceCapabilities = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return { isMobile };
};

// Then use in ParticleCanvas:
const particleCount = isMobile ? 15 : 30;
```

---

#### Task 7.5: Performance Audit and Final Testing

**Description:** Run Lighthouse audits, fix issues, and verify all acceptance criteria.

**Files to Modify:**
- Various files as needed based on audit results

**Dependencies:** Task 7.4

**Complexity:** Medium

**Estimated Time:** 1.5 hours

**Acceptance Criteria:**
- [ ] Lighthouse Performance >85 desktop, >75 mobile
- [ ] Lighthouse Accessibility score 100
- [ ] No console errors
- [ ] Form submission works end-to-end
- [ ] All links work
- [ ] Reduced motion mode tested
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] CLS <0.1 verified

**Implementation Hints:**
- Run `npm run build` and `npm run start` for production testing
- Use Chrome DevTools Lighthouse tab
- Test with keyboard only navigation
- Test with Safari on macOS
- Test reduced motion in System Preferences
- Check network tab for large assets

---

## Task Summary Table

| Phase | Task | Description | Complexity | Est. Time | Dependencies |
|-------|------|-------------|------------|-----------|--------------|
| 0 | 0.1 | Initialize Next.js Project | Simple | 30m | - |
| 0 | 0.2 | Configure Blue Hour Palette | Simple | 30m | 0.1 |
| 0 | 0.3 | Set Up Directory Structure | Simple | 20m | 0.1 |
| 0 | 0.4 | Install Animation Dependencies | Simple | 15m | 0.1 |
| 1 | 1.1 | Create Root Layout with Fonts | Simple | 45m | 0.2 |
| 1 | 1.2 | Create Header with Skip Link | Simple | 30m | 0.3 |
| 1 | 1.3 | Create Footer Component | Simple | 30m | 0.3 |
| 1 | 1.4 | Create Section Wrapper | Simple | 30m | 0.3 |
| 1 | 1.5 | Assemble Basic Page Structure | Simple | 30m | 1.1-1.4 |
| 2 | 2.1 | Create useReducedMotion Hook | Simple | 30m | 0.3 |
| 2 | 2.2 | Create useScrollPosition Hook | Medium | 45m | 0.3 |
| 2 | 2.3 | Create useMousePosition Hook | Medium | 45m | 0.3 |
| 2 | 2.4 | Create useIntersectionObserver | Medium | 45m | 0.3 |
| 3 | 3.1 | Create Motion Context Provider | Simple | 30m | 2.1 |
| 3 | 3.2 | Integrate Motion Provider | Simple | 15m | 3.1 |
| 4 | 4.1 | Create Single Fog Layer | Medium | 1.5h | 0.2, 2.2 |
| 4 | 4.2 | Create Fog System Orchestrator | Medium | 1h | 4.1, 3.1 |
| 4 | 4.3 | Create Particle Canvas (Setup) | Medium | 1.5h | 2.3, 3.1 |
| 4 | 4.4 | Implement Particle Animation | Complex | 2h | 4.3, 2.3 |
| 4 | 4.5 | Create Moon Component | Simple | 45m | 2.2, 3.1 |
| 4 | 4.6 | Create ScrollReveal Component | Medium | 1h | 2.4, 3.1, 0.4 |
| 5 | 5.1 | Create Button Component | Simple | 45m | 0.2 |
| 5 | 5.2 | Create ScrollIndicator | Simple | 30m | 3.1 |
| 5 | 5.3 | Create ServiceCard Component | Simple | 45m | 0.2 |
| 5 | 5.4 | Create Input Component | Simple | 30m | 0.2 |
| 5 | 5.5 | Create Textarea Component | Simple | 20m | 5.4 |
| 6 | 6.1 | Build Hero Section | Simple | 45m | 5.2, 1.4 |
| 6 | 6.2 | Build Services Section | Medium | 1h | 5.3, 4.6 |
| 6 | 6.3 | Build Project Spotlight | Medium | 1h | 5.1, 4.6 |
| 6 | 6.4 | Build Contact Form Component | Complex | 1.5h | 5.4, 5.5, 5.1 |
| 6 | 6.5 | Build Contact Section | Simple | 30m | 6.4, 4.6 |
| 7 | 7.1 | Assemble Complete Landing Page | Simple | 30m | Phase 4, 6 |
| 7 | 7.2 | Add Meta Tags and Open Graph | Simple | 30m | 7.1 |
| 7 | 7.3 | Create 404 Page | Simple | 30m | 0.2 |
| 7 | 7.4 | Mobile Optimization Pass | Medium | 1.5h | 7.1 |
| 7 | 7.5 | Performance Audit | Medium | 1.5h | 7.4 |

**Total Estimated Time:** ~30 hours (spread across 3 sprints as per product spec)

---

## Appendix: Environment Setup Checklist

Before starting development:

1. [ ] Node.js 18+ installed
2. [ ] npm or pnpm available
3. [ ] Git configured
4. [ ] VS Code with recommended extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
   - TypeScript Vue Plugin (Volar)
5. [ ] Web3Forms account created, API key obtained
6. [ ] Vercel account for deployment (optional for local dev)

---

*End of Technical Design Document*
