/**
 * Contact Service
 * Handles sending contact form submissions via Web3Forms API
 */

import type { ContactFormRequest, ContactServiceResult } from '@/lib/api/contact/types';
import { ErrorCodes } from '@/lib/api/contact/errors';

const WEB3FORMS_API_URL = 'https://api.web3forms.com/submit';
const REQUEST_TIMEOUT_MS = 10000;

/**
 * Get required environment variable or throw error
 */
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

/**
 * Send contact form message via Web3Forms
 */
export async function sendContactMessage(data: ContactFormRequest): Promise<ContactServiceResult> {
  // Validate environment variables
  let accessKey: string;
  let recipient: string;

  try {
    accessKey = requireEnv('WEB3FORMS_ACCESS_KEY');
    recipient = requireEnv('CONTACT_EMAIL_RECIPIENT');
  } catch (error) {
    console.error('[ContactService] Configuration error:', (error as Error).message);
    return {
      success: false,
      code: ErrorCodes.CONFIGURATION_ERROR,
      message: 'Service configuration error',
    };
  }

  // Build Web3Forms payload
  const payload = {
    access_key: accessKey,
    subject: `New Contact Form Submission - Neblina`,
    from_name: 'Neblina Contact Form',
    to: recipient,
    name: data.name,
    email: data.email,
    message: data.message,
    replyto: data.email,
  };

  // Create abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(WEB3FORMS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const result = await response.json();

    if (result.success) {
      return { success: true };
    }

    // Web3Forms returned an error
    console.error('[ContactService] Web3Forms error:', result.message);
    return {
      success: false,
      code: ErrorCodes.INTERNAL_ERROR,
      message: 'Failed to send message',
    };
  } catch (error) {
    clearTimeout(timeoutId);

    // Handle timeout
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('[ContactService] Request timeout');
      return {
        success: false,
        code: ErrorCodes.SERVICE_UNAVAILABLE,
        message: 'Service request timed out',
      };
    }

    // Handle network errors
    console.error('[ContactService] Network error:', (error as Error).message);
    return {
      success: false,
      code: ErrorCodes.SERVICE_UNAVAILABLE,
      message: 'Unable to reach email service',
    };
  }
}
