import { ChakraProvider } from "@chakra-ui/react";

import overrides from "../theme";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={overrides}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
