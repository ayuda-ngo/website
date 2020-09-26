// import { hex2rgba } from "../utils/index";

export const theme = {
  colors: {
    bg: "#03111a",
    black: "#080808",
    white: "#ffffff",
    grey: "#c4c4c4",
    blue: "#001122",
    cardColor: "#414242",
  },

  fonts: {
    Capriola:
      "Capriola, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
    SFMono:
      "SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
  },

  fontSizes: {
    xs: "12px",
    smish: "13px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "22px",
    h3: "32px",
  },

  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",

  borderRadius: "20px",
  navHeight: "80px",
  navScrollHeight: "80px",
  margin: "20px",

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  cardShadow:
    "-2px -2px 25px rgba(255, 255, 255, 0.28), 2px 2px 20px rgba(255, 255, 255, 0.28);",

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};
