/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#fafafa',
          dark: '#09090b',
        },
        surface: {
          light: '#ffffff',
          dark: '#121215',
          subtleDark: '#18181b',
        },
        border: {
          subtleLight: 'rgba(0, 0, 0, 0.08)',
          subtleDark: 'rgba(255, 255, 255, 0.08)',
          hoverDark: 'rgba(255, 255, 255, 0.16)',
        },
        accent: {
          blue: {
            DEFAULT: '#3b82f6',
            hover: '#2563eb',
            muted: 'rgba(59, 130, 246, 0.12)',
          },
          violet: {
            DEFAULT: '#8b5cf6',
            hover: '#7c3aed',
            muted: 'rgba(139, 92, 246, 0.12)',
          },
        },
      },
      fontFamily: {
        sans: ['Geist Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
