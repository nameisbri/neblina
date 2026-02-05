/**
 * Contact API Module
 * Exports all contact form API utilities
 */

// Types
export type {
  ContactFormRequest,
  ContactSuccessResponse,
  ContactErrorResponse,
  ContactFormResponse,
  ValidationError,
  ValidationResult,
  RateLimitResult,
  ContactServiceResult,
} from './types';

// Validation
export {
  validateContactForm,
  sanitizeInput,
  VALIDATION_RULES,
  EMAIL_REGEX,
} from './validation';

// Errors
export {
  ErrorCodes,
  ErrorMessages,
  createErrorResponse,
  addRateLimitHeaders,
} from './errors';
export type { ErrorCode } from './errors';

// Rate Limiting
export { rateLimiter, getClientIP } from './rateLimiter';
