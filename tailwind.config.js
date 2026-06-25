/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#0D0D0D',
        'flame': '#FF5C00',
        'cream': '#F5F0E8',
        'soft-gray': '#1A1A1A',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      opacity: {
        '6': '0.06',
        '8': '0.08',
        '12': '0.12',
        '96': '0.96',
      },
    },
  },
  plugins: [],
};
