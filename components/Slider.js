import React, { useState, useEffect } from "react";

import { Box, Text } from "@chakra-ui/react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { employees } from "../db/employees";

export default function Slider() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const result = employees.map((employee) => (
      <Box>
        <Box p={2} px={4} borderRadius={3} bg='gray.200' d='inline-block'>
          <Text>
            <Text
              as='span'
              d='inline-block'
              textTransform='uppercase'
              color='teal.0'
              fontWeight='600'>
              {employee.name}
            </Text>{" "}
            - {employee.position}
          </Text>
        </Box>
        <Text mt={6} color={"white"}>
          <Text fontSize='2rem' lineHeight={"1"} as='span' color={"white"}>
            "
          </Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus
          cum quisquam aliquid ut
          <Text fontSize='2rem' lineHeight={"1"} as='span' color={"white"}>
            "
          </Text>
        </Text>
      </Box>
    ));
    setItems(result);
  }, []);

  return (
    <Box d='flex' flexDir='column' h='full' position='relative'>
      <Box
        position='absolute'
        top={"-0.5rem"}
        left='50%'
        transform='rotate(45deg) translateX(-50%)'>
        <Box
          d='flex'
          w={8}
          h={8}
          bgColor='gray.1'
          color='white'
          fontSize={"2rem"}>
          <Text m='auto'>“</Text>
        </Box>
      </Box>
      <Box textAlign='center' my={"auto"}>
        <AliceCarousel disableDotsControls={true} items={items} />
      </Box>
    </Box>
  );
}
