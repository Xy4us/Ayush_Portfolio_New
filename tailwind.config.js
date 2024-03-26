/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Madimi One", "Sans"],
        custom2: ["Dancing Script", "Sans"],
        custom3: ["Great Vibes", "Sans"],
      },
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        fourth: "var(--fourth-color)",
        fifth: "var(--fifth-color)",
        sixth: "var(--sixth-color)",
        seventh: "var(--seventh-color)",
        eighth: "var(--eighth-color)",
        ninth: "var(--ninth-color)",
        tenth: "var(--tenth-color)",
      },
    },
  },
  plugins: [],
};
