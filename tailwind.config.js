/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUpLeave: {
          "0%": {
            opacity: 100,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
        },
        slideUpEnter: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        slideUpEnter: "slideUpEnter .9s ease-in-out",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
