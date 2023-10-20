import type { Config } from 'tailwindcss'


const config: Config = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(233, 26%, 24%)',
        secondary: 'hsl(136, 65%, 51%)',
        third: 'hsl(192, 70%, 51%)',
        'neutral-700': 'hsl(233, 8%, 62%)',
        'neutral-600': 'hsl(220, 16%, 96%)',
        'neutral-500': 'hsl(0, 0%, 98%)',
        'neutral-400': 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}
export default config
