/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Netonline Media primary colors
        primaryRed: '#e41e26',   // Red for hover
        darkGrey: '#333133',     // Default text color for links
        lightGrey: '#f5f5f5',    // Other UI elements
        // Wandle colors used for hero section gradients
        wandlePink: '#c03162',
        wandleDarkPink: '#950a2a',
        wandleBlue: '#3163b1',
        wandleLightBlue: '#54a3e6',
        wandleMediumBlue: '#438dd8',
        wandlePurple: '#962d74',
        wandleDarkPurple: '#510f6e',
        wandleLavender: '#7462a7',
        wandleNavy: '#1a3a69',
        wandleDarkNavy: '#1b0e32',
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',     // Include Next.js App Router content
    './pages/**/*.{js,ts,jsx,tsx}',   // Include pages directory
    './components/**/*.{js,ts,jsx,tsx}', // Include components
  ],
  plugins: [
    require('@tailwindcss/typography'), // Include the typography plugin
  ],
};

