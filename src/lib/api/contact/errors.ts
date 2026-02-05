/**
 * Contact Form Error Handling
 * Error codes, messages, and response factory functions
 */

import { NextResponse } from 'next/server';
import type { ContactErrorResponse, ValidationError } from './types';

/**
 * Error codes for contact form API
 */
export const ErrorCodes = {
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
  CONFIGURATION_ERROR: 'CONFIGURATION_ERROR',
} as const;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

/**
 * User-friendly error messages for each error code
 */
export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCodes.VALIDATION_ERROR]: 'Please check your input and try again.',
  [ErrorCodes.RATE_LIMIT_EXCEEDED]: 'Too many requests. Please try again later.',
  [ErrorCodes.INTERNAL_ERROR]: 'Failed to send message. Please try again.',
  [ErrorCodes.SERVICE_UNAVAILABLE]: 'Service temporarily unavailable. Please try again later.',
  [ErrorCodes.CONFIGURATION_ERROR]: 'Service configuration error. Please contact support.',
};

/**
 * Create a standardized error response
 */
export function createErrorResponse(
  code: ErrorCode,
  message: string,
  status: number,
  details?: ValidationError[]
): NextResponse<ContactErrorResponse> {
  const responseBody: ContactErrorResponse = {
    success: false,
    error: {
      code,
      message,
      ...(details && details.length > 0 && { details }),
    },
  };

  return NextResponse.json(responseBody, { status });
}

/**
 * Add rate limit headers to a response
 */
export function addRateLimitHeaders(
  response: NextResponse,
  limit: number,
  remaining: number,
  resetTime: number
): NextResponse {
  response.headers.set('X-RateLimit-Limit', limit.toString());
  response.headers.set('X-RateLimit-Remaining', remaining.toString());
  response.headers.set('X-RateLimit-Reset', resetTime.toString());
  return response;
}
