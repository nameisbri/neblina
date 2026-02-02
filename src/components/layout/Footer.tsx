/**
 * Footer component displaying copyright and location information.
 *
 * Uses semantic HTML with the <footer> element for accessibility.
 * Styled with muted silver/slate colors to maintain visual hierarchy
 * without distracting from the main content.
 */
export function Footer() {
  return (
    <footer className="w-full px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl flex flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm text-text-secondary">
          &copy; 2026 Neblina Digital Inc.
        </p>
        <p className="text-xs text-fog-mid">
          Ontario, Canada
        </p>
      </div>
    </footer>
  )
}
