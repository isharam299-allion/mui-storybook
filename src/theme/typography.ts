import { TypographyOptions } from "@mui/material/styles/createTypography";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';


const typography : TypographyOptions = {
    fontFamily: 'Roboto',
    h1: {
       fontSize: '96px',
       fontWeight: 300,
       lineHeight: '112.03px',
       letterSpacing: '-1.5px',
       textAlign: "left"
    },

    h2: {
        fontSize: '60px',
        fontWeight: 300,
        lineHeight: '72px',
        letterSpacing: '-0.5px',
        textAlign: "left"
    },

    h3: {
        fontSize: '48px',
        fontWeight: 400,
        lineHeight: '56.02px',
        textAlign: "left"
    },

    h4: {
        fontSize: '34px',
        fontWeight: 400,
        lineHeight: '41.99px',
        letterSpacing: ' 0.25px',
        textAlign: "left"
    },
    h5: {
        fontSize: '24px',
        fontWeight: 400,
        lineHeight: '32.02px',
        textAlign: "left"
    },

    h6: {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '32px',
        letterSpacing: ' 0.15px',
        textAlign: "left"
    },

    subtitle1: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '28px',
        letterSpacing: ' 0.15px',
        textAlign: "left"
    },

    subtitle2: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '21.98px',
        letterSpacing: ' 0.1px',
        textAlign: "left"
    },

    body1: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: ' 0.15px',
        textAlign: "left"
    },

    body2: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20.02px',
        letterSpacing: ' 0.17px',
        textAlign: "left"
    },

    caption: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '19.92px',
        letterSpacing: ' 0.4px',
        textAlign: "left"
    },

    overline: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '31.92px',
        letterSpacing: '1px',
        textAlign: "left"
    }
}

export {
    typography
}