import React from "react";
import SubtitleWithLine from "./SubtitleWithLine";
import Container from "./Container";

import { LinkIcon } from "@chakra-ui/icons";
import { Box, Stack, Text, Icon } from "@chakra-ui/react";

export default function Performance({ children }) {
  return (
    <Box minH={"200px"} py={6} bgColor='gray.0' position='relative'>
      <Box
        position='absolute'
        d='flex'
        bgColor='teal.0'
        w={10}
        h={10}
        left={"50%"}
        top={"-0.25rem"}
        transform='rotate(45deg) translateX(-50%)'>
        <Icon m='auto' color={"white"} as={LinkIcon} />
      </Box>
      <Box h={4}></Box>
      <Container>
        <Box w='full'>
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
        </Box>
      </Container>
    </Box>
  );
}
