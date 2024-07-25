import type { Preview } from "@storybook/react";
import { ThemeProvider , CssBaseline, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
