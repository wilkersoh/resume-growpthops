import React from "react";

import { Box } from "@chakra-ui/react";

export default function Container({ children, ...props }) {
  return (
    <Box d='flex' mx='auto' px={2} w='100%' maxW='1180px' {...props}>
      <Box w='full'>{children}</Box>
    </Box>
  );
}
