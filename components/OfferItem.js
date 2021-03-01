import React from "react";

import { StarIcon, CalendarIcon, ChatIcon } from "@chakra-ui/icons";
import { Box, Heading, Button, Text, Icon } from "@chakra-ui/react";
import Container from "./Container";

const icons = {
  0: StarIcon,
  1: CalendarIcon,
  2: ChatIcon,
};

export default function OfferItem({
  title,
  content,
  onClick,
  activeOfferItem,
  target,
}) {
  return (
    <Container>
      <Box textAlign='center' py={4} mx='auto'>
        <Box
          mb={3}
          h={{ sm: 20, md: 32 }}
          w={{ sm: 20, md: 32 }}
          d='flex'
          mx='auto'
          bgColor={activeOfferItem[target] ? "teal" : "gray.0"}
          borderRadius='50%'>
          <Icon as={icons[target]} m='auto' color='white' w={8} h={8} />
        </Box>
        <Box>
          <Text as='h3' fontWeight='700' textTransform='uppercase'>
            {title}
          </Text>
          <Text mt={1}>{content}</Text>
          <Button
            onClick={(e) => onClick(target)}
            mt={3}
            colorScheme={activeOfferItem[target] ? "teal" : "black"}
            variant={activeOfferItem[target] ? "solid" : "outline"}
            border='1px solid transparent'
            size='md'
            _focus={{ border: "1px solid transparent" }}
            fontSize='0.8em'
            borderRadius={2}>
            <Text>READ MORE</Text>
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
