// theme.js
import { extendTheme } from "@chakra-ui/react";

import Heading from "./components/Heading";
import breakpoints from "./foundations/breakpoints";
import colors from "./foundations/colors";
import styles from "./styles";

const overrides = {
  styles,
  breakpoints,
  colors,
  components: {
    Heading,
    // Other components go here
  },
};

export default extendTheme(overrides);
