import React from "react";

import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box as='footer' bgColor={"gray.1"} textAlign='center' py={3}>
      <Text color='white' fontSize='0.65rem'>
        Copyright &copy; 2017 APD Digital Services Sdn Bhd, All Rights Reserved.
      </Text>
    </Box>
  );
}
