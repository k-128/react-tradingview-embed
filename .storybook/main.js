module.exports = {
  "core": {
    "builder": "webpack5"
  },
  "stories": ["../src/stories/*.stories.tsx"],
  "addons": [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/theming",
    "storybook-readme",
  ],
};