/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#0a1220',
          100: '#0e182c',
          200: '#131f38',
          300: '#172544',
          400: '#1c2c50',
          500: '#20325c', // Deep navy blue
          600: '#2a3f75',
          700: '#354b8e',
          800: '#3f58a7',
          900: '#4a64c0',
        },
        secondary: {
          50: '#1a1508',
          100: '#2a220d',
          200: '#3a2f12',
          300: '#4a3c17',
          400: '#5a491c',
          500: '#6a5621', // Rich bronze
          600: '#8a7235',
          700: '#aa8e49',
          800: '#caaa5d',
          900: '#eac671',
        },
        dark: {
          100: '#0a0e1a', // Card backgrounds
          200: '#080b14', // Main background
          300: '#06080f', // Deep background
          400: '#04060a', // Ultra dark
          500: '#020305', // Almost black
        },
        light: {
          100: '#e6e9f0', // Soft white text
          200: '#ccd3e1', // Off-white text
          300: '#b3bdd2', // Muted text
          400: '#99a7c3', // Light muted
          500: '#8091b4', // Medium muted
        },
        accent: {
          50: '#1a0f3d',
          100: '#2a1a5e',
          200: '#3a257f',
          300: '#4a30a0',
          400: '#5a3bc1', // Deep purple
          500: '#6a46e2',
          600: '#7d5df0',
          700: '#9074f5',
          800: '#a38bfa',
          900: '#b6a2ff',
        },
        success: {
          50: '#052f1a',
          100: '#084c2a',
          200: '#0a693a',
          300: '#0d864a',
          400: '#0fa35a',
          500: '#12c06a', // Deep emerald
          600: '#34d483',
          700: '#56e89c',
          800: '#78fcb5',
          900: '#9affce',
        },
        warning: {
          50: '#2a1f08',
          100: '#45320d',
          200: '#604512',
          300: '#7b5817',
          400: '#966b1c',
          500: '#b17e21', // Deep amber
          600: '#cc9136',
          700: '#e7a44b',
          800: '#ffb760',
          900: '#ffca85',
        },
        error: {
          50: '#2a0a0a',
          100: '#451010',
          200: '#601616',
          300: '#7b1c1c',
          400: '#962222',
          500: '#b12828', // Deep crimson
          600: '#cc3a3a',
          700: '#e74c4c',
          800: '#ff5e5e',
          900: '#ff8080',
        },
        info: {
          50: '#0a1a2a',
          100: '#102a45',
          200: '#163a60',
          300: '#1c4a7b',
          400: '#225a96',
          500: '#286ab1', // Deep sapphire
          600: '#3a7ccc',
          700: '#4c8ee7',
          800: '#5ea0ff',
          900: '#80b2ff',
        },
        
        // Semantic aliases - Much darker
        background: {
          primary: '#080b14',     // Almost black
          secondary: '#0a0e1a',   // Very dark blue-black
          tertiary: '#06080f',    // Near black
          card: '#0a1220',        // Dark card background
          surface: '#0e182c',     // Dark surface
        },
        text: {
          primary: '#e6e9f0',     // Soft white
          secondary: '#ccd3e1',   // Light gray
          muted: '#b3bdd2',       // Medium gray
          accent: '#eac671',      // Warm gold
          inverted: '#080b14',    // Dark text for light backgrounds
        },
        border: {
          primary: '#1a1f36',     // Dark borders
          secondary: '#2a3152',   // Medium borders
          accent: '#6a5621',      // Accent borders
        }
      },
      backgroundColor: {
        'glass': 'rgba(10, 14, 26, 0.8)', // Glass morphism effect
        'overlay': 'rgba(6, 8, 15, 0.9)',  // Overlay background
      },
      borderColor: {
        'glass': 'rgba(42, 49, 82, 0.3)',  // Glass borders
      }
    },
  },
  plugins: [],
};