/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'amarillo': '#FFFF00',
        'BG-1': '#202020',
        'BG-2': '#323232',
        'IG':'#DF019D',
        'IGH':'#9B005C', 
        'WP':'#1DAA61',
        'WPH':'#005C4B',
        'VD':'#279572',
      }
    },
  },
  plugins: [],
};
