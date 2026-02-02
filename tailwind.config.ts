import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blue Hour Palette
        'deep-night': '#0f0f1e',
        'fog-deep': '#1a1a2e',
        'fog-mid': '#374151',
        'fog-light': '#cbd5e1',
        // Accents
        'particle-glow': '#a5b4fc',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        'cta-hover': '#6366f1',
        'focus-ring': '#818cf8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
