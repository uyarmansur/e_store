/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#78350F",
        darkBlue: "#0F172A",
        lightYellow: "#fffbeb",
        lightWhite: "#ffffff",
        darkGrey: "#475569",
        grey: "#334155",
        lightGrey: "#E2E8F0",
        coldYellow: " #FDE68A",
      },
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1280px",
        },
        padding: {
          sm: "10px",
          md: "20px",
        },
      },
      spacing: {
        18: "4.5rem",
      },
      backgroundImage: {
        backlights: "/Backlights.png",
      },
      boxShadow: {
        xs: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        xsm: "0px 0px 10px 0px #00000012",
        xxsm: "0px 0px 15px -5px #0000001A",
      },
      fontSize: {
        xxl: "3.5rem",
      },
      borderRadius: {
        "4xl": "1.875rem",
      },
    },
  },
  plugins: [],
};
