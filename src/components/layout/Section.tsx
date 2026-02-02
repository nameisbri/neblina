import { cn } from '@/lib/cn'

/**
 * Props for the Section component.
 */
interface SectionProps {
  /** Optional ID for anchor linking */
  id?: string
  /** Additional CSS classes to apply */
  className?: string
  /** Section content */
  children: React.ReactNode
}

/**
 * Reusable section wrapper component with consistent padding and max-width.
 *
 * This component provides:
 * - Responsive horizontal padding (increases on larger screens)
 * - Consistent vertical padding for visual rhythm
 * - Centered max-width container for content
 * - Support for anchor linking via the id prop
 * - Full customization via className prop
 *
 * Following the Open/Closed Principle - open for extension (via className)
 * but closed for modification of the base styling logic.
 *
 * @example
 * <Section id="about" className="bg-fog-deep">
 *   <h2>About Us</h2>
 *   <p>Content goes here...</p>
 * </Section>
 */
export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full px-6 py-24 md:px-12 lg:px-24',
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  )
}
