/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "kamus": "url('/images/KamusSundacode.PNG')"
      },
      colors: {
        primary: "#140021",
        secondary: "white",
        pink:"#9900ff" 
      }
    },
  },
  plugins: [],
};
