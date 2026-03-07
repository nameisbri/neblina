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
        // Warm mist palette
        'deep-night': '#0f0f12',
        'fog-deep': '#1a1a1e',
        'fog-mid': '#50505a',
        'fog-light': '#b8b5ae',
        // Accents — morning light amber
        'particle-glow': '#c9956b',
        'text-primary': '#e6e2da',
        'text-secondary': '#8a8780',
        'cta-hover': '#d9a87d',
        'focus-ring': '#c9956b',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
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
