export default {
  content: [
    "./index.html",
    "./login.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        cadence: '#6EFFC0',
      },
      borderRadius: {
        DEFAULT: "9999px",
      }
    }
  },
  plugins: [],
}
