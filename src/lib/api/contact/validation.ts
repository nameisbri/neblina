/**
 * Contact Form Validation
 * Server-side validation and sanitization for contact form submissions
 */

import type { ContactFormRequest, ValidationResult, ValidationError } from './types';

/**
 * Validation rules for contact form fields
 */
export const VALIDATION_RULES = {
  name: { minLength: 1, maxLength: 100 },
  email: { maxLength: 254 },
  message: { minLength: 10, maxLength: 2000 },
} as const;

/**
 * Email validation regex - matches standard email format
 */
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Sanitize user input by trimming whitespace and removing potentially dangerous characters
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') {
    return '';
  }
  // Trim whitespace and normalize to single spaces
  return input.trim().replace(/\s+/g, ' ');
}

/**
 * Validate the contact form data
 * Returns sanitized data if valid, or validation errors if invalid
 */
export function validateContactForm(data: unknown): ValidationResult {
  const errors: ValidationError[] = [];

  // Check if data is an object
  if (!data || typeof data !== 'object') {
    return {
      valid: false,
      errors: [{ field: 'body', message: 'Invalid request body' }],
    };
  }

  const formData = data as Record<string, unknown>;

  // Sanitize inputs
  const name = sanitizeInput(formData.name as string);
  const email = sanitizeInput(formData.email as string);
  const message = sanitizeInput(formData.message as string);

  // Validate name
  if (!name) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (name.length < VALIDATION_RULES.name.minLength) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (name.length > VALIDATION_RULES.name.maxLength) {
    errors.push({
      field: 'name',
      message: `Name must be ${VALIDATION_RULES.name.maxLength} characters or less`,
    });
  }

  // Validate email
  if (!email) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  } else if (email.length > VALIDATION_RULES.email.maxLength) {
    errors.push({
      field: 'email',
      message: `Email must be ${VALIDATION_RULES.email.maxLength} characters or less`,
    });
  }

  // Validate message
  if (!message) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (message.length < VALIDATION_RULES.message.minLength) {
    errors.push({
      field: 'message',
      message: `Message must be at least ${VALIDATION_RULES.message.minLength} characters`,
    });
  } else if (message.length > VALIDATION_RULES.message.maxLength) {
    errors.push({
      field: 'message',
      message: `Message must be ${VALIDATION_RULES.message.maxLength} characters or less`,
    });
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: { name, email, message },
  };
}
