/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC", // soft off-white/slate-50
          deep: "#F1F5F9",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8FAFC",
          hover: "#F1F5F9",
        },
        accent: {
          DEFAULT: "#2563EB", // corporate blue
          dark: "#1E40AF",
          light: "#3B82F6",
        },
        success: '#10B981',
        warning: '#F59E0B',
        primary: "#0F172A", // deep slate/navy for headings
        secondary: "#475569", // slate-600 for body/subtitles
        body: "#1F2937", // dark charcoal for body text
        border: "#E2E8F0", // subtle slate border
        borderAlt: "#CBD5E1",
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        tight: '-0.01em',
      },
      boxShadow: {
        soft: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        elegant: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}