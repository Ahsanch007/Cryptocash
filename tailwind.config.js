/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to right, #193f88 0%, #0e082c 99%)',
      'gradient-custom2': 'linear-gradient(to right, #ff67cb 0%, #ffcc67 99%)',
      'gradient-2': 'linear-gradient(to right, #193f88 0%,#0e082c 99%)'
    },
  },
  plugins: [],
}

