import React from "react";

import { Box, Stack, Text } from "@chakra-ui/react";
import SubtitleWithLine from "./SubtitleWithLine";
import Container from "./Container";

export default function Proformance({ children }) {
  return (
    <Box minH={"200px"} py={4} bgColor='gray.0'>
      <Container>
        <SubtitleWithLine baseColor={"white"} lineColor={"gray.0"}>
          <Text as='h2'>
            our powerful{" "}
            <Text as='span' color='teal.500'>
              skills
            </Text>
          </Text>
        </SubtitleWithLine>
        <Text color='rgb(90, 90, 90)' textAlign='center'>
          We're good and experienced at different things and areas and we
          promise about quality of our works
        </Text>
        <Stack direction={{ sm: "column", md: "row" }}>{children}</Stack>
      </Container>
    </Box>
  );
}
