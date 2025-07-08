module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["var(--font-Vazirmatn)"],
      },
      colors: {
        gray: {
          1: "var(--color-gray-1)",
          2: "var(--color-gray-2)",
        },
        dark: {
          1: "var(--color-dark-1)",
        },
      },
    },
  },
  plugins: [],
};
