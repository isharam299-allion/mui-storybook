import type { Preview } from "@storybook/react";
import { ThemeProvider , CssBaseline, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

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
