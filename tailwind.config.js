/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        gerbera: ['var(--font-gerbera)', ...fontFamily.sans],
      },
      colors: {
        bg_color: {
          100: '#F8F7F5',
        },
      },
    },
  },
  plugins: [],
}
