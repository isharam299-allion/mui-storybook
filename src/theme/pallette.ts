import { blue, common, green, lightBlue, orange, purple, red } from "@mui/material/colors"
import { alpha, PaletteOptions } from "@mui/material";

const palette : PaletteOptions = {
    text : {
        primary: alpha(common.black, .87),
        secondary: alpha(common.black, .6),
        disabled: alpha(common.black, .12),
    },

    background: {
        default: common.white,
        paper: alpha(common.white, .12),
        
    },

    action: {
        active: alpha(common.black, .56),
        hover: alpha(common.white, .04),
        selected: alpha(common.white, .08),
        disabledBackground: alpha(common.white, .12),
        focus: alpha(common.white, .12),
        disabled: alpha(common.white, .38),
        hoverOpacity: .04,
        selectedOpacity: .08,
        focusOpacity: .12,
    },

    divider:  alpha(common.white, .12),

    primary: {
        main: blue[500],
        dark: blue[600],
        light: blue[400],
    },

    secondary: {
        main: purple[500],
        dark: purple[700],
        light: purple[300],
        contrastText: common.white
    },

    error: {
        main: red[700],
        dark: red[800],
        light: red[400],
        contrastText: common.white
    },

    warning: {
        main: orange[800],
        dark: orange[900],
        light: orange[500],
        contrastText: common.white
    },

    info: {
        main: lightBlue[700],
        dark: lightBlue[900],
        light: lightBlue[500],
        contrastText: common.white
    },

    success: {
        main: green[800],
        dark: green[900],
        light: green[500],
        contrastText: common.white
    }

}

export {
    palette
}