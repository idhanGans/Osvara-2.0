/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#4a4a4a",
        accent: "#808080",
        dark: "#000000",
        silver: "#C0C0C0",
        lightGrey: "#e8e8e8",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        "bounce-smooth": "bounceSoft 2s infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 5px rgba(212, 175, 55, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(212, 175, 55, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};
