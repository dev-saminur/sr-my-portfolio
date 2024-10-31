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
        "name-gradient":
          "linear-gradient(to right, #4fcf70, #fad648, #a767e5, #12bcfe, #44ce7b)",
        "designation-gradient":
          "linear-gradient(to right, #15BEC5, #C0FFFF, #fad648, #a767e5, #44ce7b)",
        "pera-gradient":
          "linear-gradient(to right, #12bcfe, #fad648, #15BEC5, #a767e5, #44ce7b)",
        "header-gradient":
          "linear-gradient(to right,  #4fcf70, #fad648 , #12bcfe)",
      },
      keyframes: {
        moveAround: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, 0)" },
          "50%": { transform: "translate(10px, 10px)" },
          "75%": { transform: "translate(0, 10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        moverightAround: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-10px, 0)" },
          "50%": { transform: "translate(-10px, -10px)" },
          "75%": { transform: "translate(0, -10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        roundSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        roundSpinReverse: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        borderMove: {
          "0%": { transform: "translateX(-5%)" },
          "100%": { transform: "translateX(-25%)" },
        },

        gradientAnimate: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },

      animation: {
        borderMove: "borderMove 0.75s linear infinite",
        gradientAnimate: "gradientAnimate 3s ease infinite",
        roundSpin: "roundSpin 4s linear infinite",
        roundSpins: "roundSpin 18s linear infinite",
        roundSpinReverse: "roundSpin 4s linear infinite reverse",
        moveAround: "moveAround 4s linear infinite",
        moverightAround: "moveAround 4s linear infinite reverse",
      },

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
        whiteColor: "#fffafa",
        linkColor: "#15BEC5",
        headerColor: "#C0FFFF",
        sectionColor: "#A6CDCD",
        btnColor: "#15BEC5",
        black: "#000807",
        gray: "#2E3D44",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
