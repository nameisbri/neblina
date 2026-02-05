/**
 * Contact Form API Type Definitions
 * Used for request/response typing in the contact form API endpoint
 */

/**
 * Request payload for contact form submission
 */
export interface ContactFormRequest {
  /** Sender's name (1-100 characters) */
  name: string;
  /** Sender's email address (valid format, max 254 characters) */
  email: string;
  /** Message content (10-2000 characters) */
  message: string;
}

/**
 * Successful response from contact form API
 */
export interface ContactSuccessResponse {
  success: true;
  message: string;
}

/**
 * Error response from contact form API
 */
export interface ContactErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: ValidationError[];
  };
}

/**
 * Union type for all contact form API responses
 */
export type ContactFormResponse = ContactSuccessResponse | ContactErrorResponse;

/**
 * Individual field validation error
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validation result - either valid with sanitized data or invalid with errors
 */
export type ValidationResult =
  | { valid: true; data: ContactFormRequest }
  | { valid: false; errors: ValidationError[] };

/**
 * Rate limit check result
 */
export interface RateLimitResult {
  /** Whether the request is allowed */
  allowed: boolean;
  /** Number of requests remaining in the current window */
  remaining: number;
  /** Unix timestamp when the rate limit resets */
  resetTime: number;
}

/**
 * Contact service result - either success or failure with error details
 */
export type ContactServiceResult =
  | { success: true }
  | { success: false; code: string; message: string };
