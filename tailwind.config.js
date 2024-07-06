export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "rgb(254, 232, 76)",
        customGray: "rgb(23, 30, 32)",
        customDividerColor: "rgba(255, 255, 255, 0.3)",
        textNav: "rgb(255, 255, 255)",
        waitlistTest: "rgb(0,153,255)",
       customGray: 'rgb(179, 179, 179)',
      },
      spacing: {
        '500': '500px',
        '1500': '1500px'
      },
      width: {
        "1px": "1px",
      },
      height: {
        "25px": "25px",
      },
      maxWidth: {
        "100px": "110px",
        "170px": "170px",
        "210px": "210px",
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "Plus Jakarta Sans Placeholder",
          "sans-serif",
        ],
      },
      fontSize: {
        "15px": "15px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // Other Tailwind CSS plugins
  ],
};
