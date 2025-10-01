/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Main streaming blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', // Premium gold accent
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        dark: {
          100: '#1a1f36', // Card backgrounds
          200: '#15192c', // Main background
          300: '#0f1322', // Deep background
        },
        light: {
          100: '#ffffff', // Pure white text
          200: '#f1f5f9', // Off-white text
          300: '#e2e8f0', // Muted text
        },
        accent: {
          100: '#8b5cf6', // Purple accent
          200: '#7c3aed', // Darker purple
          300: '#6d28d9', // Deep purple
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        
        // Semantic aliases
        background: {
          primary: '#15192c',
          secondary: '#1a1f36',
          tertiary: '#0f1322',
        },
        text: {
          primary: '#ffffff',
          secondary: '#f1f5f9',
          muted: '#e2e8f0',
          accent: '#eab308',
        }
      },
    },
  },
  plugins: [],
};