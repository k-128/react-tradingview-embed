import { addReadme } from "storybook-readme";
import { create as createTheme } from "@storybook/theming";
import { addDecorator, addParameters, configure } from "@storybook/react";


const t = createTheme({
  base: "dark",
  brandTitle: "react-tradingview-embed",
  brandUrl: "https://github.com/k-128/react-tradingview-embed/",
  brandImage: null
});

addParameters({
  options: {
    showPanel: false,
    panelPosition: "bottom",
    theme: t
  },
  readme: {
    codeTheme: "github",
  }
});

addDecorator(addReadme);


const loaderFn = () => {
  const e = [];  // [require("./entry.stories.tsx")];
  const req = require.context("../src/stories", true, /\.stories\.tsx$/);
  req.keys().forEach(fname => e.push(req(fname)));
  return e;
};

configure(loaderFn, module);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
