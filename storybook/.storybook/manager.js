import { create as createTheme } from "@storybook/theming";
import { addons } from "@storybook/addons";


const t = createTheme({
  base: "dark",
  brandTitle: "react-tradingview-embed",
  brandUrl: "https://github.com/k-128/react-tradingview-embed/",
  brandImage: "",

  colorPrimary: "orange",
  colorSecondary: "#33691e",

  // UI
  appBg: "#181818",
  appContentBg: "#131722",
  appBorderColor: "grey",
  appBorderRadius: 0,

  // Toolbar default and active colors
  barBg: "#181818",
  barTextColor: "#bcbcbc",
  barSelectedColor: "#bcbcbc",

  // Text colors
  textColor: "#bcbcbc",
  textInverseColor: "rgba(255, 255, 255, 0.9)",

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Form colors
  inputBg: "#212121",
  inputBorder: "silver",
  inputTextColor: "#bcbcbc",
  inputBorderRadius: 0,
});


addons.setConfig({
  theme: t,
});
