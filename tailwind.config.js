import {nextui} from '@nextui-org/theme'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
const tailwind = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(),daisyui],
  daisyui:{
    themes: ['light']
  }
}

export default tailwind