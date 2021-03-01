import React, { useState } from "react";
import Head from "next/head";
import App from "../components/App";
import SubtitleWithLine from "../components/SubtitleWithLine";
import Container from "../components/Container";
import OfferItem from "../components/OfferItem";
import Performance from "../components/Performance";
import CircleProgressBar from "../components/CricleProgressBar";
import Supports from "../components/Supports";
import EmployeeCard from "../components/EmployeeCard";
import RegisterForm from "../components/RegisterForm";

import { Box, Text, Heading, Flex } from "@chakra-ui/react";

import offers from "../db/offers.json";
import Slider from "../components/Slider";

export default function Home() {
  const [activeOfferItem, setActiveOfferItem] = useState([false, false, false]);

  const activeOffer = (target) => {
    const result = activeOfferItem.map((_, i) => {
      if (target === i) return true;
      return false;
    });
    setActiveOfferItem(result);
  };

  return (
    <App>
      <Heading as='h1' position='absolute' top='-200px' left={0}>
        Resume growthOps
      </Heading>
      <Container mt={{ md: 10 }} mb={{ sm: 16, md: 20 }}>
        <Box w='full'>
          <Box textAlign='center'>
            <SubtitleWithLine>
              <Text as='h2'>
                what we{" "}
                <Text as='span' color='teal.500'>
                  offer
                </Text>
              </Text>
            </SubtitleWithLine>
            <Text fontSize='0.7em'>
              We offer our customers the best services & solutions, this is our
              main services list
            </Text>
          </Box>
          <Flex flexDirection={{ sm: "column", md: "row" }}>
            {offers.map(({ title, content }, i) => (
              <OfferItem
                key={i}
                title={title}
                content={content}
                onClick={activeOffer}
                activeOfferItem={activeOfferItem}
                target={i}
              />
            ))}
          </Flex>
        </Box>
      </Container>

      <Performance>
        <Box
          d='flex'
          width='100%'
          justifyContent='space-around'
          flexWrap='wrap'
          flexDir={{ sm: "row", md: "row" }}>
          <CircleProgressBar percentage={75} title={"web design"} />
          <CircleProgressBar percentage={92} title={"web development"} />
          <CircleProgressBar percentage={68} title={"speed optimazation"} />
          <CircleProgressBar percentage={100} title={"customer support"} />
          <CircleProgressBar percentage={83} title={"marketing"} />
          <CircleProgressBar percentage={50} title={"advertisement"} />
        </Box>
      </Performance>

      <Container>
        <Box d='flex' flexWrap='wrap' py={10}>
          <Supports />
        </Box>
      </Container>

      <EmployeeCard />

      <RegisterForm />

      <Box mt={4} bgColor='teal.0' h={"300px"}>
        <Slider />
      </Box>
    </App>
  );
}
