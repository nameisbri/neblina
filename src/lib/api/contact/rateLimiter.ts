/**
 * Contact Form Rate Limiter
 * In-memory sliding window rate limiting for contact form submissions
 */

import type { RateLimitResult } from './types';

/**
 * Rate limiter configuration
 */
const RATE_LIMIT_CONFIG = {
  /** Maximum requests allowed per window */
  limit: 5,
  /** Time window in milliseconds (1 hour) */
  windowMs: 60 * 60 * 1000,
  /** Cleanup interval - run cleanup every N requests */
  cleanupInterval: 100,
} as const;

/**
 * Sliding window rate limiter using in-memory Map
 */
class RateLimiter {
  private store = new Map<string, number[]>();
  private requestCount = 0;

  /**
   * Check if a request from the given IP is allowed
   */
  check(ip: string): RateLimitResult {
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_CONFIG.windowMs;

    // Get existing timestamps for this IP
    let timestamps = this.store.get(ip) || [];

    // Filter out timestamps outside the current window
    timestamps = timestamps.filter((ts) => ts > windowStart);

    // Calculate reset time (when the oldest request in window expires)
    const resetTime = timestamps.length > 0
      ? Math.ceil((timestamps[0] + RATE_LIMIT_CONFIG.windowMs) / 1000)
      : Math.ceil((now + RATE_LIMIT_CONFIG.windowMs) / 1000);

    // Check if under limit
    const allowed = timestamps.length < RATE_LIMIT_CONFIG.limit;
    const remaining = Math.max(0, RATE_LIMIT_CONFIG.limit - timestamps.length - (allowed ? 1 : 0));

    if (allowed) {
      // Add current timestamp
      timestamps.push(now);
      this.store.set(ip, timestamps);
    }

    // Periodic cleanup to prevent memory leak
    this.requestCount++;
    if (this.requestCount >= RATE_LIMIT_CONFIG.cleanupInterval) {
      this.cleanup();
      this.requestCount = 0;
    }

    return { allowed, remaining, resetTime };
  }

  /**
   * Get the configured rate limit
   */
  getLimit(): number {
    return RATE_LIMIT_CONFIG.limit;
  }

  /**
   * Clean up stale entries older than 2x the window
   */
  private cleanup(): void {
    const cutoff = Date.now() - RATE_LIMIT_CONFIG.windowMs * 2;

    this.store.forEach((timestamps, ip) => {
      // Filter timestamps
      const validTimestamps = timestamps.filter((ts: number) => ts > cutoff);

      if (validTimestamps.length === 0) {
        this.store.delete(ip);
      } else {
        this.store.set(ip, validTimestamps);
      }
    });
  }
}

/**
 * Extract client IP from request headers
 * Checks X-Forwarded-For, X-Real-IP, and connection info
 */
export function getClientIP(request: Request): string {
  // X-Forwarded-For can contain multiple IPs - use the first one (original client)
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    const firstIP = forwardedFor.split(',')[0].trim();
    if (firstIP) return firstIP;
  }

  // X-Real-IP is typically set by reverse proxies
  const realIP = request.headers.get('x-real-ip');
  if (realIP) return realIP;

  // Fallback for unknown IP
  return 'unknown';
}

/**
 * Singleton rate limiter instance
 */
export const rateLimiter = new RateLimiter();
