import React, { useState } from "react";
import Container from "../components/Container";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

import { Box, Button, VStack, Flex, Text, Icon } from "@chakra-ui/react";

import { employees } from "../db/employees";

export default function EmployeeCard() {
  const [isActive, setIsActive] = useState([true, false, false, false]);

  const onClickButton = (index) => {
    const result = isActive.map((boolean, i) => (i === index ? true : false));
    setIsActive(result);
  };

  return (
    <Box bgColor='gray.0'>
      <Container justifyContent='space-around' flexWrap='wrap'>
        {employees.map((obj, i) => (
          <Box
            key={i}
            d='flex'
            flexDir='column'
            w={{ sm: "48%", md: "260px" }}
            mb={3}
            flexWrap={"wrap"}
            py={8}>
            <Box
              h={"320px"}
              bgColor={isActive[i] ? "teal.0" : "gray"}
              borderTopLeftRadius={4}
              borderTopRightRadius={4}>
              {/*  */}
            </Box>
            <Box
              position='relative'
              color='white'
              pt={8}
              pb={4}
              border={"1px solid white"}
              borderBottomLeftRadius={4}
              borderBottomRightRadius={4}
              borderTopColor='transparent'>
              <Button
                onClick={() => onClickButton(i)}
                position='absolute'
                h={4}
                py={5}
                px={3}
                bgColor={isActive[i] ? "gray.1" : "teal.0"}
                size='md'
                top={"-1rem"}
                left={"50%"}
                _focus={{ borderColor: "gray.1" }}
                _active={{ bgColor: "gray.1" }}
                _hover={{ bgColor: "gray.1" }}
                transform='translateX(-50%)'>
                {obj.name}
              </Button>
              <VStack fontSize='0.7rem'>
                <Box pb={3} position='relative'>
                  <Text>{obj.position}</Text>
                  <Box
                    border='1px solid white'
                    w={"100%"}
                    position='absolute'
                    bottom={0}
                  />
                </Box>
                <Flex alignItems='center'>
                  <Icon as={EmailIcon} w={4} h={4} mr={2} />
                  <Text color={isActive[i] ? "teal.0" : "white"}>
                    {obj.email}
                  </Text>
                </Flex>
                <Flex alignItems='center'>
                  <Icon as={PhoneIcon} w={4} h={4} mr={2} />
                  <Text>{obj.phone}</Text>
                </Flex>
              </VStack>
            </Box>
          </Box>
        ))}
        <Button
          w='full'
          colorScheme='teal'
          mb={16}
          textTransform='uppercase'
          fontSize='0.8em'>
          view all the works
        </Button>
      </Container>
    </Box>
  );
}
