/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',   // Small devices (mobile)
      md: '820px',   // Medium devices (tablet)
      lg: '1024px',  // Large devices (desktop)
      xl: '1280px',  // Extra large devices (large desktop)
      '2xl': '1536px', // 2X extra large devices (large desktop)
      // Custom breakpoints
      'xs': '480px', // Extra small devices
      'xxl': '1600px' // Extra extra large devices
    },
    extend: {},
  },
  plugins: [],
}

