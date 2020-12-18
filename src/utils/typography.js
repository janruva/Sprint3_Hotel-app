import Typography from 'typography';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ["Kurale", "Roboto", "Roboto Condensed"]
    }
})

const typography = new Typography({
    baseFontSize: "16px",
    headerFontFamily: [
        "Kurale",
    ],
    bodyFontFamily: ["Kurale"]
})

typography.toString();

typography.injectStyles();

export default typography;