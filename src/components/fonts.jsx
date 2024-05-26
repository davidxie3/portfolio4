import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
    @font-face {
        font-family: "EpiceneDisplayRegular";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("../assets/fonts/Epicene/WOFFEpiceneDisplay-RegularItalic.woff2") format("opentype");
        unicode-range: U+20, U+21, U+23, U+26-29, U+2C-33, U+35-38, U+3A, U+3F,
                    U+41-57, U+61-7A, U+A9, U+E9, U+2013, U+2014, U+2026, U+2AF6, U+1F44B;
    }

    @font-face {
        font-family: "EpiceneDisplayRegular";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("../assets/fonts/Epicene/EpiceneDisplay-Regular.ttf") format("truetype");
        unicode-range: U+20, U+21, U+23, U+26-29, U+2C-33, U+35-38, U+3A, U+3F,
                    U+41-57, U+61-7A, U+A9, U+E9, U+2013, U+2014, U+2026, U+2AF6, U+1F44B;
    }

    @font-face {
        font-family: "EpiceneDisplayRegular";
        font-style: normal;
        font-weight: light;
        font-display: swap;
        src: url("../assets/fonts/Epicene/EpiceneDisplay-Light.ttf") format("truetype");
        unicode-range: U+20, U+21, U+23, U+26-29, U+2C-33, U+35-38, U+3A, U+3F,
                    U+41-57, U+61-7A, U+A9, U+E9, U+2013, U+2014, U+2026, U+2AF6, U+1F44B;
    }

    @font-face {
        font-family: "EpiceneDisplayRegular";
        font-style: italic;
        font-weight: light;
        font-display: swap;
        src: url("../assets/fonts/Epicene/EpiceneDisplay-LightItalic.ttf") format("truetype");
        unicode-range: U+20, U+21, U+23, U+26-29, U+2C-33, U+35-38, U+3A, U+3F,
                    U+41-57, U+61-7A, U+A9, U+E9, U+2013, U+2014, U+2026, U+2AF6, U+1F44B;
    }

    @font-face {
        font-family: "RomieMedium";
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url("../assets/fonts/Romie/Romie-Medium.ttf") format("truetype");
        unicode-range: U+20, U+21, U+23, U+26-29, U+2C-33, U+35-38, U+3A, U+3F,
                    U+41-57, U+61-7A, U+A9, U+E9, U+2013, U+2014, U+2026, U+2AF6, U+1F44B;
    }
      `}
  />
);

export default Fonts;
