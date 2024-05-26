import { extendTheme, theme as base } from "@chakra-ui/react";

import styles from "./styles";
import NavButton from "./components/button-style";

const overrides = extendTheme({
  //My Main Theme Entry Point
  styles,

  colors: {
    mainPurple: {
      primary: "#BD82F8",
      secondary: "#aa56FF",
    },
  },

  fonts: {
    heading: `'EpiceneDisplayRegular', ${base.fonts?.heading}, sans-serif`,
    body: `'RomieMedium', ${base.fonts?.heading}, sans-serif`,
  },

  components: {
    Button: NavButton,
  },
});

export default overrides;
