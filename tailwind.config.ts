import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
     fontFamily: {
        chibold: ["chibold", "cursive"],
        patrick: ["Patrick Hand", "sans-serif"]
     },
     colors: {
        main: "#dde2d5",
        secondary: "#76b72b"
     }
  },
  plugins: [],
}
export default config
