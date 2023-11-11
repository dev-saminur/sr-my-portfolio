/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        primaryFont: ["Open Sans", "sans-serif"],
      },
      colors: {
        linkColor: "#15BEC5",
        headerColor: "#C0FFFF",
        btnColor: "#15BEC5",
        black: "#000807",
        gray: "#2E3D44",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
