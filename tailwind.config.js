module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5E5B", // Custom color for your branding (red-pinkish tone)
      },
      animation: {
        fadeIn: "fadeIn 2s ease-out",
        typing: "typing 4s steps(40) 1s forwards",
        blinkCaret: "blinkCaret 0.75s step-end infinite",
        background: "background 5s ease-in-out infinite", // Custom background animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blinkCaret: {
          "0%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
          "100%": { borderColor: "transparent" },
        },
        background: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
