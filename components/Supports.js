import React from "react";

import {
  CalendarIcon,
  ChatIcon,
  RepeatIcon,
  StarIcon,
  SunIcon,
  RepeatClockIcon,
} from "@chakra-ui/icons";
import { Box, Text, Icon } from "@chakra-ui/react";

export default function Supports() {
  return (
    <>
      {details.map(({ title, subtitle, body, icon }, i) => (
        <Box key={title} d='flex' w={{ md: "33%" }} key={title} mb={4}>
          <Box d='inline-block' mb={2} mr={3}>
            <Box bgColor={i === 1 ? "teal" : "gray.0"}>
              <Box px={2}>
                <Icon as={icon} color='white' pt={3} w={6} h={10} />
              </Box>
            </Box>
            <Box position='relative' bgColor={i === 1 ? "#333333" : "teal"}>
              <Box
                w={0}
                h={0}
                borderLeft='20px solid transparent'
                borderRight='20px solid transparent'
                borderTop={
                  i === 1 ? "10px solid teal" : `10px solid #333333`
                }></Box>
              <Box
                w={0}
                h={0}
                bgColor='white'
                borderLeft='20px solid transparent'
                borderRight='20px solid transparent'
                borderTop={
                  i === 1 ? "10px solid #333333" : `10px solid teal`
                }></Box>
            </Box>
          </Box>
          <Box d='flex' flexDir='column'>
            <Box mb={1}>
              <Text
                className='h3'
                as='h3'
                fontWeight='600'
                textTransform='uppercase'>
                {title}
              </Text>
              <Text lineHeight='1' color='gray.500' textTransform='capitalize'>
                {subtitle}
              </Text>
            </Box>
            <Text>{body}</Text>
          </Box>
        </Box>
      ))}
    </>
  );
}

const details = [
  {
    title: "responsive & multipurpose",
    subtitle: "desktops, tablets & phones",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam, dolor sit amet consectetur",
    icon: SunIcon,
  },
  {
    title: "easy customization",
    subtitle: "one click demom content installation",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam, dolor sit amet consectetur",
    icon: StarIcon,
  },
  {
    title: "unlimited features",
    subtitle: "shortcodes, typography & different layouts",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam, dolor sit amet consectetur",
    icon: RepeatClockIcon,
  },
  {
    title: "clean & modulr coding",
    subtitle: "100% clearn, valid & well-commneted coding",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam, dolor sit amet consectetur",
    icon: RepeatIcon,
  },
  {
    title: "the best e-commerce solutions",
    subtitle: "woo commerce fully integration",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam, dolor sit amet consectetur",
    icon: ChatIcon,
  },
  {
    title: "awesome friendly support",
    subtitle: "free lifetime support & updates",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quibusdam, dolor sit amet consectetur",
    icon: CalendarIcon,
  },
];
