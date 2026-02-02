'use client'

/**
 * Header component for the site-wide navigation area.
 *
 * Currently implements an accessible "Skip to main content" link that:
 * - Is visually hidden by default (sr-only)
 * - Becomes visible and focusable when users tab to it
 * - Allows keyboard users to bypass navigation and jump to main content
 *
 * This follows WCAG 2.1 Success Criterion 2.4.1 (Bypass Blocks).
 */
export function Header() {
  return (
    <header>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-fog-deep focus:text-text-primary focus:rounded focus:outline-none focus:ring-2 focus:ring-focus-ring"
      >
        Skip to main content
      </a>
    </header>
  )
}
