/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#090a0d",
        panel: "#111318",
        accent: "#b8f36b",
      },
      boxShadow: {
        glow: "0 0 90px rgba(184, 243, 107, 0.10)",
      },
    },
  },
  plugins: [],
};
