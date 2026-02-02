/**
 * Loading state component for initial page loads.
 * Displays a subtle pulsing animation while content is being loaded.
 */
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-night">
      <div className="animate-pulse">
        <div className="font-serif text-2xl text-text-secondary">Loading...</div>
      </div>
    </div>
  )
}
