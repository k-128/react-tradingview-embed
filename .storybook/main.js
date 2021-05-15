module.exports = {
  "stories": ["../src/stories/*.stories.tsx"],
  "addons": [
    "@storybook/addon-actions",
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addons",
    "@storybook/theming",
    "storybook-readme",
  ],
};