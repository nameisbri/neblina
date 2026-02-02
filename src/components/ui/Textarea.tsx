'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

/**
 * Styled textarea component for forms with label and error state support.
 * Matches the blue hour theme with fog-themed backgrounds and focus states.
 * Includes vertical resize capability.
 *
 * @example
 * <Textarea
 *   label="Message"
 *   placeholder="Tell us about your project..."
 *   error={errors.message}
 * />
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-text-secondary"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-lg min-h-[120px] resize-y',
            'bg-fog-deep/50 border border-fog-mid/30',
            'text-text-primary placeholder:text-fog-mid',
            'focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-transparent',
            'transition-all duration-200',
            error && 'border-red-500/50 focus:ring-red-500/50',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p
            id={`${inputId}-error`}
            className="text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
