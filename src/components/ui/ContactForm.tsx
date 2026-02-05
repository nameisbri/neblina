'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input, Textarea, Button } from '@/components/ui'

/**
 * Form data structure for contact submissions.
 */
interface FormData {
  name: string
  email: string
  message: string
}

/**
 * Validation error messages keyed by field name.
 */
interface FormErrors {
  name?: string
  email?: string
  message?: string
}

/**
 * Web3Forms API URL and access key
 */
const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

/**
 * Email validation regex pattern.
 * Validates basic email format: local@domain.tld
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Contact form component with client-side validation and animated states.
 *
 * Features:
 * - Client-side validation for all fields
 * - Loading state during submission
 * - Animated success state after submission
 * - Error messages with proper ARIA attributes
 * - Prepared for Web3Forms integration
 *
 * Design Pattern: Controlled form with local state management.
 * The form uses the Single Responsibility Principle by separating
 * validation logic into its own function.
 */
export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [apiError, setApiError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  /**
   * Validates all form fields and updates error state.
   * @returns true if all validations pass, false otherwise
   */
  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Handles form submission with validation and Web3Forms API call.
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setApiError(null)

    if (!validate()) return

    if (!WEB3FORMS_ACCESS_KEY) {
      setApiError('Contact form is not configured. Please try again later.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New Contact Form Submission - Neblina',
          from_name: 'Neblina Contact Form',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          replyto: formData.email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSuccess(true)
        setFormData({ name: '', email: '', message: '' })
        return
      }

      // Web3Forms returned an error
      setApiError(result.message || 'Failed to send message. Please try again.')
    } catch (error) {
      console.error('Form submission error:', error)
      setApiError('Unable to send message. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  /**
   * Handles input changes and clears field-specific errors.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing in the field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
    // Clear API error when user makes changes
    if (apiError) {
      setApiError(null)
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center py-12"
          role="status"
          aria-live="polite"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-particle-glow/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-particle-glow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-serif text-text-primary mb-2">
            Message Sent
          </h3>
          <p className="text-text-secondary">
            Thank you for reaching out. We&apos;ll be in touch soon.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
          noValidate
        >
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Your name"
            disabled={isSubmitting}
            autoComplete="name"
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="you@example.com"
            disabled={isSubmitting}
            autoComplete="email"
          />

          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            placeholder="Tell us about your project..."
            rows={5}
            disabled={isSubmitting}
          />

          {apiError && (
            <div
              className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              role="alert"
            >
              {apiError}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Start a conversation'}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
