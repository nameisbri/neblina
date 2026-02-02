import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names using clsx and merges Tailwind classes intelligently.
 * This utility helps avoid conflicting Tailwind classes and provides
 * a clean API for conditional class name composition.
 *
 * @param inputs - Class values to combine (strings, objects, arrays)
 * @returns Merged class name string
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-blue-500', { 'text-white': isActive })
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
