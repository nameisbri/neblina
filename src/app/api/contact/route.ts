/**
 * Contact Form API Route
 * POST /api/contact - Handle contact form submissions
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  validateContactForm,
  rateLimiter,
  getClientIP,
  ErrorCodes,
  ErrorMessages,
  createErrorResponse,
  addRateLimitHeaders,
} from '@/lib/api/contact';
import type { ContactSuccessResponse } from '@/lib/api/contact';
import { sendContactMessage } from '@/services/contactService';

/**
 * Handle POST requests to /api/contact
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  const clientIP = getClientIP(request);
  const limit = rateLimiter.getLimit();

  try {
    // Check rate limit
    const rateLimitResult = rateLimiter.check(clientIP);

    if (!rateLimitResult.allowed) {
      const response = createErrorResponse(
        ErrorCodes.RATE_LIMIT_EXCEEDED,
        ErrorMessages.RATE_LIMIT_EXCEEDED,
        429
      );
      return addRateLimitHeaders(
        response,
        limit,
        rateLimitResult.remaining,
        rateLimitResult.resetTime
      );
    }

    // Parse request body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      const response = createErrorResponse(
        ErrorCodes.VALIDATION_ERROR,
        'Invalid JSON in request body',
        400
      );
      return addRateLimitHeaders(
        response,
        limit,
        rateLimitResult.remaining,
        rateLimitResult.resetTime
      );
    }

    // Validate form data
    const validationResult = validateContactForm(body);

    if (!validationResult.valid) {
      const response = createErrorResponse(
        ErrorCodes.VALIDATION_ERROR,
        ErrorMessages.VALIDATION_ERROR,
        400,
        validationResult.errors
      );
      return addRateLimitHeaders(
        response,
        limit,
        rateLimitResult.remaining,
        rateLimitResult.resetTime
      );
    }

    // Send email via contact service
    const sendResult = await sendContactMessage(validationResult.data);

    if (!sendResult.success) {
      const status = sendResult.code === ErrorCodes.SERVICE_UNAVAILABLE ? 503 : 500;
      const response = createErrorResponse(
        sendResult.code as typeof ErrorCodes[keyof typeof ErrorCodes],
        ErrorMessages[sendResult.code as keyof typeof ErrorMessages] || sendResult.message,
        status
      );
      return addRateLimitHeaders(
        response,
        limit,
        rateLimitResult.remaining,
        rateLimitResult.resetTime
      );
    }

    // Success
    const successResponse: ContactSuccessResponse = {
      success: true,
      message: 'Message sent successfully',
    };

    const response = NextResponse.json(successResponse, { status: 200 });
    return addRateLimitHeaders(
      response,
      limit,
      rateLimitResult.remaining,
      rateLimitResult.resetTime
    );
  } catch (error) {
    // Unexpected error
    console.error('[Contact API] Unexpected error:', error);
    const response = createErrorResponse(
      ErrorCodes.INTERNAL_ERROR,
      ErrorMessages.INTERNAL_ERROR,
      500
    );
    return response;
  }
}

/**
 * Handle other HTTP methods - return 405 Method Not Allowed
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { success: false, error: { code: 'METHOD_NOT_ALLOWED', message: 'Method not allowed' } },
    { status: 405 }
  );
}
