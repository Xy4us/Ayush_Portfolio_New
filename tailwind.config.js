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
        subHeading: "var(--subHeading-color)",
      },
    },
  },
  plugins: [],
};
