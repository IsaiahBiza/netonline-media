/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Netonline Media primary colors
        primaryRed: '#e41e26',   // Red
        darkGrey: '#333133',     // Dark Grey
        lightGrey: '#f5f5f5',    // Light Grey

        // Wandle colors
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
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [],
};
