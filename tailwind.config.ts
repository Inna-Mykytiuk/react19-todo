import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      xl: "1280px",
      xxl: "1480px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
      notXL: { max: "1279.98px" },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "1.25rem",
          md: "2rem",
          xl: "2rem",
        },
      },
      backgroundImage: {
        backdrop: `linear-gradient(rgba(41, 41, 41, 0.40),rgba(41, 41, 41, 0.40))`,
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        mainBgBoat: "url(/images/boatMainBg4.webp)",
        contactBg: "url(/images/kayaks5.png)",
        line: `url(/images/elements/roundedLine.png)`,
        wave: `url(/images/elements/wave.webp)`,
        lines: `url(/images/elements/lines1.png)`,
        linesKayak: `url(/images/elements/lines6.png)`,
        sea: `url(/images/water/whirpool4.png)`,
      },
      content: {
        line: `url(/images/elements/roundedLine.png)`,
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        scale: "scale 0.7s ease infinite alternate",
      },
      fontFamily: {
        comforta: ["Comfortaa", "sans-serif"],
        contrail: ["Contrail One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        medium: ["28px", "1.28"],
        lightLarge: ["32px", "1.25"],
        large: ["40px", "1.2"],
        extraLarge: ["56px", "1.14"],
      },
      colors: {
        mainBcg: "#f3f3f3",
        dark: "#32323D",
        mainBlue: "#1879EA",
        lightBlue: "rgb(154 195 243)",
        titleColor: "#cacaca",
        grey: "#5c5c5c",
        backdrop: "rgba(1, 10, 5, 0.75)",
        backdropBlue: "rgba(52, 98, 153, 0.85)",
      },
    },
  },
  plugins: [],
};
export default config;
