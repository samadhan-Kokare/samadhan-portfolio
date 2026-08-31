import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'hsl(var(--paper) / <alpha-value>)',
        panel: 'hsl(var(--panel) / <alpha-value>)',
        ink: 'hsl(var(--ink) / <alpha-value>)',
        inkSoft: 'hsl(var(--ink-soft) / <alpha-value>)',
        inkFaint: 'hsl(var(--ink-faint) / <alpha-value>)',
        line: 'hsl(var(--line) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        accentDeep: 'hsl(var(--accent-deep) / <alpha-value>)',
        accentSoft: 'hsl(var(--accent-soft) / <alpha-value>)',
        metric: 'hsl(var(--metric) / <alpha-value>)',
        metricSoft: 'hsl(var(--metric-soft) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        content: '1120px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(18,20,28,0.04), 0 8px 24px -12px rgba(18,20,28,0.10)',
        cardHover: '0 4px 8px rgba(18,20,28,0.06), 0 16px 32px -12px rgba(47,95,224,0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
