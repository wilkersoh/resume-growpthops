import React from "react";
import { Box } from "@chakra-ui/react";
import HeadBanner from "./HeadBanner";
import Footer from "./Footer";
import Nav from "./Nav";

export default function App({ children }) {
  return (
    <Box d='flex' flexDir='column'>
      <Box>
        <HeadBanner />
        <Nav />
        <Box as='main'>{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
}
