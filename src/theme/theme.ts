import { createTheme } from "@mui/material";
import { palette } from "./pallette";
import { typography } from "./typography";

const theme = createTheme({
    palette,
    typography
});

export {
    theme
}