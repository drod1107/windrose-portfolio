/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        lava: {
          "0%, 100%": { transform: "scale(1) translate(0, 0)" },
          "33%": { transform: "scale(1.2) translate(10%, -5%)" },
          "66%": { transform: "scale(0.9) translate(-10%, 5%)" },
        },
      },
      animation: {
        lava: "lava 20s ease-in-out infinite",
      },
      backgroundImage: {
        'lava-morph': `
          radial-gradient(circle at 30% 30%, #10b981 0%, transparent 70%),
          radial-gradient(circle at 70% 70%, #6366f1 0%, transparent 70%),
          radial-gradient(circle at 50% 50%, #ec4899 0%, transparent 70%)
        `,
      },
    },
  },
  plugins: [],
};
