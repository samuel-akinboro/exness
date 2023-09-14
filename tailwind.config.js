/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#10171B',
        secondary: '#FECF02',
        gray1: '#353D41',
        gray2: '#606569',
        gray3: '#F4F5F6',
        blue1: '#2F70DE',
        textBlack: '#10171B'
      }
    },
  },
  plugins: [],
}
