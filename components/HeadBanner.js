import React from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text, Heading } from "@chakra-ui/react";
import SubtitleWithLine from "./SubtitleWithLine";
import Container from "./Container";

export default function HeadBanner() {
  return (
    <Box
      d='flex'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      position='relative'
      as='header'
      h={{ sm: "200px", md: "380px" }}
      w='full'>
      <Image src='/images/banner.jpg' layout='fill' objectFit='cover' />
      <Container zIndex={1}>
        <Box d='flex' justifyContent={{ sm: "center", md: "start" }}>
          <Box textAlign='center' w={{ sm: "230px", md: "345px" }}>
            <Box>
              <Text lineHeight='1' fontSize='0.75em' className='uppercase'>
                What are you waiting for?
              </Text>
              <Heading
                lineHeight='1.2'
                as='h2'
                fontSize={{ sm: "1.45rem", md: "2.25rem" }}>
                let's be creative !
              </Heading>
              <Box
                bgColor='gray.0'
                color='white'
                borderRadius={2}
                pl={1}
                textAlign='left'
                fontSize='0.75em'>
                <Text>Lorem ipsum dolor sit.</Text>
              </Box>
            </Box>
            <SubtitleWithLine mt={3}>
              <Text as='h2'>
                <Text as='span' color='teal.500'>
                  start
                </Text>{" "}
                doing that
              </Text>
            </SubtitleWithLine>
            <Box
              position='relative'
              mt={4}
              borderRadius='50%'
              w={6}
              h={6}
              color='teal.500'
              d='inline-block'
              borderColor='teal.500'
              border='2px solid'>
              <ChevronDownIcon
                position='absolute'
                top={"50%"}
                left={"50%"}
                fontSize='1.5rem'
                transform='translate(-50%, -47%)'
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
